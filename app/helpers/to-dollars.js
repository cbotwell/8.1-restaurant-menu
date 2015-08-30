import Ember from 'ember';

export function toDollars(params/*, hash*/) {
  return params[0] / 100;
}

export default Ember.Helper.helper(toDollars);
