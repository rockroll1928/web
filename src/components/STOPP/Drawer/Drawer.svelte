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
  $: choice = "";
  const dispatch = createEventDispatcher();
  const openP = (e) => {
    openParkingButton = true;
    console.log(openParkingButton);
    choice = e.target.closest("div").id
  };

</script>

<Drawer
  {open}
  size="50%"
  placement="right"
  on:clickAway={() => {
    // dispatch("on-drawer-close");
    openParkingButton = false;
  }}
>
  <div class="content">
    <div on:click={openP} id="restroom">
    <RestroomButton />
  </div>
    <div on:click={openP} id="parking">
      <ParkingButton />
    </div>
    <div on:click={openP} id="gasstation">
    <GasstationButton />
  </div>
  </div>
</Drawer>

<Locations type={choice}
  open={openParkingButton}
/>

<style>
  :global(.drawer .overlay) {
    background: unset !important;
  }

  :global(.drawer .panel) {
    background: transparent !important;
    width: unset !important;
    display:flex;
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
    padding: 3rem;
    gap: 1rem;
    justify-content: center;
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
