<script>
  import StarRating from "./StarRating.svelte";
  import { createEventDispatcher } from "svelte";

  export let location = null;
  export let expanded = false;

  const dispatch = createEventDispatcher();
</script>

{#if location}
  <div
    class="location {expanded ? 'expanded' : ''}"
    on:click={() => dispatch("request-expand")}
  >
    <h2>{location.label}</h2>
    <span>{location.vicinity}</span>

    <StarRating rating={location.rating || 3} />
    <!-- <pre>{JSON.stringify(location, null, 2)}</pre> -->

    {#if location.open_now}
      <span class="closed">Closed</span>
    {/if}
    {#if expanded}
      <div>
        <pre>{JSON.stringify(location, null, 2)}</pre>
      </div>
    {/if}
  </div>
{/if}

<style>
  .location {
    background-color: white;
    padding: 1rem;
    border-radius: 0.25rem;
    width: 13rem;

    min-width: 11rem;
    cursor: pointer;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  }
  .location.expanded {
    height: 20rem;
  }
  .location h2 {
    font-size: 16px;
  }
  .closed {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    /* warning - FUnctional */
    color: #c4001a;
  }
</style>
