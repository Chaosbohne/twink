Comments = new Meteor.Collection('comments');

Meteor.methods({
  comment: function(commentAttributes) {
    var user = Meteor.user();
    var post = Posts.findOne(commentAttributes.postId);    
    
    if(!user)
      throw new Meteor.Error(401, "You need to login to make comments");
      
    if(!commentAttributes.body)
      throw new Meteor.Error(422, "Please write some content");
    
    if(!post) 
      throw new Meteor.Error(422, "No valid post");    
    
    comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
      userId: user._id,
      author: user.username,
      submitted: new Date().getTime()
    });    
    
    
    Posts.update(comment.postId, {$inc: {commentsCount: 1}});
    return Comments.insert(comment);
  }
});