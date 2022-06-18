<script>
  import { createEventDispatcher } from "svelte";
  import Drawer from "svelte-drawer-component";

  import RestroomButton from "../RestroomButton/RestroomButton.svelte";
  import ParkingButton from "../ParkingButton/ParkingButton.svelte";

  import Card from "./Card.svelte";
  import Locations from "./Locations.svelte";
  import GasstationButton from "../GasstationButton/GasstationButton.svelte";
  export let open = false;
  export let openParkingButton = false;
  const dispatch = createEventDispatcher();
  const openP = () => {
    openParkingButton = true;
    console.log(openParkingButton);
  };
</script>

<Drawer
  {open}
  size="50%"
  placement="right"
  on:clickAway={() => dispatch("on-drawer-close")}
>
  <div class="content">
    <RestroomButton />
    <div on:click={openP}>
      <ParkingButton />
    </div>
    <GasstationButton />
  </div>

  <Locations
    open={openParkingButton}
    on:clickAway={() => dispatch("on-drawer-close")}
  />
</Drawer>

<style>
  :global(.drawer .overlay) {
    background: unset !important;
  }

  :global(.drawer .panel) {
    background: transparent !important;
    width: unset !important;
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
    width: fit-content;
    justify-content: -end;
    padding: 3rem;
    gap: 1rem;
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
  }
</style>
