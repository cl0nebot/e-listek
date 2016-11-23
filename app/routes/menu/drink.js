import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').peekAll('item').filterBy('type', 'non-alcoholic-drinks');
  },
});
