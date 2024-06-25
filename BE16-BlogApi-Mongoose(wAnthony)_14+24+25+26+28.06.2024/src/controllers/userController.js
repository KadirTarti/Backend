const User = require("../models/userModel");

const passwordEncrpyt = require("../helpers/passwordEncrypt")

module.exports = {
  list: async (req, res) => {
    const data = await User.find().select("-password");
    res.status(200).send({
      error: false,
      users: data,
    });
  },
  create: async (req, res) => {
    const user = await User.create(req.body);
    res.status(201).send({
      error: false,
      message: "User created succesfully!",
      user,
    });
  },
  read: async (req, res) => {
    const user = await User.findOne({ _id: req.params.userId });
    res.status(200).send({
      error: false,
      user,
    });
  },
  update: async (req, res) => {
    const data = await User.updateOne({ _id: req.params.userId }, req.body);
    res.status(202).send({
        error:false,
        message:"User updated successfully!",
        result : data,
        user: await User.findOne({ _id: req.params.userId })
    })
  },
  delete: async (req,res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    if(data.deletedCount) {
      res.sendStatus(204)
    }else {
      res.status(404).send({
        error:true,
        message: "User not found!"
      })
    }
  },
  login: async (req, res) => {
    const {email, password, remeindMe} = req.body;
    if(email && password){
      const user = await User.findOne({email});
      if (user) {
        // console.log('db:', user.password)
        // console.log('user:', passwordEncrpyt(password))
        if (user.password == passwordEncrpyt(password)) {


          //& session
          // req.session = {
          //   email: user.email,
          //   password: user.password
          // }
          req.session.email = user.email
          req.session.password = user.password
          req.session.id = user._id

          if(remeindMe) {
            req.session.remindMe = remindMe
            //* sessionu cookieye çeviriyoruz. Verdiğimiz süre kadar erişim sağlanır
            req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3;
          }
          res.status(200).send({
            error:false,
            message:'login ok!',
            user
          })
        } else {
          res.errorStatusCode = 401;
          throw new Error ('Login parameters are not true')
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error ('User not found!')
      }

    } else {
      res.errorStatusCode = 401;
      throw new Error('Email and password are required')

    }
  },
  logout: (req, res) => {
    req.session = null
    res.status(200).send({
      error: false,
      message: 'Logout Ok!'
    })
  }

};
