Template.signupPage.helpers({
  hasError: function() {
    return Errors.findOne();
  },
  
  hasGeolocation: function() {
    if(navigator.geolocation)
      return true;
    return false;
  }
});

Template.signupPage.rendered = function() {
  if(!autocompleteSignup) {
    var input = this.find('[name=location]');
    autocompleteSignup = new google.maps.places.Autocomplete(input);
  }
};

Template.signupPage.destroyed = function() {
  autocompleteSignup = null;
  clearErrors();
};

Template.signupPage.events({
  'submit form': function(event, template) {
    event.preventDefault();
    clearErrors();

    var isError = false;
    
    var email = $(event.target).find('[name=email]').val()
      , username = $(event.target).find('[name=username]').val()
      , password = $(event.target).find('[name=password]').val()
      , location = $(event.target).find('[name=location]').val();

    email = email.replace(/^\s*|\s*$/g, "");
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!(re.test(email))) {
      throwError('No valid email!');      
      isError = true;        
    }

    username = username.replace(/^\s*|\s*$/g, "");
    if(username.indexOf('@') !== -1) {
      throwError('Username can not contain @ !');      
      isError = true;        
    }else if(!(username.length >= 3)){
      throwError('Username must have 3 characters!');      
      isError = true;
    }

    if (!(password.length >= 6)) {
      throwError('Password must have 6 characters!');
      isError = true;
    }
    
    if(!(location.length > 0)) {
      throwError('Location is required!');
      isError = true;      
    }else {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address':location}, function(results, status){
        if(status == google.maps.GeocoderStatus.OK) {
          $('[name=location]').val(results[0].formatted_address);
          var address = results[0].formatted_address;
          
          var geoCodes = {lng: results[0].geometry.location.lng()
                    , lat: results[0].geometry.location.lat()};
                    
          if(isError == false){
            Accounts.createUser({
              email: email,
              username: username,
              password: password,
              profile: {formatted_address: address,
                        locs: geoCodes}
            }, function(error) {
              if(error) {
                throwError(error.reason);                
              }else {
                Meteor.logout();
                Meteor.Router.to('/verifynotification');
              }
            });      
          }                          
        }else {
          throwError("Your location is unavailable.");
          isError = true;            
        }    
      });
    }
    return false;
  }
});
