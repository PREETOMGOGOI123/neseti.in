<script>
  import Affiliations from "$lib/components/Affiliations.svelte";
</script>
<section class="bg-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-8">About Us</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="/src/lib/images/gallery-images/WhatsApp Image 2023-01-18 at 3.04.02 PM (1).jpeg" alt="Neseti Institute" class="rounded-lg shadow-md">
        </div>
        <div>
          <h3 class="text-2xl font-semibold text-gray-900 mb-4">Empowering Minds Since 2022</h3>
          <p class="text-gray-600 mb-6">
            Neseti, founded in 2022, is an educational institution dedicated to bridging the gap between education and industry needs. We provide high-quality, innovative learning experiences in technology, digital skills, healthcare, makeup artistry, and astrology. Our diverse range of practical courses empowers students to thrive in rapidly evolving industries, from the digital landscape to healthcare practices, beauty trends, and celestial studies. By offering this unique blend of programs, we ensure our students are well-equipped for various career paths and personal interests.
          </p>
          <ul class="space-y-2 mb-6">
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Over 200+ students trained across multiple centers in Assam
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              Industry expert instructors actively working in their fields
            </li>
            <li class="flex items-center">
              <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              MCA & ISO certified, NSDC & MSME affiliated programs
            </li>
          </ul>
          <a href="/about" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Learn More About Us
          </a>
        </div>
      </div>
    </div>
  </section>
  
  <Affiliations />