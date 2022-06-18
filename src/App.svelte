<script>
  import Map from "./Map.svelte";
  import ParkingButton from "../src/components/ParkingButton/ParkingButton.svelte";
  import ParkingList from "../src/components/ParkingList/ParkingList.svelte";
  import MenuButton from "../src/components/MenuButton/MenuButton.svelte";
  import ParkingModal from "./components/ParkingButton/Modal.svelte";
  import Modal from "./components/ParkingButton/Modal.svelte";
  export let ready;
  let text = "P";
  $: isOpen = false;
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
  <ParkingModal on:request-close={() => (isOpen = false)} {isOpen} />
  <Modal on:request-close={() => (isOpen = false)} {isOpen} />
  <MenuButton />
  <ParkingList />
{/if}
