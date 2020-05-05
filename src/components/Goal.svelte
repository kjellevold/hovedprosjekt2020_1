

<script>
    import {onMount} from "svelte" 
    import {db} from "./../firebase.js"

    let fact = []
    export let id
    export let data
    let factDB

    onMount( () => {
        factDB = db.collection("factDB")
        
    })

    // Legg til fakta
    const addFact = () => {
        factDB.doc(id).set({
            fact: fact
        })
        
    }

    // endre fakta
    let editmode = false

    const toggleEditMode = () => {
        editmode = !editmode
    }

    const updateFact = () => {
        const fact = factDB.doc(id)
        fact.update({
            fact: fact
        })
    }

    // slett fakta
    const deleteFact = () => {
        const fact = factDB.doc(id)
        fact.delete()
    }

</script>

{#if editmode}
    <div>
        <input bind:value={data.fact} placeholder="Write a fact">           
        <button on:click={toggleEditMode}>Save</button>
        <button on:click={deleteFact}>Delete</button>
    </div>
{:else}
    <div>
        <div>{data.fact}</div>
        <button on:click={toggleEditMode}>Edit</button>
        <button on:click={deleteFact}>Delete</button>
    </div>
{/if}

