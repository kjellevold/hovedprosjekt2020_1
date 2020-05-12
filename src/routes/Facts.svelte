
<script>
    import Fact from "./../components/Fact.svelte"
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"

    let factDB;

    onMount(() => {
        factDB = db.collection("factDB")
        factDB.onSnapshot(snap => {
            facts = snap.docs;
        })
    })

    let facts = []

</script>


<h1>Not so funfacts</h1>
<div id="gridFact">
    {#each facts as fact}
        <div id="fact">
           <Fact id={fact.id} data={fact.data()} />
        </div>
    {:else}
        <div>Loading...</div>
    {/each}
</div>

<style>
h1 {
    margin-left: 20px;
}
    
#gridFact {
	display: grid;
	grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
    gap: 1rem;
    width: 90%;
    margin: 0 auto;
}

#fact {
    border: dashed 0.3rem black;
    padding: 1rem;
}

</style>


