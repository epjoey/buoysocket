//script that runs in browser on page load.
requirejs.config({
   shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ["underscore", "jquery"],
        exports: "Backbone"
      }
    },

    //"baseUrl": "lib",
    "paths": {
      //"views"       : "app/views",
      "jquery"      : "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
      "underscore"  : "//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min",
      "backbone"    : "//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min",
      "io"          : "/socket.io/socket.io"
    }
});

// Load the main app module to start the app
requirejs(["backbone", "app/router"], function(Backbone, Router) {
  new Router();
});