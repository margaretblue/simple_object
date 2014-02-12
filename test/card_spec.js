var expect = require('chai').expect,
  Card = require('../lib/card').Card;

describe('Card object tests', function() {
    var card;

    beforeEach(function() {
      card = new Card('Spades', 3);
    });
        // it('card should have property: rank', function() {
        //   expect(card).to.have.property('rank');

    describe('constructor', function() {
      it('card should be truthy (exists)', function(){
        expect(card).to.be.ok;
      });

      it('card should have a suit property', function(){
        expect(card).to.have.property('suite');
      });

      it('card should have rank property', function(){
        expect(card).to.have.property('rank');
      });

    });

});
