Template.detailInner.helpers({
  post: function() {
    if(Session.get('currentPost')) {
      var post = Posts.findOne(Session.get('currentPost'));
      if(!post) {
        Session.set('currentPost', null);
        $("#postDetail").modal('hide'); 
      }
      return  post;
    }
  }
});