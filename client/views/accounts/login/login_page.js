Template.loginPage.helpers({ 
  hasError: function() {
    return Errors.findOne();
  }
});

Template.loginPage.events({
  'submit form': function(event, template) {
    event.preventDefault();
    clearErrors();    
    var isError = false;
    
    var usernameOrEmail = $(event.target).find('[name=username-email]').val()
      , password = $(event.target).find('[name=password]').val();
      
    usernameOrEmail = usernameOrEmail.replace(/^\s*|\s*$/g, "");
     
    if(usernameOrEmail.indexOf('@') === -1){
      if(!(usernameOrEmail.length >= 3)){
        throwError('Username must have 3 characters!');      
        isError = true;        
      }    
    }else {
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!(re.test(usernameOrEmail))) {
        throwError('No valid email!');      
        isError = true;        
      }      
    }
    
    if (!(password.length >= 6)) {
      throwError('Password must have 6 characters!');
      isError = true;
    }
    
    if(isError == false){
      Meteor.loginWithPassword(usernameOrEmail, password, function(error) {
        if(error) {
          throwError(error.reason, 'login-create');                
        }else {
          Meteor.Router.to('/');
        }
      });      
    }
    
  }
});
