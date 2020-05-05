<script>
  import { Router, Link, Route } from "svelte-routing";
  import {auth, googleProvider} from "./firebase.js"
  import {authState} from "rxfire/auth"  
  import Home from "./routes/Home.svelte";
  import Blog from "./routes/Blog.svelte"
  import Goals from "./routes/Goals.svelte"

  export let url = "";

  /* let user;

  const unsubscribe = authState(auth).subscribe(u => user = u)

  const login = () => {
      auth.signInWithPopup(googleProvider)
  }

  const logout = () => {
      auth.signOut()
  } */
</script>

<Router url="{url}">
  <nav>
    <div id="header">
      <img to="/" id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
      <Link to="/">Sustainability Goals</Link>
      <img id="sdg" alt='sdg' src='./artikkelBilder/img/sdgWhite.png'>
    </div>
  <!-- {#if user} -->  
  <!-- {/if} -->
  </nav>
  
  <div>
  <!-- {#if user} -->
    <!-- <Route path="blog" component="{Blog}" />
    <Route path="Goals" component="{Goals}" /> -->
  <!-- {/if} -->
    <Route path="/"><Home /></Route>
  </div>
</Router>

<style>
	

</style>

