define([
  
  "backbone"

], function(
  
  Backbone

){

  return {

    fetch: function(fn, id) {

      var name = fn.getName()
        , model = window.App.models.get(name, id);
      
      console.log("Fetching "+name+" "+id);

      if (model) {
        model.trigger("fetch");
        return model;
      }

      model = new fn({id:id});

      model.fetch({
        success: function() {
          model.trigger("fetch");
        }
      });

      // saving to global app obj
      window.App.models.set(model, name, id);

      return model;
    }

  }
});