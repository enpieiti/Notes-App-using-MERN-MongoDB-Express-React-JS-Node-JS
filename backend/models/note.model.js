const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title: { type: String, require: true },
  content: { type: String, require: true },
  tags: { type: [String], default: [] },
  userId: { type: String, require: true },
  isPinned: { type: Boolean, default: false },
  createOn: { type: Date, default: new Date().getTime() },
});

module.exports = mongoose.model("Note", noteSchema);
