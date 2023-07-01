const router = require("express").Router();
const blogCollection = require("../models/Blog");

// Your routing code goes here

router.get("/", async (req, res) => {
  const { page = 1, search = "" } = req.query;
  const data = await blogCollection
    .find({
      topic: { $regex: search, $options: "i" },
    })
    .skip((Number(page) - 1) * 5)
    .limit(5);
  res.json({
    status: "success",
    data,
  });
});

router.post("/", async (req, res) => {
  const { topic, description, posted_by } = req.body;
  const posted_at = new Date().toString().split(" ").slice(0, 5).join(" ");
  const response = await blogCollection.create({
    topic,
    description,
    posted_at,
    posted_by,
  });
  res.status(201).json({
    status: "success",
    result: response,
  });
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await blogCollection.findByIdAndUpdate(id, {
    ...req.body,
  });
  res.json({
    status: "success",
    response,
  });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const response = await blogCollection.findByIdAndDelete(id);
  res.json({
    status: "success",
    result: response,
  });
});

module.exports = router;
