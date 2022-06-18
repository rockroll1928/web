<script>
  import Map from "./Map.svelte";
  import ParkingButton from "./components/STOPP/MenuButton/ParkingButton/ParkingButton.svelte";
  import ParkingList from "../src/components/ParkingList/ParkingList.svelte";
  import MenuButton from "./components/STOPP/MenuButton/MenuButton.svelte";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";
  import Modal from "./components/STOPP/MenuButton/ParkingButton/Modal.svelte";
  import RestroomButton from "./components/STOPP/RestroomButton/RestroomButton.svelte";
  import StopptoggleButton from "./components/STOPP/StopptoggleButton/StopptoggleButton.svelte";
  export let ready;
</script>

<svelte:head>
  <script
    defer
    async
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_u8plRTaYOY_v9bARZwhowD00cLqz-ag&callback=initMap">
  </script>
</svelte:head>

{#if ready}
  <Map />
  <ParkingButton {text} on:open-parking-button={() => (isOpen = true)} />
  <Modal on:request-close={() => (isOpen = false)} {isOpen} />
  <RestroomButton />
  <StopptoggleButton />
  <MenuButton />
  <Drawer />
{/if}
