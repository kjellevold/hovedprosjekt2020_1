<svelte:head>
	<title>Sustainability Goal 12</title>
</svelte:head>

<script>
  import { Router, Link, Route } from "svelte-routing"
  import {auth, googleProvider} from "./firebase.js"
  import {authState} from "rxfire/auth"  
  import { user } from './components/_store.js'
  import { createEventDispatcher } from "svelte"
  import Home from "./routes/Home.svelte"
  import Blog from "./routes/Blog.svelte"
  import Facts from "./routes/Facts.svelte"
  import Tolv from "./routes/Tolv.svelte"
  import Maalet from './routes/Maalet.svelte'
  import Fabric from './routes/Fabric.svelte'
  import { fade, fly, slide } from 'svelte/transition';
  
  let visible = true

  export let url = ""

  const unsubscribe = authState(auth).subscribe(u => user.set(u))
  const login = () => {
      auth.signInWithPopup(googleProvider)
  }
  const logout = () => {
      auth.signOut()
  }

  let whatPage = 1


</script>


<Router url="{url}">

{#if $user}
        <div id="header">
        
            <img id="logo" alt='logo' src='./artikkelBilder/img/standard_fn.png'>
            <h1 on:click={ () => whatPage = 1}>12 Ansvarlig forbruk og produksjon</h1>
                <div id="user">
                    <img id="imgProfil" src={$user.photoURL} alt="meg"/>
                    <button id="logOutBtn" on:click={logout}>Logg ut</button>
                </div>
        </div>
    {:else}

        <div id="header">
            <img id="logo" alt='logo' src='./artikkelBilder/img/standard_fn.png'>
            <h1 on:click={ () => whatPage = 1}>12 Ansvarlig forbruk og produksjon</h1>
            <div id="noUser">
              <button id="logInBtn" on:click={login}>Logg inn</button>
            </div>
        </div>
    {/if}

<main>
   {#if whatPage == 1}
   <Tolv />
        <div id="tolvHeader"> <!-- KNAPPENE SKAL FADE INN ETTER 5 SEK -->
            <button on:click={ () => whatPage = 2 } transition:fade>FunFacts</button>
            <button on:click={ () => whatPage = 3 } transition:fade>Blog</button>
            <button on:click={ () => whatPage = 4 } transition:fade>Målet</button>
            <button on:click={ () => whatPage = 5 } transition:fade>Kart</button>
        </div>
<!-- HUSK Å ENDRE autoplay=0 TIL 1 - OG allow="no" TIL allow="autoplay" -->
        <div id="videoBg" style="padding:56.25% 0 0 0;position:relative;">
          <iframe src="https://player.vimeo.com/video/397563603?autoplay=0&loop=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:150%;height:150%;" frameborder="0" allow="no;" allowfullscreen ></iframe>
        </div><script src="https://player.vimeo.com/api/player.js"></script>
    {/if}

    {#if whatPage == 2}
        <Facts />
    {/if}

    {#if whatPage == 3}
        <Blog />
    {/if}

    {#if whatPage == 4}
        <Maalet />
    {/if}

    {#if whatPage == 5}
        <Fabric />
    {/if}

</main>

</Router>
