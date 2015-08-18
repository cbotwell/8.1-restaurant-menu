import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save: function(model) {
      model.save().then(() => {
        this.transitionTo('admin.menu');
      });
    }
  },
});
