<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";
  export let open = false;
  const dispatch = createEventDispatcher();
</script>

<Drawer
  {open}
  size="50%"
  placement="left"
  on:clickAway={() => dispatch("on-drawer-close")}
/>

<style>
  .panel {
    background-color: transparent;
  }
  .overlay {
    background-color: unset;
  }
  .close {
    display: block;
    margin-left: auto;
  }

  img {
    display: block;
    margin: 10px auto;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    max-width: 400px;
  }
</style>
