define([
  
  "backbone"

], function(
  
  Backbone

){

  return {

    fetchModelObject: function(model, id) {

      var name = model.getName()
        , object;
      
      console.log("Fetching " + name + " " + id);

      object = window.App.cache.get(name, id);

      if (object) {
        console.log("hereere");
        console.log(object);
        object.trigger("fetch");
        return object;
      }

      object = new model({id:id});

      object.fetch({
        success: function() {
          object.trigger("fetch");
        }
      });

      // saving to global app cache
      window.App.cache.set(name, id, object);

      return object;
    },


    fetchCollection: function(collection) {

      var collection = new collection()
        , modelName = collection.model.getName();

      console.log("Fetching " + modelName + " Collection");

      collection.fetch({
        success: function() {
          // _.each(collection.models, function(object) {
          //   console.log(object);
          //   //window.App.cache.set(modelName, object.id, object);
          // });
          collection.trigger("fetch");
        }
      });


      return collection;

    },

    fetchView: function() {

    }

  }
});