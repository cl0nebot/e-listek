import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  classNames: ['ui', 'one', 'column', 'grid'],
  store: service(),

  tickets: computed(function() {
    return this.get('store').peekAll('ticket');
  }),
});
