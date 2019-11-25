var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/numbersDatabase",{useNewUrlParser:true});

var Schema = mongoose.Schema;
var numbersSchema = new Schema({
    first: Number,
    second: Number
});

module.exports = mongoose.model("Number", numbersSchema);
