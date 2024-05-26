<script>
  export let size = 30;
  export let color = 'black';

  let className = '';
  export { className as class };
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 30 30"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class={className}
>
  <g clip-path="url(#clip0_190_243)">
    <mask
      id="mask0_190_243"
      style="mask-type:luminance"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width={size}
      height={size}
    >
      <path d="M30 0H0V30H30V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_190_243)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.2137 7.00907V24.5045C25.2137 25.3636 24.5182 26.0454 23.6591 26.0454C22.8 26.0454 22.1182 25.3636 22.1182 24.5045V17.4682L7.77277 25.8409C7.2955 26.1136 6.70914 26.1273 6.23186 25.8409C5.75459 25.5682 5.45459 25.0636 5.45459 24.5045V7.00907C5.45459 6.44998 5.75459 5.94544 6.23186 5.67271C6.70914 5.38635 7.2955 5.38635 7.77277 5.67271L22.1182 14.0454V7.00907C22.1182 6.14998 22.8137 5.45453 23.6591 5.45453C24.5046 5.45453 25.2137 6.14998 25.2137 7.00907Z"
        fill={color}
      />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_190_243">
      <rect width={size} height={size} fill="white" />
    </clipPath>
  </defs>
</svg>
