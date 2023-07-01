const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const marioModel = require("./models/marioChar");

// Middlewares
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// your code goes here

app.get("/mario", async (req, res) => {
  const chars = await marioModel.find();
  res.status(200).json(chars);
});

app.get("/mario/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const char = await marioModel.findById(id);
    res.status(200).json(char);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.post("/mario", async (req, res) => {
  const payload = req.body;
  if (payload.name && payload.weight) {
    const newCharacter = await marioModel.create(payload);
    res.status(201).json(newCharacter);
  } else {
    res.status(400).json({ message: "either name or weight is missing" });
  }
});

app.patch("/mario/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await marioModel.findByIdAndUpdate(id, req.body);
    const updatedCharacter = await marioModel.findById(id);
    res.status(200).json({ updatedCharacter });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.delete("/mario/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await marioModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "character deleted",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = app;
