<script>
  import SearchBar from './SearchBar.svelte';

  let className = '';

  export { className as class };
</script>

<section class="topbar | flex gap-3 {className}">
  <SearchBar class="flex-1"></SearchBar>
  <div
    class="image-content overflow-hidden | h-14 w-14 bg-slate-300 rounded-xl"
  >
    <img src="/images/profile.jpg" alt="" />
  </div>
</section>

<style>
  .topbar {
    background: rgb(0, 0, 0);
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 1) 60%,
      rgba(0, 0, 0, 0) 100%
    );
  }
</style>
