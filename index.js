const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://dlee07:comp20@scores-qpnhf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true }, { useNewUrlParser: true });

var mongo = require('mongodb');
var assert = require('assert');
var express = require('express');
var router = express.Router();
var url ='mongodb://localhost:27017/scores';
const app = express();
const port = 3000;


router.get('/', function(req, res, next){
		res.render('game.html');
});
       
client.connect(err=> {
       			const collection = client.db("scores").collection("game");
        		// perform actions on the collection object
       			router.post('/insert', function(req, res, next){
       					var doc = {
       							name: req.body.player_name,
       							score: req.body.score
       					}

       					collection.insertOne(doc, function(err, result){
       							//assert.equal(null, err);
 								var listener = app.listen(port, function(){
    							console.log('Listening on port ' + listener.address().port); //Listening on port 8888
								});
 								console.log('item inserted');
       					});
       			})
       			client.close();
});
module.exports = router;