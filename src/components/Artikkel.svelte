<script>
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"

    let html = []
    /* export let id /* så denne kan du også fjerne */ 
    export let data /* her henter du data, eller prop */
    console.log(data)
    let artikler
    let img = []

    onMount( () => {
        artikler = db.collection("artikler")
    })
    /* så derfor må test funksjonen ta imot e, og trenger derfor en param */
    /* så igjen for å se om du har fått dataen så logger jeg bare e */
    /* parametere kan være hva osm helst */
  

</script>
    <!-- på denne on:click så sender jeg en parameter eller argument. den sender jeg til test funksjonen-->
    <div id={data.id}><!-- da må du endre på denne -->
        <img src={data.img} alt="">    
        <h3>{data.title}</h3><!-- her henter du title fra prop -->
    </div>
    <!-- tror egentlig det eneste du trenger er å sende det som en prop -->
    <!-- dette vil ikke vises før clicked == true -->
    <!-- så eneste du trenger å gjøre er å bytte clicked til true -->
<style>
    div {
        width: 100%;
        height: 80%;
        margin: 10px;
    }

    img {
        width: 100%;
		height: 100%;
		overflow: hidden;
		object-fit: cover;
    }

    h3 {
        margin: 0;
		padding: 0;
		text-decoration: none;
    }

</style>

