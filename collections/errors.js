/*
ControlErrors = new Meteor.Collection(null);
InputErrors = new Meteor.Collection(null);

throwControlError = function(message) {
  ControlErrors.insert({message: message});
};

throwInputError = function(message, identifier) {
  InputErrors.insert({identifier : identifier, message: message});
};

clearInputErrors = function(identifier) {
  InputErrors.remove({identifier : identifier});
};
*/

Errors = new Meteor.Collection(null);

throwError = function(message, identifier) {
  Errors.insert({message: message})
};

clearErrors = function() {
  Errors.remove({});
};