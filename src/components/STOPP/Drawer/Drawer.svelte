<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";
  export let open = false;
  const dispatch = createEventDispatcher();
</script>

<Drawer
  {open}
  size="50%"
  placement="right"
  on:clickAway={() => dispatch("on-drawer-close")}
/>

<style>
  :global(.drawer .overlay) {
    background: unset !important;
  }

  :global(.drawer .panel) {
    background: transparent !important;
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
