<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("open-menu-button")}
  ><svg
    width="120"
    height="120"
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_1022_9674)">
      <rect width="120" height="120" rx="60" fill="#004F9B" />
      <g filter="url(#filter1_b_1022_9674)">
        <rect
          x="15"
          y="15"
          width="90"
          height="90"
          rx="45"
          fill="white"
          fill-opacity="0.9"
        />
        <path
          d="M47.6085 40.352C52.9418 40.3093 58.2752 40.288 63.6085 40.288C67.2778 40.288 70.3285 40.7787 72.7605 41.76C75.1925 42.7413 77.0058 44.192 78.2005 46.112C79.3952 47.9893 79.9925 50.3147 79.9925 53.088C79.9925 55.8613 79.3525 58.2293 78.0725 60.192C76.8352 62.112 74.9578 63.584 72.4405 64.608C69.9232 65.5893 66.8298 66.08 63.1605 66.08C58.4672 66.08 54.6485 66.0587 51.7045 66.016V84H47.6085V40.352ZM75.6405 53.216C75.6405 51.0827 75.2138 49.3333 74.3605 47.968C73.5072 46.6027 72.1845 45.6 70.3925 44.96C68.6432 44.2773 66.3605 43.936 63.5445 43.936C58.0832 43.936 54.1365 43.9573 51.7045 44V62.432C54.1792 62.4747 58.0618 62.496 63.3525 62.496C66.1685 62.496 68.4725 62.1547 70.2645 61.472C72.0992 60.7893 73.4432 59.7653 74.2965 58.4C75.1925 57.0347 75.6405 55.3067 75.6405 53.216Z"
          fill="black"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_1022_9674"
        x="-21.7778"
        y="-21.7778"
        width="163.556"
        height="163.556"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="10.8889" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1022_9674"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1022_9674"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_1022_9674"
        x="-5"
        y="-5"
        width="130"
        height="130"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1022_9674"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1022_9674"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
</button>

<style>
  button {
    z-index: 2;
    border-radius: 10%;
    cursor: pointer;
    background: transparent;
    border: none;
  }
</style>
