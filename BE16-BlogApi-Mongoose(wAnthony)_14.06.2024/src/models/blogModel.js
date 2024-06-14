//? Blog Models
//import mongoose
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    // _id : Auto generated
    // filedName: String, //shorthand
    fieldName:{
        type: String, //datatype
        required: true,
        required: [true, 'Error-message'], // error-message specification
        trim: true, // get data with trim
        unique: true,
        index: true, // arama yapılınca daha hızlı erişim olsun mu?
        select: true, //when we call data, the selected data come too
        validate: [function(data){return true}, 'Error-Message'], //veriyi kontrolden geçiren fonksiyon
        enum: [['0','1','2','3'], 'Error-Message'], //pattern-choices -> buradaki değerlerden biri girilmeli.
        get: function(data){return data}, //data çağırılırken çalışan fonksiyon
        set: function(data){return data}, //datayı kaydederken çalışan fonksiyon
    }
    },
    {
        collection: 'collectionName',
        timestamps: true, //takip edilmesi için
    }
  );