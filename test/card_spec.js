var expect = require('chai').expect;
var Book = require('../lib/card').Card;
  describe('If I create a card with a suit and rank, that the card has that suit and rank', function() {

    beforeEach(function() {
      card = new Card('Spades', 3);
    });
      it('card should have property: suit', function() {
        expect(card).to.have.property('suit');
      });
      it('card should have property: rank', function() {
        expect(card).to.have.property('rank');
      });
  });
