<script lang="ts">
  import logo from './assets/svelte.png';
  import Counter from './lib/Counter.svelte';
</script>

<main
  class="flex justify-center items-center flex-col fixed right-0 top-0 bg-indigo-50 rounded-lg p-10 z-50"
>
  <img src={logo} alt="Svelte Logo" class="w-10 h-10 shadow" />

  <div text="blue">Hello Tampermonkey script</div>
  <Counter />
</main>

<style>
  
</style>
