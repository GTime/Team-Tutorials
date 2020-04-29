const xServe = require("./xserve");
const app = xServe();

app.get("/rice", (req, res) => {
  res.write("Here is your rice");
  res.end();
  // res.send("GET");
});

app.get("/banku", (req, res) => {
  res.write("Here is your banku");
  res.end();
  // res.send("Product GET");
});

// app.post("/banku", (req, res) => {
//   res.send("POST");
// });

app.listen(4000, () => {
  console.log("Live at http://127.0.0.1:4000");
});

// const http = require("http");
// const server = http.createServer();

// server.on("request", (req, res) => {
//   if (req.url == "/rice") {
//   }

//   if (req.url == "/banku") {
//     if (req.method == "GET") {
//     }

//     if (req.method == "POST") {
//     }
//   }
// });





































































































