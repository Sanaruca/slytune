<script lang="ts">
  import TwoTonesHeartIcon from '../icons/two-tones-heart-icon.svelte';
  import HeatphonesIcon from '../icons/headphones-icon.svelte';
  import { type Track } from '../../mock/music';

  export let data: Track = {
    name: '',
    artist: '',
    genere: '',
    url: '',
    cover: '',
  };

  export let onPress: () => void;
</script>

<button
  class="bg-black rounded-2xl stroke flex gap-5 p-4 cursor-pointer"
  on:click={() => onPress()}
>
  <div
    class="image-content | flex-none bg-slate-500 h-16 w-16 rounded-xl overflow-hidden"
  >
    <img src={data.cover} alt="" />
  </div>
  <div style="text-align: initial;">
    <h4>{data.name}</h4>
    <p style="color: #A5A5A5;" class="flex gap-3 font-semibold mt-3">
      <HeatphonesIcon color="#A5A5A5" /> 311k
    </p>
  </div>
  <div class="actions | ml-auto self-center">
    <div
      class="like | stroke rounded-full h-12 w-12 flex justify-center items-center"
    >
      <TwoTonesHeartIcon color="#2BD268" />
    </div>
  </div>
</button>
