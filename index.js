var express = require('express'),
    bodyParser = require('body-parser'),
    path = require("path"),
    app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));



var views = path.join(process.cwd(), "views");

app.get("/", function (req, res) {
    res.sendFile(path.join(views, "main.html"));
});



var listener = app.listen(3000, function () {
  console.log("Listening on port 3000");
});

