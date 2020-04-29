class ServeResponse {
  constructor(res) {
    this._res = res;
  }

  json(data = {}) {
    this._res.setHeader("Content-Type", "application/json");
    this._res.write(JSON.stringify(data));
    this._res.end();
  }

  status(statusCode = 200) {
    this._res.statusCode = statusCode;
    return this;
  }

  send(data) {
    this._res.write(data);
    this._res.end();
  }
}

module.exports = ServeResponse;
