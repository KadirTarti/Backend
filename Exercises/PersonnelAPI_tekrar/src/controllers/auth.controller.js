"use strict";
/* -------------------------------------------------------
EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const Token = require("../models/token.model");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
    login:async (req,res)=>{
        const {username,password} = req.body;
        if(username && password) {
          //? findOne metodu filtreleme yaparken modeldeki set fonksiyonlarını çalıştırır. Burada da ek bir işleme ihtiyaç olmadan passwordu modeldeki set metodundaki encrypt i kullanarak işlemden geçirip db'de filtreleme yapar
          const user = await Personnel.findOne({ username, password });
          if(user && user.isActive){

            //*bu usera ait token var mı kontrol et
            let tokenData = await Token.findOne({userId:user._id})

            //? eğer token yoksa bu usera yeni bir token oluştur
            if(!tokenData) {
                const tokenKey = passwordEncrypt(user._id + Date.now())
                // console.log(user._id + Date.now());
                tokenData = await Token.create({userId:user._id,token:tokenKey})
            }

            res.status(200).send({
                error:false,
                token:tokenData.token,
                user
            })
          }else{
            res.errorStatusCode = 401;
            console.log(username, password)
            throw new Error("Wrong Username or Password.")
          }

        }else {
            res.errorStatusCode = 400;
            throw new Error("username or password is required.")
        }
    },
    logout: async (req, res) => {
      // 1.yöntem (Kısa yöntem)
      // console.log(req.user);
      // const deleted = await Token.deleteOne({ userId: req.user._id }); //* userId unique olduğu için bu yöntem kullanılabilir
  
      // 2.yöntem => her cihazdan çıkış yapmasını sağlama (çoklu cihaz)
      // console.log(req.user);
      // const deleted = await Token.deleteMany({ userId: req.user._id });
  
      // 2.yöntem: birden fazla token bilgisi olursa sadece gelen token bilgisinin silinmesini sağlama (çoklu cihaz)
      //! bizim senaryomuzda userId ve token unique olduğu için bu yöntemde kullanılabilir
      const auth = req.headers?.authorization || null;
      const tokenKey = auth ? auth.split(" ") : null;
  
      let deleted = null;
      if (tokenKey && tokenKey[0] == "Token") {
        deleted = await Token.deleteOne({ token: tokenKey[1] });
      }
      res.status(deleted.deletedCount > 0 ? 200 : 400).send({
        error: !deleted.deletedCount,
        deleted,
        message: deleted.deletedCount > 0 ? "Logout Ok" : "Logout Failed",
      });
    },

    }