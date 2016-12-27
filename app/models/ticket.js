import DS from 'ember-data';
import Ember from 'ember';
const {inject: {service}, computed, getOwner} = Ember;

export default DS.Model.extend({
  colors: service(),

  ticketItems: DS.hasMany('ticket-item', {async: false}),

  name: DS.attr('string'),
  color: DS.attr('string', {
    defaultValue(self) {
      return getOwner(self).lookup('service:colors').pop();
    },
  }),

  didLoad() {
    this._super(...arguments);

    this.get('colors').remove(this.get('color'));
  },

  destroyRecord() {
    this.get('colors').push(this.get('color'));

    return this._super(...arguments);
  },

  price: computed('ticketItems.[]', function() {
    return this.get('ticketItems').reduce((curr, next) => curr + next.get('item.price') * next.get('count'), 0);
  }),
});
