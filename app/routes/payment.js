import Ember from 'ember';
const {isEmpty} = Ember;

export default Ember.Route.extend({
  model() {
    return this.get('store').peekAll('ticket');
  },

  afterModel(model) {
    if (isEmpty(model)) {
      this.transitionTo('index');
    }
  },
});
