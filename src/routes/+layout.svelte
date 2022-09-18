<script>
  import "../app.postcss";
</script>

<div class="flex flex-col min-h-screen">
  <header class="navbar bg-neutral text-neutral-content overflow-clip">
    <span class="normal-case text-xl px-4 font-bold">Stelve</span>
    <span class="normal-case text-xl px-2 font-light whitespace-nowrap">A SvelteKit playground</span>
  </header>

  <main class="container mx-auto flex-grow">
    <slot></slot>
  </main>
</div>
