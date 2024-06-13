//Write mongoDB statements corresponding to the SQL statements given below.

/* 
people tablosundaki tüm verileri getir.
1- db.people.find({
 
});


2- people tablosundaki id, user_id ve status sütunlarını getir.

db.people.find({
 
},{
   "id": 1,
   "user_id": 1,
   "status": 1
}
);


3- people tablosundaki user_id vestatus sütunlarını getir.
db.people.find({
 
},{
   "user_id": 1,
   "status": 1
}
);


4- people tablosundan status değerinin "A" olduğu satırları getir.
db.people.find({
 "status " :  "A"
});


5-  people tablosundan user_id ve status sütunlarını seç, status değerinin "A" olduğu satırları getir.
db.people.find(
{  "status": "A" } , 
  {  "_id": 0, "user_id": 1, "status": 1 })



6- people tablosundan status sütununun değeri "A" olmayan tüm satırları getir
db.people.find({
  "status": { "$ne": "A" }
})


7- people tablosundan status değeri "A" olan VE age'i 50 olanları getir.
db.people.find({
  status: 'A',
  age: 50
});


8- people tablosundan status değeri "A" olan VEYA age'i 50 olanları getir.
db.people.find({
  $or: [
    { status: 'A' },
    { age: 50 }
  ]
});


9-  people tablosundan yaşı 25'in üzerinde olanları getir.
db.people.find({
  age: { $gt: 25 }
});


10- people tablosundan yaşı 25'in altında olanları getir.
db.people.find({
  age: { $lt: 25 }
});


11- people tablosundan yaşı 25 ile 50 arasında olanları getir. 25 hariç 50 dahil.
db.people.find({
  age: { $gt: 25, $lte: 50 }
});

12- people tablosundan user_id'si   bc   içerenleri getir.
db.people.find({
  user_id: { $regex: 'bc', $options: 'i' }
});


13-people tablosundan status değerinin "A" olduğu satırları getir, user_id'ye göre sırala
db.people.find({ status: 'A' }).sort({ user_id: 1 });


14- people tablosundan status değerinin "A" olduğu satırları getir, user_id'ye göre TERSTEN sırala
db.people.find({ status: 'A' }).sort({ user_id: -1 });


15- people adlı tablodan toplam satır sayısını getir
db.people.countDocuments();   
 or 
db.people.estimatedDocumentCount();


16- people adlı tablodan user_id sütunundaki toplam satır sayısını getir
db.people.countDocuments({ user_id: { $exists: true } });


17- people adlı tablodan yaşı 30'dan büyük olanları içeren toplam satır sayısını getir
db.people.countDocuments({ age: { $gt: 30 } });


18-  people adlı tablodan status sütunundaki benzersiz değerleri döndür 
db.people.distinct('status');


19- people adlı tablodan ilk satırı seçer
db.people.findOne();



20-  people adlı tablodan ilk beş satırı seçer, ardından 10 satır sonraki veriyi getirir
db.people.find().limit(5).skip(10);


21- yeni tablo oluşturma!

db.createCollection("people", {
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


22-db.people.updateMany(
   {},
   { $set: { join_date: new Date() } }
)

23-db.people.drop();


24-db.people.insertOne({
  user_id: "bcd001",
  age: 45,
  status: "A"
});

25-db.people.updateMany(
  { age: { $gt: 25 } },
  { $set: { status: "C" } }
);

26-db.people.updateMany(
  { status: "A" },
  { $inc: { age: 3 } }
);

27-db.people.deleteMany({ status: "D" });


28-db.people.deleteMany({});



























*/