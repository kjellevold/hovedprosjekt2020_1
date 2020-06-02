<script>

	export let data

</script>

	<div id="artikkel">
		<h2>{data.title}</h2>
		{@html data.html}
	</div>

<style>

	#artikkel {
		max-width: 70%;
		margin: 0 auto 10rem auto;
	}

	#artikkel :global(img) {
		max-width: 110%;
		margin: 0 auto;
	}



</style>