// // ./api/routes/games.js
// const express = require("express");
// const router = express.Router();
// //const bcrypt = require("bcrypt");
// //const crypto = require("crypto");
// const database = require("../../../database.js")

// //register game
// router.post("/registergame", (req, res)=>{
    
//     database.query(`INSERT INTO games(gamename, publisher, publishingYear, gameCondition, game_owners) VALUES("${req.body.gamename}", "${req.body.publisher}", "${req.body.publishingYear}","${req.body.gameCondition}", "${req.body.game_owners}")`, function(err, results){
//         if(err) throw(err);
//         console.log(results);
//     });
//     console.log("Registered successfully");
// });


// router.get("/getGames", (req, res)=>{
//     database.query(`SELECT * FROM games`, function(err, results){
//         if(err)throw(err);
//         console.log(results);

//     });
// });

// //for postman testing
// {
//     "gamename": "Test-Man2",
//     "publisher": "TesingDumDum",
//     "publishingYear": 10000,
//     "gameCondition": "poor",
//     "game_owners": 1
// }

// module.exports = router;