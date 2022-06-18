<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
export let isOpen = false;
</script>



{#if isOpen}
<div class="wrapper" on:click={() => dispatch("request-close")}>
    <div class="modal">

    </div>
</div>
{/if}

<style>
    .wrapper{
        z-index: 9999;
        position: absolute;
        left:0;
        top:0;
        display:flex;
        height: 100vh;
        width: 100vw;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,.3);
    }

    .modal{
        z-index: 9999;
        height: 80vh;
        width: 80vw;
        background-color: rgba(255,255,255,.95);
    }
</style>