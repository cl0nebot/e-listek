import DS from 'ember-data';
import Ember from 'ember';
const {computed} = Ember;

export default DS.Model.extend({
  items: DS.hasMany('item', {async: false}),

  name: DS.attr('string'),

  price: computed('items.[]', function() {
    return this.get('items').reduce((curr, next) => curr + next.get('price'), 0);
  }),
});
