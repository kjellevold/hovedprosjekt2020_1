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

<div id="container">
    <img id="bigImg" alt="forsideImg" src='./artikkelBilder/img/bilde2.jpg' />
</div>



<style>
    @media screen and (max-width: 1300px) {

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
            color: white;
            float: left;
        }

        button {
            height: 150px;
            width: 70%;
            margin: 1%;
            margin-top: auto;
            margin-bottom: auto;
            float: right;
            border: none;
            color: black;
        }

        #container {
            display: block;
        }

        img {
            width: 98%;
            border: 10px solid white;
            margin-top: 1%;
        }

    }

    @media screen and (max-width: 400px) {
        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-rows: 7fr 1fr 1fr;
            width: 100%;
            text-align: center;
            justify-content: center;
            z-index: 2;
            height: 80%;
        }

        h1 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            /* color: #D08C25; */
            color: black;
            padding: 10px;
            margin-bottom: 30px;
        }

        button {
            height: 50px;
            width: 65%;
            margin-left: auto;
            margin-right: auto;
            border: none;
            float: end;
        }

        #container {
            margin: 0;
            width: 350px;
            height: 700px;
            display: block;
            position: relative;
            overflow: hidden;
            z-index: 1;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            height: 100%;
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 60%;
        }

    }

</style>