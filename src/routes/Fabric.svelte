<script>
	import Map from '../components/Map.svelte';
	import MapMarker from '../components/MapMarker.svelte';
</script>

<p>Her ligger noen av tekstilfabrikkene  </p>

<div id="mapDiv">
	<Map lat={23.260441} lon={87.026937} zoom={1.5}>
		<MapMarker lat={26.765274} lon={75.833131} label="Fitpack Textile Mills Limited"/>
		<MapMarker lat={23.695467} lon={90.412947} label="Rana Plaza, Dhaka in Bangladesh"/>
		<MapMarker lat={22.337112} lon={114.150133} label="H&A Garment Factory Limited"/>
		<MapMarker lat={24.840691} lon={67.132809} label="Bonanza Garment Factory"/>
		<MapMarker lat={12.868071} lon={74.855369} label="Bhola Apartment (Sowkar Textiles Factory)"/>
		<MapMarker lat={10.877230} lon={106.589395} label="Garment Factory Clothing Manufacturer Textile Company - Gold Garment G&G"/>
		<MapMarker lat={5.328948} lon={100.483226} label="New Starlight Garment Factory"/>
	</Map>
</div>

<style>
	p {
		width: 300px;
		margin-left: 3px;
	}
	#mapDiv {
		width: 50%;
		height: 50%;
	}

</style>