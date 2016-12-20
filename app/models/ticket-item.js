import DS from 'ember-data';

export default DS.Model.extend({
  item: DS.belongsTo('item', {async: false}),
  ticket: DS.belongsTo('ticket', {async: false}),

  count: DS.attr('number'),
});
