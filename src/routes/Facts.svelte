
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

    #gridFact {
        display: grid;
    	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
        gap: 1rem;
        width: 70%;
        margin: 0 auto;
    }

    #fact {
        border: dashed 0.2rem #D08C25;
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
            border: dashed 0.3rem #D08C25;
            font-size: 1rem;
        }
    }


</style>


