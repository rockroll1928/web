<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import MenuButton from "./components/MAP/MenuButton/MenuButton.svelte";
  import {translateIcon} from "./utility/IconMapping";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";

  import { currentLocation } from "./components/Store/Stores.js";

  const infoService = new InfoService();
  let container;
  /**
   * @type {google.maps.Map}
   */
  let map;
  let zoom = 15;
  let center = currentLocation;
  let relevantPins = [];
  $: isStopsOpen = false;

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
      center,
      disableDefaultUI: true,
      scrollwheel: false,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
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

  const getRelevantPins = (pos) => {
    infoService.getPinList(pos).then((pins) => {
      console.log(pins);
      relevantPins = pins.map((pin) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(pin.lat, pin.lon),
          icon: `./assets/pins/${translateIcon(pin.iconType)}.svg`,
          map: map
        });
      });
    });
  };
</script>

<div class="full-screen" bind:this={container} />
<div class="menu-buttons">
  <MenuButton
    alt="search"
    src="/assets/Search.svg"
    on:menu-button-click={() => {}}
  />
  <MenuButton alt="pin" src="/assets/Pin.svg" on:menu-button-click={() => {}} />
  <MenuButton
    alt="coffee"
    src="/assets/Coffee.svg"
    on:menu-button-click={() => {
      isStopsOpen = true;
    }}
  />
</div>
<Drawer open={isStopsOpen} on:on-drawer-close={() => (isStopsOpen = false)} />

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }

  .menu-buttons {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
  }
</style>
