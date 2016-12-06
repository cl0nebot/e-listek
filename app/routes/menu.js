import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        title: 'Nealkoholické nápoje',
        category: 'non-alcoholic-drinks',
        image: '/assets/images/nonalcoholic.png'
      },
      {
        title: 'Pivo',
        category: 'beer-drinks',
        image: '/assets/images/beer.png'
      },
      {
        title: 'Víno',
        category: 'vine-drinks',
        image: '/assets/images/wine.png'
      },
      {
        title: 'Teplé nápoje',
        category: 'hot-drinks',
        image: '/assets/images/hotdrinks.png'
      }, {
        title: 'Destiláty',
        category: 'alcoholic-drinks',
        image: '/assets/images/distillates.png'
      }
    ];
  },

  actions: {
    order(item) {
      const controller = this.get('controller');

      controller.set('isOrderingModalOpen', true);
      controller.set('_itemToOrder', item);
    },

    closeOrder() {
      const controller = this.get('controller');

      controller.set('isOrderingModalOpen', false);
      controller.set('_itemToOrder', null);
    },

    addOrder(proxyTickets) {
      const model = this.get('currentModel');

      proxyTickets.forEach(ticket => {
        let current = model.find(slice => slice.get('ticket.id') === ticket.get('id'));

        // add ticket if not already on order
        if (!current) {
          current = Ember.Object.create({ticket: ticket.get('content'), items: []});
          model.pushObject(current);
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

      this.send('closeOrder');
    },
  },
});
