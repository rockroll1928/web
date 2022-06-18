import { writable } from "svelte/store";

export const currentLocation = writable({
  lat: 57.696639517983165,
  lng: 11.828236342523105,
});
