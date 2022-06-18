<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import PinService from "./services/PinService";
  import MenuButton from "./components/MAP/MenuButton/MenuButton.svelte";
  import { translateIcon } from "./utility/IconMapping";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";
  import  openModal from "./components/INFO/InfoOverlay.svelte";

  import { currentLocation } from "./components/Store/Stores.js";

  const infoService = new InfoService();
	const pinService = new PinService();
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
      // scrollwheel: false,
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

	const createMapMarker = (pin, source) => {
		const marker = new google.maps.Marker({
			position: new google.maps.LatLng(pin.lat, pin.lon),
      icon: `./assets/pins/${translateIcon(pin.iconType)}.svg`,
			map: map
		});
		marker._source = source;
		// add click listener here.
		return marker;
	}

  const getRelevantPins = (pos) => {
		Promise.all([
			infoService.getPinList(pos),
			pinService.getPinList()
		]).then(([infoPinList, ugcPinList]) => {
			relevantPins = infoPinList.map((pin) => createMapMarker(pin, 'info')).concat(ugcPinList.map((pin) => createMapMarker(pin, 'pin')));
		});
  };
</script>

<div class="full-screen" bind:this={container} />
<div class="menu-buttons">
  <MenuButton
    alt="search"
    src="/assets/Search.svg"
    on:menu-button-click={() => alert("Traffic accident message")}
  />
  <MenuButton alt="pin" src="/assets/Pin.svg" on:menu-button-click={() => alert("Traffic accident message")} />
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
