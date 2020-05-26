<script>
/* så må vi først exporte propen */
export let data
/* så sjekke for sikkerhetskyld at du får dataen */
console.log(data)
</script>

<!-- så nå er det bare å legge ut dataen som du vil -->
<div id="artikkel">
	<h1>{data.title}</h1>
	{@html data.html}<!-- sånn :) -->
</div>


<style>
	#artikkel {
		max-width: 60%;
	}


</style>