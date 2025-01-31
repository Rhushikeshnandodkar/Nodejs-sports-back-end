const mongoose = require("mongoose");

const InterestSchema = new mongoose.Schema({
  interest: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Interest", InterestSchema);
