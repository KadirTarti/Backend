"use strict";

const express = require("express");
const router = express.Router();
const app = express();

const port = 8000;

//! 1.a)
router.get(/^\/(abc|acd)/, (req, res) => {
  res.send("Path Matched abc - acd!");
});

//! 1.b)
router.get(/\/a\d\/c{2,3}/, (req, res) => {
  res.send("Path matched a(number)cc-ccc!");
});
//http://localhost:8000/a0/ccc    //'Path matched!'
//      \/a: /a ile başlamalı.
//      \d: Tek bir rakamı eşler (0-9).
//      \/: Bir / karakteri daha.
//      c{2,3}: c karakteri 2 veya 3 defa tekrarlanmalı.

//! 1.c)
router.get(/.*Hello$/, (req, res) => {
  res.send("Path matched!");
});


//! 1.d)
app.get(/^\/Hello$/, (req, res) => {
  res.send("Path matched!");
});



//! 2)
const students = [
  {
    id: 1,
    name: "Alex",
  },
  {
    id: 2,
    name: "Steve",
  },
];
//! 2.a)
// Tüm öğrencileri JSON formatında döndüren GET metodu
router.get("/students", (req, res) => {
  res.json(students);
});

//! 2.b)
// İstenen öğrencinin bilgilerini JSON formatında döndüren GET metodu
router.get("/students/:id", (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find((s) => s.id === studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ message: "Student not found" });
  }
});
app.use(router);



//! 3)
/*

"use strict";
const express = require("express");
const app = express();

//? Middleware function
app.use((req, res, next) => {
  console.log("Request received");
  next();
});

//? Route handler for the root URL
app.get("/", (req, res) => {
  res.send("Hello!");
});

//? Start the Express server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

*/


//! 4)
// throw Error:
app.use((req, res, next) => {
    throw new Error("Something went wrong!");
  });
  
  // Error function
  function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: err.message });
  }
  
  // Hata ara yazılımını kullanma
  app.use(errorHandler);
  


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
