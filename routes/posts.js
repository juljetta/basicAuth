var express = require("express");
var router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");

router.post("/", (req, res) => {
  //
  const { title, content } = req.body;
  const id = req.session.user._id

    Post.create ({
      title,
      content,
      author
    }).then(post => {

      return User.findByIdAndUpdate(
        id, 
        {$push: {posts: post._id} },
        {new: true}
        );
    }).then(updateUser => {
      res.redirect("/profile")
    });


    //create get request to get all posts
    //populate the author of the post
    // show post and name author in hbs 

    //don't forget to make a hbs file

    router.get()

  

module.exports = posts;
