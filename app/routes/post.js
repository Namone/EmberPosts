import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    const posts = this.store.findAll('post'); // Make get request to server
    return posts;
  }
});
