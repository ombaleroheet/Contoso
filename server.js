var express = require("express"); //lib-----Node Module
var app = express(); // will create app object from express package

var onAboutUs = function (req, res) {
  res.send("Chief Mentor :Rohit Ombale");
};
var onDefault = function (req, res) {
  res.send(
    "<h1>Contoso multinational company Pvt. Ltd</h1>" +
      "<hr/>" +
      "<ol>" +
      " <li>office 1</li>" +
      " <li>office 2</li>" +
      " <li>office 3</li>" +
      " <li>office 4</li>" +
      " <li>office 5</li>" +
      " <li>office 6</li>" +
      " <li>office 7</li>" +
      " <li>office 8</li>" +
      " <li>office 9</li>" +
      " <li>office 10</li>" +
      " <li>office 11</li>" +
      " <li>office 12</li>" +
      "</ol>"
  );
};
app.get("/", onDefault); // Request handler functions are registered
app.get("/aboutus", onAboutUs); // Request handler functions are registered
var server = app.listen(8081);
console.log("Server is running on port 8081");
