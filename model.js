const mongoose = require("mongoose");

const { Schema } = mongoose;

const requestResponseSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  responseSent: {
    required: true,
  },
});

module.exports = mongoose.model("reqRes", requestResponseSchema);
