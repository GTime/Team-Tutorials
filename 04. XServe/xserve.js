const http = require("http");
const XServeResponse = require("./lib/xserve-response");

class XServe {
  constructor() {
    this._routers = [];
    this._server = http.createServer();

    this.handleRequest();
  }

  //
  findRoute(req) {
    const getRouteByUrl = this._routers.filter((item) => item.path == req.url);
    const getRouteByMethod = getRouteByUrl.find(
      (item) => item.method == req.method
    );

    return getRouteByMethod;
  }

  //   Capturing request
  handleRequest() {
    this._server.on("request", (req, res) => {
      const route = this.findRoute(req);

      if (route) {
        route.hander(req, new XServeResponse(res));
      }
    });
  }

  listen(port, callback) {
    this._server.listen(port, callback);
  }

  get(path = "", hander) {
    this._routers.push({ path, method: "GET", hander });
  }

  //   post(path = "", hander) {
  //     this._routers.push({ path, method: "POST", hander });
  //   }
}

module.exports = () => new XServe();
