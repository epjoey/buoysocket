define(["backbone",
        "app/utils/dom",
        "app/collections/locations",
        "app/models/location",
        "app/views/index",
        "app/views/location" ], 

function( Backbone, 
          DomUtils,
          Locations, 
          Location,
          IndexView, 
          LocationView ) {

  return Backbone.Router.extend({

    initialize: function() {
      DomUtils.hijackLinks(this); 
      Backbone.history.start({pushState: true});    
    },

    routes: {
      "":"index",
      "location/:id":"location"
    },

    index: function() {
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
    },

    location: function(id) {
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
    },

  });

});