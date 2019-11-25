var express = require("express");
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

var Number = require("./js/Number.js");

app.use("/create", (req, res) => {
    var newNumber = new Number({
	first: req.body.first,
	second: req.body.second
    });

    newNumber.save((err, numbers) => {// numbers is a json object
	if (err) {
	    res.type('html').status(500);
	    res.send("Error " + err);
	} else {
	    res.json(numbers);
	    //console.log(numbers);
	}
    });
});

app.use("/all", (req, res) => {
    Number.find((err, numbers) => {// numbers is a json object
	if(err) {
	    res.type().status(500);
	    res.send("Error " + err);
	} else {
	    res.json(numbers);
	}
    });
});

app.use("/public", express.static('public'));
/*app.use("/", (req, res) => {
    res.redirect("/public/enterNumbers.html");
});*/

//app.use("/public", express.static('public'));
app.use("/js", express.static('js'));

app.listen(3000, () => {console.log("Listening on port 3000");});
