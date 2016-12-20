import Ember from 'ember';

export function money([number]) {
  return number + ',- Kč';
}

export default Ember.Helper.helper(money);
