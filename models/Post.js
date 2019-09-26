const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  content: String,
  // post can have one user
  author: { type: Schema.Types.ObjectId, ref: "User" }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
