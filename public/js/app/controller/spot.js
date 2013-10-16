define([
  
  "app/view/spot",
  "app/model/Spot",
  "app/fetcher"

], function(

  View, 
  Spot, 
  fetcher

){

  // cache each view per id
  return function(id) {
    
    console.log("In Spot Controller");
    
    var view = new View();

    view.model = fetcher.fetchModelObject(Spot, id);

    view.model.on("fetch", function() {
      view.render();
    });         
  }

});