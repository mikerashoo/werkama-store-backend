const express = require("express"), app = express(); 
require("dotenv").config()
const connectDb = require("./connection");

app.use(express.json()); 
app.get('/', (req, res)=>{
    res.send("hello mike");
})

app.use('/users', require('./routes/userRoutes'))
const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`listening to port: ${PORT}`)
    connectDb().then(() => {
        console.log("MongoDb connected");
    });
})