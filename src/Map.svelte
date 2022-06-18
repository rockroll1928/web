<script>
  let container;
  let map;
  let zoom = 12;
  let center = { lat: 57.696639517983165, lng: 11.828236342523105 };

  import { onMount } from "svelte";
  import { presentCenter, presentPosition } from "./components/Store/Stores.js";

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
    presentCenter.subscribe((pos) => {
      console.log("pos", pos);
      map.setCenter(pos);
    });
    google.maps.event.addListener(map, "click", function (event) {
      presentCenter.update(() => ({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }));
      alert(
        "Latitude: " +
          event.latLng.lat() +
          " " +
          ", longitude: " +
          event.latLng.lng()
      );
    });
  });
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
