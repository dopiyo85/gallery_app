const express = require("express");
const search_router = express.Router();
const Image = require('./image');

search_router.post("/search", (req, res)=>{
    let image_search_filter = {name: {$regex: req.body.search}}
    

    Image.find(image_search_filter, (error, data)=>{
    //     console.log(data);
        if(error){
            res.render("<h1>No image found with that search criteria");
        } else{
            if(data.length == 0){
                res.send("<h1>No image found with that search criteria");
            } else {
                res.render('index', {file: 'images/' + data[0].name})
            }
        }
    });
});

module.exports = search_router;
