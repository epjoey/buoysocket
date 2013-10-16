define([
  
  "backbone"

], function(
  
  Backbone

){

  return Backbone.Model.extend({

    _store: {},

    get: function(name, id) {
      return this._store[[name, id].join(":")];
    },

    set: function(name, id, obj) {
      this._store[[name, id].join(":")] = obj;
    }
  });
});