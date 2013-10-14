define(["underscore"], 

function(_) {

  return _.template("<h1><a href='/location/<%= location.get('id') %>'><%= location.get('locname')%></h1>");

});