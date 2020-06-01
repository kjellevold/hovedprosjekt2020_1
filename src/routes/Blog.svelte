
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
    const test = (info) => {
        infoArr = info
        clicked = true
    }

    const back = () => {
        clicked = false
    }
    </script>

   


{#if !clicked}
<h2>Nyeste artikler</h2>
<div id="artikkelGrid">
    {#each artikler as artikkel}
        <div on:click={()=>test(artikkel.data())} id="artikkel">
            <Artikkel data={artikkel.data()} />
        </div>
    {:else}
        <div>Loading...</div>
    {/each}
</div>
{/if}

{#if clicked}
    <div id="backBtn">
        <p on:click={back}> - Back</p>
    </div>
    <Post data={infoArr} />
{/if}

<style>
   
    #artikkelGrid {
        display: grid;
		grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
        width: 90%;
        margin-top: 10px;
        margin: 0 auto;
    }

    #artikkel {
        height: 250px;
    }

    #backBtn {
        position: relative;
        margin: 5px;
        height: 20px;
    }

    h2 {
        width: 200px;
    }

    p {
        position: relative;
        top: -30px;
        left: 2px;
        text-align: center;
        padding: 5px;
        width: 50px;
        margin: 20px;
    }

@media ( min-width: 600px ) {
    #artikkelGrid {
        display: grid;
        grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        width: 70%;
    }
    
    h2 {
            font-size: 2rem;
            width: 15rem;
        }
}

</style>

