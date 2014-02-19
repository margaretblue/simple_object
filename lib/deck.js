var Card = require('./card').Card;
//a deck is an array of card objects
exports.Deck = function(){
  var deckHolder = [];
  //loop through to create cards
  var suites = ["Hearts", "Diamonds", "Spades", "Clubs"]
  for(var i=1;i<=13;i++){
    for(var j=0;j< suites.length;j++) {
      var card = new Card(suites[j], i);
      deckHolder.push(card);
    }
  };
  function constructor() { }

  constructor.prototype.addCard = function(card_obj) {
    //gets the rank and suit of card_obj adds that card
    deckHolder.push(card_obj);
  };

  constructor.prototype.getDeckTotal = function() {
    return deckHolder.length;
  };
  return new constructor()
};
