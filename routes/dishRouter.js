var express = require('express');
var router = express.Router();



router.all('/', function (req, res, next) {
  console.log('Accessing the secret section ...');
  //res.writeHead(200, { 'Content-Type': 'text/plain' });
  next(); // pass control to the next handler
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Will send all the dishes to you!');
});


// POST method route
router.post('/', function (req, res, next) {
  res.send('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
});

module.exports = router;



/*

.delete(function(req, res, next){
        res.end('Deleting all dishes');
});

dishRouter.route('/:dishId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
})

.put(function(req, res, next){
        res.write('Updating the dish: ' + req.params.dishId + '\n');
    res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting dish: ' + req.params.dishId);
});

app.use('/dishes',dishRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
 console.log(`Server running at http://${hostname}:${port}/`);
});
*/