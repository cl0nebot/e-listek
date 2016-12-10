import Ember from 'ember';
const {run: {later}, isEmpty} = Ember;

export default Ember.Controller.extend({
  actions: {
    pay(ticket) {
      this.set('isPayModalVisible', true);
      later(() => {
        ticket.destroyRecord();
        this.set('isPayModalVisible', false);
      }, 2000);
    },

    destroy(ticket) {
      ticket.destroyRecord().then(() => {
        if (isEmpty(this.get('model'))) {
          this.transitionToRoute('index');
        }
      });
    },
  },
});
