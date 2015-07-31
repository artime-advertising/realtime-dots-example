Template.button.events({
  'click div': function(e) {
    var name = $(e.currentTarget).attr("id");
    name = name.replace('button-','');
    var m = Movements.findOne();
    Movements.insert({name: name});
  }
});
