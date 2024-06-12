//Write mongoDB statements corresponding to the SQL statements given below.

/*
                    MongoDB

1- db.people.find({
 
});


2- db.people.find({
 
},{
   "id": 1,
   "user_id": 1,
   "status": 1
}
);


3- db.people.find({
 
},{
   "user_id": 1,
   "status": 1
}
);


4- db.people.find({
 "status " :  "A"
});


5- db.people.find(
{  "status": "A" } , 
  {  "_id": 0, "user_id": 1, "status": 1 })

6- db.people.find({
  "status": { "$ne": "A" }
})


7- db.people.find({
  status: 'A',
  age: 50
});


8-db.people.find({
  $or: [
    { status: 'A' },
    { age: 50 }
  ]
});


9-db.people.find({
  age: { $gt: 25 }
});


10- db.people.find({
  age: { $lt: 25 }
});


11-db.people.find({
  age: { $gt: 25, $lte: 50 }
});

12-db.people.find({
  user_id: { $regex: 'bc', $options: 'i' }
});


13-db.people.find({ status: 'A' }).sort({ user_id: 1 });


14-db.people.find({ status: 'A' }).sort({ user_id: -1 });


15-db.people.countDocuments();   
 or 
db.people.estimatedDocumentCount();


16-db.people.countDocuments({ user_id: { $exists: true } });


17-db.people.countDocuments({ age: { $gt: 30 } });


18-db.people.distinct('status');


19-db.people.findOne();



20-db.people.find().limit(5).skip(10);


21-db.createCollection("people", {
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