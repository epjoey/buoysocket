define([
        "backbone",
        "app/views/location",
        "app/models/location"], 

function(Backbone, LocationView, Location) {

  return function(id) {
    var location = new Location({id:id});
    var view = new LocationView({
      el:$('#content'), 
      model:location
    });

    location.fetch({
      success: function() {
        view.render();
      }
    });
  }

});