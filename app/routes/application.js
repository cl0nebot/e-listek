import Ember from 'ember';
import fixtures from '../fixtures/application';
import parse from '../utils/fixtures-parser';

export default Ember.Route.extend({
  beforeModel() {
    return this.get('store').importData(parse(fixtures), {json: false});
  },
});
