<script>
  import InfoService from './services/InfoService';
  const infoService = new InfoService();  let container;
  let map;
  let zoom = 12;
  let center = { lat: 57.696639517983165, lng: 11.828236342523105 };
  
  import { onMount } from "svelte";

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
    });
    createButtons();
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
  }

  const createButtons = () => {
    const locationButton = document.createElement("button");
    locationButton.textContent = "Pan to Current Location";
    locationButton.classList.add("btn");
    locationButton.addEventListener("click", getCurrentPosition);

    const searchButton = document.createElement("button");
    searchButton.textContent = "Search";
    searchButton.classList.add("btn");

    map.controls[google.maps.ControlPosition.BOTTOM_LEFT].push(locationButton);
    map.controls[google.maps.ControlPosition.BOTTOM_CENTER].push(searchButton);
  }

</script>

<div class="full-screen" bind:this={container} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }
</style>
