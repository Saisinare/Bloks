const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogScema = new schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Types.ObjectId,
    ref:'User'
  },
});

module.exports = mongoose.model('Blog',blogScema);
