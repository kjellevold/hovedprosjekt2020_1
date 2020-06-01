<script>
	export let data

	console.log(data.html)

</script>


<main>
	<div id="artikkel">
		<h2>{data.title}</h2>
		{@html data.html}
	</div>
</main>


<style>

	


</style>