<script>
    
    import post from './_post.js'

    let html = []
    export let data
    let artikler
    let img = []
  

</script>
    <div id={data.id}>
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

