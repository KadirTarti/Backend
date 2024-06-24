const crypto = require('node:crypto')

const keyCode = process.env.SECRET_KEY
const loopCount = 10000
const charCount = 32 // write 32 for 64 
const encType = 'sha512'

const passwordEncrypt = (password) => {
  // const newPass = crypto.pbkdf2Sync(password,keyCode,loopCount,charCount,encType).toString("hex");
  // console.log(newPass)
  return crypto
    .pbkdf2Sync(password, keyCode, loopCount, charCount, encType)
    .toString("hex");
}

module.exports = passwordEncrypt