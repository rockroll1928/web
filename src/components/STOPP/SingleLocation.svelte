<script>
  export let location = null;
</script>

{#if location}
  <div class="location">
    <h2>{location.label}</h2>
    this is a single location
    <!-- <pre>{JSON.stringify(location, null, 2)}</pre> -->
  </div>
{/if}


<style>
    .location{
        background-color: white;
        padding: 1rem;
        border-radius: .25rem;
        width: 13rem;
        height: 16rem;
    }
    .location h2 {
        font-size: 16px;
    }
</style>
