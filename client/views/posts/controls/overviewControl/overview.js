Template.overview.rendered = function() {
  var li = this.find('li');
  var self = this;
  $(li).click(function () {
    $("#postDetail").modal('show'); 
  });
  
  $(li).hover(
    function () {
      Session.set('showPreviewControl', false);
      Session.set('currentPost', self.data._id);
      Session.set('setMarkerBounce', self.data._id);  
    },
    function () {
      Session.set('setMarkerBounce', null);  
    }
  );
};

Template.overview.helpers({
  isVisible: function() {
    return Session.get('showOverviewControl');
  }
});