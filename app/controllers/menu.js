import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Controller.extend({
  routing: service('-routing'),
  orderService: service(),
  isSubmenu: computed('routing.currentPath', function() {
    const path = this.get('routing.currentPath');
    return path !== 'menu.index';
  }),
  actions: {
    confirmOrder(){
      const orderService = this.get('orderService');
      orderService.sendOrder();
      orderService.toggleProperty('isOrderConfirmationShowing');
    }
  }
});
