
	
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


    var markerList = [{msg: 'Odwalls-Fresh Chakki Atta shop', position: {lat: 28.4143431, lng: 77.0654106}},
                  {msg: 'Garima Dairy', position: {lat: 28.41374808, lng: 77.06579804}},
                  {msg: 'The Country Store', position: {lat: 28.41423877, lng: 77.06584096}},
                  {msg: 'Modern Bazaar SS Plaza', position: {lat: 28.42717048, lng: 77.05701113}},
                  {msg: 'Sodhi General Store', position: {lat: 28.41383773, lng: 77.07190275}}]
              

    // var chakkiaata = {lat: 28.4143431, lng: 77.0654106};
    // var secretMessage = 'Odwalls-Fresh Chakki Atta shop';

    for (var i = 0; i < markerList.length; ++i) {
      var shopmarker = new google.maps.Marker({
        position: markerList[i].position,
        map: map,
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
        }
      });
      attachSecretMessage(shopmarker, markerList[i].msg);
      shopmarker.addListener('click', function() {
        map.setZoom(15.8);
        map.setCenter(shopmarker.getPosition());
      });
    }
  

    // Attaches an info window to a marker with the provided message. When the
    // marker is clicked, the info window will open with the secret message.
    function attachSecretMessage(shopmarker, secretMessage) {
      var infowindow = new google.maps.InfoWindow({
        content: secretMessage
      });

      shopmarker.addListener('click', function(){ 
              infowindow.open(shopmarker.get('map'), shopmarker);
              setTimeout(function(){infowindow.close(); map.panTo(mitras);}, '4000');
            });
    }
		
		

        
  }

	
 
