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
    <g filter="url(#filter0_b_1068_1587)">
      <rect width="120" height="120" rx="60" fill="#004F9B" />
      <g filter="url(#filter1_b_1068_1587)">
        <rect
          x="15"
          y="16"
          width="90"
          height="90"
          rx="45"
          fill="white"
          fill-opacity="0.9"
        />
        <g clip-path="url(#clip0_1068_1587)">
          <path
            d="M56.9072 57.9012V65.9991C56.9099 66.3033 56.8521 66.605 56.7369 66.8867C56.6218 67.1682 56.4517 67.4241 56.2366 67.6392C56.0214 67.8544 55.7656 68.0245 55.484 68.1396C55.2024 68.2548 54.9006 68.3126 54.5964 68.3098H51.7028V82.882C51.7028 83.9862 51.2642 85.0453 50.4834 85.8259C49.7026 86.6066 48.6436 87.0455 47.5394 87.0455H43.3759C42.2717 87.0455 41.2127 86.6066 40.4319 85.8259C39.6511 85.0453 39.2124 83.9862 39.2124 82.882V68.3098H36.3188C36.0146 68.3126 35.7129 68.2548 35.4313 68.1396C35.1496 68.0245 34.8938 67.8544 34.6787 67.6392C34.4636 67.4241 34.2935 67.1682 34.1783 66.8867C34.0632 66.605 34.0053 66.3033 34.0081 65.9991V57.9012C34.0081 53.1756 33.3211 47.4925 45.4576 47.4925C57.5941 47.4925 56.9072 53.1132 56.9072 57.9012Z"
            stroke="#141414"
            stroke-width="2.00167"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M45.4571 47.4912C48.9062 47.4912 51.7023 44.6952 51.7023 41.246C51.7023 37.7969 48.9062 35.0008 45.4571 35.0008C42.008 35.0008 39.2119 37.7969 39.2119 41.246C39.2119 44.6952 42.008 47.4912 45.4571 47.4912Z"
            stroke="#141414"
            stroke-width="2.00167"
            stroke-miterlimit="10"
          />
        </g>
        <g clip-path="url(#clip1_1068_1587)">
          <path
            d="M84.8173 57.9V65.9979C84.8173 66.6107 84.5739 67.1985 84.1405 67.6318C83.7072 68.0652 83.1195 68.3087 82.5066 68.3087H79.613L83.7765 80.7991H77.5312V82.8808C77.5312 83.985 77.0926 85.0441 76.3118 85.8248C75.531 86.6054 74.472 87.0443 73.3678 87.0443C72.2636 87.0443 71.2046 86.6054 70.4238 85.8248C69.643 85.0441 69.2043 83.985 69.2043 82.8808V80.7991H62.9591L67.1226 68.3087H64.2081C63.9057 68.3087 63.6062 68.2488 63.327 68.1324C63.0478 68.016 62.7944 67.8454 62.5815 67.6306C62.3686 67.4158 62.2004 67.1608 62.0865 66.8806C61.9727 66.6004 61.9155 66.3004 61.9182 65.9979V57.9C61.9182 53.1744 61.2313 47.4913 73.3678 47.4913C85.5043 47.4913 84.8173 53.112 84.8173 57.9Z"
            stroke="#141414"
            stroke-width="2.00167"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M73.3468 47.492C76.7959 47.492 79.592 44.6959 79.592 41.2468C79.592 37.7977 76.7959 35.0016 73.3468 35.0016C69.8976 35.0016 67.1016 37.7977 67.1016 41.2468C67.1016 44.6959 69.8976 47.492 73.3468 47.492Z"
            stroke="#141414"
            stroke-width="2.00167"
            stroke-miterlimit="10"
          />
        </g>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_1068_1587"
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
          result="effect1_backgroundBlur_1068_1587"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1068_1587"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_1068_1587"
        x="-5"
        y="-4"
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
          result="effect1_backgroundBlur_1068_1587"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1068_1587"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_1068_1587">
        <rect
          width="25.0208"
          height="54.045"
          fill="white"
          transform="translate(33 34)"
        />
      </clipPath>
      <clipPath id="clip1_1068_1587">
        <rect
          width="25.0208"
          height="54.045"
          fill="white"
          transform="translate(60.9102 34)"
        />
      </clipPath>
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
