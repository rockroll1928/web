<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import MenuButton from "./components/MAP/MenuButton/MenuButton.svelte";
  import { translateIcon } from "./utility/IconMapping";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";
  import openModal from "./components/INFO/InfoOverlay.svelte";

  import { currentLocation } from "./components/Store/Stores.js";

  const infoService = new InfoService();
  let container;
  /**
   * @type {google.maps.Map}
   */
  let map;
  let zoom = 15;
  let id;
  let centerMarker;
  let options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,
  };
  let relevantPins = [];
  $: isStopsOpen = false;

  onMount(async () => {
    map = new google.maps.Map(container, {
      zoom,
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
      centerMarker?.setMap(null);
      centerMarker = new google.maps.Marker({
        position: pos,
        map: map,
        title: "Your position",
        icon: "/assets/myposition.svg",
      });
      getRelevantPins(pos);
    });

    watchPosition();

    map.addListener("dragstart", () => {
      navigator.geolocation.clearWatch(id);
    });

    document.onkeydown = (event) => {
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

  const watchPosition = () => {
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
  };

  const getRelevantPins = (pos) => {
    infoService.getPinList(pos).then((pins) => {
      console.log(pins);
      relevantPins = pins.map((pin) => {
        new google.maps.Marker({
          position: new google.maps.LatLng(pin.lat, pin.lon),
          icon: `./assets/pins/${translateIcon(pin.iconType)}.svg`,
          map: map,
        });
      });
    });
  };
</script>

<div class="full-screen" bind:this={container} />
<div class="lower-left-buttons">
  <MenuButton
    alt="pin"
    src="/assets/addpin.svg"
    on:menu-button-click={() => alert("Traffic accident message")}
  />
</div>
<div class="menu-buttons">
  <MenuButton
    alt="coffee"
    src="/assets/stops.svg"
    on:menu-button-click={() => {
      isStopsOpen = true;
    }}
  />
</div>
<div class="lower-right-buttons">
  <MenuButton
    alt="centerposition"
    src="/assets/centerlocation.svg"
    on:menu-button-click={() => {
      watchPosition();
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
  .lower-left-buttons {
    z-index: 2;
    position: absolute;
    left: 60px;
    transform: translateX(-50%);
    bottom: 30px;
  }
  .lower-right-buttons {
    z-index: 2;
    position: absolute;
    right: 10px;
    transform: translateX(-50%);
    bottom: 30px;
  }
</style>
