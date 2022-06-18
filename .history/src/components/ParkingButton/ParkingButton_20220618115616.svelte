<script>
  export let text = "";
</script>

<button>{text}</button>

<style>
  button {
    display: absolute;
    z-index: 2;
    border-radius: 50%;
    top: 50%;
    padding: 5rem;
    background-color: blue;
    color: white;
    font-size: 2rem;
    font-weight: bold;
  }
</style>
