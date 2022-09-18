<script>
  import "../app.postcss";
  import { onMount } from "svelte";
  import { themeChange } from 'theme-change'

  onMount(() => {
    themeChange(false)
    // 👆 false parameter is required for svelte
  })
</script>

<div class="flex flex-col min-h-screen">
  <header class="navbar bg-neutral text-neutral-content overflow-clip">
    <div class="flex-1">
      <span class="normal-case text-xl px-4 font-bold">Stelve</span>
      <span class="normal-case text-xl px-2 font-light whitespace-nowrap">A SvelteKit playground</span>
    </div>
    <div class="flex-none">
      🌞<input type="checkbox" data-toggle-theme="dark,light" data-act-class="ACTIVE" class="toggle mx-2" />🌝
    </div>
  </header>

  <main class="container mx-auto flex-grow">
    <slot></slot>
  </main>
</div>
