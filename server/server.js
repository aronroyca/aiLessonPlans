const http = require("http");
const express = require("express");
const bp = require("body-parser");
const cors = require('cors');

const mongoose = require('mongoose');
const generate = require("../api/generate.js");

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors())

app.use(express.static("./public"));

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/todos')
}

app.post("/createPlan", generate.openaiCall);

app.listen(3030);
console.log("app listening on port 3030");
