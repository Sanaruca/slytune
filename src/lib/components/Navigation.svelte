<script>
  import HomeIcon from '../icons/home-icon.svelte';
  import CompasIcon from '../icons/compass-icon.svelte';
  import MicrophoneIcon from '../icons/microphone-icon.svelte';
  import CollectionIcon from '../icons/collection-icon.svelte';
  import HeartIcon from '../icons/heart-icon.svelte';
  let className = '';
  export { className as class };
</script>

<nav class={className}>
  <ul class="flex justify-around gap-5">
    <li><HomeIcon color="#fff" /></li>
    <li><CompasIcon color="#333333" /></li>
    <li><MicrophoneIcon color="#333333" /></li>
    <li><CollectionIcon color="#333333" /></li>
    <li><HeartIcon color="#333333" /></li>
  </ul>
</nav>

<style>
  nav {
    background: #000;
    @apply p-5;
  }

  li {
    @apply h-8 w-8  inline-flex justify-center items-center;
  }
</style>
