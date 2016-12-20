import DS from 'ember-data';
import Ember from 'ember';
const {computed} = Ember;

export default DS.Model.extend({
  ticketItems: DS.hasMany('ticket-item', {async: false}),

  name: DS.attr('string'),

  price: computed('ticketItems.[]', function() {
    return this.get('ticketItems').reduce((curr, next) => curr + next.get('item.price') * next.get('count'), 0);
  }),
});
