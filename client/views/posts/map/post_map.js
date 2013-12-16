

Template.postMap.created = function() {
  Posts.find().observe({
    added: function(post) {
      // when 'added' callback fires, add HTML element

        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(post.locs.lat, post.locs.lng),
          title: post.title,
          postId: post._id,
          map: map,
          animation: google.maps.Animation.DROP
        });
        
        var listener = google.maps.event.addListener(marker, "click", function() {
          Session.set('currentPost', marker.postId);
          Session.set('showPreviewControl', true);
          Session.set('setMarkerBounce', marker.postId);      
        }); 
        
        marker.listener = listener;
        markerCluster.addMarker(marker, true);
    },
    changed: function(post) {
      // when 'changed' callback fires, modify HTML element's text
      
    },
    removed: function(post) {
      // when 'removed' callback fires, remove HTML element
      var markers = markerCluster.getMarkers();      
      for(var i = 0; i < markers.length; i++) {
        if(markers[i].postId === post._id) {
          google.maps.event.removeListener(markers[i].listener);
          markerCluster.removeMarker(markers[i]);
          break;
        }
      }
    }
  });    
};