const express = require("express");
const app = express();

//import
const products = require("./products.json");

app.listen(3001, function () {
  console.log("server başladı");
});

// app.use('/', (req,res) => {
//     res.send('send edildi')
// })

//& yazım sırası özelden genele olmalı. çünkü yukarıdan aşağıya doğru okuyor. önce bulduğunu getiriyor. eğer '/' path'i en üstte olursa alttaki linklere gidemez.

// app.use('/products', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET Products')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')
//     } else {
//         res.send('Req method is not GET or POST')
//     }
// })

// app.use('/users', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET users')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')
//     } else {
//         res.send('Req method is not GET or POST')
//     }
// })

// app.use('/', (req,res) => {
//     if(req.method =='GET') {
//         res.send('Hallo GET')
//     } else if (req.method == 'POST') {
//         res.send('Hallo POST')
//     } else {
//         res.send('Req method is not GET or POST')
//     }
// })

app.get("/", (req, res) => {
  res.send({ message: "app get message calisti" });
});

// products.json dosyasından verileri çekmek için:
app.get("/products", (req, res) => {
  console.log(req.query); // http://localhost:3001/products?page=6  {page : 6}

  //    http://localhost:3001/products?page=6&limit=4     { page: '6', limit: '4' }



//   const page = req.query.page || 1;
//   const limit = req.query.limit || 10;
  //&veya
  const {page=1, limit=10, category='all'} = req.query



  res.send({
    message: "this is products page",
    // products
    // ilk 4ünü yazdırmak için
    products: products.filter(item=>item.category == category).slice((page-1) * limit, page * limit),
  });
  //? üstteki kod varken sadece /product send edersek hata verir. bu durumda query varlığı doğrulanmalı. bunu da üstteki const page tanımlaası ile yapıyoruz.
});
