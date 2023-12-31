const express = require("express");
const app = express();
require("dotenv").config();
require("./src/config/db");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
const routes = require("./src/routers/routers");
app.use("/", routes);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
