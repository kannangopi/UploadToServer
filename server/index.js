const express = require("express");
const app = express();
const multer = require("multer");
var upload = multer({ dest: "uploads" });
app.post("/post", upload.single("file"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send(true);
});
app.listen(3002, () => {
  console.log("server is runnning on 3002");
});
