//Write mongoDB statements corresponding to the SQL statements given below.

/* 
userList tablosundaki tüm verileri getir.
1- db.userList.find({
 
});


2- userList tablosundaki id, user_id ve status sütunlarını getir.
//! id default true yani1 olduğu için onu yazmaya gerek yok
db.userList.find({
 
},{
   "id": 1,
   "user_id": 1,
   "status": 1
}
);


3- userList tablosundaki user_id ve status sütunlarını getir.
db.userList.find({
 
},{
   "user_id": 1,
   "status": 1
}
);


4- userList tablosundan status değerinin "A" olduğu satırları getir.
db.userList.find({
 status :  "A"
});


5-  userList tablosundan user_id ve status sütunlarını seç, status değerinin "A" olduğu satırları getir.
db.userList.find(
{ status: "A" } , 
  {  _id: 0, user_id: 1, status: 1 })



6- userList tablosundan status sütununun değeri "A" olmayan tüm satırları getir
db.userList.find({
  "status": { "$ne": "A" }
})


7- userList tablosundan status değeri "A" olan VE age'i 50 olanları getir.
db.userList.find({
  status: 'A',
  age: 50
});


8- userList tablosundan status değeri "A" olan VEYA age'i 50 olanları getir.
db.userList.find({
  $or: [
    { status: 'A' },
    { age: 50 }
  ]
});


9-  userList tablosundan yaşı 25'in üzerinde olanları getir.
db.userList.find({
  age: { $gt: 25 }
});


10- userList tablosundan yaşı 25'in altında olanları getir.
db.userList.find({
  age: { $lt: 25 }
});


11- userList tablosundan yaşı 25 ile 50 arasında olanları getir. 25 hariç 50 dahil.
db.userList.find({
  age: { $gt: 25, $lte: 50 }
});

12- userList tablosundan user_id'si   bc   içerenleri getir.
db.userList.find({
  user_id: { $regex: 'bc', $options: 'i' }
});


13-userList tablosundan status değerinin "A" olduğu satırları getir, user_id'ye göre sırala
db.userList.find({ status: 'A' }).sort({ user_id: 1 });


14- userList tablosundan status değerinin "A" olduğu satırları getir, user_id'ye göre TERSTEN sırala
db.userList.find({ status: 'A' }).sort({ user_id: -1 });


15- userList adlı tablodan toplam satır sayısını getir
db.userList.countDocuments();   
 or 
db.userList.estimatedDocumentCount();  
veya
db.userList.find().count();

16- userList adlı tablodan user_id sütunundaki toplam satır sayısını getir
db.userList.countDocuments({ user_id: { $exists: true } });


17- userList adlı tablodan yaşı 30'dan büyük olanları içeren toplam satır sayısını getir
db.userList.countDocuments({ age: { $gt: 30 } });




18-  userList adlı tablodan status sütunundaki tüm farklı değerleri 1 kez döndür 
db.userList.distinct('status');

 MongoDB'deki distinct metodunu kullanarak userList koleksiyonunda bulunan tüm status değerlerini getirir. Bu metot, belirtilen alanın değerlerinin benzersiz (distinct) listesini döndürür. Yani, bu kod ile userList koleksiyonundaki her belgeye bakılır ve status alanının değerleri toplandıktan sonra, bu değerlerden sadece benzersiz olanları içeren bir liste döndürülür.




19- userList adlı tablodan ilk satırı seçer
db.userList.findOne();



20-  userList adlı tablodan ilk beş satırı seçer, ardından 10 satır sonraki veriyi getirir
db.userList.find().limit(5).skip(10);


21- yeni tablo oluşturma!

db.createCollection("userList", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         required: ["user_id", "age", "status"],
         properties: {
            user_id: {
               bsonType: "string",
               description: "must be a string and is required"
            },
            age: {
               bsonType: "number",
               minimum: 0,
               description: "must be a number and is required"
            },
            status: {
               bsonType: "string",
               enum: ["A", "B", "C"],
               description: "must be a string and is required"
            }
         }
      }
   }
})


22-db.userList.updateMany(
   {},
   { $set: { join_date: new Date() } }
)

23-db.userList.drop();


24-db.userList.insertOne({
  user_id: "bcd001",
  age: 45,
  status: "A"
});

25-db.userList.updateMany(
  { age: { $gt: 25 } },
  { $set: { status: "C" } }
);

26-db.userList.updateMany(
  { status: "A" },
  { $inc: { age: 3 } }
);

27-db.userList.deleteMany({ status: "D" });


28-db.userList.deleteMany({});



























*/