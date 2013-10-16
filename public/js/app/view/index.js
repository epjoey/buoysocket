define([
  
  "backbone", 
  "app/template/index"

], function(

  Backbone, 
  tpl

){

  return Backbone.View.extend({

    el: $('#content'),

    render: function() {

      console.log("Rendering Index View");

      this.$el.html(tpl({
        models: this.collection.models
      }));
    },
  });
});