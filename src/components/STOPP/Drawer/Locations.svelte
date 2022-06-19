<script>
  import { createEventDispatcher, onMount } from "svelte";
  import { getParking } from "../../ParkingList/getParking";
  import { currentLocation } from "../../Store/Stores";
  import SingleLocation from "../SingleLocation.svelte";
  export let open = true;
  export let type = "";
  $: selectedIndex = -1;
  $: locations = [];
  const disableDefaultUI = createEventDispatcher();

  $: {
    const pos = $currentLocation
    console.log('pos',pos)
    getParking(type, pos.lat, pos.lng).then((p) => (locations = p.slice(4, 18)));
  }
</script>

{#if open}
  <div class="wrapper">
    <div class="locations">
      {#each locations as location, i}
        <SingleLocation
          {location}
          expanded={i === selectedIndex}
          on:request-expand={() => (selectedIndex = i)}
        />
      {/each}
    </div>
  </div>
{/if}

<style>
  .wrapper {
    padding: 2rem 0;
    position: absolute;
    width: 100vw;
    bottom: 15%;
    overflow: auto;
    z-index: 100;
  }
  .locations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    align-items: center;
    overflow-x: scroll;
  }
</style>
