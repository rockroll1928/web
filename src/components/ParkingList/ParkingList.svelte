<!-- <script>
  import { onMount } from "svelte";

  export let data = [];

  onMount(() => {
    fetch(
      "https://europe-west1-bootcamp222.cloudfunctions.net/stops-service/getParking"
    ).then((response) => {
      data. = response.json();

      console.log(data);
    });
  });
</script>

<div>
  <ul>
    {#each data as pspace}
      <li>
        {pspace}
      </li>
    {/each}
  </ul>
</div> -->
