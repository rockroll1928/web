<script>
    import {onMount} from 'svelte'
    let temp = "jan karlsson"
    onMount(() => {
        console.log('started')
    })
</script>
<p>this is the app {temp}</p>