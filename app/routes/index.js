import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var menu = this.store.findAll('menu-item');
    console.log(menu);
    return menu;

  }
});
