const express = require('express');
const router = express.Router();
const upload = require('../upload');
const mongoose = require("mongoose");
const Image = require("./image");

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
       let newImage = new Image({
            name:req.file.originalname,
            path:'/public/images/'+ req.file.originalname,
            date:Date.now()
        }) 
        newImage.save();
           console.log(req.file);
           res.render('index', {file: 'images/' + req.file.originalname})
       }
   })
})

module.exports = router;