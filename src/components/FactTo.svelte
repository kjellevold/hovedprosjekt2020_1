

<script>
    import {onMount} from "svelte" 
    import {db} from "./../firebase.js"

    let fact = []
    export let data
    let factDB

    onMount( () => {
        factDB = db.collection("factDB")
    })


</script>

    <div>
        <div id="theFact">{data.fact}</div>
    </div>

<style>
    


</style>
