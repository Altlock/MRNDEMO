const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status',(req,res) =>{
    res.send({status:200})
})

//Event
routes.post('/event',upload.single("thumbnail"),EventController.createEvent)
routes.get('/event/:eventId',EventController.getEventById)


//User
routes.post('/user/register',UserController.createUser)
routes.get('/user/:user_Id',UserController.getUserById)

module.exports=routes