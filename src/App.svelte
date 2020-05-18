<script>
  import { Router, Link, Route } from "svelte-routing"
  import {auth, googleProvider} from "./firebase.js"
  import {authState} from "rxfire/auth"  
  import Home from "./routes/Home.svelte"
  import Blog from "./routes/Blog.svelte"
  import Facts from "./routes/Facts.svelte"
  import { user } from './components/_store.js'

  export let url = "";

  const unsubscribe = authState(auth).subscribe(u => user.set(u))
  const login = () => {
    auth.signInWithPopup(googleProvider)
  }
  const logout = () => {
    auth.signOut()
  }

</script>


<Router url="{url}">
  <nav>
    {#if $user}
      <div id="header">
        <img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
        <Link to="Home">Sustainability Goals</Link>
          <div id="user">
            <img id="imgProfil" src={$user.photoURL} alt="meg"/>
            <button id="logOut" on:click={logout}>Logg ut</button>
          </div>
      </div>
    {:else}
      <div id="header">
        <img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
        <Link to="Home">Sustainability Goals</Link>
        <button id="logIn" on:click={login}>Logg inn</button>
		  </div>
    {/if}
  </nav>
  
  <div>
    <Route path="/"><Home /></Route>
  </div>
</Router>