var expect = require('chai').expect,
  Dealer = require('../lib/dealer').Dealer;

describe('Dealer Tests', function() {
  var dealer;

  beforeEach(function() {
    dealer = new Dealer('Flashy McSnipe');
  });

  it('have a name', function() {
    expect(dealer.getName()).to.equal('Flashy McSnipe');
  });

  it('can deal or have a card');

});
