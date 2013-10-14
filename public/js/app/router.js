define([
  "backbone",
  "app/utils/dom",
  "app/controllers/index",
  "app/controllers/location"
], 

function( 
  Backbone, 
  DomUtils,
  IndexController, 
  LocationController
){

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
      IndexController();
    },

    location: function(id) {
      LocationController(id);
    },

  });

});