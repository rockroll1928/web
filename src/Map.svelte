<script>
  import InfoService from './services/InfoService';
  const infoService = new InfoService();
  let container;
  let map;
  let zoom = 12;
  let center = { lat: 57.696639517983165, lng: 11.828236342523105 };
  
  import { onMount } from "svelte";

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
  });

  $: infoService.get();
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
