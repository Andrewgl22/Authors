const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/authordb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=> console.log("Successfully connected to the database!"))
.catch((err)=>console.log("Something went wrong"))