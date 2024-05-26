<script>
  export let size = 30;
  export let color = 'black';
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 950 950"
  xmlns="http://www.w3.org/2000/svg"
  overflow="hidden"
  fill={color}
>
  <defs>
    <clipPath id="a">
      <path d="M-1 80h949v920H-1z" />
    </clipPath>
  </defs>
  <g clip-path="url(#a)" transform="translate(1 -80)">
    <path
      d="m802 389-78 136 13 8 79-136ZM413 256 169 679l42 25 245-423Zm-169-97 43 24L42 606 0 582Zm192-79 239 405 73-127 14 8-78 135 13 23 113-191 133 227 4 11-2 14c-15 74-46 142-89 201l-12 14-7 10-4 4-4 6c-19 22-40 42-62 61l-6 4-4 3-12 9-11 8v-1l-23 17A516 516 0 0 1 36 810l-16-22Z"
      fill-rule="evenodd"
    />
  </g>
</svg>
