Accounts.validateNewUser(function(user) {
  if(user.username) {
    user.username = user.username.replace(/^\s*|\s*$/g, "");
    if(user.username.indexOf('@') !== -1) {
      throw new Meteor.Error(422, 'Username can not contain @ !');            
    }else if(!(user.username.length >= 3)){
      throw new Meteor.Error(422, 'Username must have 3 characters!');      
    }      
  }else {
    throw new Meteor.Error(401, 'No username found!'); 
  }
  
  if(user.emails) {
    if(user.emails[0].address){
      user.emails[0].address = user.emails[0].address.replace(/^\s*|\s*$/g, "");  
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
      if(!(re.test(user.emails[0].address))) {
        throw new Meteor.Error(422, 'No valid email!');           
      }        
    }
  }else {
    throw new Meteor.Error(401, 'No email found!');
  }
    
  if(user.profile) {
    if(user.profile.formatted_address) {
      if(user.profile.formatted_address.length < 1) {
        throw new Meteor.Error(422, 'No address found');
      } 
    }else {
      throw new Meteor.Error(422, 'No address found');
    }
    
    if(user.profile.locs) {
      if(user.profile.locs.lng < -180 || user.profile.locs.lng > 180) {
        throw new Meteor.Error(422, "Your position is unavailable.!");
      } 
   
      if(user.profile.locs.lat < -90 || user.profile.locs.lat > 90) {
        throw new Meteor.Error(422, "Your position is unavailable.!");
      }        
    }else {
      throw new Meteor.Error(422, 'No address found');
    }
  }else {
    throw new Meteor.Error(401, 'No address found!');
  }
  
  return true;
});