Template.overviewExpander.helpers({
  expandLogo: function() {
    if(Session.get('showOverviewControl'))
      return 'glyphicon-chevron-down';
    return 'glyphicon-chevron-up'; 
  }
});