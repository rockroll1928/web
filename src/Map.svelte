<script>
  import { onMount } from "svelte";
  import InfoService from "./services/InfoService";
  import PinService from "./services/PinService";
  import MenuButton from "./components/MAP/MenuButton/MenuButton.svelte";
  import { translateIcon } from "./utility/IconMapping";
  import Drawer from "./components/STOPP/Drawer/Drawer.svelte";
  import InfoContent from "./components/INFO/InfoContent";
  import { format, formatDistance, formatRelative, subDays } from "date-fns";
  import ReportsModal from "./components/PIN/ReportsModal/ReportsModal.svelte";
  import { currentLocation } from "./components/Store/Stores.js";
  import { centerOnPosition } from "./components/Store/Stores.js";
  import iconMapping from "./utility/IconMapping";

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
  $: time = format(date, "HH:mm");
  let isReportsOpen = false;

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
      if ($centerOnPosition) {
        map.panTo(pos);
        centerMarker?.setMap(null);
        centerMarker = new google.maps.Marker({
          position: pos,
          map: map,
          title: "Your position",
          icon: "/assets/myposition.svg",
        });
        getRelevantPins(pos);
      }
    });

    watchPosition();

    map.addListener("dragstart", () => {
      $centerOnPosition = false;
    });

    document.onkeydown = (event) => {
      let _pos;
      switch (event.key) {
        case "ArrowUp":
          $centerOnPosition = false;
          currentLocation.subscribe((pos) => {
            _pos = pos;
          });
          console.log("pos go up", _pos);
          currentLocation.update(() => ({
            lat: _pos.lat + 0.001,
            lng: _pos.lng,
          }));
          map.panTo(_pos);
          centerMarker?.setMap(null);
          centerMarker = new google.maps.Marker({
            position: _pos,
            map: map,
            title: "Your position",
            icon: "/assets/myposition.svg",
          });

          break;

        case "ArrowDown":
          $centerOnPosition = false;
          currentLocation.subscribe((pos) => {
            _pos = pos;
          });
          console.log("pos go down", _pos);
          currentLocation.update(() => ({
            lat: _pos.lat - 0.001,
            lng: _pos.lng,
          }));
          map.panTo(_pos);
          centerMarker?.setMap(null);
          centerMarker = new google.maps.Marker({
            position: _pos,
            map: map,
            title: "Your position",
            icon: "/assets/myposition.svg",
          });

          break;

        case "ArrowLeft":
          $centerOnPosition = false;
          currentLocation.subscribe((pos) => {
            _pos = pos;
          });
          console.log("pos go left", _pos);
          currentLocation.update(() => ({
            lat: _pos.lat,
            lng: _pos.lng - 0.001,
          }));
          map.panTo(_pos);
          centerMarker?.setMap(null);
          centerMarker = new google.maps.Marker({
            position: _pos,
            map: map,
            title: "Your position",
            icon: "/assets/myposition.svg",
          });

          break;

        case "ArrowRight":
          $centerOnPosition = false;
          currentLocation.subscribe((pos) => {
            _pos = pos;
          });
          console.log("pos go right", _pos);
          currentLocation.update(() => ({
            lat: _pos.lat,
            lng: _pos.lng + 0.001,
          }));
          map.panTo(_pos);
          centerMarker?.setMap(null);
          centerMarker = new google.maps.Marker({
            position: _pos,
            map: map,
            title: "Your position",
            icon: "/assets/myposition.svg",
          });

          break;

        default:
          break;
      }
    };

    const interval = setInterval(() => {
      date = new Date();
    }, 1000);

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
      map: map,
    });

    let infowindow;

    switch (source) {
      case "info":
        infowindow = new google.maps.InfoWindow({
          content: InfoContent.infoContent(pin.options),
        });
        break;
      case "pin":
        infowindow = new google.maps.InfoWindow({
          content: InfoContent.infoContent(pin.options),
        });
        break;
      default:
        console.log("Unsupported pin source");
    }

    marker._source = source;
    marker._pin = pin;

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
        map,
        shouldFocus: false,
      });
    });

    google.maps.event.addListener(map, "click", function (event) {
      infowindow.close();
    });

    return marker;
  };

  const getRelevantPins = (pos) => {
    Promise.all([infoService.getPinList(pos), pinService.getPinList()]).then(
      ([infoPinList, ugcPinList]) => {
        relevantPins = infoPinList
          .map((pin) => createMapMarker(pin, "info"))
          .concat(ugcPinList.map((pin) => createMapMarker(pin, "pin")));
      }
    );
  };

  const handleCenterOnPosition = () => {
    let _pos;
    currentLocation.subscribe((pos) => {
      _pos = pos;
    });
    map.panTo(_pos);
    map.setZoom(15);
    $centerOnPosition = true;
  };

  const watchPosition = () => {
    const navGeoLocSuccess = (pos) => {
      const crd = pos.coords;
      currentLocation.update(() => ({
        lat: crd.latitude,
        lng: crd.longitude,
      }));
    };

    const navGeoLocError = (err) => {
      console.warn("ERROR(" + err.code + "): " + err.message);
    };
    id = navigator.geolocation.watchPosition(
      navGeoLocSuccess,
      navGeoLocError,
      options
    );
    console.log("id", id);
  };

  function onReportsButtonClick({ iconType }) {
    let pos = map.getCenter();
    
    let pin = {
        latitude: pos.lat(),
        longitude: pos.lng(),
        type: iconType
      }

    pinService.savePin(pin).then((response) => {
      console.log(response);
      let pinObject = { 
        lat: response.latitude, 
        lon: response.longitude, 
        iconType:iconMapping.translateIcon(response.iconType), 
        options: response.options 
      }
      createMapMarker(pinObject, "pin");
    })
    
    //let pinObject = { lat: pos.lat(), lon: pos.lng(), iconType:iconMapping.translateIcon(iconType) };
    //createMapMarker(pinObject, "pin");
    isReportsOpen = false;
  }
