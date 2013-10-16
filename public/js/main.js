// Load the main app module to start the app
requirejs(["config"], function() {
  requirejs(["app/app"], function(App) {
    
    console.log("In Main");

    App.init();
  });
});