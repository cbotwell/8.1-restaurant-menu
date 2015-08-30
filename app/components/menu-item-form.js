import Ember from 'ember';

export default Ember.Component.extend({
  resetFormValues: function() {
    var values = this.get('menu-item').toJSON();
    this.setProperties(values);
  }.on('init'),

  actions: {
    submit: function() {
      var formData = this.getProperties('name', 'description', 'price', 'category');

      this.sendAction('save', this.get('menu-item'), formData);
    },
  },
});
