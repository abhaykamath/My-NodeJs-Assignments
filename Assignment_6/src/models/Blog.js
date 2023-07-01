const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const blogSchema = new Schema({
  topic: { type: String, required: true },
  description: { type: String, required: true },
  posted_at: { type: String, required: true },
  posted_by: { type: String, required: true },
});

const blogCollection = mongoose.model("blog", blogSchema);

module.exports = blogCollection;
