const express = require("express");
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');

mongoose.connect("mongodb+srv://AdminG12:g12atmongodb@cluster0.s3urbau.mongodb.net/ECA?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    });
});


// API set to start
app.listen(3001, () => {
    console.log("SERVER RUNS!");
});