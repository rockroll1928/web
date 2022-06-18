<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import { presentCenter, presentPosition } from "./components/Store/Stores.js";

  const infoService = new InfoService();
  let container;
  /**
   * @type {google.maps.Map}
   */
  let map;
  let zoom = 15.5;
  let center = presentCenter;
  let relevantPins = [];

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
    presentCenter.subscribe((pos) => {
      console.log("pos", pos);
      map.setCenter(pos);
      getRelevantPins(pos);
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
    const getCurrentPosition = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            console.log(pos);
            map.setCenter(pos);
          },
          () => {
            handleLocationError(true, infoWindow, map.getCenter());
          }
        );
      }
    };
  });

  const getRelevantPins = () => {
    infoService.getPinList(center).then((pins) => {
      console.log(pins);
      relevantPins = pins.map((pin) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(pin.lat, pin.lon),
          icon: `./assets/pins/${pin.type || 'message'}.svg`,
          map: map
        });
      })
    });
  }

</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
