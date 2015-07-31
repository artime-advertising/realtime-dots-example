Template.game.onCreated(function(){
  var init = true;
  this.subscribe('movements', function() {init=false;});

  query = Movements.find({});
  query.observeChanges({
    added: function(id, user) {
      if (!init) {
        var movement = Movements.findOne(id);
        var buttonName = "#button-" + movement.name;
        $(buttonName).transition('jiggle');
      }
    }
  });
});
