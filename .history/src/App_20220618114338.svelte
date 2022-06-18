<script>
  import Map from "./Map.svelte";
  import ParkingButton from "./components/ParkingButton";
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
{/if}
