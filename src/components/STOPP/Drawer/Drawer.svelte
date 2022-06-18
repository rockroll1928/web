<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";
  import RestroomButton from "../RestroomButton/RestroomButton.svelte";

  import Card from "./Card.svelte";
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
  placement="left" on:clickAway={() => dispatch("on-drawer-close")}>
  <Card title={"Bensin station"} body={"10-15 minuter"} />
  <Card title={"Toalett station"} body={"20 minuter stress"} />
  <Card title={"Mat station"} body={"äda maud"} />
  <Card title={"Ricks station"} body={"Never gonna give you up"} />
</Drawer>

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
</style>
