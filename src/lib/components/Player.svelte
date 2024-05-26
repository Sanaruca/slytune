<script lang="ts">
  import { type Track } from '../../mock/music';
  import NextIcon from '../icons/next-icon.svelte';
  import PauseIcon from '../icons/pause-icon.svelte';
  import PlayIcon from '../icons/play-icon.svelte';
  import RepeatAlternativeIcon from '../icons/repeat-alternative-icon.svelte';
  import RepeatIcon from '../icons/repeat-icon.svelte';
  import AleatoriIcon from '../icons/aleatori-icon.svelte';
  import ShuffleIcon from '../icons/shuffle-icon.svelte';
  import CollectionIcon from '../icons/collection-icon.svelte';
  import VolumeUpIcon from '../icons/volume-up-icon.svelte';

  export let volume = 50;

  export let track: Track | undefined;
  export let trackPlay: {
    duration: number;
    currentTime: number;
  } = {
    duration: 300,
    currentTime: 0,
  };
  export let className = '';

  export let onPlayPause: (() => void) | undefined = undefined;
  export let onTimeChange: ((time: number) => void) | undefined = undefined;
  export let onVolumeChange: ((volume: number) => void) | undefined = undefined;
  export let status: 'playing' | 'paused' = 'paused';

  export { className as class };

  function formattime(seconds: number): string {
    //Get number of minutes from seconds
    const minutes = Math.floor(seconds / 60);
    //Get remaining seconds
    seconds = Math.floor(seconds % 60);
    //If the seconds are a single digit number

    let secondsString = seconds + '';
    if (seconds < 10) {
      //Add a "0" in front of the number
      secondsString = '0' + seconds;
    }
    //Return the final formatted time
    return `${minutes}:${secondsString}`;
  }

  function getProcentage(currentTime: number, duration: number): `${number}%` {
    const porcentage = `${(Math.floor(currentTime) / duration) * 100}%`;
    return porcentage as any;
  }
</script>

{#if track}
  <section
    style={track.util && 'background-color: ' + track.util.player_color}
    class="player | py-3 px-4 bg-gray-600 {className}"
  >
    <div class="player__song | flex gap-2 items-center | lg:w-64">
      <div
        class="player__song__cover image-content overflow-hidden | bg-slate-500 h-14 w-14 rounded-xl"
      >
        <img src={track.cover} alt="" />
      </div>
      <div>
        <h4>{track.name}</h4>
        <h5 class="text-sm">{track.artist}</h5>
      </div>
      <div
        class="player__song__actions | ml-auto self-center flex items-center"
      >
        <button on:click={onPlayPause} class="lg:hidden">
          {#if status === 'playing'}
            <PauseIcon color="white" />
          {:else}
            <PlayIcon color="white" />
          {/if}
        </button>
      </div>
    </div>
    <div
      class="player__contorls flex-1 flex-col gap-3 items-center | hidden lg:flex"
    >
      <div class="player__contorls__buttons | flex gap-5 items-center">
        <ShuffleIcon color="#999999" size={25} />
        <NextIcon color="#999999" size={25} class="-scale-100" />
        <button class="p-3 rounded-full bg-white" on:click={onPlayPause}>
          {#if status === 'playing'}
            <PauseIcon />
          {:else}
            <PlayIcon />
          {/if}
        </button>
        <NextIcon color="#999999" size={25} />
        <RepeatIcon color="#999999" size={25} />
      </div>
      <div
        class="player__contorls__timeline | flex w-full gap-7"
        style="font-family: 'DM Sans', 'Courier New', Courier, monospace;"
      >
        <span class="w-10">{formattime(trackPlay.currentTime)}</span>
        <input
          type="range"
          class="flex-1 cursor-pointer"
          min="0"
          max={trackPlay.duration}
          on:input={(e) => onTimeChange(+e.target['value'])}
          bind:value={trackPlay.currentTime}
        />
        <span class="w-10">{formattime(trackPlay.duration)}</span>
      </div>
    </div>
    <div class="player__more_controls w-64 | hidden | lg:block">
      <div class="player__more_controls__volume | flex gap-5">
        <VolumeUpIcon color="white" />
        <input
          type="range"
          class="flex-1 cursor-pointer"
          min="0"
          max={100}
          bind:value={volume}
          on:input={(e) => onVolumeChange(+e.target['value'])}
        />
      </div>
      <div class="player__more_controls__actions | flex gap-5 justify-end">
        <RepeatAlternativeIcon color="#F3F4F6" />
        <AleatoriIcon color="#F3F4F6" />
        <CollectionIcon color="white" />
      </div>
    </div>
  </section>
{/if}
