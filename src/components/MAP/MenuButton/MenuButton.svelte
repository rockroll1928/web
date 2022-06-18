<script>
  import { createEventDispatcher } from "svelte";

  export let src = "";
  export let alt = "";

  let dispatch = createEventDispatcher();

</script>

<button on:click={() => dispatch("menu-button-click")}>
  <img src={src} alt={alt} />
</button>

<style>
  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  img{
    width: clamp(10px, 20vw, 50px);
  }
</style>
