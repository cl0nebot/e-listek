import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('menu', function() {
    this.route('items', {path: '/:type'});
  });
  this.route('order');
  this.route('payment');
  this.route('tickets');
});

export default Router;
