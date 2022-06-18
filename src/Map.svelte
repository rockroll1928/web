<script>
  import InfoService from './services/InfoService';
  import MenuButton from "../src/components/menuButton/MenuButton.svelte";

  const infoService = new InfoService();  let container;

  let map;
  let zoom = 15;
  let center = { lat: 57.696639517983165, lng: 11.828236342523105 };

  import { onMount } from "svelte";

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
      disableDefaultUI: true,
      scrollwheel: false
    });
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
    } else {
      // Browser doesn't support Geolocation
    }
  };

  
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
