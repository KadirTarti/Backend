//* MongoDb connection

const mongoose = require('mongoose');

// main().then(()=>console.log('DB Connection')).catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB);
// }
//? üstteki async await yerine alttaki gibi then catch ile de kullanılabilir!

mongoose
// .connect('mongodb://localhost:27017/blogAPI')
.connect(process.env.MONGODBURL)
.then(()=>console.log('DB Connection'))
.catch((err) => console.log(err));


