"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());
require("./src/configs/dbConnection")


const session =  require('cookie-session')

app.use(session({
    secret: process.env.SECRET_KEY,
    // maxAge: 1000 * 60 * 60 * 24 * 3 // miliseconds -->   3 days
    // maxAge: 3600000 // 1 hour
}))



//* user control
app.use(require('./src/middlewares/userContrrol'))


// HomePage:
// app.all('/', (req, res) => {
//     res.send("<h1 style='text-align:center;margin-top:150px'>WELCOME TO BLOG API</h1>");
// })
app.all('/', (req, res) => {
    if(req.isLogin) {
    res.send({
        message: 'Welcome to BlogApi',
        session: req.session
    });
}else {
    res.send({
        
    })
}
})


app.use("/blog", require("./src/routes/blogRoute"))
app.use("/user",require("./src/routes/userRoute"))

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))

// require("./src/configs/sync")()