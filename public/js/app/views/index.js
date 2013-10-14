define(["backbone", 
        "app/templates/index"], 

function(Backbone, Template) {

  return Backbone.View.extend({

    template: Template,

    render: function() {
      this.$el.html(this.template({locations: this.collection.models}));
    },
  });
});