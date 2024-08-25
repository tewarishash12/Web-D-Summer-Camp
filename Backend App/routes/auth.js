const express = require('express');
const User = require('../models/user');


const router = express.Router();

router.get('/register', (req,res)=>{
    res.render('auth/register');
})

router.get('/login', (req,res)=>{
    res.render('auth/login');
})

router.get('/logout', (req,res)=>{
    res.render('auth/logout');
})

router.post('/register', async(req,res)=>{
    try{
        const {username, email, password} = req.body;
        const userInfo = {username, email, password};
        const user = await User.create(userInfo);
        res.send("You have sucessfully registered")
    } catch(err){
        res.status(500).redirect('/auth/signup');
    }
})

router.post('/login', async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});

        if(!user)
            return res.status(400).redirect('/auth/login');

        const userPassword = user.password;
        if(userPassword !== password)
            return res.status(400).redirect('/auth/login');

        res.send("Successful login");
    } catch(err){
        res.status(500).redirect('/auth/login');
    }
})