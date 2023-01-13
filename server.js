const http = require("http");
const express = require("express");
const bp = require("body-parser");

const generate = require("./api/generate.js");

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(express.static("./public"));

app.post("/createPlan", generate.openaiCall);

app.listen(3000);
console.log("app listening on port 3000");
