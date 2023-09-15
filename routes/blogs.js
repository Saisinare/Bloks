const User = require("../model/User");
const Router = require("express").Router();
const isauth = require("./isauth");
const Blog = require("../model/Blog");
Router.get("/blogs", (req, res) => {
  Blog.find({}).populate('author').then(blogs=>{
    return res.render("blogs",{blogs:blogs});
  }).catch(err=>{
    console.log(err)
  })
});
Router.get("/myblogs",isauth, (req, res) => {
  Blog.find({author:req.userId}).then(blogs=>{
    return res.render("myblogs",{blogs:blogs});
  }).catch(err=>{
    console.log(err)
  })
});

Router.get("/blog/:blogId",isauth, (req, res) => {
  Blog.findById(req.params.blogId).then(blog=>{
    res.json({blog:blog})
  }).catch(err=>{
    console.log(err)
  })
});
Router.post("/blog", isauth, (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.userId,
  });
  newBlog.save().then((result) => {
    if (result) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  });
});

Router.put('/blog/:blogId',isauth,(req,res)=>{
  const data = {
    title:req.body.title,
    content:req.body.content
  }
  Blog.findByIdAndUpdate(req.params.blogId,data).then(result=>{
    res.json({msg:'deleted successfully'})
  })
})

Router.delete('/blog/:blogId',isauth,(req,res)=>{
  Blog.findOneAndDelete({_id:req.params.blogId,author:req.userId}).then(result=>{
    res.json({msg:'deleted successfully'})
  })
})

module.exports = Router;
