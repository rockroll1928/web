<script>
  import { getParking } from "./getParking";
  import { onMount } from "svelte";
  export let data = [];
  onMount(async function () {
    const response = await getParking();
    data = response;
    console.log(response);
  });
</script>

{#each data as pspace, i}
  <li>
    {i + 1}: {pspace.label}
  </li>
{/each}
