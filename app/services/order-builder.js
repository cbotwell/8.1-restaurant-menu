import Ember from 'ember';

export default Ember.Service.extend({
  orderItems: [],

  addToOrder: function(item) {
    var obj = this.orderItems.findBy('menuItem', item);

    if (obj) {
      Ember.set(obj, 'quanity', obj.quanity + 1);
    } else {
      this.orderItems.addObject({
        menuItem: item,
        quanity: 1
      });
    }
  },

  jsonOrderStuff: function() {
    return this.get('orderItems').map((item) => {
      return {
        quanity: item.quanity,
        menuItem: item.menuItem.toJSON()
      };
    });
  },

  submitOrder: function() {
    this.set('order.stuff', this.jsonOrderStuff());
    this.get('order').save().then(() => {
      this.set('orderItems', []);

      // this.set('order', this.store.createRecord('order')); service does not have a store to access
    });
  },
});
