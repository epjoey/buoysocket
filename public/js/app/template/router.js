define([
  "underscore"
], 
function(
  _
){

  return _.template("<a href='/spot/<%= spot.get('id') %>'><%= spot.get('locname')%></a>");

});