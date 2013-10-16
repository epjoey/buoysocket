define([

  "app/router",
  "app/model/cache"

], function(

  Router,
  Cache

){

  // global App object available anywhere
  return {
    
    cache: new Cache(),

    init: function() {

      console.log("Initializing App");

      // register as global
      window.App = this;

      new Router();


    }
  }

});