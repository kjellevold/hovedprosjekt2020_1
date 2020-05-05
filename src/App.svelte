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
      <img id="logo" alt='logo' src='./artikkelBilder/img/FN_hvit.png'>
      <Link to="/">Sustainability Goals</Link>
      <Link to="Goals">Bærekraftsmålet</Link>
      <Link to="blog">Blog</Link>
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
	/*        HEADER        */
	#header {
		height: 100px;
		margin: -10px;
    background-color: #6B98D0;
    color: white;
		display: block;
	}

	#logo {
    margin: 15px;
    margin-top: 20px;
		width: 8%;
		max-width: 500px;
	}

	/* #sustainability {
		color: white;
		font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
		font-size: 1.5rem;
		line-height: 100%;
		margin-left: 120px;
		margin-top: -70px;
	} */

	#sdg {
		width: 6%;
		float: right;
		margin: 10px;
		margin-top: -40px;
  }
  
  @media only screen and (max-width: 400px) {
    
      #header {
          height: 100px;
          margin: -10px;
          background-color: #6B98D0;
          display: block;
        }
    
        #logo {
          margin: 15px;
          margin-top: 55px;
          width: 10%;
          max-width: 500px;
        }
    
        /* #sustainability {
          color: white;
          font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
          font-size: 1rem;
          line-height: 100%;
          margin-left: 70px;
          margin-top: -45px;
        } */
    
        #sdg {
          width: 8%;
          float: right;
          margin: 10px;
          margin-top: -40px;
        }
    
  } 

</style>

