import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  tagName: '',
  store: service(),
  colors: service(),

  canAddNewTicket: computed('name', function() {
    const name = this.get('name');

    if (!name) {
      return false;
    }

    return !this.get('store').peekAll('ticket').findBy('name', name);
  }),

  actions: {
    addNewTicket(name) {
      const color = this.get('colors').get('values').pop();
      this.get('store').createRecord('ticket', {name,color}).save().then(() => {
        this.set('name', '');
        this.set('isNewTicketModalOpen', false);
      });
    },
  },
});
