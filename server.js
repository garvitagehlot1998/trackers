const express = require ('express');
const mongoose = require ('mongoose');
const cors = require('cors');

require('dotenv').config();

const app= express();
const port = process.env.PORT||5000;

app.use(cors());//middleware 
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser: true, useCreateIndex: true}
    );

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDb database connection established successfully");
})
const exerciseRouter = require('./routes/exercies');
const userRouter = require('./routes/users');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);
app.listen(port,()=>{
    console.log (`Server is running on port: ${port}`);
});