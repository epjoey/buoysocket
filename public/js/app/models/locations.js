define(["backbone", "app/models/location"], function(Backbone, Location) {

  return Backbone.Collection.extend({
    model: Location,
    url: 'http://localhost/api/location/locations.php',
  });
});