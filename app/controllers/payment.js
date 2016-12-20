import Ember from 'ember';
const {run: {later}, isEmpty} = Ember;

export default Ember.Controller.extend({
  actions: {
    pay(ticket) {
      this.set('isPayModalVisible', true);
      later(() => {
        ticket.destroyRecord().then(() => {
          this.set('isPayModalVisible', false);
          if (this.isSettled()) {
            this.transitionToRoute('index');
          }
        });
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

  isSettled() {
    return !this.get('model').any(ticket => ticket.get('price') > 0);
  },
});
