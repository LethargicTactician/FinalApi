var express = require('express');
var router = express.Router();

// app.delete('/notes/:id', (req, res) => {
//   const id = req.params.id;    
//   const details = { '_id': new ObjectID(id) };    
//     db.collection('notes').remove(details, (err, item) => {     
//       if (err) {        
//         res.send({'error':'An error has occurred'});
//       } else { 
//         res.send('Note ' + id + ' deleted!');
//       }     
//     });  
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
