import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.createRecord('menu-item');
  },
  actions: {
    save: function(menuItem) {
      menuItem.save().then(() => {
        this.transitionTo('admin.menu');
      });
    }
  }
});
