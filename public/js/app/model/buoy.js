define(["backbone"], function(Backbone) {

  return Backbone.Model.extend({
    url: function() {
    	return "http://localhost/api/buoy/buoy.php?buoyid=" + this.id;
    },
    idAttribute: 'buoyid'
  });
});