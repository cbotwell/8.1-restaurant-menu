import Ember from 'ember';

export default Ember.Service.extend({
  orderItems: [],

  total: Ember.computed('orderItems.@each.menuItem.price', 'orderItems.@each.quantity', function() {
    var total = this.get('orderItems').reduce(function(prev, current) {
      var price = parseInt(Ember.get(current, 'menuItem.price'));
      var quantity = current.quantity;
      return prev + (quantity * price);
    }, 0);
    return total;
  }),

  addToOrder: function(item) {
    var obj = this.orderItems.findBy('menuItem', item);

    if (obj) {
      Ember.set(obj, 'quantity', obj.quantity + 1);
    } else {
      this.orderItems.addObject({
        menuItem: item,
        quantity: 1
      });
    }
  },

  jsonOrderStuff: function() {
    return this.get('orderItems').map((item) => {
      return {
        quantity: item.quantity,
        menuItem: item.menuItem.toJSON()
      };
    });
  },

  submitOrder: function() {
    this.set('order.stuff', this.jsonOrderStuff());
    this.set('order.total', this.get('total'));
    this.get('order').save().then(() => {
      this.set('orderItems', []);

      // this.set('order', this.store.createRecord('order')); service does not have a store to access
    });
  },
});
