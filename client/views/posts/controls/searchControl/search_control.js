Template.searchControl.helpers({
  hasControlError: function() {
    return Errors.find({identifier: 'search-control-location'});  
  }
});