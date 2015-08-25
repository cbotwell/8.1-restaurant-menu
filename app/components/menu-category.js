import Ember from 'ember';

export default Ember.Select.extend({
  content: [
    {value: "drink", display: "Drink"},
    {value: "entree", display: "Entree"},
  ],

  optionValuePath: "content.value",

  optionLabelPath: "content.display",

  required: true,

  prompt: "Please Choose...",
});
