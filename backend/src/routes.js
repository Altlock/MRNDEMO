const express = require('express')
const multer = require('multer')

const UserController = require('./controllers/UserController');
const EventController = require('./controllers/EventController')
const uploadConfig = require('./config/upload');
const DashboardController = require('./controllers/DashboardController');
const LoginController = require('./controllers/LoginController');
const RegistrationController = require('./controllers/RegistrationController');
const ApprovalController = require('./controllers/ApprovalController');
const RejectionController = require('./controllers/RejectionController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/status',(req,res) =>{
    res.send({status:200})
})


//TODO Approval Controller
//OR
//TODO Rejection Controller



//login
routes.post('/login',LoginController.store)

//Dashboard
routes.get('/dashboard',DashboardController.getAllEvents)
routes.get('/dashboard/:eventId',DashboardController.getEventById)
routes.get('/dashboard/:sport',DashboardController.getEventsBySport)
//Event
routes.delete('/event/:eventId',EventController.deleteEvent)
routes.post('/event',upload.single("thumbnail"),EventController.createEvent)


//Registration
routes.post('/eventregistration/:event_id',RegistrationController.RegisterToEvent)
routes.get('/eventregistration/:registration_id',RegistrationController.getRegistration)

//Registration Approval
routes.post('/registration/:registration_id/approval',ApprovalController.Approval)
routes.post('/registration/:registration_id/rejection',RejectionController.Rejection)


//User
routes.post('/user/register',UserController.createUser)
routes.get('/user/:user_Id',UserController.getUserById)

module.exports=routes