Template.previewControl.helpers({
  post: function() {
    if(Session.get('showPreviewControl')) {
      return Posts.findOne(Session.get('currentPost'));
    }
  }
});