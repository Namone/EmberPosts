import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    deletePost(post) {
      const id = post.id; // ID of clicked post
      this.store.find('post', id).then(function(post) {
        post.deleteRecord();
        post.save();
      });
    }
  }
});
