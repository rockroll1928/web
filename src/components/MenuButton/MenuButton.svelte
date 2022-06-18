<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("open-menu-button")}
  ><svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_746_1298)">
      <path
        d="M40.0003 78.5047C61.2658 78.5047 78.505 61.2656 78.505 40.0001C78.505 18.7345 61.2658 1.49539 40.0003 1.49539C18.7347 1.49539 1.49561 18.7345 1.49561 40.0001C1.49561 61.2656 18.7347 78.5047 40.0003 78.5047Z"
        stroke="black"
        stroke-width="3.40426"
        stroke-linecap="round"
      />
      <circle cx="22.5344" cy="40.4065" r="4.66183" fill="black" />
      <circle cx="39.9792" cy="40.4066" r="4.66183" fill="black" />
      <circle cx="56.7116" cy="40.4066" r="4.66183" fill="black" />
    </g>
    <defs>
      <clipPath id="clip0_746_1298">
        <rect width="80" height="80" fill="white" />
      </clipPath>
    </defs>
  </svg>
</button>

<style>
  button {
    position: absolute;
    z-index: 2;
    border-radius: 10%;
    top: 60%;
    right: 5%;
    padding: 1rem;
    background-color: white;
    color: blue;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
</style>
