const mongoose = require('mongoose');

// create image schema
const imageSchema = new mongoose.Schema({
    name:String,
    path:String,
    date:Date
});

// create the Image class and export it
module.exports = new mongoose.model('Image', imageSchema);