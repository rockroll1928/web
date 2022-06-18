<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";
  import RestroomButton from "../RestroomButton/RestroomButton.svelte";

  import Card from "./Card.svelte";
  import Locations from "./Locations.svelte";
  export let open = false;
  const dispatch = createEventDispatcher();
</script>

<Drawer
  {open}
  size="50%"
  placement="right"
  on:clickAway={() => dispatch("on-drawer-close")}
>
  <div class="content">
    <RestroomButton />
  </div>
</Drawer>

<Locations {open} on:clickAway={() => dispatch("on-drawer-close")} />

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
  .content {
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
  }

  .items {
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    right: 50%;
    left: 50%;
    min-width: 50vw;
  }
</style>
