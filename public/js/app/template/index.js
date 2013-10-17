define([
  "underscore"
], 
function(
  _
){

  return _.template("<% _.each(models, function(model) { %> <li><%= spotLinkTpl({spot:model}) %></li> <% }); %>");

});