define([

  "backbone", 
  "app/template/spot",
  "app/template/spotLink"

], 
function(

  Backbone, 
  spotTpl,
  spotLinkTpl

){

  return Backbone.View.extend({

    el: $('#content'),

    render: function() {
      
      console.log("Rendering Spot View");
      
      this.$el.html(spotTpl({
        spot: this.model, 
        spotLinkTpl: spotLinkTpl 
      }));
    
    },
  });
});