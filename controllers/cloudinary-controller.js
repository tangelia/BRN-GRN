const cloudinary = require('cloudinary');



module.exports = {
    
    Upload (req,res){
    const timestamp = Math.round(new Date().getTime() / 1000);
    const api_secret = process.env.CLOUDINARY_API_SECRET;
    const signature = cloudinary.utils.api_sign_request({timestamp: timestamp}, api_secret);
        
        const payload = {
            timestamp,
            signature 
        }
        
        res.status(200).json({payload});
    }

}


