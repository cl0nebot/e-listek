import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  store: service(),
  isShowingModal: false,
  _editedTicket: null,
  name: null,

  tickets: computed(function() {
    return this.get('store').peekAll('ticket');
  }),

  canUpdateTicket: computed('name', 'tickets.[]', function() {
    const name = this.get('name');

    if (!name) {
      return false;
    }
    const ticket = this.get('tickets').findBy('name', name);
    return !ticket || ticket === this.get('_editedTicket');
  }),

  actions: {
    delete(ticket) {
      ticket.destroyRecord();
    },

    updateTicket(ticket) {
      this.set('_editedTicket', ticket);
      this.set('name', ticket.get('name'));
      this.toggleProperty('isShowingModal');
    },

    submitUpdate(name) {
      const ticket = this.get('_editedTicket');
      ticket.set('name', name);
      ticket.save();
      this.toggleProperty('isShowingModal');
    },

    toggleModal() {
      this.toggleProperty('isShowingModal');
    },
  },
});
