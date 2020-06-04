
<script>
    import Fact from "./../components/Fact.svelte"
    import FactTo from "./../components/FactTo.svelte"
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"
    import {user} from "./../components/_store.js"
   

    let factDB;

    onMount(() => {
        factDB = db.collection("factDB")
        factDB.onSnapshot(snap => {
            facts = snap.docs;
        })
    })

    let facts = []
    
</script>


<h2>Not so funfacts</h2>
<div id="imgBox">
    <img id="bgImg" src="./artikkelBilder/bg1.jpg" alt="bgimg">
</div>

<div id="gridFact">
    {#if $user}

        {#each facts as fact}
            <div id="fact">
                <Fact id={fact.id} data={fact.data()} />
            </div>
        {:else}
            <div>Loading...</div>
        {/each}

    {:else}

        {#each facts as fact}
            <div id="fact">
                <FactTo id={fact.id} data={fact.data()} />
            </div>
        {:else}
            <div>Loading...</div>
        {/each}
        
    {/if}
</div>



<style>
    h2 {
        width: 150px;
        margin-left: 20px;
    }

    #imgBox {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1;
        overflow: hidden;
    }

    #gridFact {
        display: grid;
    	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
        width: 70%;
        margin: 0 auto;
        position: relative;
        z-index: 3;
    }

    #fact {
        background-color: rgba(255, 255, 255, 0.7);
        padding: 1rem;
    }

    @media (min-width: 1100px) {
        h2 {
            font-size: 2rem;
            width: 15rem;
        }

        #gridFact {
            display: grid;
            grid-template-columns: repeat( auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }

        #fact {
            background-color: rgba(255, 255, 255, 0.7);
            font-size: 1rem;
        }
    }


</style>


