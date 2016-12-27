import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Component.extend({
  store: service(),
  colors: service(),
  tickets: computed(function (){
    return this.get('store').peekAll('ticket');
  }),
  canUpdateTicket: computed('name', function() {
    const name = this.get('name');

    if (!name) {
      return false;
    }
    const ticket = this.get('store').peekAll('ticket').findBy('name', name);
    return !ticket || ticket === this.get('_editedTicket');
  }),
  isShowingModal: false,
  _editedTicket: null,
  name: null,
  actions: {
    delete(ticket) {
      this.get('colors').values.push(ticket.get('color'));
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
