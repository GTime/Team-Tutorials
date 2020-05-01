const xServe = require("./xserve");
const app = xServe();

app.get("/rice", (req, res) => {
  res.statusCode(404).send("GOT Rice");
});

app.get("/banku", (req, res) => {
  res.send("GOT Banku");
});

app.get("/foodMenu", (req, res) => {
  res.statusCode(200).json([
    { name: "Rice", type: "Fried" },
    { name: "Gari", type: "With Egusi Soup" },
  ]);
});

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
