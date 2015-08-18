import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findById('menu-item', params.id);
  },
  actions: {
    delete: function(model) {
      model.destroyRecord();

      this.transitionTo('admin.menu');
    },
  },
});
