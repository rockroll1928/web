<script>
  import Drawer from "svelte-drawer-component";
  let open = false;
</script>

<Drawer {open} size="50%" placement="left" on:clickAway={() => (open = false)}>
  <button class="close" on:click={() => (open = false)}>Close</button>
  <img src="https://picsum.photos/200?random=1" alt="In drawer" />
  <img src="https://picsum.photos/200?random=2" alt="In drawer" />
  <img src="https://picsum.photos/200?random=3" alt="In drawer" />
</Drawer>

<button on:click={() => (open = true)}>Open</button>

<style>
  .close {
    display: block;
    margin-left: auto;
  }

  img {
    display: block;
    margin: 10px auto;
  }

  p {
    font-size: 20px;
    line-height: 28px;
    max-width: 400px;
  }
</style>
