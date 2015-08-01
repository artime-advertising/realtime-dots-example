Meteor.publish('movements', function() {
  return Movements.find({}, {sort: {createdAt: -1}}, {limit: 1});
});

Movements.allow({
  insert: function(userId, doc) {return true;}
});

Movements.after.insert(function(userId, doc){
  Movements.remove({createdAt: {$lt: doc.createdAt}});
});
