const http = require("http");

// For CORS
const cors = (res) => {
  res.writeHead(200, {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Request-Method": "*",
    "Access-Control-Allow-Methods": "OPTIONS, GET, POST",
    "Access-Control-Allow-Headers": "*",
  });
};

// Average
const averageCal = (items = []) => {
  numberItems = items.length;
  sum = items.reduce((prevVal, currVal) => prevVal + currVal);
  return sum / numberItems;
};

const server = http.createServer((req, res) => {
  cors(res);

  let body = [];
  req.on("data", (data) => {
    body.push(data);
  });

  req.on("end", () => {
    body = Buffer.concat(body).toString();
    body = JSON.parse(body);


    const average = averageCal(body.items);
    res.write(JSON.stringify({ average }));
    res.end(() => {});
  });
});

server.listen(4000, () => {
  console.log("Server is live at http://127.0.0.1:4000");
});
