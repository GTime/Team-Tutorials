const http = require("http");
const cors = require("./lib/cors");
const ServeRequest = require("./lib/serve-request");
const ServeResponse = require("./lib/serve-response");

const defaultConfig = {
  body: false,
};

class Serve {
  constructor(config = defaultConfig) {
    this._config = { ...defaultConfig, ...config };
    this.handlers = [];
    this.middlewares = [];
    this._server = http.createServer();
    this._handlerRequest();
  }

  // configureBody(req) {
  //   if (!this._config.body) return;

  //   let data = [];
  //   req.on("data", (chunk) => data.push(chunk));
  //   req.on("end", () => {
  //     data = JSON.parse(Buffer.concat(data).toString());
  //   });
  // }

  _getMatchingHandles(req) {
    const handlersByPath = this.handlers.filter((h) => h.path == req.url);
    return handlersByPath.filter((h) => h.method == req.method);
  }

  _handlerRequest() {
    this._server.on("request", async (req, res) => {
      cors(res); // This should be removed

      for (const { handler } of this._getMatchingHandles(req)) {
        await handler(new ServeRequest(req), new ServeResponse(res));
      }
    });
  }

  use(path, handler) {
    this.middlewares.push({ handler, path });
  }

  get(path, handler) {
    this.handlers.push({ handler, path, method: "GET" });
  }

  post(path, handler) {
    this.handlers.push({ handler, path, method: "POST" });
  }

  get address() {
    return this._server.address();
  }

  listen(port, handlers) {
    this._server.listen(port, handlers);
  }
}

module.exports = () => new Serve();
