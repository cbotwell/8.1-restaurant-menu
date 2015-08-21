import Ember from 'ember';

export default Ember.Route.extend({
  orderBuilder: Ember.inject.service('order-builder'),

  afterModel: function() {
    this.set('orderBuilder.order', this.store.createRecord('order'));
  },

  model: function() {
    var menu = this.store.findAll('menu-item');
    // console.log(menu); Doesn't Work Right
    return menu;
  }
});
