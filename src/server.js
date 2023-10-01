const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const userController = require('./controllers/RegisterController');
const RegisterController = require('./controllers/RegisterController');

const PORT = process.env.PORT || 8000;

if(process.env.NODE_ENV != 'production')
{
    require('dotenv').config()
}

app.use(cors())
app.use(express.json())

app.get('/',(req,res) =>{
    res.send('Hello From express1');
})

app.post('/register',RegisterController.store)

try {
    mongoose.connect(process.env.MONGO_DB_CONNECTION,{
        useNewUrlParser :true,
        useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
} catch (error) {
    console.log(error)
}

app.listen(PORT,() => {
console.log('Listening on ${PORT}')
})

