const Event = require('../models/Event')

module.exports={
    async getEventById(req,res){
        const{eventId} = req.params;

        try {
         
        const event = await Event.findById(eventId)
        if(!event){
            return res.status(400).json({message:`EventId does not exist!`})

        }   
        return res.json(event)
        } catch (error) {
            return res.status(400).json({message:`Bad Request!`})
        }


    },
    async getAllEvents(req,res){
        

        try {
         
        const events = await Event.find({})
        if(events){
            return res.json(events)
        }   
        } catch (error) {
            return res.status(400).json({message:`We don't have any events yet`})
        }


    },
     
    async getEventsBySport(req,res){
        const{sport}= req.params
        const query = {sport} ||{}

        try {
         
        const events = await Event.find(query)
        if(events){
            return res.json(events)
        }   
        } catch (error) {
            return res.status(400).json({message:`We don't have any events yet`})
        }


    },
}