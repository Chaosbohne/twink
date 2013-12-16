
postsHandle = null;
currentMarker = null;
currentCluster = null;
markerCluster = null;
autocompleteSignup = null;
map = null;

Session.set('currentPost', null);

Session.set('isMap', false);
Session.set('isControls', null);
Session.set('setMarkerBounce', null);
Session.set('showOverviewControl', false);
Session.set('showPreviewControl', false);

/* Saving position where rightclick was captured */
Session.set('postCreateLocation', null);
/* Saving viewportBounds for autosubscription */
Session.set('viewportBounds', null);

Session.set('isLoading', true);

Deps.autorun(function() {
  if(Session.get('isMap'))
    Session.set('isLoading', false);
});

Deps.autorun(function() {
  if(Session.get('currentPost')) {
    var currentPost = Session.get('currentPost');
    commentsHandle = Meteor.subscribeWithPagination('comments', currentPost, 5);
  }
});

Meteor.autosubscribe( function () {
  var bounds = Session.get('viewportBounds');
  if(bounds)
    postsHandle = Meteor.subscribe( 'posts', bounds.swlat, bounds.swlng, bounds.nelat, bounds.nelng, 5 );
});

Deps.autorun(function() {
  var markerId = Session.get('setMarkerBounce');
  /* clear markeranimation */
  if(currentMarker)
    currentMarker.setAnimation(null);
    
  /* clear clusteranimation */
  if(currentCluster)
    $(currentCluster).removeClass('animated bounceInfinite');
  
  if(markerId === null) {
    currentMarker = null;
    currentCluster = null;
    return;    
  }  
  
  if(markerCluster) {  
    /* get all clusters */
    var clusters = markerCluster.getClusters(); // use the get clusters method which returns an array of objects

    /* if clustered found, no markersearch needed */
    var clustered = false;
    for( var i=0, l=clusters.length; i<l; i++ ){
      if(clusters[i].getSize() < markerCluster.getMinimumClusterSize()) {
        continue;
      }      
      for( var j=0, le=clusters[i].markers_.length; j<le; j++ ){
        if(clusters[i].markers_[j].postId === markerId) {
          $(clusters[i].clusterIcon_.div_).addClass('animated bounceInfinite');
          currentCluster = clusters[i].clusterIcon_.div_;
          clustered = true;
        }
      }
    }    
    
    var notClustered = false;    
    /* marker not in cluster */
    if(clustered === false) {  
      currentCluster = null;
      var markers = markerCluster.getMarkers(); 
      for(var i = 0; i < markers.length; i++) {
        if(markers[i].postId === markerId) {
          markers[i].setAnimation(google.maps.Animation.BOUNCE);
          currentMarker = markers[i];
          notClustered = true;
        }
      }
    }
    
    if(notClustered === false)
      currentMarker = null;
  }
});