import Ember from 'ember';
const {inject: {service}, computed: {gt}} = Ember;

export default Ember.Component.extend({
  orderService: service(),

  isVisible: gt('orderService.currentOrder.length', 0),

  actions: {
    order() {
      this.get('orderService').sendOrder();
    },
  },
});
