var expect = require('chai').expect,
//creates card object
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
      //   expect(card).to.have.property('suite'); //old way with literal assignment
        expect(card.getSuite()).to.equal('Spades');
        expect(card.getSuite()).to.not.equal('');
      });

      it('card should have rank property', function(){
      //   expect(card).to.have.property('rank'); //old way with literal assignment
        expect(card.getRank()).to.equal(3);
        expect(card.getRank()).to.not.equal(1);
      });
    //card.getSuite()
    });

    describe('immutable', function() {
      //card should not be able to change property

      it('should not change property', function() {
        card.suite = 'Diamonds';
        expect(card.getSuite()).to.not.equal('Diamonds');
      });
    })

});
