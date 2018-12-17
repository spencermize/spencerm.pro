var mymap;
$(function() {
	$("#map").height($(window).height()-$("#g-navigation").height()-($("#map").parent().outerHeight(true)-$("#map").parent().height()));
	mymap = L.map('map').setView([41.148478, -85.475072],3);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.light',
		accessToken: 'pk.eyJ1Ijoic3BlbnN0ZXIiLCJhIjoiZ1lYS1FTSSJ9.yN4faV4G2nvq2VT05wCUcg'
	}).addTo(mymap);

	$.getJSON("https://spencerm.pro/travel?return-as=json", function( data ) {
		var country = $.parseJSON(data.header.metadata.france);
		var myStyle = {
			style: function(feature) {
			        switch (feature.properties.type) {
			            case 'Country': return {color: "#ff0000"};
			            case 'Democrat':   return {color: "#0000ff"};
			        }
			    }
		};
		L.geoJSON(country.features, {
    	style: myStyle
		}).addTo(mymap);
	})
});
