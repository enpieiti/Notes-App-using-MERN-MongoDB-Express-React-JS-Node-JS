const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: { type: String },

  email: {
    type: String,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  password: {
    type: String,
    minlength: [6, "Password must be at least 6 characters long"],
  },
  createOn: { type: Date, default: new Date().getTime() },
});

module.exports = mongoose.model("User", userSchema);
