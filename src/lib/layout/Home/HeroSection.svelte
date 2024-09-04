<script>
    import { onMount } from 'svelte';     
    const slides = [
      { image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'MCA & ISO Certified', description: 'Courses approved by Ministry of Corporate Affairs and ISO certified' },
      { image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'NSDC & MSME Affiliated', description: 'Programs affiliated with National Skill Development Corporation and MSME' },
      { image: 'https://images.unsplash.com/photo-1629787155650-9ce3697dcb38?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Startup India & Startup Assam', description: 'Recognized by Startup India and Startup Assam initiatives' },
      { image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Industry Expert Instructors', description: 'Learn from professionals actively working in their respective fields' }
    ];
  
    let currentSlide = 0;
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
    }
  
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    }
  
    onMount(() => {
      const interval = setInterval(nextSlide, 6000);
      return () => clearInterval(interval);
    });
  
    const announcements = [
      "Admission into HS and HSLC direct examination starting soon!",
    ];
</script>

<section class="relative bg-gray-900 text-white">
  <div class="absolute inset-0 overflow-hidden">
    {#each slides as slide, index}
      <div class="absolute inset-0 transition-opacity duration-1000" class:opacity-100={index === currentSlide} class:opacity-0={index !== currentSlide}>
        <img src={slide.image} alt={slide.title} class="object-cover w-full h-full" />
        <div class="absolute inset-0 bg-slate-900 opacity-75"></div>
      </div>
    {/each}
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
    <div class="text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
        {slides[currentSlide].title}
      </h1>
      <p class="text-xl md:text-2xl mb-8">
        {slides[currentSlide].description}
      </p>
      <a href="/courses" class="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        Explore Courses
      </a>
    </div>
  </div>

  <button on:click={prevSlide} class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button on:click={nextSlide} class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
  <div class="absolute bottom-0 left-0 right-0 bg-blue-600 bg-opacity-90 py-3 px-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <span class="font-semibold">Announcements:</span>
      <div class="flex-1 ml-4 overflow-hidden">
        <div class="animate-marquee whitespace-nowrap">
          {#each announcements as announcement}
            <span class="mx-4">{announcement}</span>
          {/each}
        </div>
      </div>
    </div>
  </div>
</section>