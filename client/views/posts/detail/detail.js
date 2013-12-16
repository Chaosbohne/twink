Template.detail.helpers({
  comments: function() {
    return Comments.find({postId: this._id},{sort: {submitted: -1}, limit: commentsHandle.limit()});
  },  
  isUpvote: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary tupvote';
    } else {
      return 'btn-success';
    }    
  },
  commentsReady: function() {
    return !commentsHandle.loading();
  },
  allCommentsLoaded: function() {
    return !commentsHandle.loading() &&
      Comments.find().count() < commentsHandle.loaded();
  }
});

Template.detail.events({
  'keypress [name=comment]': function(event, template) {
    if (event.which == 13) {    
      event.preventDefault(); 
      
      var comment = {
        postId: template.data._id,
        body: template.find('[name=comment]').value
      };

      if(comment.body.length > 0) {
        Meteor.call('comment', comment, function(error) {
          if(error) {
            console.log('Error');
          }else{
            $(event.target).trigger("destroy");
            $(event.target).val('');
          }
        });
      }
    }
  },
  'click .tupvote' : function(event, template) {
    event.preventDefault();
    Meteor.call('upvote', {id: this._id});      
  },
  'click [name=load-more]': function(event, template) {
    event.preventDefault();
    commentsHandle.loadNextPage();
  }

});

Template.detail.rendered = function() {
  var textarea = this.find('[name=comment]');
  $(textarea).autogrow();  
};