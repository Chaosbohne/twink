Template.overviewList.helpers({
  isVisible: function() {
    return Session.get('showOverviewControl');
  },
  posts: function() {
    return Posts.find({},{sort: {submitted: -1}});
  }
});