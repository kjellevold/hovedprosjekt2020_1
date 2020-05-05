
<svelte:head>
	<title>Sustainability Goals</title>
</svelte:head>

<script>
	import { Router, Link, Route } from "svelte-routing";
	import Blog from "./Blog.svelte" 
	import Tolv from './Tolv.svelte'

	const nesteSide = () => {
		Tolv
	}

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
	<button to="Goals">Bærekraftsmålet</button>
    <button to="blog">Blog</button>
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
<main>
	<div id="main">
		<img on:click={nesteSide} id="susEarth" alt="susLogo" src='./artikkelBilder/img/sdgsEarth1.png' />
		<img id="susGoals" alt="susLogo" src='./artikkelBilder/img/sdgsGoals1.png' />
		<img id="susTolv" alt="susLogo" src='./artikkelBilder/img/sdgsTolv.png' />
	</div>
</main>


<style>
	div {
		
		margin: 0 auto;
		display: grid;
		grid-template-rows: 1fr 3fr;
		overflow: hidden;
	}

	

	#main {
		height: 80%;
	}

	img {
		max-width: 100%;
	}

	#susGoals {
		opacity: 30%;
		width: 48%;
		margin-top: -48%;
		margin-left: auto;
		margin-right: auto;
	}

	#susEarth {
		width: 48%;
		margin-top: -2%;
		margin-left: auto;
		margin-right: auto;
	}

	#susTolv {
		width: 48%;
		margin-top: -186%;
		margin-left: auto;
		margin-right: auto;
	}



	@media only screen and (max-width: 400px) {
		
		#main {
			height: 80%;
		}

		img {
			max-width: 100%;
			
		}

		#susGoals {
			width: 100%;
			margin-top: -100%;
		}

		#susEarth {
			width: 100%;
			margin-top: 20%;
		}
		#susTolv {
			width: 100%;
			margin-top: -460%;
		
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
