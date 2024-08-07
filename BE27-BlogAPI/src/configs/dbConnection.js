
const dbConnection = function () {
    console.log(process.env.MONGODBURL)
    .then(() => console.log('* DB Connected *')).catch((err)=> console.log(' * DB Not Connected *', err))
}

module.exports = {mongoose, dbConnection}