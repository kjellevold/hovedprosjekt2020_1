<script>
    import {onMount} from "svelte"
    import {db} from "./../firebase.js"

    let html = []
    export let id
    export let data 
    let artikler
    let img = []

    onMount( () => {
        artikler = db.collection("artikler")
    })

    let artikkelSide = data.id

</script>

<div on:click={ () => artikkelSide } id={id}>
    <img src={data.img} alt="">    
    <h3>{data.title}</h3>
</div>

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

