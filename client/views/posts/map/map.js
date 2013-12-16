Template.map.rendered = function() {
  if(Session.get('isMap'))
    return;  
  
  var mapDiv = this.find('#map-canvas');

  $(window).resize(function () {
    var h = $(window).height(); 
    $('#map-canvas').css('height', (h));
  }).resize(); 

  var myStyles =[
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(Meteor.user().profile.locs.lat, Meteor.user().profile.locs.lng),
    disableDefaultUI: true,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: myStyles
  }; 
  
  map = new google.maps.Map(mapDiv, mapOptions); 
  
  Session.set('isMap', true);
};

Template.map.destroyed = function() {
  Session.set('isMap', false);
}