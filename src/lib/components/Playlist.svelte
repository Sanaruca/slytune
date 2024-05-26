<script>
  import PlayIcon from '../icons/play-icon.svelte';

  export let title = 'Lorem, ipsum dolor';
  export let description = 'Lorem ipsum dolor sit';
  export let imageUrl = '/images/mock.jpg';
</script>

<button
  class="img-content flex-none flex items-end | rounded-2xl bg-slate-200 h-64 w-64"
>
  <img src={imageUrl} alt="" />
  <div
    class="flex items-center justify-between gap-3 p-5 rounded-2xl bg-black/60 backdrop-blur-sm m-2 w-full"
  >
    <div class="text-sm text-start">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
    <button class="rounded-full bg-white p-4 flex-none">
      <PlayIcon />
    </button>
  </div>
</button>
