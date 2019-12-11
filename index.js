const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dlee07:comp20@scores-qpnhf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true }, { useNewUrlParser: true });

var mongo = require('mongodb');
var assert = require('assert');
var express = require('express');
var router = express.Router();
var url ='mongodb://localhost:27017/scores';
const app = express();
var http = require('http');
var server = http.Server(app);
var port = 3000 || process.env.PORT;

app.listen(port, function(){
  console.log('Listening on port ' + port); //Listening on port 8888
})

app.get('/', function(req, res, next){
    res.sendFile(__dirname + '/game.html');
});
       
router.post('/insert', function(req, res, next){
     client.connect(err=> {
         const collection = client.db("scores").collection("game");
          var doc = {
                          name: req.body.player_name,
                          score: req.body.score
          }

          collection.insertOne(doc, function(err, result){
          //assert.equal(null, err);
                console.log('item inserted');
        });
                  client.close();
     });
})
module.exports = router;

