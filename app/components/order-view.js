import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Component.extend({
  orderService: service(),
  tagName: '',

  actions: {
    order() {
      this.get('orderService').sendOrder();
      this.set('isModalOpen', false);
    },

    remove(ticket, item) {
      this.get('orderService').remove(ticket, item);
    },
  },
});
