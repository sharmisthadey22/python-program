const express = requie('express')
const app =express();

cont usermodel = require('./usermodel');


app.get ('/', (req, res) =>{
    res.send("hey");
})

app.get ('/create', async (req, res) =>{
    let createduser = await usermodel.create({
        name: "sharmistha",
        email:"sharmisthamayur@gmail.com",
        username:"sharmistha"
    })
})

app.get ('/update', async (req, res) =>{

    let updateduser = await usermodel.findOneAndUpdate({username:"sharmistha"}, {name: "sharmistha siid sharma"}, {new: true})
    res.send(updateduser);
})  

app.get ('/read', async (req, res) =>{
    let users = await usermodel.findOne(username:"sharmistha");// 
    res.send(users)
})

app.get ('/create', async (req, res) =>{
    let createduser = await usermodel.create({
        name: "siid",
        email:"sharmisthamayur@gmail.com",
        username:"siid"
    })
})

app.get ('/delet', async (req, res) =>{
    let users = await usermodel.findOneAndDelte(username:"sharmistha");// 
    res.send(users)
})

app. listen(3000);