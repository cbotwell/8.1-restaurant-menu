import Ember from 'ember';

export default Ember.Component.extend({
  orderBuilder: Ember.inject.service('order-builder'),

  actions: {
    submitOrder: function() {
      this.get('orderBuilder').submitOrder();
    },
  },
});
