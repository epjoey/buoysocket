define([
  "backbone",
  "app/util/dom",
  "app/controller/index",
  "app/controller/spot"
], 

function( 
  Backbone, 
  DomUtil,
  IndexController, 
  SpotController
){

  return Backbone.Router.extend({

    initialize: function() {

      console.log("Initializing Router");

      DomUtil.hijackLinks(this);
      Backbone.history.start({pushState: true});    
    },

    routes: {
      "": IndexController,
      "spot/:id": SpotController
    }

  });

});