import Ember from 'ember';
// This redirects us to posts route by default
export default Ember.Route.extend({
  beforeModel: function() {
    this.transitionTo('post');
  }
});
