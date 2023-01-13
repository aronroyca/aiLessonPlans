let express = require("express");
let bp = require("body-parser");

const app = express();
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

app.use(express.static("./public"));

app.post("/createPlan", async (req, res) => {
  console.log("post request", req.body);
});

app.listen(3000);
console.log("app listening on port 3000");
