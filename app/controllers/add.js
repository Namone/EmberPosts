import Ember from 'ember';

export default Ember.Controller.extend({

  // When the form is submitted, post it!
  actions: {
    // createNew begin
    createNew() {
      var title = this.get('title');
      var content = this.get('body');

      this.set('title', '');
      this.set('body', '');
      // Create new model instance, and then save it...
      return this.store.createRecord('post', {
        title,
        content
      }).save().then(function(result) {
        console.log(result);
      }, function(error){
        console.log(error);
      });
    } // end of createNew
  }
});
