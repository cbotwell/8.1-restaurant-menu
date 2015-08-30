import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(model) {
      model.destroyRecord();

      this.transitionTo('admin.menu');
    },
  },
});
