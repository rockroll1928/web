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
  let id;
  let centerMarker;
  let options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
    });

    currentLocation.subscribe((pos) => {
      console.log("pos", pos);
      map.panTo(pos);
      centerMarker?.setMap(null);
      centerMarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Hello World!",
      });
      getRelevantPins(pos);
    });
    const navGeoLocSuccess = (pos) => {
      const crd = pos.coords;
      currentLocation.update(() => ({
        lat: crd.latitude,
        lng: crd.longitude,
      }));
    };

    function navGeoLocError(err) {
      console.warn("ERROR(" + err.code + "): " + err.message);
    }

    id = navigator.geolocation.watchPosition(
      navGeoLocSuccess,
      navGeoLocError,
      options
    );

    document.onkeydown = (event) => {
      console.log("key", event.key);
      switch (event.key) {
        case "ArrowUp":
          navigator.geolocation.clearWatch(id);
          let _pos;
          currentLocation.subscribe((pos) => {
            _pos = pos;
          });
          currentLocation.update(() => ({
            lat: _pos.lat + 0.001,
            lng: _pos.lng,
          }));

          break;

        default:
          break;
      }
    };

    document.onkeyup = (event) => {
      switch (event.key) {
        case "ArrowUp":
          id = navigator.geolocation.watchPosition(
            navGeoLocSuccess,
            navGeoLocError,
            options
          );

          break;

        default:
          break;
      }
    };
    /*
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
*/
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
