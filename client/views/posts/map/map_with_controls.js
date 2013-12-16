Template.mapWithControls.rendered = function() {   
  if(Session.get('isControls'))
    return;  
    
  var searchControl = this.find('#searchControl');  
  var previewControl = this.find('#previewControl');
  var overviewControl = this.find('#overviewControl');
  var input = this.find('[name=location]');

  map.controls[google.maps.ControlPosition.TOP_LEFT].pop(searchControl);   
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchControl);  
  map.controls[google.maps.ControlPosition.LEFT_TOP].pop(previewControl);   
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(previewControl);    
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].pop(overviewControl);   
  map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(overviewControl);    

  var markers = [];
  markerCluster = new MarkerClusterer(map, markers);
  
  $(input).val(Meteor.user().profile.formatted_address); 
  autocompletePostsList = new google.maps.places.Autocomplete(input);  
 
  google.maps.event.addListener(map, 'center_changed', function() {
    $("#accordion .in").collapse('hide');       
  });  
 
  google.maps.event.addListener(map, 'rightclick', function(event) {
    $("#accordion .in").collapse('hide');  
    Session.set('postCreateLocation', {lat: event.latLng.lat(), lng: event.latLng.lng()});
    $("#postCreate").modal('show');   
  }); 

  google.maps.event.addListener(map, 'idle', function(event) {
    var bounds = map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    Session.set('viewportBounds', {swlat: sw.lat(), swlng: sw.lng(), nelat: ne.lat(), nelng: ne.lng()});
  });  
  
  Session.set('isControls', true);
};

Template.mapWithControls.destroyed = function() {
  Session.set('isControls', false);
};