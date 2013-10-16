define([

  "app/view/index",
  "app/collection/Spots",
  "app/fetcher"

], function(

  View, 
  Collection,
  fetcher

){

  return function() {

    console.log("In Index Controller");

    var view = new View();

    view.collection = fetcher.fetchCollection(Collection);

    view.collection.on('fetch', function(){
      view.render();
    });

  }

});