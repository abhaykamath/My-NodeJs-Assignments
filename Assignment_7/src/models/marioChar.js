const mongoose = require("mongoose");

//  Your code goes here
const Schema = mongoose.Schema;

const marioSchema = Schema({
  name: { type: String, required: true },
  weight: { type: Number, required: true },
});

const marioModel = mongoose.model("mariochars", marioSchema);

module.exports = marioModel;
