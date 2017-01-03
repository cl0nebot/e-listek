import Ember from 'ember';
const {Logger: {info}, inject: {service}, computed} = Ember;

export default Ember.Service.extend({
  store: service(),
  currentOrder: undefined,
  isOrderConfirmationShowing: false,

  currentOrderPrice: computed(function() {
    return this.get('currentOrder')
      .reduce((curr, next) => curr + next.items
        .reduce((curr, next) => curr + next.get('item.price') * next.get('count'), 0), 0);
  }),

  init() {
    this._super(...arguments);

    this.reset();
  },

  reset() {
    this.set('currentOrder', []);
    this.notifyPropertyChange('currentOrderPrice');
  },

  remove(ticket, item) {
    ticket.get('items').removeObject(item);
    this.notifyPropertyChange('currentOrderPrice');
  },

  sendOrder() {
    info('Send order');
    this._applyOrder(this.get('currentOrder'));
    this.reset();
  },

  _createTicketItem(itemProxy) {
    return this.get('store').createRecord('ticket-item', {
      count: itemProxy.get('count'),
      item: itemProxy.get('item'),
    });
  },

  _applyOrder(order) {
    order.forEach(ticketProxy => {
      const ticket = ticketProxy.get('ticket');

      ticketProxy.get('items').forEach(itemProxy => {
        const ticketItem = this._createTicketItem(itemProxy);
        ticketItem.save();
        ticket.get('ticketItems').pushObject(ticketItem);
      });

      ticket.save();
    });
  },

  addOrder(proxyTickets) {
    const currentOrder = this.get('currentOrder');

    proxyTickets.forEach(ticket => {
      let current = currentOrder.find(slice => slice.get('ticket.id') === ticket.get('id'));

      // add ticket if not already on order
      if (!current) {
        current = Ember.Object.create({ticket: ticket.get('content'), items: []});
        currentOrder.pushObject(current);
      }

      const items = current.get('items');

      // add item if not already on ticket
      let item = items.find(item => item.get('item.id') === ticket.get('item.id'));
      if (!item) {
        item = Ember.Object.create({item: ticket.item, count: 0});
        items.pushObject(item);
      }

      item.incrementProperty('count', parseInt(ticket.count));
    });

    this.notifyPropertyChange('currentOrderPrice');
  },
});
