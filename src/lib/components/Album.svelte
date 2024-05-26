<script>
  let className = '';

  export let name = 'RnB music';
  export let artist = 'Lorem ipsum';
  export let imageUrl = '/images/mock.jpg';

  export { className as class };
</script>

<div
  class="bg-black rounded-2xl stroke inline-block px-4 py-4 pb-2 {className}"
>
  <div class="img-content | bg-slate-500 h-[7.8rem] w-[8.7rem] rounded-2xl">
    <img src={imageUrl} alt="" />
  </div>
  <div class="max-w-[8rem]">
    <h6 class="mt-2">{name}</h6>
    <span class="text-sm text-gray-400">{artist}</span>
  </div>
</div>
