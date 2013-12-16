Template.overviewControl.events({
  'click [name=expand]': function(event, template) {
    var wrapper = template.find('.overviewWrapper');
    var isVisible = Session.get('showOverviewControl');
    if(!isVisible)
      Session.set('showOverviewControl', true);
    else 
      Session.set('showOverviewControl', false);
  }
});
