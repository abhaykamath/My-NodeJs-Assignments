const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Import routes
const blogRoute = require("./routes/blog");

//Router MIddlewares
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({extended: true}))
app.use("/blog", blogRoute);

module.exports = app;
