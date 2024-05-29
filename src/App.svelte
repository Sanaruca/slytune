<script lang="ts">
  import './app.css';
  import Album from './lib/components/Album.svelte';
  import Music from './lib/components/Music.svelte';
  import Navigation from './lib/components/Navigation.svelte';
  import Player from './lib/components/Player.svelte';
  import Playlist from './lib/components/Playlist.svelte';
  import TopBar from './lib/components/TopBar.svelte';
  import { TRACKS, type Song } from './mock/music';
  import { writable } from 'svelte/store';

  let audioElement: HTMLAudioElement;

  let currentTrackSource = '';
  let isPlayingCurrentTrack = false;

  const currentTrack$ = writable<Song>();
  const currentTrackMetaData = {
    duration: 0,
    currentTime: 0,
  };

  let volume = 0.5;

  currentTrack$.subscribe(onTrackChange);

  function onTrackChange(newTrack: Song) {
    if (!newTrack) return;
    currentTrackSource = '.' + newTrack.url;

    audioElement.load();
  }

  function loadTrack(track: Song) {
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
  bind:currentTime={currentTrackMetaData.currentTime}
  bind:duration={currentTrackMetaData.duration}
  bind:volume
>
  <source src={currentTrackSource} />
</audio>

<Navigation
  class="fixed bottom-0 left-0 w-screen z-20 flex items-center gap-10 lg:hover:bg-[#111111] transition-all duration-500 | lg:top-0 lg:h-screen lg:w-auto lg:flex-col lg:pt-12 lg"
/>
<TopBar class="fixed p-4 left-0 top-0 w-screen z-10 | lg:pl-40" />
<main class="p-4 pb-44 mt-20 | lg:ml-20 flex flex-col overflow-auto">
  <section class="mt-8">
    <h3>Playlist para ti</h3>
    <section
      class="playlists | flex gap-4 mt-5 overflow-auto | lg:overflow-hidden"
    >
      <div
        class="bg-green-500 flex-1 relative overflow-hidden h-64 rounded-2xl max-w-96 min-w-64 p-8 text-sm min-w-max"
      >
        <div class="z-[1] relative">
          <h5>PLAYLIST</h5>
          <p class="text-balance max-w-96 mt-2">
            Wiz Khalifa, Post Malone, Soulja Boy and more Made for Guilherme
            Dourado - 50 songs, 3hr 5 min
          </p>
          <h3 class="text-5xl mt-5">Daily Mix 3</h3>
          <div class="flex gap-5 items-center">
            <div class="flex -space-x-3 font-mono leading-6 mt-3">
              <div
                class="img-content w-8 h-8 rounded-full flex items-center justify-center ring-1 shadow-xl z-0"
              >
                <img src="/images/profile_1.jpg" alt="" />
              </div>
              <div
                class="img-content w-8 h-8 rounded-full flex items-center justify-center ring-1 shadow-xl z-10"
              >
                <img src="/images/profile_2.jpg" alt="" />
              </div>
              <div
                class="img-content w-8 h-8 rounded-full flex items-center justify-center ring-1 shadow-xl z-20"
              >
                <img src="/images/profile_3.jpg" alt="" />
              </div>
              <div
                class="img-content w-8 h-8 rounded-full flex items-center justify-center ring-1 shadow-xl z-30"
              >
                <img src="/images/profile_4.jpg" alt="" />
              </div>
              <div
                class="img-content w-8 h-8 rounded-full flex items-center justify-center ring-1 shadow-xl z-40"
              >
                <img src="/images/profile_5.jpg" alt="" />
              </div>
            </div>
            <div class="">
              <span>33k Likes</span>
            </div>
          </div>
        </div>

        <img
          src="/images/guitarman.png"
          alt="guitar man"
          class="absolute object-cover h-[20em] -right-6 -bottom-8"
        />
      </div>
      <Playlist
        title="K-pop"
        description="El Sendero de las Estrellas"
        imageUrl="/images/blackpink.jpg"
      />
      <Playlist
        title="Dance"
        description="¡Solo Baila!"
        imageUrl="/images/dance.jpg"
      />
      <Playlist
        title="Rock & Trap"
        description="Ritmo Rebelde, Fusionado"
        imageUrl="/images/brigme.jpg"
      />
      <Playlist
        title="Guitar Master"
        description="Maestros en la Guitarra"
        imageUrl="/images/poli.jpg"
      />
      <Playlist />
    </section>
  </section>
  <div class="lg:flex lg:flex-row-reverse gap-8 relative">
    <section class="mt-5 | lg:sticky top-0 self-start">
      <h3>Albums sugeridos para ti</h3>

      <div
        class="albums mt-5 flex gap-4 overflow-x-auto snap-x | lg:grid lg:grid-cols-3"
      >
        <Album
          class="snap-start"
          artist="BTS"
          name="Love Yourself 轉 'Tear'"
          imageUrl="/images/ly.webp"
        />
        <Album
          class="snap-start"
          artist="Bring Me the Horizon"
          name="Sempiternal"
          imageUrl="/images/sempiternal.jpg"
        />
        <Album
          class="snap-start"
          artist="Skrillex"
          name="Quest for Fire"
          imageUrl="/images/qff.png"
        />
        <Album
          class="snap-start"
          artist="Falling in Reverse"
          name="Coming Home (Deluxe Edition)"
          imageUrl="/images/cominghome.png"
        />
        <Album
          class="snap-start"
          artist="Oliverse"
          name="Outerworld - EP "
          imageUrl="/images/oliverse.webp"
        />
        <Album
          class="snap-start"
          artist="Lady Gaga"
          name="The Fame Monster"
          imageUrl="/images/famemonster.webp"
        />
      </div>
    </section>
    <section class="mt-5 | flex-1">
      <h3>Trending de la semana</h3>

      <div class="music mt-5 grid gap-4">
        {#each TRACKS as track}
          <Music data={track} onPress={() => loadTrack(track)} />
        {/each}
      </div>
    </section>
    <section
      class="mt-5 | hidden 2xl:block 2xl:w-[30rem] | lg:sticky top-0 self-start"
    >
      <h3>Seleccionado</h3>
      <div class="img-content | h-56 rounded-2xl mt-5">
        <img src={$currentTrack$?.cover ?? '/images/mock.jpg'} alt="" />
      </div>
      {#if $currentTrack$}
        <h2 class="mt-5">{$currentTrack$.name} by {$currentTrack$.artist}</h2>
        <div class="font-thin">
          <p class="mt-5">
            En esta sección, encontrarás una breve descripcion sobre la musica
            seleccionada. Sumérgete en los detalles, descubre los matices y
            conecta con la música de una manera única.
          </p>
          <span
            class="block mt-3 font-semibold"
            style="font-family: 'DM Sans', 'Courier New', Courier, monospace;"
            >{$currentTrack$.year} <span class="text-gray-500">|</span>
            {$currentTrack$.genere}
          </span>
        </div>
      {:else}
        <div class="font-thin">
          <p class="mt-5">
            En esta sección, encontrarás una breve descripcion sobre la musica
            seleccionada. Sumérgete en los detalles, descubre los matices y
            conecta con la música de una manera única.
          </p>
          <span
            class="block mt-3 font-semibold"
            style="font-family: 'DM Sans', 'Courier New', Courier, monospace;"
            >Año <span class="text-gray-500">|</span> Genero
          </span>
        </div>
      {/if}
    </section>
  </div>
</main>
<Player
  class="rounded-lg fixed z-20 bottom-[3.8rem] gap-5 left-1/2 w-[calc(100vw-.5rem)] -translate-x-1/2 | justify-between lg:flex lg:static  lg:translate-x-0 lg:w-full lg:rounded-none lg:pb-5 lg:px-12"
  volume={volume * 100}
  onVolumeChange={(v) => (volume = v / 100)}
  track={$currentTrack$}
  status={isPlayingCurrentTrack ? 'playing' : 'paused'}
  onPlayPause={playOrPauseTrack}
  trackPlay={currentTrackMetaData}
  onTimeChange={(time) => (currentTrackMetaData.currentTime = time)}
/>

<style>
  .playlists {
    @apply relative;
    @apply after:hidden lg:after:block after:absolute after:w-20  after:right-0 after:top-0 after:h-full;
  }
  .playlists::after {
    background: linear-gradient(270deg, black, transparent);
  }
</style>
