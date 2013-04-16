var fadeOutValeur = 0.25;
var fadeInValeur = 0.85;

var offsetW = '75%';
var contextW = '#histoire';


$(document).ready(function() {
	$('h1').css('opacity',fadeOutValeur);
	$('h2').css('opacity',fadeOutValeur);
	$('p').css('opacity',fadeOutValeur);

	
	//jQuery Waypoints: http://imakewebthings.com/jquery-waypoints/#documentation
	$('#histoire p').waypoint(function(e, direction) {
	
		$(this).fadeTo('slow', fadeInValeur);
	
		$(this).children('.lettrine').animate({
    		marginRight: '10px',
    		paddingLeft: '30px',
    		paddingBottom: '6px',
    		width: '66px',
    		fontSize: '500%'
    	}, 500 );
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	
	$('#histoire h1').waypoint(function(e, direction) {
		$(this).fadeTo('slow', fadeInValeur);
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('#histoire h2').waypoint(function(e, direction) {
		$(this).fadeTo('slow', fadeInValeur);
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	
	$('.place1').waypoint(function(e, direction) {
		GoogleMaps('rivière Gatineau');
		
		}, {
			offset: offsetW,
			context: '#histoire'
	});
	
	$('.place2').waypoint(function(e, direction) {
		GoogleMaps('rivière des Outaouais');
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place3').waypoint(function(e, direction) {
		GoogleMaps('Montréal');
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place4').waypoint(function(e, direction) {
		GoogleMaps('Basilique Notre-Dame,Montreal',13);
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place5').waypoint(function(e, direction) {
		GoogleMaps('Lavaltrie,QC');
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place6').waypoint(function(e, direction) {
		GoogleMaps('Lavaltrie,QC',13);
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place7').waypoint(function(e, direction) {
		GoogleMaps('Contrecoeur,QC');
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place8').waypoint(function(e, direction) {
		GoogleMaps('Contrecoeur,QC',13);
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	$('.place9').waypoint(function(e, direction) {
		GoogleMaps('Beloeil,QC');
		
		}, {
			offset: offsetW,
			context: contextW
	});
	
	
});


function GoogleMaps(lieu,vZoom) {
	if(navigator.appName != 'Microsoft Internet Explorer')
		{$('#gMaps_canvas').css('opacity',0);}
	afficheGMaps(lieu,vZoom);
	if(navigator.appName != 'Microsoft Internet Explorer')
		{$('#gMaps_canvas').fadeTo(666, 1);}
	
}


function afficheGMaps(lieu,vZoom) {

	if(!vZoom) {var vZoom = 10;}
	
		
	//Source: http://code.google.com/apis/maps/documentation/javascript/services.html
	var geocoder = new google.maps.Geocoder();
	
	geocoder.geocode( { 'address': lieu}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
      	
      	//Trouve le lieu et dessine la carte
       	var locString = results[0].geometry.location.toString();
       	locString = locString.substring(1,(locString.length)-1);
       	var lat = locString.split(', ')[0];
       	var lng = locString.split(', ')[1];
       	             
       	//Va chercher les coordonnées
		var latlng = new google.maps.LatLng(parseFloat(lat),parseFloat(lng));
		
		//Paramètre la carte
    	var gmOptions = {
      		zoom: vZoom,
      		center: latlng,
      		mapTypeId: google.maps.MapTypeId.ROADMAP,
      		navigationControl: false,
      		mapTypeControl: false,
      		scaleControl: false,
    		streetViewControl: false
    	};
    
    	//Dessine la carte
    	var map = new google.maps.Map(document.getElementById('gMaps_canvas'),gmOptions);
    	
    	  	  
  		//Style de la carte
  		//http://code.google.com/apis/maps/documentation/javascript/maptypes.html#StyledMaps
  		var carteStyle = [
  {
  	featureType: "all",
  	elementType: "all",
      stylers: [
        { visibility: "simplified" },
        { invert_lightness: true },
        { hue: "#000099" }
  	    ]
    },{
      featureType: "administrative",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "road",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
    	featureType: "transit",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "poi",
      elementType: "all",
      stylers: [
        { visibility: "off" }
      ]
    },{
      featureType: "all",
      elementType: "all",
      stylers: [	
	  		    ]
	  		  }
	  		];
	  	
	  	var carteStyleOptions = {
	    	 name: 'chasseGalerie'
	  	}
		
		  var chasseGalerieStyle = new google.maps.StyledMapType(carteStyle, carteStyleOptions);
		map.mapTypes.set('chasseGalerie', chasseGalerieStyle);
		map.setMapTypeId('chasseGalerie');
		
		document.getElementById('gMaps_canvas').style.visibility = 'visible';
	
		} else {alert("Impossible de charger Google Maps: " + status);}
    });
    
}