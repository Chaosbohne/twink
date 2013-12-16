Template.preview.helpers({
  isUpvote: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary tupvote';
    } else {
      return 'btn-success';
    }    
  }
});

Template.preview.events({
  'click .tupvote' : function(event, template) {
    event.preventDefault();
    Meteor.call('upvote', {id: this._id});      
  },
  'click [name=comment]' : function(event, template) {
    event.preventDefault();     
    $("#postDetail").modal('show'); 
  }
});

Template.preview.rendered = function() { 
  var header = this.find('#collapseOne');
  
  $(header).hover(
    function () {
      //Kleiner Hack, da sonst bevor ein show ein hide erfolgt - Bug in Bootstrap? Maybe
      var height = $(header).height();
      if(!(height > 40))
        $(header).collapse('show');
    },
    function () {
    }
  );  
};

Template.preview.destroyed = function() {
  Session.set('currentPost', null);
};