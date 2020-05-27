
<script>
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"
    import Artikkel from "./../components/Artikkel.svelte"
    import Post from './../components/Post.svelte'
    
    let artikler = []
    let artikkelDB

    onMount( () => {
        artikkelDB = db.collection("artikler")        
        artikkelDB.onSnapshot(snap => {
            artikler = snap.docs
        })
    })

    let img = ""
    let tile = ""
    let id = ""
    let clicked = false
    let infoArr = []
    /* Du får endre navn på variablene senere haha */
    const test = (info) => {
        infoArr = info
        clicked = true
    }

    const back = () => {
        clicked = false
    }
    /* nå må du ha en variabel som du lagrer artikkel.data() i. Den skal du sende til post */
</script>

   


{#if !clicked}
<h1>Nyeste artikler</h1>
<div id="artikkelGrid">
    {#each artikler as artikkel}
        <div on:click={()=>test(artikkel.data())} id="artikkel">
            <Artikkel data={artikkel.data()} /><!-- vil foreslå å sende hele objektet -->
        </div>
    {:else}
        <div>Loading...</div>
    {/each}
</div>
{/if}

{#if clicked}
    <p on:click={back}>Back</p>
    <!-- sp du kan egentlig sette den inn her sammen med Post -->
    <!-- også legge til en on click som kjører en funksjon som endrer på clicked variabelen -->
    <Post data={infoArr} />
{/if}

<style>
    #artikkelGrid {
        display: grid;
		grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
        width: 90%;
        margin: 0 auto;
    }

    #artikkel {
        height: 250px;
    }

    p {
        border: .5px solid black;
        border-radius: 10%;
        text-align: center;
        padding: 5px;
        width: 40px;
    }
</style>

