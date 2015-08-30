import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(item, data) {
      item.setProperties(data);

      item.save().then(() => {
        this.transitionTo('admin.menu.show', item);
      });
    }
  },
});
