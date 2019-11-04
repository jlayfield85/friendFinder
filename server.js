var express = require('express')
var app = express ();
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 3003;

app.use(express.static("app/public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);


app.listen(PORT, function() {
    console.log("Application listening on PORT: " + PORT);
});
