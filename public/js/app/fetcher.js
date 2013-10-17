define([

], function(

){

  return {

    fetchModelObject: function(model, id) {

      var name = model.getName()
        , object;
      
      console.log("Fetching " + name + " " + id);

      object = window.App.cache.get(name, id);

      if (object) {
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

      var coll = new collection()
        , name = coll.model.getName();

      console.log("Fetching " + name + " Collection");
      
      // coll = window.App.cache.get(name);

      // if (coll) {
      //   coll.trigger("coll:fetch");
      //   return coll;
      // }

      // coll = new collection();

      coll.fetch({
        success: function() {
          // _.each(coll.models, function(object) {
          //   console.log(object);
          //   window.App.cache.set(name, object.id, object);
          // });
          coll.trigger("coll:fetch");
        }
      });

      return coll;

    },

    fetchView: function() {

    }

  }
});