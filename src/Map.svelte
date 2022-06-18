<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import PinService from "./services/PinService";
  import MenuButton from "./components/MAP/MenuButton/MenuButton.svelte";
  import { translateIcon } from "./utility/IconMapping";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";
  import openModal from "./components/INFO/InfoOverlay.svelte";
	import { format, formatDistance, formatRelative, subDays } from 'date-fns'
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
	let date = new Date();
	$: time = format(date, "HH:mm")

  const infowindow = new google.maps.InfoWindow({});
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

	const createMapMarker = (pin, source) => {
		const marker = new google.maps.Marker({
			position: new google.maps.LatLng(pin.lat, pin.lon),
      icon: `./assets/pins/${translateIcon(pin.iconType)}.svg`,
			map: map
		});
		marker._source = source;
		marker._pin = pin;
		// add click listener here.

    const h1 = document.createElement('h1');
    h1.textContent = "Hej";

    marker.addListener('click', () => {
      infowindow.setContent(h1);
      infowindow.open({
        anchor: marker,
        map,
      });
    });

		return marker;
	}

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
		Promise.all([
			infoService.getPinList(pos),
			pinService.getPinList()
		]).then(([infoPinList, ugcPinList]) => {
			relevantPins = infoPinList.map((pin) => createMapMarker(pin, 'info')).concat(ugcPinList.map((pin) => createMapMarker(pin, 'pin')));
		});
  };

onMount( () => {
  const interval = setInterval(() => {
    date = new Date();
  }, 1000);
});

</script>

<div class="clock">
	{time}
</div>

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
  .clock {
    z-index: 2;
    position: fixed;
    align-items: center;
		font-family: monospace;
		background-color: white;
		font-size: 1.7981375rem;
		padding: 1.1875rem 1.8125rem;
		border-radius: calc(1.7981375rem + 1.1875rem);
		right: 0;
		margin: 1.5rem;
	}
</style>
