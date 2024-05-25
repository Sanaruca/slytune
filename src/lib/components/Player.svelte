<script lang="ts">
  import { type Track } from '../../mock/music';
  import PauseIcon from '../icons/pause-icon.svelte';
  import PlayIcon from '../icons/play-icon.svelte';

  export let track: Track | undefined;
  export let className = '';

  export let onPlayPause: (() => void) | undefined = undefined;
  export let status: 'playing' | 'paused' = 'paused';

  export { className as class };
</script>

{#if track}
  <section
    style={track.util && 'background-color: ' + track.util.player_color}
    class="player | py-3 px-4 bg-gray-600 {className}"
  >
    <div class="player__song | flex gap-2 items-center">
      <div
        class="player__song__cover image-content overflow-hidden | bg-slate-500 h-14 w-14 rounded-xl"
      >
        <img src={track.cover} alt="" />
      </div>
      <div>
        <h4>{track.name}</h4>
        <h5 class="text-sm">{track.artist}</h5>
      </div>
      <div class="actions | ml-auto self-center flex items-center">
        <button on:click={onPlayPause}>
          {#if status === 'playing'}
            <PauseIcon color="white" />
          {:else}
            <PlayIcon color="white" />
          {/if}
        </button>
      </div>
    </div>
  </section>
{/if}
