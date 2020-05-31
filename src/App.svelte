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
  import { fade, fly } from 'svelte/transition';
  
  let visible = true;


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

    {#if whatPage == 1}
        <div id="tolvHeader">
            <button on:click={ () => whatPage = 2 } transition:fade>FunFacts</button>
            <button on:click={ () => whatPage = 3 } transition:fade>Blog</button>
            <button on:click={ () => whatPage = 4 } transition:fade>Målet</button>
            <button on:click={ () => whatPage = 5 } transition:fade>Kart</button>
        </div>

        <div id="videoBg" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/397563603?autoplay=0&loop=1&color=ffffff&title=0&byline=0&portrait=0" width="711" height="400" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>   </div>

        <!-- <div id="videoBg" style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/397563603?autoplay=0&loop=0&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="no;" allowfullscreen ></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> -->
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

  <div>
    <Route path="/"><Tolv /></Route>
  </div>


</Router>

<style>

button {
    margin-left: -4px;
  }
   
    /* @media screen and (max-width: 2000px) {

        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            margin-left: 5%;
            right: 0;
            bottom: 0;
            width: 80%;
            align-items: center;
        }

        button {
          border: none;
          background-color: #D08C25;
          color: black;
          z-index: 2;
          height: 50px;
          width: 100px;
          margin-left: 10px;
          margin-right: 10px;
          margin-top: 40px;

        }

        iframe {
          position: absolute;
          top: -30px;
        }
 
       #header > #logIn {
          position: relative;
          z-index: 3;
          padding: 3px;
       }

    } */

</style>