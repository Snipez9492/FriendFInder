var friendList = require('../data/friend.js');

module.exports = function(app){
  
  app.get('/api/friends', function(req,res){
    res.json(friendList);
  });

  app.post('/api/friends', function(req,res){
   
    var newFScores = req.body.scores;
    var scoresArray = [];
    var fCount = 0;
    var bestMatch = 0;

   
    for(var i=0; i<friendList.length; i++){
      var scoresDiff = 0;
      
      for(var j=0; j<newFScores.length; j++){
        scoresDiff += (Math.abs(parseInt(friendList[i].scores[j]) - parseInt(newFriendScores[j])));
      }

      
      scoresArray.push(scoresDiff);
    }

    
    for(var i=0; i<scoresArray.length; i++){
      if(scoresArray[i] <= scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    
    var best = friendList[bestMatch];
    res.json(best);

    
    friendList.push(req.body);
  });
};