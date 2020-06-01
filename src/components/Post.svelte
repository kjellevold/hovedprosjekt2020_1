<script>
export let data

</script>


<main>
	<div id="artikkel">
		<h2>{data.title}</h2>
		{@html data.html}
	</div>
</main>


<style>

	main {
		max-width: 90%;
		margin: 5px;
		justify-content: center;
	}

	h2 {
		color: black;
		font-size: 3rem;
	}

@media ( min-width: 600px ) {
	main {
		max-width: 70%;
		margin: 2rem auto;
	}
}
	


</style>