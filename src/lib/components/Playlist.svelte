<script>
  import PlayIcon from '../icons/play-icon.svelte';

  export let title = 'Lorem, ipsum dolor';
  export let description = 'Lorem ipsum dolor sit';
</script>

<div
  class="img-content flex-none flex items-end | rounded-2xl bg-slate-200 h-64 w-64"
>
  <img src="/images/mock.jpg" alt="" />
  <div
    class="flex items-center gap-3 p-5 rounded-2xl bg-black/60 backdrop-blur-sm m-2"
  >
    <div class="text-sm">
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
    <button class="rounded-full bg-white p-4 flex-none">
      <PlayIcon />
    </button>
  </div>
</div>
