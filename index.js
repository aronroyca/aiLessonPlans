const http = require("http");
const express = require("express");
const bp = require("body-parser");
const generate = require('./api/generate.js')

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(express.static("./public"));

app.post("/createPlan", async (req, res) => {
    console.log("post request", req.body);
    https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) =>
});

app.listen(3000);
console.log("app listening on port 3000");
