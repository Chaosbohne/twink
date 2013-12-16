Meteor.Router.add({
  '/': 'postMap',
  
  /* Accounts */
  '/signup': 'signupPage',
  '/login': 'loginPage',
  '/verifynotification': 'verifyPageNotification',
  '/verify-email/:id': {
    to: 'verifyPage',
    and:  function(id) {Session.set('verifyEmailId', id);}
  }  
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if(Meteor.user()){
      if(Meteor.user().emails[0].verified) {
        return page;
      }else {
        return 'verifyPageNotification';
      }
    }else if(Meteor.loggingIn()) {
       return 'loading';
    }else {
      return 'loginPage';
    }
  },
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {except: ['loading', 'signupPage', 'loginPage', 'verifyPage', 'verifyPageNotification']});
Meteor.Router.filter('clearErrors');
