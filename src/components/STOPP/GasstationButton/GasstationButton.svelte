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
    <g filter="url(#filter0_b_1068_1595)">
      <rect width="120" height="120" rx="60" fill="#004F9B" />
      <g filter="url(#filter1_b_1068_1595)">
        <rect
          x="15"
          y="16"
          width="90"
          height="90"
          rx="45"
          fill="white"
          fill-opacity="0.9"
        />
        <path
          d="M63.9053 59.1132C66.8439 59.1132 69.1322 60.0526 69.1322 63.5694V76.2393C69.1124 77.0166 69.2508 77.7897 69.5391 78.5117C69.8275 79.2338 70.2597 79.8896 70.8094 80.4394C71.3592 80.9892 72.0151 81.4214 72.7371 81.7097C73.4591 81.998 74.2323 82.1365 75.0095 82.1166C77.7555 82.1166 82.2357 81.0327 81.9467 75.2036C81.8383 73.7815 81.6534 72.3663 81.3927 70.9642C81.3927 70.9642 79.562 57.5716 79.562 54.2957"
          stroke="#141414"
          stroke-width="2.0042"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M63.9063 84.4058V37.4116C63.9063 36.7727 63.6525 36.1601 63.2007 35.7083C62.749 35.2566 62.1363 35.0028 61.4975 35.0028H39.8189C39.1801 35.0028 38.5674 35.2566 38.1157 35.7083C37.6639 36.1601 37.4102 36.7727 37.4102 37.4116V84.4058"
          stroke="#141414"
          stroke-width="2.0042"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M35 85.6092H66.3136"
          stroke="#141414"
          stroke-width="2.0042"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M70 48V53.9988H78.3319L79.8954 52.4996L88 57V51.375L81.9795 48H70Z"
          stroke="#141414"
          stroke-width="2.0042"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <rect
          x="43"
          y="40"
          width="16"
          height="15"
          rx="1"
          stroke="black"
          stroke-width="2"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_1068_1595"
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
          result="effect1_backgroundBlur_1068_1595"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1068_1595"
          result="shape"
        />
      </filter>
      <filter
        id="filter1_b_1068_1595"
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
          result="effect1_backgroundBlur_1068_1595"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1068_1595"
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
