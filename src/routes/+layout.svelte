<script>
    import '../app.css';
    import Header from '$lib/layout/Header/Header.svelte';
    import Footer from '$lib/layout/Footer/Footer.svelte';
  </script>
  
  <Header />
  <slot />
  <Footer />