<svelte:head>
	<title>Sustainability Goal 12</title>
</svelte:head>

<script>
    import { user } from '../components/_store.js'
    import { Router, Link, Route, navigate } from "svelte-routing"
    import {auth, googleProvider} from "../firebase.js"
    import {authState} from "rxfire/auth"  
    import Facts from './Facts.svelte'
    import Blog from './Blog.svelte'
    import Maalet from './Maalet.svelte'
    import Fabric from './Fabric.svelte'


    const unsubscribe = authState(auth).subscribe(u => user.set(u))
    const login = () => {
        auth.signInWithPopup(googleProvider)
    }
    const logout = () => {
        auth.signOut()
    }

    let whatPage = 1


    /* let time = 0
    let volume = 0
    let duration;
    let paused = true
    let showControls = true
    let showControlsTimeout
    let showTmg = false
    let imgSrc */

   

</script>
<main>


{#if $user}
    <div id="header">
        <img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
        <Link to="/">12 Ansvarlig forbruk og produksjon</Link>
            <div id="user">
                <img id="imgProfil" src={$user.photoURL} alt="meg"/>
                <button id="logOut" on:click={logout}>Logg ut</button>
            </div>
    </div>
{:else}
    <div id="header">
        <img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
        <Link to="/">12 Ansvarlig forbruk og produksjon</Link>
        <button id="logIn" on:click={login}>Logg inn</button>
    </div>
{/if}

{#if whatPage == 1}
    <div id="tolvHeader">
        <!-- <h1>12 Ansvarlig forbruk og produksjon</h1> -->
        <button on:click={ () => whatPage = 2 }>FunFacts</button>
        <button on:click={ () => whatPage = 3 }>Blog</button>
        <button on:click={ () => whatPage = 4 }>Målet</button>
        <button on:click={ () => whatPage = 5 }>Kart</button>
    </div>


    <div id="videoBg" style="padding:56.25% 0 0 0;position:relative;">
        <iframe src="https://player.vimeo.com/video/397563603?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" ></iframe>
    </div><script src="https://player.vimeo.com/api/player.js"></script>
{/if}

</main>

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


<style>

    main {
        background-color: rgb(53, 53, 53);

    }

    div {
        position: relative;
    }

   
    @media screen and (max-width: 2000px) {

        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            margin-left: 5%;
        }

        button {
            float: right;
            border: none;
            color: black;
            z-index: 2;
            height: 50px;
            width: 100px;
            margin-left: 10px;
            margin-right: 10px;
            margin-top: 40px;
            border: none;
            float: end;

        }

        iframe {
            position: relative;
            top: -30px;
        }

        /*  #container {
            margin: 0;
            margin-top: 20px;
            width: 1300px;
            height: 500px;
            display: block;
            position: relative;
            overflow: hidden;
            z-index: 1;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 60%;
        } */

    }

    @media screen and (max-width: 400px) {
        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-rows: 7fr 1fr 1fr;
            width: 100%;
            height: 80%;
            text-align: center;
            justify-content: center;
            z-index: 2;
        }

        button {
            height: 50px;
            width: 65%;
            margin-left: auto;
            margin-right: auto;
            border: none;
            float: end;
        }

        /* #container {
            margin: 0;
            width: 390px;
            height: 700px;
            display: block;
            position: relative;
            overflow: hidden;
            z-index: 1;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            height: 100%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 60%;
        } */

    }

</style>