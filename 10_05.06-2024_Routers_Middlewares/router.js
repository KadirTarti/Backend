"use strict";

const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

// app.get('/', (req, res) => {
//     res.send('Hallo Welt!')
// })

/*-------------------*/
//? Router ist spezial app für URL Kontrolle in ExpressJS

const router = express.Router();

router.get("/", (req, res) => {
  res.send({ message: "Hallo Welt" });
});

router
  .route("/user")
  .get((req, res) => res.send({ message: "Hallo Welt GET" }))
  .post((req, res) => res.send({ message: "Hallo Welt POST" }))
  .put((req, res) => res.send({ message: "Hallo Welt PUT" }))
  .delete((req, res) => res.send({ message: "Hallo Welt DELETE" }));

//? Nachdem fertiges route-design, es sollte wie middleware geruft werden:
app.use(router);

//? Move to /routers/index.js
const router = require('./routers/index.js')
app.use(router)

app.listen(PORT, () => {
  console.log(`Beispiel app arbeitet auf port http://${HOST}:${PORT}`);
});
