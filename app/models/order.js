import DS from 'ember-data';

export default DS.Model.extend({
  stuff: DS.attr({defaultValue: []}),
});
