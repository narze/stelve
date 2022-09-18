<script>
  import "../app.postcss";
  import { onMount } from "svelte";
  import { themeChange } from 'theme-change'
	import { browser } from "$app/environment";

  let darkMode = false

  onMount(() => {
    themeChange(false)

    if (browser) {
      const htmlTheme = document.querySelector("html")?.dataset.theme

      if (htmlTheme === "dark") {
        // console.log('html theme="dark"')
        darkMode = true
      } else if (!htmlTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // console.log('system theme = "dark"')
        darkMode = true
      }
    }
  })
</script>

<div class="flex flex-col min-h-screen">
  <header class="navbar bg-neutral text-neutral-content overflow-clip">
    <div class="flex-1">
      <span class="normal-case text-xl px-4 font-bold">Stelve</span>
      <span class="normal-case text-xl px-2 font-light whitespace-nowrap">A SvelteKit playground</span>
    </div>
    <div class="flex-none">
      🌞<input type="checkbox" data-toggle-theme="light,dark" data-act-class="ACTIVE" class="toggle mx-2" checked={darkMode} />🌚
      <!-- {darkMode ? "dark" : "light"} -->
    </div>
  </header>

  <main class="container mx-auto flex-grow">
    <slot></slot>
  </main>
</div>
