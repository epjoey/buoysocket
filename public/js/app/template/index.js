define([
  "underscore"
], 
function(
  _
){

  return _.template("<% _.each(models, function(model) { %> <li><a href='/spot/<%= model.get('id') %>'><%= model.get('locname')%></a></li> <% }); %>");

});