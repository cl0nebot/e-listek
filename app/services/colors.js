import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Service.extend({
  values: [],
  store: service(),
  init() {
    this._super(...arguments);
    this.reset();
  },
  fakeInit() {

  },
  reset() {
    const values = ['orange', 'blue', 'yellow', 'pink', 'olive', 'violet', 'green', 'purple', 'teal'];
    this.get('store').findAll('ticket', {reload: true}).then(tickets => {
      const colors = tickets.getEach("color");
      this.set('values', values.filter(c => !colors.includes(c)));
    });
  },
});
