<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  export let text = "";
</script>

<button on:click={() => dispatch("open-parking-button")}>{text}</button>

<style>
  button {
    position: absolute;
    z-index: 2;
    border-radius: 10%;
    top: 10%;
    right: 5%;
    padding: 2rem;
    background-color: blue;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
</style>
