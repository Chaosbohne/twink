Template.postCreate.events({
  'submit form': function(event, template) {
    event.preventDefault();
    
    var postText = $(event.target).find('[name=posttext]').val();
    var position = Session.get('postCreateLocation');
    var isError = false;
    
    postText = postText.replace(/^\s*|\s*$/g, "");
    if (postText.length < 1) {
      isError = true;
    }else if(postText.length > 3000) {
      throwInputError('Post must have less than 3000 characters!', 'spotted');
      isError = true;      
    }
    
    if(!position)
      isError = true;
    
    var geoCodes = {lat: position.lat, lng: position.lng};    
    
    if(!isError){
      var post = {
        text: postText,
        position: geoCodes
      };
          
      Meteor.call('post', post, function(error) {
        if(error) {
          console.log('ERROR');
          console.log(error);
          throwInputError(error.reason, 'spotted');
        }else{
          postText = $(event.target).find('[name=posttext]').val('');
          $('#postCreate').modal('hide');
        }
      });       
    }
  }
});