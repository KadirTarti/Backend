"use strict"
/* -------------------------------------------------------
    ABDULKADIR TARTILACI - EXPRESS - PIZZA API
------------------------------------------------------- */

const User = require('../models/user')
const Token = require('../models/token');
const { CustomError } = require('../errors/customError');
const passwordEncrypt = require('../helpers/passwordEncrypt');


module.exports = {
    login: async (req, res)=> {
        const {username, email, password} = req.body;
        if(password && (username || email)) {
            // const user = await User.findOne({username,email}) //* bu şekilde username ve email birlikte arar. aşağıda or opr ile yazdık
            const user = await User.findOne({$or:[{username},{email}]})
            if (user && user.password == passwordEncrypt(password)) {
                if(user.isActive){

                }else {
                    throw new CustomError('This account is inactive!', 401)
                }

            } else {
                throw new Error ('Wrong username/email or password!')
            }
        } else {
            throw new CustomError ('Please enter username/email and password!', 401)
        }

    },
    logout: async (req, res)=> {

    }
}
