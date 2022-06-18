<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import { currentLocation } from "./components/Store/Stores.js";

  const infoService = new InfoService();
  let container;
  /**
   * @type {google.maps.Map}
   */
  let map;
  let zoom = 15;
  let center;

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
    });

    currentLocation.subscribe((pos) => {
      console.log("pos", pos);
      map.panTo(pos);
      let myMarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Hello World!",
      });
      getRelevantPins(pos);
    });
    google.maps.event.addListener(map, "click", function (event) {
      currentLocation.update(() => ({
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      }));
    });
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            console.log(pos);
            map.panTo(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      }
    };
  });

  const getRelevantPins = () => {
    infoService.getPinList(center).then(console.log);
  };
</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
