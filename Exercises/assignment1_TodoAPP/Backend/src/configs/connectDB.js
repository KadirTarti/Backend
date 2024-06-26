//* MongoDb connection

const mongoose = require("mongoose");

// main().then(()=> console.log("DB Connection")).catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect(process.env.MONGODB);
// }

mongoose
    .connect('mongodb://localhost:27017/BOOKAPI')
    .then(() => console.log("DB Connection"))
    .catch((err) => console.log(err));
