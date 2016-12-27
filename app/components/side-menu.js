import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  classNames: ['ui', 'one', 'column', 'grid'],
  store: service(),
  orderService: service(),
  actions: {
    order() {
      this.get('orderService').toggleProperty('isOrderConfirmationShowing');
    },
  },
  tickets: computed(function() {
    return this.get('store').currentOrderPrice;
  }),
});
