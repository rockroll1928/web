<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("open-menu-button")}
  ><svg
    width="90"
    height="90"
    viewBox="0 0 90 90"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_988_7201)">
      <rect width="90" height="90" rx="45" fill="white" fill-opacity="0.9" />
      <g clip-path="url(#clip0_988_7201)">
        <path
          d="M41.9072 41.9012V49.9991C41.9099 50.3033 41.8521 50.605 41.7369 50.8867C41.6218 51.1682 41.4517 51.4241 41.2366 51.6392C41.0214 51.8544 40.7656 52.0245 40.484 52.1396C40.2024 52.2548 39.9006 52.3126 39.5964 52.3098H36.7028V66.882C36.7028 67.9862 36.2642 69.0453 35.4834 69.8259C34.7026 70.6066 33.6436 71.0455 32.5394 71.0455H28.3759C27.2717 71.0455 26.2127 70.6066 25.4319 69.8259C24.6511 69.0453 24.2124 67.9862 24.2124 66.882V52.3098H21.3188C21.0146 52.3126 20.7129 52.2548 20.4313 52.1396C20.1496 52.0245 19.8938 51.8544 19.6787 51.6392C19.4636 51.4241 19.2935 51.1682 19.1783 50.8867C19.0632 50.605 19.0053 50.3033 19.0081 49.9991V41.9012C19.0081 37.1756 18.3211 31.4925 30.4576 31.4925C42.5941 31.4925 41.9072 37.1132 41.9072 41.9012Z"
          stroke="#141414"
          stroke-width="2.00167"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.4571 31.4912C33.9062 31.4912 36.7023 28.6952 36.7023 25.246C36.7023 21.7969 33.9062 19.0008 30.4571 19.0008C27.008 19.0008 24.2119 21.7969 24.2119 25.246C24.2119 28.6952 27.008 31.4912 30.4571 31.4912Z"
          stroke="#141414"
          stroke-width="2.00167"
          stroke-miterlimit="10"
        />
      </g>
      <g clip-path="url(#clip1_988_7201)">
        <path
          d="M69.8163 41.9V49.9979C69.8163 50.6107 69.5729 51.1985 69.1395 51.6318C68.7062 52.0652 68.1185 52.3087 67.5056 52.3087H64.612L68.7755 64.7991H62.5303V66.8808C62.5303 67.985 62.0916 69.0441 61.3108 69.8248C60.53 70.6054 59.471 71.0443 58.3668 71.0443C57.2626 71.0443 56.2036 70.6054 55.4228 69.8248C54.642 69.0441 54.2033 67.985 54.2033 66.8808V64.7991H47.9581L52.1216 52.3087H49.2072C48.9047 52.3087 48.6052 52.2488 48.326 52.1324C48.0468 52.016 47.7935 51.8454 47.5806 51.6306C47.3676 51.4158 47.1994 51.1608 47.0856 50.8806C46.9717 50.6004 46.9145 50.3004 46.9173 49.9979V41.9C46.9173 37.1744 46.2303 31.4913 58.3668 31.4913C70.5033 31.4913 69.8163 37.112 69.8163 41.9Z"
          stroke="#141414"
          stroke-width="2.00167"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M58.3458 31.492C61.7949 31.492 64.591 28.6959 64.591 25.2468C64.591 21.7977 61.7949 19.0016 58.3458 19.0016C54.8967 19.0016 52.1006 21.7977 52.1006 25.2468C52.1006 28.6959 54.8967 31.492 58.3458 31.492Z"
          stroke="#141414"
          stroke-width="2.00167"
          stroke-miterlimit="10"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_988_7201"
        x="-20"
        y="-20"
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
          result="effect1_backgroundBlur_988_7201"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_988_7201"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_988_7201">
        <rect
          width="25.0208"
          height="54.045"
          fill="white"
          transform="translate(18 18)"
        />
      </clipPath>
      <clipPath id="clip1_988_7201">
        <rect
          width="25.0208"
          height="54.045"
          fill="white"
          transform="translate(45.9092 18)"
        />
      </clipPath>
    </defs>
  </svg>
</button>

<style>
  button {
    position: absolute;
    z-index: 2;
    border-radius: 10%;
    top: 30%;
    right: 5%;
    padding: 1rem;
    background-color: white;
    color: blue;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
  }
</style>
