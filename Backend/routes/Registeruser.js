const express = require('express');
const model = require('../models/Registeruser');
const User = model.User;
const router = express.Router();

// Route to create a new user
router.post('/register', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send("Your Account is successfully created");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post('/check', async(req,res)=>{
 try{
    const check_user = req.body;
    const user = await User.find({email:check_user.email,password:check_user.password});
    //const user = await User.find({});
    if(user.length)
    {
        res.status(201).send("You are successfully sign-in");
        
    }
    else
    {
        res.send("No User Found");
    }
 }catch(error){
    res.status(400).json({ error: error.message });
 }
});
exports.router = router;