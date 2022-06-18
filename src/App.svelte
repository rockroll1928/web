<script>
  import Map from "./Map.svelte";
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
{/if}
