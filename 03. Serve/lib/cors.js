// For CORS
const cors = (res, options = {}) => {
  res.writeHead(200, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "*",
  });
};

module.exports = cors;
