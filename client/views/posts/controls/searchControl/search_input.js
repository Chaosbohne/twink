Template.searchInput.helpers({
  hasControlError: function() {
    return Errors.find({identifier: 'search-control-location'});
  },
  hasGeoSupport: function() {
    if(navigator.geolocation) {
      return true;
    }
    return false;
  }
});

Template.searchInput.events({
  'click [name=locate]': function(event, template) {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          var geocoder = new google.maps.Geocoder();
          var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
          geocoder.geocode({'latLng':latLng}, function(results, status) {
            if(status == google.maps.GeocoderStatus.OK) {
              $('[name=location]').val(results[0].formatted_address);
              map.setCenter(new google.maps.LatLng(position.coords.latitude,position.coords.longitude));
            }else {
              throwControlError("Your location is unavailable.");
            }
          });
      }, function(error) {
        if(Errors.find({identifier: 'search-control-location'}).count() < 1) {
          var errorMessage;      
          switch(error.code) 
          {
            case error.PERMISSION_DENIED:
              errorMessage = "You denied the request for Geolocation.";
              break;
            case error.POSITION_UNAVAILABLE:
              errorMessage = "Your location is unavailable.";
              break;
            case error.TIMEOUT:
              errorMessage = "Your request to get user location timed out.";
              break;
            default:
              errorMessage = "Your location is unavailable.";
              break;        
          }
          throwControlError(errorMessage);
        }       
      });
    }
  },  
  'click [name=search]': function(event, template) {
    var firstResultSelector = '.pac-container:first .pac-item:first';
    var pacContainerSelector = '.pac-container:first';
    
    var firstResult = $(firstResultSelector).text();     
    var geocoder = new google.maps.Geocoder(); 
    
    if(firstResult.length === 0) {
      firstResult = template.find('[name=location]').value;
    }
    
    geocoder.geocode({'address':firstResult}, function(results, status){
      if(status == google.maps.GeocoderStatus.OK) {
        $('[name=location]').val(results[0].formatted_address);
        
        map.setCenter(new google.maps.LatLng(results[0].geometry.location.lat(),
                                             results[0].geometry.location.lng()));                                  
      }else {
        throwControlError('Your location is unavailable.');
      } 
    });
  },
  'keypress [name=location]': function(event, template) {
    Errors.remove({identifier: 'search-control-location'});
    var firstResultSelector = '.pac-container:first .pac-item:first';
    var pacContainerSelector = '.pac-container:first';  
    
    if (event.which == 13) {
      event.preventDefault(); 

      var firstResult = $(firstResultSelector).text(); 
      var geocoder = new google.maps.Geocoder();
      
      geocoder.geocode({"address":firstResult }, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          $('[name=search]').focus();  
          $('[name=location]').val(results[0].formatted_address);
          $('[name=location]').focus();           
          
          if(map)
          map.setCenter(new google.maps.LatLng(results[0].geometry.location.lat(),
                                               results[0].geometry.location.lng())); 
                                             
          $(firstResultSelector).addClass("pac-selected");
          $('.pac-container').css("display","none");
          $('.pac-container').css("visibility","hidden");
        }
      });
          
      return false;
    }else {
      $(pacContainerSelector).css("visibility","visible");
      $(pacContainerSelector).css("z-index",1051);
    }
  }
});    