import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  tagName: '',
  store: service(),

  canAddNewTicket: computed('name', function() {
    const name = this.get('name');

    if (!name) {
      return false;
    }

    return !this.get('store').peekAll('ticket').findBy('name', name);
  }),

  actions: {
    addNewTicket(name) {
      this.get('store').createRecord('ticket', {name}).save().then(() => {
        this.set('name', '');
        this.set('isNewTicketModalOpen', false);
      });
    },
  },
});
