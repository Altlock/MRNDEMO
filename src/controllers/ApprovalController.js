const Registration = require('../models/Registration')

module.exports = {
    async Approval(req,res){
        const {registration_id} = req.params;

        
        try {
            const registration = await Registration.findById(registration_id)    
            if (!registration){
                return res.status(400).json({message:`Registration Not Found!`})  
            }
            registration.RegistrationResult= true;
            await registration.save();
            return res.json(registration);
    
        } catch (error) {
            return res.status(400).json({message:`Could not process this request!`,error})            
        }
        
    }


}