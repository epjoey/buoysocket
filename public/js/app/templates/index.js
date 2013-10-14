define(["underscore"], 

function(_) {

  return _.template("<% _.each(locations, function(location) { %> <li><a href='/location/<%= location.get('id') %>'><%= location.get('locname')%></a></li> <% }); %>");

});