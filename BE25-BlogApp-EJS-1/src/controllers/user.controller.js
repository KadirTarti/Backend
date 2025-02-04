const User = require("../models/user.model");


const passwordEncrpyt = require("../helpers/passwordEncrpyt");


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
    const { name, bio, profilePic } = req.body;

    res.status(202).send({
      error: false,
      message: "User updated successfully!",
      result: data,
      user: await User.findOne({ _id: req.params.userId }),
    });

    try {
      const user = await User.findById(req.user);
      if (!user) {
        return res.status(404).json({ message: 'Kullanıcı bulunamadı.' });
      }
  
      // Kullanıcı bilgilerini güncelle
      user.name = name || user.name;
      user.bio = bio || user.bio;
      user.profilePic = profilePic || user.profilePic;
  
      await user.save();
  
      res.status(200).json({ message: 'Profil başarıyla güncellendi.', user });
    } catch (error) {
      res.status(500).json({ message: 'Sunucu hatası.' });
    }



  },
  delete: async (req, res) => {
    const data = await User.deleteOne({ _id: req.params.userId });
    if (data.deletedCount) {
      res.sendStatus(204);
    } else {
      res.status(404).send({
        error: true,
        message: "User not found!",
      });
    }
  },
  login: async (req, res) => {
    const {email,password,remindMe} = req.body;

    if(email && password) {
      // const user = await User.findOne({email:email})
      const user = await User.findOne({email})
      if(user) {
        // console.log("db: ", user.password)
        // console.log("user: ",passwordEncrpyt(password));
        if(user.password == passwordEncrpyt(password)){

          /*! Session */
          //* oturum süresince erişim sağlanır
          // req.session = {
          //   email: user.email,
          //   password:user.password
          // }
          req.session.email = user.email
          req.session.password = user.password
          req.session.id = user._id

          if(remindMe) {
            req.session.remindMe = remindMe
            //* sessionu cookieye çeviriyoruz. Verdiğimiz süre kadar erişim sağlanır
            req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3;
          }
            res.status(200).send({
              error: false,
              message: "Anmeldung Ok!",
              user,
            });
        }else {
          res.errorStatusCode = 401;
          throw new Error("Anmeldeparameter nicht zureffend!");
        }
      }else {
        res.errorStatusCode = 401;
        throw new Error("Benutzer nicht gefunden!");
      }
    }else {
      res.errorStatusCode = 401;
      throw new Error("E-Mail und Passwort sind erforderlich!")
    }
  },
  logout: (req, res) => {
    req.session = null
    res.status(200).send({
      error: false,
      message: "Abmeldung Ok!",
    });
  },

  getProfile: async (req, res) => {
    try {
      const user = await User.findById(req.user);
      if (!user) {
        return res.status(404).json({ message: 'Benutzer nicht gefunden!' });
      }
  
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: 'Server-Fehler!' });
    }
  }


};
