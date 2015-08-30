import Ember from 'ember';

export default Ember.Select.extend({
  content: [
    {value: "Drinks", display: "Drink"},
    {value: "Entrees", display: "Entree"},
  ],

  optionValuePath: "content.value",

  optionLabelPath: "content.display",

  required: true,

  prompt: "Please Choose...",
});
