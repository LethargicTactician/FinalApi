// // ./api/routes/offers.js
// const express = require("express");
// const router = express.Router();
// const bcrypt = require("bcrypt");
// //const crypto = require("crypto");
// const database = require("../../../database.js")

// //register offer
// router.post("/registeroffer", (req, res)=>{
    
//     database.query(`INSERT INTO offers(offerstatus, userid, gameid) VALUES(${req.body.offerstatus}, ${req.body.userid}, ${req.body.gameid})`, function(err, results){
//         if(err) throw(err);
//         console.log(results);
//     });
//     console.log("Registered successfully");
// });

// router.put("/updateOffer", (req, res)=>{
//     database.query(`UPDATE offers SET status = "${req.body.offerstatus}"`, function(err, results){
//         if(err) throw(err);
//         console.log(results);
//     });
// });

// router.get("/getOffers", (req, res)=>{
//     database.query(`SELECT * FROM offers`, function(err, results){
//         if(err)throw(err);
//         console.log(results);

//     });
// });

// module.exports = router;

