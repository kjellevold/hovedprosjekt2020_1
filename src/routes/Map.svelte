<script>
    import { onMount, setContext } from 'svelte'
    import { mapbox } from '../components/Mapbox.js'
    import key from './../components/Mapbox.js' 

    // set context here..
    setContext(key, {
        getMap: () => map
    })

    export let lat 
    export let lon 
    export let zoom

    let container
    let map

    onMount(() => {
        const link = document.createElement('link')
        link.rel = 'stylesheet'
        link.href = 'https://api.mapbox.com/styles/v1/kamillak/ck9a1njj30vfo1ionvfeofmxk.html?fresh=true&title=view&access_token=pk.eyJ1Ijoia2FtaWxsYWsiLCJhIjoiY2s1M2x1c2hvMGEwZDNvbXB2c3k4NGhuZCJ9.s7vgJP8G0F_DdDwUXtiRsQ'

        link.onload = () => {
            map = new mapbox.Map({
                container,
                style: 'mapbox://styles/kamillak/ck9a1njj30vfo1ionvfeofmxk',
                center: [lon, lat],
                zoom,
                duration: 10000,
            })
        }
    })


</script>

<div bind:this={container}>
    {#if map}
        <slot></slot>
    {/if}
</div>


<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>