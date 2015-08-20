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
    this.get('order').save();
    //save all menu items to server as an order model with all the orderItems
  },
});
