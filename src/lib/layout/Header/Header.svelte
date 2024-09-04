<script>
  import logo from "$lib/images/neseti-logo.png";
  import NavMenu from "./NavBar/NavMenu.svelte";
  import { onMount } from 'svelte';

  let isMenuOpen = false;
  let isMobile = false;
  let isTablet = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  onMount(() => {
    const checkScreenSize = () => {
      isMobile = window.innerWidth < 768;
      isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  });
</script>

<header class="bg-white shadow-md">
  <nav class="container mx-auto px-6 py-4 flex items-center justify-between relative">
    <div class="flex items-center">
      <img src={logo} alt="Logo" class="h-12 w-auto mr-6" />
      <a
        href="/"
        class="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
        >Neseti</a
      >
    </div>
    {#if isMobile || isTablet}
      <button on:click={toggleMenu} class="text-gray-600 hover:text-gray-900 focus:outline-none z-[10001] relative">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    {:else}
      <NavMenu />
    {/if}
  </nav>
  {#if (isMobile || isTablet) && isMenuOpen}
    <div class="px-6 py-4 bg-white">
      <NavMenu />
    </div>
  {/if}
</header>
