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

  submitOrder: function() {
    //save all menu items to server as an order model with all the orderItems
  },
});
