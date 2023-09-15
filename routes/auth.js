const User = require("../model/User");
const Router = require("express").Router();
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRETE = "this is my secret";
Router.get("/login", (req, res) => {
  res.render("login");
});

Router.get("/signup", (req, res) => {
  res.render("signup");
});



Router.post("/signup", (req, res) => {
  console.log(req.body);
  bycrypt.hash(req.body.password, 10).then((hashedPassword) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const data = {
      id: user._id,
    };
    const authtoken = jwt.sign(data, JWT_SECRETE);
    const userWithoutpass = user;
    delete userWithoutpass.password;
    user
      .save()
      .then((user) => {
        res.cookie(`token`, authtoken);
        res.redirect("/blogs");
      })
      .catch((err) => {
        res.redirect("/signup");
      });
  });
});

Router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email: email }).then((user) => {
    if (user) {
      const hashpassword = user.password;
      console.log(hashpassword);
      console.log(password)
      bycrypt
        .compare(req.body.password, hashpassword)
        .then((result) => {
          if (result) {
            const data = {
              id: user._id,
            };
            const authtoken = jwt.sign(data, JWT_SECRETE);
            res.cookie("token", authtoken);
            const userWithoutPass = user.toObject();
            delete userWithoutPass["password"];

            res.cookie({
              authtoken: authtoken,
              login: true,
            });
            return res.redirect("/blogs");
          } else {
            return res.redirect('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return res.redirect('/login');
    }
  });
});

module.exports = Router;
