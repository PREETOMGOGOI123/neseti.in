<script>
  import logo from "$lib/images/neseti-logo.png";
  import NavMenu from "./NavBar/NavMenu.svelte";
</script>

<header class="bg-white shadow-md">
  <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
    <div class="flex items-center">
      <img src={logo} alt="Logo" class="h-12 w-auto mr-6" />
      <a
        href="/"
        class="text-xl font-semibold text-gray-800 hover:text-blue-600 transition duration-300"
        >Neseti</a
      >
    </div>
    <NavMenu />
</header>
