<script context="module">
  import { translateIcon } from "../../utility/IconMapping";
  export let pinID;

const response = fetch('https://europe-west1-bootcamp222.cloudfunctions.net/info-service/getSituations?lat=57.75042&lon=11.87385&radius=10000');

export const contentString =
    '<div class="detailContent">' +
    '<h1 class="firstHeading">'+response.iconType+'</h1>' +
    `<img src="assets/pins/${translateIcon(response.iconType)}.svg"`+
    `<p>${response.options?.message}</p>` +
    "</div>";

</script>

<style>

</style>