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
      <div className="image-wrapper">
       <img src="https://www.priorityvillas.com/rentals/fotos/2/149466985749e65c59c8a0c676cd673069837a1faf/149466985724e5dcd28eb02c0d393bd6d0527144b9.jpg" alt="parking"/>
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
    align-self:flex-end;

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
  .image-wrapper{
    width: 100%;

  }
  img{
    width: 100%;
    object-fit: cover;
  }
</style>
