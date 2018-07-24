const express = require("express");
const app = express();
const Lesson = require("./models/lesson");
const tryWrapper = require("./middlewares/tryWrapper");

// old
app.get("/lessons/:id", async (req, res, next) => {
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.json(lesson);
  } catch (err) {
    next(err);
  }
});

// new
app.get(
  "/lessons/:id",
  tryWrapper(async (req, res, next) => {
    const lesson = await Lesson.findById(req.params.id);
    res.json(lesson);
  })
);

app.listen(3000, () => console.log("app started on port 3000..."));
