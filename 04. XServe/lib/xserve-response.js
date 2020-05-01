class XServeResponse {
  constructor(res) {
    this._res = res;
  }

  statusCode(code = 200) {
    this._res.statusCode = code;
    return this;
  }

  json(data) {
    this._res.setHeader("Content-Type", "application/json");
    this.send(JSON.stringify(data));
  }

  html(data) {
    this._res.setHeader("Content-Type", "text/html");
    this.send(data);
  }

  send(body) {
    this._res.write(body);
    this._res.end();
  }
}

module.exports = XServeResponse;
