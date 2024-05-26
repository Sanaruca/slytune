<script>
  import BadgeCheckIcon from '../icons/badge-check-icon.svelte';
  import BellIcon from '../icons/bell-icon.svelte';
  import CogIcon from '../icons/cog-icon.svelte';
  import FlagIcon from '../icons/flag-icon.svelte';
  import SearchBar from './SearchBar.svelte';

  let className = '';

  export { className as class };
</script>

<section class="topbar | flex gap-3 | {className}">
  <SearchBar class="flex-1"></SearchBar>
  <div class="account | flex gap-3 stroke rounded-2xl | sm:pl-3">
    <ul class="account__actions | hidden items-center gap-3 | sm:flex">
      <li>
        <BadgeCheckIcon color="white" />
      </li>
      <li>
        <FlagIcon color="white" />
      </li>
      <li>
        <CogIcon color="white" />
      </li>
      <li>
        <BellIcon color="white" />
      </li>
    </ul>
    <div
      class="image-content overflow-hidden | h-14 w-14 bg-slate-300 rounded-xl"
    >
      <img src="/images/profile.jpg" alt="" />
    </div>
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
