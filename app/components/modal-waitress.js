import Ember from 'ember';
import {task, timeout} from 'ember-concurrency';

export default Ember.Component.extend({
  requestWaitress: task(function*() {
    this.set('isDisabled', true);
    this.set('isModalOpen', true);
    yield timeout(2000);
    this.set('isModalOpen', false);
    yield timeout(2000);
    this.set('isDisabled', false);
  }),
});
