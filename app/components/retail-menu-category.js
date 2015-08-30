import Ember from 'ember';

export default Ember.Component.extend({
  categoryItems: [],

  categories: Ember.computed('categoryItems', 'categoryItems.@each.category', 'categoryItems.@each.name', function() {
    return this.get('categoryItems').reduce((prev, current) => {
      var categories = prev.findBy('name', current.get('category'));
      if (categories) {
        categories.items.push(current);
      } else {
        categories = {
          name: current.get('category'),
          items: [current]
        };
        prev.push(categories);
      }
      return prev;
    }, []);
  }),
});
