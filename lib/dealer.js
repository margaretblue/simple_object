exports.Dealer = function(name) {
  function constructor() {}

  constructor.prototype.getName = function() {
    return name;
  };

  return new constructor();

}
