import Ember from 'ember';
const {run: {later}} = Ember;

export default Ember.Controller.extend({
  actions: {
    pay(ticket) {
      this.set('isPayModalVisible', true);
      later(() => {
        ticket.destroyRecord();
        this.set('isPayModalVisible', false);
      }, 2000);
    },
  },
});
