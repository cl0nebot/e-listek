import Ember from 'ember';
import ModalDialog from 'ember-modal-dialog/components/modal-dialog';
const {computed, inject: {service}, ObjectProxy} = Ember;

const OrderSlice = ObjectProxy.extend({
  isValid: computed('isActive', 'count', function() {
    return this.get('isActive') && this.get('count') > 0;
  }),
});

export default ModalDialog.extend({
  store: service(),
  isNewTicketModalOpen: false,
  isOrderingModalOpen: false,
  name: '',

  _tickets: computed(function() {
    return this.get('store').peekAll('ticket');
  }),

  tickets: computed('_tickets.[]', function() {
    // todo: cache proxy objects
    return this.get('_tickets').map(ticket => OrderSlice.create({
      content: ticket,
      item: this.get('item'),
      isActive: false,
      count: 0,
    }));
  }),

  canSendOrder: computed('tickets.[]', 'tickets.@each.isActive', 'tickets.@each.count', function() {
    return this.get('tickets').isAny('isValid');
  }),

  actions: {
    submit() {
      this.sendAction('submit', this.get('tickets').filterBy('isValid'));
    },
  },
});
