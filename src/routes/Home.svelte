
<svelte:head>
	<title>Sustainability Goals</title>
</svelte:head>

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Tolv from './Tolv.svelte'

	let whatPage = 1

	/* import {auth, googleProvider} from "./../firebase.js"
    import {authState} from "rxfire/auth"   

    let user;

    const unsubscribe = authState(auth).subscribe(u => user = u)

    const login = () => {
        auth.signInWithPopup(googleProvider)
    }

    const logout = () => {
        auth.signOut()
    } */
</script>

<header>
    <!-- {#if user}
        <div id="user">
            <img id="imgProfil" src={user.photoURL} alt="meg"/>
            <button on:click={logout}>Logg ut</button>
        </div> -->
		<!-- <div id="header">
			<img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
			
			<img on:click={nesteSide} id="sdg" alt='sdg' src='./artikkelBilder/img/sdgWhite.png'>
		</div> -->
    <!-- {:else} -->
		<!-- <div id="header">
			<img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
        	<button id="logIn" on:click={login}>Logg inn</button>
			<h1 id="sustainability">Sustainability <br/> Goals</h1>
			<img id="sdg" alt='sdg' src='./artikkelBilder/img/sdgWhite.png'>
		</div> -->
    <!-- {/if} -->
</header>


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



	@media screen and (max-width: 400px) {
		
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

	/* #user {
        display: grid;
        grid-auto-flow: row;
        justify-content: end;
        align-items: center;
		gap: 1rem;
		height: 150px;
    }

    #imgProfil {
        width: 100px;
        border-radius: 50%;
	}
	
	button {
		display: block;
		max-width: 100px;
		float: right;
		margin-right: 20px;	
		margin-top: 20px;	
	}

	#logIn {
		display: block;
		float: right;
		height: 50px;
	} */

</style>
