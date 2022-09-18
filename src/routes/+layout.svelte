<script>
  import "../app.postcss";
</script>

<header class="navbar bg-neutral text-neutral-content">
  <div class="navbar-start">
    <span class="normal-case text-xl px-4 font-bold">Stelve</span>
    <span class="normal-case text-xl px-2 font-light">A SvelteKit playground</span>
  </div>
</header>

<main class="container mx-auto">
  <slot></slot>
</main>
