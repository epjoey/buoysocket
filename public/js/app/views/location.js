define(["backbone", 
        "app/templates/location"], 

function(Backbone, Template) {

  return Backbone.View.extend({

    template: Template,

    render: function() {
      this.$el.html(this.template({location: this.model}));
    },
  });
});