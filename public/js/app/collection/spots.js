define(["backbone", "app/model/spot"], function(Backbone, Spot) {

  return Backbone.Collection.extend({
    model: Spot,
    url: 'http://localhost/api/location/locations.php',
  });
});