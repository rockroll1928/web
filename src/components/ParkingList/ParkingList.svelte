<script>
  let data = [
    {
      label: "Parkering Göteborg (4752) - Adolf Edelsvärds gata",
      lat: 57.69409134514198,
      lng: 11.912355419517533,
    },
    {
      label: "Liseberg östra parkering",
      lat: 57.69141004347778,
      lng: 11.996197752418537,
    },
  ];
</script>

{#each data as pspace, i}
  <li>
    {i + 1}: {pspace.label}
  </li>
{/each}
