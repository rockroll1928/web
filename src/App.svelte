<script>
  import Map from "./Map.svelte";
  import ParkingButton from "../src/components/ParkingButton/ParkingButton.svelte";
  import ParkingList from "../src/components/ParkingList/ParkingList.svelte";
  import MenuButton from "../src/components/MenuButton/MenuButton.svelte";
  export let ready;
  let text = "P";
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
  <ParkingButton {text} />
  <MenuButton />
{/if}
