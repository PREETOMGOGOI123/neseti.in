<script>
    import '../app.css';
    import Header from '$lib/layout/Header/Header.svelte';
    import Footer from '$lib/layout/Footer/Footer.svelte';
    let {children} = $props()
</script>
  
<Header />
  {@render children()}
<Footer />