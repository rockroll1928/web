<script>
  import { createEventDispatcher } from "svelte";
  let dispatch = createEventDispatcher();
</script>

<button on:click={() => dispatch("open-menu-button")}
  ><svg
    width="140"
    height="140"
    viewBox="0 0 140 140"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_b_988_6714)">
      <rect width="140" height="140" rx="70" fill="white" fill-opacity="0.8" />
      <g clip-path="url(#clip0_988_6714)">
        <path
          d="M93.7162 51.6217H46.8643V47.9838C46.8643 47.4867 47.0617 47.0101 47.4132 46.6586C47.7646 46.3071 48.2413 46.1097 48.7383 46.1097H91.8421C92.3391 46.1097 92.8158 46.3071 93.1673 46.6586C93.5187 47.0101 93.7162 47.4867 93.7162 47.9838V51.6217Z"
          stroke="#141414"
          stroke-width="2.56723"
          stroke-linejoin="round"
        />
        <path
          d="M82.6794 98.4729H57.8754C57.1208 98.4723 56.3938 98.189 55.8377 97.6788C55.2816 97.1687 54.9369 96.4687 54.8714 95.7169L50.9717 51.621H89.5556L85.6697 95.7169C85.6014 96.4652 85.2577 97.1614 84.7052 97.6707C84.1527 98.1799 83.4307 98.4658 82.6794 98.4729Z"
          stroke="#141414"
          stroke-width="2.56723"
          stroke-linejoin="round"
        />
        <path
          d="M88.2044 46.1078H52.3765L53.2584 42.5939C53.3997 42.0243 53.7273 41.5183 54.1893 41.1563C54.6512 40.7943 55.2208 40.597 55.8076 40.5958H84.7456C85.3331 40.5946 85.904 40.791 86.3663 41.1534C86.8288 41.5158 87.1558 42.0232 87.295 42.5939L88.2044 46.1078Z"
          stroke="#141414"
          stroke-width="2.56723"
          stroke-linejoin="round"
        />
        <path
          d="M52.3765 62.6449H88.2044"
          stroke="#141414"
          stroke-width="2.56723"
          stroke-linejoin="round"
        />
        <path
          d="M53.7549 83.3156H86.8268"
          stroke="#141414"
          stroke-width="2.56723"
          stroke-linejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_b_988_6714"
        x="-31.1111"
        y="-31.1111"
        width="202.222"
        height="202.222"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feGaussianBlur in="BackgroundImage" stdDeviation="15.5556" />
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_988_6714"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_backgroundBlur_988_6714"
          result="shape"
        />
      </filter>
      <clipPath id="clip0_988_6714">
        <rect
          width="49.4192"
          height="60.9717"
          fill="white"
          transform="translate(45.5811 39.314)"
        />
      </clipPath>
    </defs>
  </svg>
</button>

<style>
  button {
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    bottom: 5%;
    background-color: white;
    color: blue;
    cursor: pointer;
  }

  svg {
    width: 50%;
  }
</style>
