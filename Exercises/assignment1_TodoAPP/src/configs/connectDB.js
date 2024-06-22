//* MongoDb connection

const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/bookAPI')
.then(()=>console.log('DB Connection'))
.catch((err) => console.log(err));