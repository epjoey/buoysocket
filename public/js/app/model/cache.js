define([
  
  "backbone"

], function(
  
  Backbone

){

  return Backbone.Model.extend({

    _store: {},

    get: function(name, id) {
      if (this._store[name]) {
        return this._store[name][id];
      }
      return null;
    },

    set: function(name, id, obj) {
      if (!this._store[name]) {
        this._store[name] = {};
      }
      this._store[name][id] = obj;
    }
  });
});