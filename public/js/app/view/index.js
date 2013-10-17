define([
  
  "backbone", 
  "app/template/index",
  "app/template/spotLink"

], function(

  Backbone, 
  tpl,
  spotLinkTpl

){

  return Backbone.View.extend({

    className: "index-view",
    el: $('#content'),

    render: function() {

      console.log("Rendering Index View");

      this.$el.html(tpl({
        models: this.collection.models,
        spotLinkTpl: spotLinkTpl         
      }));
    },

    renderItem: function(item) {
      console.log(item);
    }
  });
});