<script>
    import { createEventDispatcher } from 'svelte';	
    const dispatch = createEventDispatcher();
	

    export let logo;
    export let text;
    export let iconType;

</script>

<button on:click={() => dispatch("report-button-click", {iconType})}>
    <img src="/assets/reports/{logo}.svg" alt={logo}/>
    <h3>{text}</h3>
</button>

<style>
    button{ 
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
    img {
        padding: 10px;
        width: 120px;
    }
</style>