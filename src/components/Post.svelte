<script>
export let data

</script>


<main>
	<div id="artikkel">
		<h1>{data.title}</h1>
		{@html data.html}
	</div>
</main>


<style>

	main {
		max-width: 90%;
		margin: 5px;
		justify-content: center;
	}

	


</style>