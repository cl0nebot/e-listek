import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  orderService: service(),

  actions: {
    order(item) {
      const controller = this.get('controller');

      controller.set('isOrderingModalOpen', true);
      controller.set('_itemToOrder', item);
    },

    closeOrder() {
      const controller = this.get('controller');

      controller.set('isOrderingModalOpen', false);
      controller.set('_itemToOrder', null);
    },

    addOrder(proxyTickets) {
      this.get('orderService').addOrder(proxyTickets);
      this.send('closeOrder');
      this.transitionTo('menu');
    },
  },
});
