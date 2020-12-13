(
    function(){    
        function initMap() {
            var map;
            var bounds = new google.maps.LatLngBounds();
            var mapOptions = {
                mapTypeId: 'roadmap'
            };
                            
            // Display a map on the web page
            map = new google.maps.Map(document.getElementById("mapCanvas"), mapOptions);
						map.setTilt(50);
						
						getMarkersAndInfo()
						.then(({ markers, infoWindowContent})=>{
							// Add multiple markers to map
							var infoWindow = new google.maps.InfoWindow(), marker, i;
            
							// Place each marker on the map  
							for( i = 0; i < markers.length; i++ ) {
									var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
									bounds.extend(position);
									marker = new google.maps.Marker({
											position: position,
											map: map,
											title: markers[i][0]
									});
									
									// Add info window to marker    
									google.maps.event.addListener(marker, 'click', (function(marker, i) {
											return function() {
													infoWindow.setContent(infoWindowContent[i][0]);
													infoWindow.open(map, marker);
											}
									})(marker, i));
					
									// Center the map to fit all markers on the screen
									map.fitBounds(bounds);
							}
					
							// Set zoom level
							var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
								this.setZoom(2);
								google.maps.event.removeListener(boundsListener);
						});
						})       
        }    
        // Load initialize function
        google.maps.event.addDomListener(window, 'load', initMap);        
    }
)()

function getMarkersAndInfo() {
  return fetch("/src/data/architecture.json")
    .then((resp) => resp.json())
    .then((data) => {
			var markers = [];
			var infoWindowContent = [];

			for (const item of data) {
				if(item.lat){
					markers.push([item.name+", "+item.country, item.lat, item.lon ])
					var infoContent = '<div class="info_content">'
					infoContent += '<h3>'+item.name+'</h3>'
					infoContent += '<p>'+item.description+'</>'
					infoContent += '</div>'
					infoWindowContent.push([infoContent])
				}
			}
			return {markers, infoWindowContent}
		});
}