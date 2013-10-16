define(["backbone"], function(Backbone) {

  return Backbone.Model.extend({
    url: function() {
    	return "http://localhost/api/location/location.php?location=" + this.id;
    },
    idAttribute: 'id'
  }, {
    getName: function() { return "Spot"; }
  });

});