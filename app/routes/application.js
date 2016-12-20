import Ember from 'ember';
import fixtures from '../fixtures/application';
import parse from '../utils/fixtures-parser';
const {RSVP} = Ember;

export default Ember.Route.extend({
  beforeModel() {
    const store = this.get('store');

    return RSVP.all([
      store.importData(parse(fixtures), {json: false}),
      store.findAll('ticket'),
      store.findAll('ticket-item'),
    ]);
  },
});
