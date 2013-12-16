Template.verifyPage.helpers({
  hasError: function() {
    return Errors.find();
  }
});

Template.verifyPage.created = function() { 
  Accounts.verifyEmail(Session.get('verifyEmailId'), function(error) {
    if(error) {
      throwError(error.reason); 
    }else {
      Meteor.Router.to('/');
    }
  });
};