const User = require('../models/user');
const axios = require('axios');


module.exports = {
    readUserData(req, res) {
      
      res.status(200).json({user: req.session.user});  
    },
    addToCart(req, res){
    },
    removeFromCart(req, res) {

    },
    
    login(req, res) {
        //auth post request to retrive accessTokenResposne. 
        return axios.post(`https://${process.env.REACT_APP_AUTH_DOMAIN}/oauth/token`, {
            client_id: process.env.REACT_APP_AUTH_CLIENT_ID,
            client_secret: process.env.REACT_APP_AUTH_CLIENT_SECRET,
            code: req.query.code, 
            grant_type: 'authorization_code',
            redirect_uri: `http://${req.headers.host}/auth/callback`
        }).then(accessTokenResponse => {
            //Get access token
            const accessToken = accessTokenResponse.data.access_token;
            console.log(accessToken)
            //Return ajax request
            return axios.get(`https://${process.env.REACT_APP_AUTH_DOMAIN}/userinfo?access_token=${accessToken}`).then(userDataResponse => {
                
                const { name, nickname, email, picture, sub } = userDataResponse.data;
                console.log('user data', userDataResponse.data);
                // res.status(200).json({message: 'mEssages'})
                User.findOne({auth_id: sub}, (err, user) => {
                    if(err) console.log('Login Error', err);

                    //If the user is undefined.
                    if(!user) { 
                        //Create new user. 
                        let newUser = new User({
                            name: name,
                            email: email,
                            username: nickname,
                            profile_picture: picture,
                            auth_id: sub,
                            // is_admin: true 
                            is_admin: false
                        });
                        //Assign user to the session.
                        req.session.user = newUser;
                        //Save session
                        req.session.save();
                        //Save newUser to mongodb
                        newUser.save();
                    } 
                    req.session.user = user;
                    req.session.save();
                    res.redirect('/');
                })
            }).catch(err => console.log('Firebase get user info Error', err));
        }).catch(err => console.log('Firebase backend Error', err));
    },
    logout(req, res) {
        //Destroy session
        req.session.destroy();
        //alert successful logout.
        res.status(200).json({message: 'Logout Successfully!'});
    }
}

