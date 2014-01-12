var appHelper = require("./apphelper.js");

appHelper.runApp(function(app, db) {
	console.log("My app is running!");

	app.get("/hello", function (req, resp) {
		resp.write("HELLO WORLD! My name is Kim.");
		resp.end();
	});

	app.get("/html", function (req, resp) {
		resp.write("<html><body><h1>Woo! Node is cool!</h1></body></html><button>Click me</button>");
		resp.end();
	});

	app.get("/template/:name", function (req, resp) {
		resp.render("template", {name: req.params.name});
	});

	app.get("/", function (req, resp) {
		resp.render("index");
	});
})