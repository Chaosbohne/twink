Markers = new Meteor.Collection(null);

Posts = new Meteor.Collection('posts');

Meteor.methods({
  upvote: function(upvoteAttributes) {
    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, "You need to login to upvote");
    
    if(!upvoteAttributes.id)
      throw new Meteor.Error(401, "You must upvote on a post");
        
    Posts.update({
      _id: upvoteAttributes.id,
      upvoters: {$ne: user._id}
    }, {
      $addToSet:{upvoters: user._id},
      $inc: {votes: 1}
    });
  },
  
  post: function(postAttributes) {
    var user = Meteor.user();
    if (!user)
      throw new Meteor.Error(401, "You need to login to post");
      
    postAttributes.text = postAttributes.text.replace(/^\s*|\s*$/g, "");
    if(postAttributes.text.length < 1) {
      throw new Meteor.Error(422, "Post must have 1 character!");
    }
    
    if(postAttributes.text.length > 3000) {
      throw new Meteor.Error(422, "Post must have less than 3000 characters!");
    }       
      
    if(postAttributes.position.lng < -180 || postAttributes.position.lng > 180) {
      throw new Meteor.Error(422, "Your position is unavailable.!");
    } 
 
    if(postAttributes.position.lat < -90 || postAttributes.position.lat > 90) {
      throw new Meteor.Error(422, "Your position is unavailable.!");
    }      
      
    var post = {
      userId: user._id,
      username: user.username,
      text: postAttributes.text,
      locs: { lat : postAttributes.position.lat, lng : postAttributes.position.lng },
      submitted: new Date().getTime(),
      upvoters: [],
      votes: 0,
      commentsCount: 0
    };

    return Posts.insert(post); 
  }
});
