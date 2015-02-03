var initializeGoogleMaps = function() {
    var mapIndex, mapCount = GoogleMaps.mapConfigList.length;
    for (mapIndex = 0; mapIndex < mapCount; ++mapIndex) {
        (function() {
            new GoogleMaps.map(GoogleMaps.mapConfigList[mapIndex]);
        })();
    }
};

var GoogleMaps = {
    mapConfigList: [],
    bigMap: function(mapConfig) {
        $.colorbox({
            html:'<div id="map-max" class="gmap-full"></div>',
            fixed: true,
            width: '90%',
            height: '90%',
            onComplete:function(){ 
                mapConfig.mapId = 'map-max';
                new GoogleMaps.map(mapConfig);
                $('#map-max').css('height', $('#map-max').parent().height());
                google.maps.event.trigger(document.getElementById('map-max'), 'resize');
            },
            onClose: function() {

            }
        });
    },
    init: function() {
        var script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://maps.google.com/maps/api/js?sensor=true&callback=initializeGoogleMaps";
            document.body.appendChild(script);
    },
    str2coords: function(coordinates){
        var str = coordinates.split(',');
        var lat = parseFloat(str[0].replace(',', '.')),
            lng = parseFloat(str[1].replace(',', '.'));
        return new google.maps.LatLng(lat, lng);
    },
    map: function(mapConfig) {
        this.mapConfig = mapConfig;
        this.setGoogleMapOptions();
        this.setMap();
        
        var self = this;
        $('#' + mapConfig.mapId + '_zoom').show().click(function() {
            GoogleMaps.bigMap(self.mapConfig);
        });
    },
    makeMarker: function(coordinates, /*locationStr,*/ title, url, description) {
        coordinates = GoogleMaps.str2coords(coordinates);
        var content = '<h2>' + title  + '<'+'/h2>' + description.replace(/\n/,"<br />");
        if (url) {
            content = content + ' <a href="' + url + '">mehr &raquo;<'+'/a>';
        }
        var markerOpt = {
            content: content,
            position: coordinates
        };
        return markerOpt; 
    }
};
GoogleMaps.map.prototype = {
    map: null,
    googleMapOptions: {},
    markers: [],
    
    setGoogleMapOptions: function() {
        this.googleMapOptions = {
            zoom: parseInt(this.mapConfig.zoom == 'auto' ? 14 : this.mapConfig.zoom),
            center: GoogleMaps.str2coords(this.mapConfig.coordinates),
            mapTypeId: google.maps.MapTypeId[this.mapConfig.mapTypeId],
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
            }
        };
        this.mapConfig.zoom_auto = false;
        
        if (this.mapConfig.zoom == 'auto') {
            this.mapConfig.zoom_auto = true;
        }
    },
    setMap: function() {
        this.map = new google.maps.Map(document.getElementById(this.mapConfig.mapId), this.googleMapOptions);
        
        this.setKmlLayer(this.mapConfig.kml);
         
        if (this.mapConfig.center_active === true) {
            if (this.mapConfig.url) {
                var content = '<a href="' + this.mapConfig.url + '">';
                if (this.mapConfig.alt) {
                    content = content + this.mapConfig.alt; 
                }   
                else {
                    content = content + this.mapConfig.locationStr;
                }   
                content = content + '</a>';
            }   
            else if (this.mapConfig.alt) {
                content = this.mapConfig.alt;
            }

            var markerOpt = {
                position: GoogleMaps.str2coords(this.mapConfig.coordinates),
                content: content
            };
            this.setMarker(markerOpt); // zentrale Adresse
        }
        for (var i = 0; i < this.mapConfig.markerList.length; ++i) {
            var marker = this.mapConfig.markerList[i];
            this.setMarker(
                GoogleMaps.makeMarker(marker.coordinates, /*marker.address,*/ marker.title, marker.url, marker.description)
            );
            if (marker.kml) {
                this.setKmlLayer(marker.kml);
            }
        }
        if (this.mapConfig.zoom_auto === true) {
            this.zoom();
        }
    },
    zoom: function() {
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < this.markers.length; i++) {
            bounds.extend(this.markers[i].getPosition());
        };
        this.map.fitBounds(bounds);
        if (this.map.getZoom() < 5) {
            this.map.setZoom(this.googleMapOptions.zoom);
        }
    },
    setKmlLayer: function(kmlUri) {
        var self = this;
        if (kmlUri) {
            new google.maps.KmlLayer(kmlUri, {
                map: this.map,
                preserveViewport: true,
                'metadata_changed': function() {
                    if (self.mapConfig.zoom_auto === true) {
                        self.map.fitBounds(this.getDefaultViewport());
                        if (self.map.getZoom() > 20) {
                            self.map.setZoom(self.googleMapOptions.zoom);
                        }
                    }
                }
            });
        }
    },
    setMarker: function(markerOptions) {
        var pinShadow = new google.maps.MarkerImage(
                'https://www.berlin.de/i9f/images/google_d_map_pin_shadow.png',
                new google.maps.Size(40, 37),
                new google.maps.Point(0, 0),
                new google.maps.Point(12, 35)
            ),
            self = this,
            marker = new google.maps.Marker({
                position: markerOptions.position,
                map: this.map,
                icon: 'https://www.google.com/intl/en_us/mapfiles/ms/icons/blue-dot.png',
                shadow: pinShadow
            }); 
        this.markers.push(marker); // push to global, s. fitBounds...

        var infoWindow = new google.maps.InfoWindow({
            content: markerOptions.content            
        }); 
        google.maps.event.addListener(marker, 'click', function() {
            infoWindow.open(self.map, marker);
        });
    }
};
