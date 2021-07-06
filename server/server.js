const express = require("express");
const fs = require("fs");
const app = express();
const jsonParser = express.json();

const port = 3000;

// Add headers (CORS)
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", false);

  // Pass to next layer of middleware
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/json", jsonParser, (req, res) => {
  console.log("сервер принял JSON");

  fs.writeFile("test.json", JSON.stringify(req.body), (err) => {
    if (err) {
      console.log(err);
    } else res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
