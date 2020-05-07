<svelte:head>
	<title>Sustainability Goal 12</title>
</svelte:head>

<script>
    import Goals from './Goals.svelte'
    import Blog from './Blog.svelte'

</script>


<div id="tolvHeader">
    <h1>12 Ansvarlig forbruk og produksjon</h1>
    <button to="Goals">Bærekraftsmålet</button>
    <button to="blog">Blog</button>
</div>

<div id="homepage">
    <img id="bigImg" alt="forsideImg" src='./artikkelBilder/bilde1.jpg' />
</div>



<style>
    #tolvHeader {
        position: absolute;
        display: grid;
        grid-template-columns: 3fr 1fr 1fr;
        width: 100%;
    }

    h1 {
        padding: 10px;
        padding-left: 20px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        /* color: #D08C25; */
        color: white;
        float: left;
    }

    button {
        max-height: 150px;
        width: 70%;
        margin: 1%;
        margin-top: auto;
        margin-bottom: auto;
        float: right;
        border: none;
        color: black;
    }

    #homepage {
        display: block;
    }

    img {
        width: 98%;
        border: 10px solid white;
        margin-top: 1%;
    }

    @media only screen and (max-width: 400px) {
        img {
            min-height: 100%;
        }

    }

</style>