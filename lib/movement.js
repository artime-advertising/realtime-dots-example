Movements = new Mongo.Collection('movements');

var movementsSchema = new SimpleSchema({
  name: {
    type: String
  },
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    }
  }
});

Movements.attachSchema(movementsSchema)
