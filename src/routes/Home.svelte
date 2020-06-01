
<svelte:head>
	<title>Sustainability Goals</title>
</svelte:head>

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Tolv from './Tolv.svelte'

	let whatPage = 1

	import {auth, googleProvider} from "./../firebase.js"
    import {authState} from "rxfire/auth"   

    
</script>



{#if whatPage == 1}

	<div id="main">
		<img id="susEarth" alt="susLogo" src='./artikkelBilder/img/sdgsEarth1.png' />
		<img id="susGoals" alt="susLogo" src='./artikkelBilder/img/sdgsGoals1.png' />
		<img on:click={ () => whatPage = 2 } id="susTolv" alt="susLogo" src='./artikkelBilder/img/sdgsTolv.png' />
	</div>
{/if}

{#if whatPage == 2 }
	<Tolv />
{/if}


<style>

/* @media only screen and (max-width: 400px) {
	
} */
@media screen and (max-width: 400px) {
	div {
		position: absolute;
		margin: 0 auto;
		display: grid;
		grid-template-rows: 1fr 3fr;
		overflow: hidden;
	}

	#main {
		height: 80%;
	}

	img {
		width: 35%;
	}

	#susGoals {
		margin-left: auto;
		margin-right: auto;
		margin-top: -35%;
		opacity: 30%;
		z-index: 1;
	}

	#susEarth {
		margin-left: auto;
		margin-right: auto;
		margin-top: 2%;
		z-index: 1;
	}

	#susTolv {
		position: absolute;
		width: 9%;
		margin-left: 33%;
		margin-top: 22.5%;
		z-index: 2;
	}



	
		
		#main {
			height: 80%;
		}

		img {
			width: 80%;
		}

		#susGoals {
			z-index: 1;
			margin-left: auto;
			margin-right: auto;
			margin-top: -80%;
		}

		#susEarth {
			z-index: 1;
			margin-left: auto;
			margin-right: auto;
			margin-top: 30%;
		}

		#susTolv {
			z-index: 2;
			width: 20%;
			margin-left: 11%;
			margin-top: 78%;
		}
		
	}

	

</style>
