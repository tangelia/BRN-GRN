const User = require('../models/users');
// const axios = require('axios');


const userController = {
    index: async (req, res) => {
        try {
            const users = await User.find({})
            res.json(users)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const userId = req.params.id
            const User = await User.findById(userId)
            res.json(user)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newUser = req.body
          const savedUser = await User.create(newUser)
          res.json(savedUser)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    update: async (req, res) => {
        try {
          const userId = req.params.id
          const updatedUser = req.body
          const savedUser = await User.findByIdAndUpdate(userId, updatedUser, {new: true})
          res.json(savedUser)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const userId = req.params.id
          const deletedUser = await User.findByIdAndRemove(userId)
          res.json(deletedUser)
        } catch (err) {
          console.log(err)
          res.status(500).json(err)
        }
    }
}

module.exports = userController




/*This bit of code logs user with authentification -----STRETCH GOAL - PORTFOLIO-*/


// module.exports = {
//     readUserData(req, res) {
      
//       res.status(200).json({user: req.session.user});  
//     },
//     addToCart(req, res){
//     },
//     removeFromCart(req, res) {

//     },
    
//     login(req, res) {
//         //auth post request to retrive accessTokenResposne. 
//         return axios.post(`https://${process.env.REACT_APP_AUTH_DOMAIN}/oauth/token`, {
//             client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
//             client_secret: process.env.REACT_APP_AUTH_CLIENT_SECRET,
//             code: req.query.code, 
//             grant_type: 'authorization_code',
//             redirect_uri: `http://${req.headers.host}/auth/callback`
//         }).then(accessTokenResponse => {
//             //Get access token
//             const accessToken = accessTokenResponse.data.access_token;
//             console.log(accessToken)
//             //Return ajax request
//             return axios.get(`https://${process.env.REACT_APP_AUTH_DOMAIN}/userinfo?access_token=${accessToken}`).then(userDataResponse => {
                
//                 const { name, nickname, email, picture, sub } = userDataResponse.data;
//                 console.log('user data', userDataResponse.data);
//                 // res.status(200).json({message: 'mEssages'})
//                 User.findOne({auth_id: sub}, (err, user) => {
//                     if(err) console.log('Login Error', err);

//                     //If the user is undefined.
//                     if(!user) { 
//                         //Create new user. 
//                         let newUser = new User({
//                             name: name,
//                             email: email,
//                             username: nickname,
//                             profile_picture: picture,
//                             auth_id: sub,
//                             // is_admin: true 
//                             is_admin: false
//                         });
//                         //Assign user to the session.
//                         req.session.user = newUser;
//                         //Save session
//                         req.session.save();
//                         //Save newUser to mongodb
//                         newUser.save();
//                     } 
//                     req.session.user = user;
//                     req.session.save();
//                     res.redirect('/');
//                 })
//             }).catch(err => console.log('Firebase get user info Error', err));
//         }).catch(err => console.log('Firebase backend Error', err));
//     },
//     logout(req, res) {
//         //Destroy session
//         req.session.destroy();
//         //alert successful logout.
//         res.status(200).json({message: 'Logout Successfully!'});
//     }
// }

