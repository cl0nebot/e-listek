import Ember from 'ember';
const {Logger: {info}} = Ember;

export default Ember.Component.extend({
  classNames: ['btn', 'btn-info'],

  click() {
    info(`User would like to order: ${this.get('item')}.`);
  },
});
