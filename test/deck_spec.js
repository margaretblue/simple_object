var expect = require('chai').expect,
  Deck = require('../lib/deck').Deck;

describe('Decks Objects', function() {
  'use strict';
  var deck;

  beforeEach(function() {
    deck = new Deck();
  });

  it('Deck initially has 52 cards', function(){
    expect(deck.getDeckTotal()).to.equal(52);
  });

  it('should know the total number of cards it has', function() {
    expect(deck.getDeckTotal()).to.equal(52);
  });

  it('should have', function() {

  });

});
