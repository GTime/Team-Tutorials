const main = async () => {
  const serve = require("./serve");
  const app = serve();

  app.get("/", (req, res) => {
    res.send("GET");
  });

  app.get("/test", (req, res) => {
    res.send("TESTGET");
  });

  app.post("/", (req, res) => {
    res.send("POST");
  });

  app.listen(3000, () => {
    console.log(`Cool! Live at http://localhost:${app.address.port}`);
  });
};

main();
