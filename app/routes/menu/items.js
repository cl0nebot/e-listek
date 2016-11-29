import Ember from 'ember';

export default Ember.Route.extend({
  model({type}) {
    return this.get('store').peekAll('item').filterBy('type', type);
  },
});
