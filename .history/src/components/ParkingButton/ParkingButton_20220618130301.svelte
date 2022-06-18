<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
  export let text = "";
</script>

<button onClick={() => dispatch("open-parking-button")}>{text}</button>

<style>
  button {
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    top: 50%;
    padding: 3rem;
    background-color: blue;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    cursor: pointer;
  }
</style>
