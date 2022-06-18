<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";
import Card from "./Card.svelte";
  export let open = false;
  const dispatch = createEventDispatcher();
</script>

<Drawer
  {open}
  size="50%"
  placement="left"
  on:clickAway={() => dispatch("on-drawer-close")}>
  <Card title={"Bensin station"} body={"10-15 minuter"}></Card>
  <Card title={"Toalett station"} body={"20 minuter stress"}></Card>
  <Card title={"Mat station"} body={"äda maud"}></Card>
  <Card title={"Ricks station"} body={"Never gonna give you up"}></Card>
  </Drawer>

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
