const express = require('express')
const User = require('../models/user.model')
const router = express.Router()


router.post('/Register',(req,res)=>{
    User.findOne({email:req.body.email},(err,user)=>{
        if(err){
            console.log(err)
            res.json(err)
        }else{
            if(user==null){
                const user = User({
                    email:req.body.email,
                    password:req.body.password
                })
                user.save()
                .then((err)=>{
                    if(err){
                        console.log(err)
                        res.json(err)
                    }else{
                        console.log(user)
                        res.json(user)
                    }
                    
                })
            }else{

            res.json({

                message:'email is not avilable !!!!'
            })   
            }
        }
    })
    
})
router.get('/Register',(req,res)=>{
    res.send('login page sasasasasasa');
})

router.post('/Login',async (req,res,err)=>{
    var username = req.body.username,
      password = req.body.password;

      try {
        var user = await User.findOne({ username: username }).exec();
        var password = await User.findOne({ password: password }).exec();
        try{
            if(!user || !password) {
                res.status(403).send({success: false, msg: 'Authentication Failed, User not found'})
                res.redirect("/Register");
                console.log('not valid user');
                
                
            
            }else{
                console.log('sucsess user and sucsess password')
                res.json(user)
               
                    
            }
        }
        catch
            {(error) =>{ 
                res.status(500).json({
                  error: error
                });
            console.log('blabala loser')
        }}
        // var password = await User.findOne({ password: password }).exec();
        // if(!password) {
            
        //     console.log('not valid User');
        // }
        // else{
        //     console.log('sucsess password')
        // }
        
        
    } catch (error) {
      console.log(error)
      
    }
})
module.exports = router