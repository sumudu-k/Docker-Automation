var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, I am Sumudu Kulathunga" }');
  res.send('{ "response": "Docker automation with GitHub Actions" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function () {
  console.log("App listening on port 3000!");
});

module.exports = app;
