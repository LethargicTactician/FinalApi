// // ./api/routes/users.js
// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// //const crypto = require("crypto");
// const database = require("../../../database.js")

// //validation
// const checkRegistrationFields =  require("../../../validation/register");
// //const connection = require("../../database");


// //register route
// router.post("/register", (req,res) => {
//     //Ensures that all inputs are valid
//     const { errors, isValid }= checkRegistrationFields(req.body);

//     //returns error status 400 if the entries are invalid
//     if(!isValid){
//         return res.status(400).json(errors);
//     }else{
//     database.query(`INSERT INTO users(email,username, password, streetAddress, city, state, zip) VALUES("${req.body.email}", "${req.body.username}", "${req.body.password}","${req.body.streetAddress}", "${req.body.city}","${req.body.state}", "${req.body.zip}")`, function(err, results){
//         if(err) throw(err);
//         console.log(results);
//     });
//     }
    
// });

// router.get("/getUsers", (req, res) =>{
//     database.query(`SELECT * FROM users`, function(err, results){
//         if(err) throw(err);
//         console.log(results);

//     });

// });

// router.get("/getUsers/{user-id}", (req, res) =>{
//     database.query(`SELECT * FROM users WHERE user-id = "${req.body.user-id}"`, function(err, results){
//         if(err) throw(err);
//         console.log(results);

//     });

// });
// module.exports = router;