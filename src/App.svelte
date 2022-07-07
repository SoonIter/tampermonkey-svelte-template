<script lang="ts">
  import logo from './assets/svelte.png';
  import Counter from './lib/Counter.svelte';
</script>

<main
  class="flex justify-center items-center flex-col fixed right-0 top-0 bg-indigo-50 rounded-lg p-10 z-50"
>
  <img src={logo} alt="Svelte Logo" class="w-10 h-10 shadow" />
  <div class="w-30 h-10 shadow m-10 font-bolder text-orange-500 font-mono">
    Hello Typescript + Tailwind + Svelte
  </div>

  <Counter />
</main>

<style>
</style>
