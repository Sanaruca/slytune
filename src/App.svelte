<script lang="ts">
  import './app.css';

  let count: number = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment} class="bg-red-700">
  count is {count}
</button>

<style lang="postcss">
</style>
