<svelte:head>
	<title>Sustainability Goal 12</title>
</svelte:head>

<script>
    import Facts from './Facts.svelte'
    import Blog from './Blog.svelte'
    import Maalet from './Maalet.svelte'

    let whatPage = 1

</script>

{#if whatPage == 1}
    <div id="tolvHeader">
        <h1>12 Ansvarlig forbruk og produksjon</h1>
        <button on:click={ () => whatPage = 2 }>FunFacts</button>
        <button on:click={ () => whatPage = 3 }>Blog</button>
        <button on:click={ () => whatPage = 4 }>Målet</button>
    </div>

    <div id="container">
        <img id="bigImg" alt="forsideImg" src='./artikkelBilder/img/bilde2.jpg' />
    </div>
{/if}

{#if whatPage == 2}
    <Facts />
{/if}

{#if whatPage == 3}
    <Blog />
{/if}

{#if whatPage == 4}
    <Maalet />
{/if}


<style>
    /* @media screen and (max-width: 1300px) {

        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-columns: 3fr 1fr 1fr;
            
        }

        h1 {
            padding: 10px;
            padding-left: 20px;
            margin-top: 20px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            color: white;
            float: left;
            z-index: 2;
        }

        button {
            height: 50px;
            width: 70%;
            margin: 1%;
            margin-top: 30px;
            float: right;
            border: none;
            color: black;
            z-index: 2;
        }

         #container {
            margin: 0;
            margin-top: 20px;
            width: 1300px;
            height: 500px;
            display: block;
            position: relative;
            overflow: hidden;
            z-index: 1;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        img {
            border: none;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 60%;
        }

    }

    @media screen and (max-width: 400px) {
        #tolvHeader {
            position: absolute;
            display: grid;
            grid-template-rows: 7fr 1fr 1fr;
            width: 100%;
            height: 80%;
            text-align: center;
            justify-content: center;
            z-index: 2;
        }

        h1 {
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            
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
            width: 390px;
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
 */
</style>