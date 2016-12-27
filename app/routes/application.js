import Ember from 'ember';
import fixtures from '../fixtures/application';
import parse from '../utils/fixtures-parser';
const {RSVP} = Ember;
const {inject: {service}} = Ember;

export default Ember.Route.extend({
  colors: service(),
  beforeModel() {
    const store = this.get('store');
    this.get('colors').values;
    return RSVP.all([
      store.importData(parse(fixtures), {json: false}),
      store.findAll('ticket'),
      store.findAll('ticket-item'),
    ]);
  },
});
