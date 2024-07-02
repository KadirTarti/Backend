"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const passwordEncrypt = require('../helpers/passwordEncrypt')

module.exports = {
    login: async (req, res) => {
        const {username, password} = req.body;
        if(username && password) {
            //? findeOne metodu filtreleme yaparken modeldeki set fonksiyonlarını çalıştırırç. Burada ek bir işleme ihtiyaç duymadan passwordu modeldeki set metodundaki encyrp i kullanarak işlemden geçirip db'de filtreleme yapar
            const user = await Personnel.findOne({username, password});
            if (user && user.isActive) {  // isActive bilgisi personel.model'den geliyor
                //* bu user'a ait token var mı kontrol ettik...

                let tokenData = await Token.findOne({userId: user._id})

                //* eğer token yoksa bu user'a yeni bir token oluştur
                if(!tokenData) {
                    const tokenKey = passwordEncrypt(user._id  + Date.now())
                    console.log(user._id + Date.now())
                    tokenData = await Token.create({userId: user_id, token: tokenKey})
                }

                res.status(200).send({
                    error:false,
                    token: tokenData.token,
                    user
                })
            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong username or password')
            }

        } else {
            res.errorStatusCode = 400;
            throw new Error ('username or password is required')
        }
    },
    logout: (req, res) => {}
}