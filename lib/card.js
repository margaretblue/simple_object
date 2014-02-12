//var card = "testeroonie";
//export because in require.js every file has an object called exports.
//exports lets you make it available to another file
exports.Card = function(suite, rank) {
  var card = {
    suite: suite,
    rank: rank
  };

  return card;
};
