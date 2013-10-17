define(["backbone", "app/model/spot"], function(Backbone, Spot) {

  return Backbone.Collection.extend({
    name: "Spots",
    model: Spot,
    url: 'http://localhost/api/location/locations.php',
  });
});