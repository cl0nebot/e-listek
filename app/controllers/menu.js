import Ember from 'ember';
const {inject: {service}, computed} = Ember;

export default Ember.Controller.extend({
  routing: service('-routing'),

  isSubmenu: computed('routing.currentPath', function() {
    const path = this.get('routing.currentPath');
    return path !== 'menu.index';
  }),
});
