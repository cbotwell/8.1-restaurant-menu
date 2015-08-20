import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  orderBuilder: Ember.inject.service('order-builder'),

  actions: {
    addToOrder: function(item) {
      this.get('orderBuilder').addToOrder(item);
    },
  },

});
