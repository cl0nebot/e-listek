import Ember from 'ember';
const {inject: {service}} = Ember;
const colors = ['orange', 'blue', 'yellow', 'pink', 'olive', 'violet', 'green', 'purple', 'teal'];

export default Ember.Service.extend({
  values: colors,
  store: service(),

  init() {
    this._super(...arguments);
  },

  pop() {
    return this.get('values').popObject();
  },

  remove(color) {
    this.get('values').removeObject(color);
  },

  push(color) {
    this.get('values').pushObject(color);
  },
});
