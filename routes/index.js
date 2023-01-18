const express = require('express');
const router = express.Router();
const upload = require('../upload');
const mongoose = require("mongoose");

let DB_NAME = process.env.DB_NAME;
let DB_USER = process.env.DB_USER;
let DB_PASS = process.env.DB_PASS;
let DB_URL = process.env.DB_URL
let db_url = "mongodb+srv://" + DB_USER + ":" + DB_PASS + "@galleryapp.h2prkcb.mongodb.net/" +DB_NAME;
console.log(db_url);
let option = {
    maxPoolSize:10,
    family:4
};

mongoose.connect(db_url,option);
let db = mongoose.connection
db.once("open",() => {
    console.log("Successful connection to the database");
});

db.on("error", ()=> {
    console.log("Connection to DB failed");
});

router.get('/', (req,res)=>{
   res.render('index');
})

// route to handle image upload
router.post('/upload', (req,res)=>{
   upload(req, res, (err)=>{
       if (err){
           console.log(err)
           res.render('index', {msg: err})
       }else{
           console.log(req.file);
           res.render('index', {file: 'images/' + req.file.filename})
       }
   })
})

module.exports = router;