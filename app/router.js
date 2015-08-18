import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('admin', function() {
    this.route('index', {path: '/'});
    this.route('menu', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: 'new'});
      this.route('show', {path: '/:id'});
      this.route('edit', {path: '/:id/edit'});
    });
    this.route('orders', function() {
      this.route('index', {path: '/'});
      this.route('show', {path: '/:id'});
    });
  });
});

export default Router;
