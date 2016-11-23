import Ember from 'ember';
const {Logger: {info}} = Ember;

export default Ember.Component.extend({
  classNames: ['btn', 'btn-info'],

  click() {
    const item = this.get('item');

    info(`User would like to order: ${item.get('name')}.`);
    this.sendAction('order', item);
  },
});
