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
		var locations = data.header.metadata.locations.split(",");
		for (entity of locations) {
			$.getJSON("https://spencerm.pro/user/assets/"+entity+".json", function( data ) {
					L.geoJSON(data, {style: function(data) {
							switch (data.properties.class) {
								case 'visited': return {color: "#095472",fillColor:"#095472",fillOpacity:.5};
								default: return {color:"#095472",fillColor:"#424753"};
							}
					}}).addTo(mymap);
			});
		}
	})
});