</script>

<div class="logo">
  <img
    src="./assets/sogeti-trucks.svg"
    alt="Sogeti Trucks – Part of Capgemini"
  />
</div>

<div class="clock">
  {time}
</div>

<div class="full-screen" bind:this={container} />
<div class="lower-left-buttons">
  <MenuButton
    alt="pin"
    src="/assets/addpin.svg"
    imgstyles="width: 80px;"
    on:menu-button-click={() => {
      isReportsOpen = !isReportsOpen;
    }}
    on:report-button-click={(e) => onReportsButtonClick(e)}
  />
</div>
<div class="center-buttons">
  <MenuButton
    alt="coffee"
    src={`/assets/${isStopsOpen ? "closestops" : "stops"}.svg`}
    imgstyles="width: 100px;"
    on:menu-button-click={() => {
      isStopsOpen = true;
    }}
  />
</div>
<div class="lower-right-buttons">
  <MenuButton
    alt="centerposition"
    src="/assets/centerlocation.svg"
    imgstyles="width: 80px;"
    on:menu-button-click={() => {
      handleCenterOnPosition();
    }}
  />
</div>
<Drawer open={isStopsOpen} on:on-drawer-close={() => (isStopsOpen = false)} />

{#if isReportsOpen}
  <ReportsModal
    on:close-reports-modal={() => (isReportsOpen = false)}
    on:report-button-click={(e) => onReportsButtonClick(e.detail)}
  />
{/if}

<style>
  .full-screen {
    width: 100vw;
    height: 100vh;
  }

  .center-buttons {
    z-index: 2;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
  }

  .lower-left-buttons {
    z-index: 2;
    position: absolute;
    left: 94px;
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
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 1.7981375rem;
    padding: 1.1875rem 1.8125rem;
    border-radius: calc(1.7981375rem + 1.1875rem);
    right: 0;
    margin: 1.5rem;
  }

  .logo {
    background-color: rgba(255, 255, 255, 0.8);
    border-radius: calc(1.7981375rem + 1.1875rem);
    left: 0;
    margin: 1.5rem;
    padding: 1.25rem;
    position: fixed;
    top: 0;
    z-index: 2;
  }

  .logo > img {
    width: 10rem;
    height: auto;
  }
</style>
