import Ember from 'ember';
const {inject: {service}} = Ember;

export default Ember.Service.extend({
  values: [],
  store: service(),
  init() {
    this._super(...arguments);
    this.reset();
  },
  reset(){
    const values = ['orange','blue','yellow','pink','olive','violet','green','purple','teal'];
    const self = this;
    this.get('store').findAll('ticket', { reload: true }).then(function(tickets) {
      const colors = tickets.getEach("color"); // ['first', 'second']
      self.set('values',values.filter(c => !colors.includes(c)));
    });
  }
});
