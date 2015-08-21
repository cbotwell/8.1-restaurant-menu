import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', {path: '/'});

  this.route('admin', function() {
    this.route('index', {path: '/'});
    this.route('menu', function() {
      this.route('index', {path: '/'});
      this.route('create', {path: 'new'});
      this.route('show', {path: '/:menu-item_id'});
      this.route('edit', {path: '/:menu-item_id/edit'});
    });

    this.route('orders', function() {
      this.route('index', {path: '/'});
    });
  });
});

export default Router;
