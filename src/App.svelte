<script lang="ts">
  import './app.css';
  import Album from './lib/components/Album.svelte';
  import Music from './lib/components/Music.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import Player from './lib/components/Player.svelte';
  import TopBar from './lib/components/TopBar.svelte';
  import { TRACKS, type Track } from './mock/music';
  import { writable } from 'svelte/store';

  let audioElement: HTMLAudioElement;

  let currentTrackSource = '';
  let isPlayingCurrentTrack = false;

  const currentTrack$ = writable<Track>();

  currentTrack$.subscribe(onTrackChange);

  function onTrackChange(newTrack: Track) {
    if (!newTrack) return;
    currentTrackSource = '.' + newTrack.url;

    audioElement.load();
  }

  function loadTrack(track: Track) {
    currentTrack$.set(track);
  }

  function playOrPauseTrack() {
    if (isPlayingCurrentTrack) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  }
</script>

<audio
  autoplay={false}
  bind:this={audioElement}
  on:play={() => (isPlayingCurrentTrack = true)}
  on:pause={() => (isPlayingCurrentTrack = false)}
  on:loadeddata={() => audioElement.play()}
>
  <source src={currentTrackSource} />
</audio>

<TopBar class="fixed p-4 left-0 top-0 w-screen" />
<main class="p-4 pb-44 pt-20">
  <Navigation class="fixed bottom-0 left-0 w-screen" />
  <section class="mt-8">
    <div class="bg-green-400 h-72 rounded-2xl"></div>
  </section>
  <section class="mt-5">
    <h3>Albums sugeridos para ti</h3>

    <div class="albums mt-5 flex gap-4 overflow-x-auto snap-x">
      <Album class="snap-start" />
      <Album class="snap-start" />
      <Album class="snap-start" />
      <Album class="snap-start" />
      <Album class="snap-start" />
    </div>
  </section>
  <section class="mt-5">
    <h3>Trending de la semana</h3>

    <div class="music mt-5 grid gap-4">
      {#each TRACKS as track}
        <Music data={track} onPress={() => loadTrack(track)} />
      {/each}
    </div>
  </section>
  <Player
    track={$currentTrack$}
    status={isPlayingCurrentTrack ? 'playing' : 'paused'}
    onPlayPause={playOrPauseTrack}
    class="rounded-lg fixed bottom-[5rem] left-1/2 w-[calc(100vw-.5rem)] -translate-x-1/2"
  />
</main>
