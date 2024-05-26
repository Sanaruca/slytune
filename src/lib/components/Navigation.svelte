<script>
  import HomeIcon from '../icons/home-icon.svelte';
  import CompasIcon from '../icons/compass-icon.svelte';
  import MicrophoneIcon from '../icons/microphone-icon.svelte';
  import CollectionIcon from '../icons/collection-icon.svelte';
  import HeartIcon from '../icons/heart-icon.svelte';
  import SanarucaIcon from '../icons/sanaruca-icon.svelte';
  let className = '';
  export { className as class };
</script>

<nav class="bg-black p-3 {className}">
  <div class="hidden | lg:block">
    <SanarucaIcon color="#2DE26C" size={50} />
  </div>
  <ul
    class="flex flex-1 justify-around gap-5 | lg:flex-col lg:gap-16 lg:justify-start"
  >
    <li><HomeIcon color="#fff" /></li>
    <li><CompasIcon color="#333333" /></li>
    <li><MicrophoneIcon color="#333333" /></li>
    <li><CollectionIcon color="#333333" /></li>
    <li><HeartIcon color="#333333" /></li>
  </ul>
</nav>

<style>
  li {
    @apply h-8 w-8  inline-flex justify-center items-center;
  }
</style>
