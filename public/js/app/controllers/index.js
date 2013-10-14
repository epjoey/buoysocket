define([
        "backbone",
        "app/views/index",
        "app/models/locations"], 

function(Backbone, IndexView, Locations) {

  return function() {
    var locations = new Locations();
    var view = new IndexView({
      el:$('#content'), 
      collection:locations
    });

    locations.fetch({
      success: function() {
        view.render();
      }
    });
  }

});