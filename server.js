const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT
const uri = `mongodb+srv://javisimon22:dJrUwMt8jA9kgApw@data-base.shzhzce.mongodb.net/`
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/health", (req, res) => res.sendStatus(200));
app.use('/', routes)

mongoose.connect(uri).
then(() => {
  app.listen(port, () => {
    console.log(`Alive and listening on port http://localhost:${port}`)
  })
})
.catch(error => console.log(error));
