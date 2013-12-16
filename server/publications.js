Meteor.publish('posts', function(bottom_left_x
                               , bottom_left_y
                               , upper_right_x
                               , upper_right_y, limit) {
  return Posts.find({locs: {$geoWithin: {$box:
                                      [[bottom_left_x, bottom_left_y],
                                       [upper_right_x, upper_right_y]]}}},
                           {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('comments', function(postId, limit) {
  return Comments.find({postId : postId}, {sort: {submitted: -1}, limit: limit});
});