

<script>
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"
    import Artikkel from "./../components/Artikkel.svelte"
    
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

</script>

  
<h1>Nyeste artikler</h1>
<!-- <Artikkel img={artikler.data().img} /> -->

<div id="artikkelGrid">
    {#each artikler as artikkel}
        <div id="artikkel">
            <Artikkel id={artikkel.id} data={artikkel.data()} />
        </div>
    {:else}
        <div>Loading...</div>
    {/each}
</div>


<style>
    #artikkelGrid {
        display: grid;
		grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
		gap: 1rem;
    }

    #artikkel {
        height: 70%;

    }

</style>

