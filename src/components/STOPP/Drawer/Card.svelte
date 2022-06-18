<script>
  export let title;
  export let body;
</script>

<div class="card">
  <div class="title">
    {title}
  </div>
  <div class="body">
    {body}
  </div>
</div>

<style>
  .card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    height: 100px;
    width: 150px;
    margin: auto;
    margin-top: auto;
    background-color: #fff;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
</style>
