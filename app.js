// Import express framework
const express = require('express');

// Initialize express
const app = express();

// Define the port number
const PORT = 5000;


app.listen(PORT, function(){
   console.log(`Server is listening on port ${PORT}`)
})
