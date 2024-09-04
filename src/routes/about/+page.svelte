<script>
  import { onMount } from 'svelte';
  import Affiliations from "$lib/components/Affiliations.svelte";
  const centers = [
    { name: 'Guwahati Center', location: 'Guwahati, Assam', contact: '+91 98765 43210' },
    { name: 'Jorhat Center', location: 'Jorhat, Assam', contact: '+91 98765 43211' },
    { name: 'Dibrugarh Center', location: 'Dibrugarh, Assam', contact: '+91 98765 43212' }
  ];

  const faculty = [
    { name: 'Dr. Ranjit Saikia', role: 'Director', experience: 'Extensive experience in leadership and education' },
    { name: 'Debajit Saikia', role: 'Assistant Director', experience: 'Proven track record in educational administration' },
    { name: 'Samarjit Saikia', role: 'Faculty', experience: 'Expertise in teaching and research' },
    { name: 'Bhagreshree Hazarika', role: 'Faculty', experience: 'Specialized in academic instruction' },
    { name: 'Ankur Bora', role: 'General Manager', experience: 'Skilled in institutional management' },
    { name: 'Subhajit Changmai', role: 'Marketing Manager', experience: 'Proficient in educational marketing strategies' },
    { name: 'Sumi Bora', role: 'Faculty', experience: 'Dedicated to student success and development' },
    { name: 'Dr. Chandraj Gogoi', role: 'Advisor', experience: 'Valuable insights in educational consulting' },
    { name: 'Joonmoni Gogoi', role: 'Branch Director', experience: 'Experienced in managing educational branches' }
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  ];

  const affiliations = [
    { name: 'MCA (Ministry of Corporate Affairs)', logo: 'https://via.placeholder.com/150' },
    { name: 'ISO', logo: 'https://via.placeholder.com/150' },
    { name: 'MSME', logo: 'https://via.placeholder.com/150' },
    { name: 'NSDC (National Skill Development Corporation)', logo: 'https://via.placeholder.com/150' },
    { name: 'Startup India', logo: 'https://via.placeholder.com/150' },
    { name: 'Startup Assam', logo: 'https://via.placeholder.com/150' },
    { name: 'Om Vijoy Charitable Trust', logo: 'https://via.placeholder.com/150' },
    { name: 'MYWN SKILL INDIA', logo: 'https://via.placeholder.com/150' }
  ];

  let currentImage = 0;

  onMount(() => {
    const interval = setInterval(() => {
      currentImage = (currentImage + 1) % galleryImages.length;
    }, 5000);

    return () => clearInterval(interval);
  });
</script>

<div class="bg-blue-50 min-h-screen">
  <section class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold mb-4">About Neseti Institute</h1>
      <p class="text-xl mb-8">Empowering minds since 2014</p>
      <p class="text-lg">
        Neseti, founded in 2014, is an educational institution dedicated to bridging the gap between education and industry needs. We provide high-quality, innovative learning experiences in technology, digital skills, healthcare, makeup artistry, and astrology. Our diverse range of practical courses empowers students to thrive in rapidly evolving industries. With over 200 students trained across multiple centers in Assam, we offer programs taught by industry expert instructors who are actively working in their fields. Our courses are MCA & ISO certified, and NSDC & MSME affiliated, ensuring the highest standards of education and recognition.
      </p>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <section class="mb-16 bg-white rounded-lg shadow-md p-8">
      <h2 class="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
      <p class="text-blue-700 leading-relaxed">
        At Neseti Institute, our mission is to empower individuals with cutting-edge skills in technology and digital domains. We strive to provide high-quality education that bridges the gap between academic knowledge and industry requirements, fostering innovation and creating future-ready professionals.
      </p>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Our Centers</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each centers as center}
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">{center.name}</h3>
            <p class="text-blue-600 mb-2">{center.location}</p>
            <p class="text-blue-700">Contact: {center.contact}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16">
      <h2 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Our Faculty</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each faculty as member}
          <div class="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
            <h3 class="text-xl font-semibold text-blue-800 mb-2">{member.name}</h3>
            <p class="text-blue-600 mb-2">{member.role}</p>
            <p class="text-blue-700">{member.experience}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class="mb-16 ">
      <Affiliations />
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-blue-900 mb-4 text-center">Gallery</h2>
      <div class="relative h-96 rounded-lg overflow-hidden shadow-lg">
        {#each galleryImages as image, index}
          <img
            src={image}
            alt="Neseti Institute"
            class="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
            style="opacity: {index === currentImage ? 1 : 0}"
          />
        {/each}
        <div class="absolute inset-0 bg-blue-900 bg-opacity-30"></div>
      </div>
    </section>
  </div>
</div>
