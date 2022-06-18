<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import { presentCenter, presentPosition } from "./components/Store/Stores.js";
  import MenuButton from "./components/menuButton/MenuButton.svelte";
  
  const infoService = new InfoService();
  let container;
  /**
   * @type {google.maps.Map}
   */
  let map;
  let zoom = 12;
  let center = presentCenter;

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
      disableDefaultUI: true,
      scrollwheel: false
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
    infoService.getPinList(center).then(console.log);
  }

</script>

<div class="full-screen" bind:this={container} />
<div class="menu-buttons">
  <MenuButton alt="search" src="/assets/Search.svg" on:menu-button-click={() => {}} />
  <MenuButton alt="pin" src="/assets/Pin.svg" on:menu-button-click={() => {}} />
  <MenuButton alt="coffee" src="/assets/Coffee.svg" on:menu-button-click={() => {}} />

</div>


<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }

  .menu-buttons {
    z-index: 2;
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    bottom: 5%;
  }
</style>
