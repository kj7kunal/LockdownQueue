
	
function initMap() {
    var mapElement = document.getElementById('map');
    var mitras = new google.maps.LatLng(28.412262, 77.063891);
    var homeMessage = 'Home';
    var mapOptions = {
      zoom: 15.8,
      center: mitras
    };

    var map = new google.maps.Map(mapElement, mapOptions);

    var origmarker = new google.maps.Marker({
      map: map,
      position: mitras,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
      }
    });

    origmarker.addListener('click', function() {
      map.setZoom(15.8);
      map.setCenter(origmarker.getPosition());
    });
  
    attachSecretMessage(origmarker, homeMessage);


    map.addListener('center_changed', function() {
      // 3 seconds after the center of the map has changed, pan back to the
      // marker.
      window.setTimeout(function() {
        map.panTo(mitras);
      }, 3000);
    });

    
    var chakkiaata = {lat: 28.4143431, lng: 77.0654106};
    var secretMessage = 'Odwalls-Fresh Chakki Atta shop';

    var shopmarker = new google.maps.Marker({
      position: chakkiaata,
      map: map,
      icon: {
        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
      }
    });
    

    shopmarker.addListener('click', function() {
      map.setZoom(15.8);
      map.setCenter(shopmarker.getPosition());
    });
  
    attachSecretMessage(shopmarker, secretMessage);

  

    // Attaches an info window to a marker with the provided message. When the
    // marker is clicked, the info window will open with the secret message.
    function attachSecretMessage(shopmarker, secretMessage) {
      var infowindow = new google.maps.InfoWindow({
        content: secretMessage
      });

      shopmarker.addListener('click', function() {
        infowindow.open(shopmarker.get('map'), shopmarker);
      });
    }
		
		

        
  }

	
 
