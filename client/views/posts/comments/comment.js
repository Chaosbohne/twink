Template.comment.helpers({
  submittedText: function() {
    return ((new Date).getTime() - this.submitted) / 60 / 1000;
  }
});