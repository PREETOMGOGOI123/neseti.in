<script>
  import { onMount } from 'svelte';
  import Affiliations from "$lib/components/Affiliations.svelte";
  
  const centers = [
    { name: 'Head Office', location: 'South Sonari Gaon, Na-Ali, Dhekiajuli, Near Dr.Nobin Bordoloi College, Jorhat-785009, Assam', contact: '+91 8638744236, 0376-2911513', description: 'Neseti Institute Head Office provides comprehensive information and support for all courses offered.' },
    { name: 'Sivasagar Center', location: 'Babupatty, In front of Kali Mandir, Sivasagar', contact: '7002767392', description: 'Neseti Institute Babupatty Center offers a variety of courses in technology and digital skills.' },
    { name: 'Borhampur Center', location: 'Borhampur, Near Battalion Camp, Nagaon-782102, Assam', contact: '8638984215', description: 'Neseti Institute Borhampur Center specializes in healthcare and vocational training.' },
    { name: 'Dhalajan Center', location: 'Dhalajan Baruah Complex, Dhalajan, Jorhat-785616, Assam', contact: '+91 9101816553', description: 'Neseti Institute Dhalajan Center provides courses in makeup artistry and astrology.' },
    { name: 'Ankita Cutting and Embroidery Training School', location: 'Dhalajan, Jorhat-785616, Assam', contact: '9954173847', description: 'Neseti Institute Ankita Cutting and Embroidery Training School offers specialized training in cutting and embroidery.' },
    { name: 'Namchuk Center', location: 'Namchuk, Pukhuripuria Gaon, Teok, Jorhat-785112, Assam', contact: '9101532223', description: 'Neseti Institute Namchuk Center provides vocational training and skill development.' },
    { name: 'Jail-Road Center', location: 'Jail-Road, Near Junaki Sangha Vidalaya, Jorhat-785001, Assam', contact: '9957639981', description: 'Neseti Institute Jail-Road Center offers various courses in digital skills.' },
    { name: 'Progya Tailoring Center', location: 'Progya Tailoring, Bora Bazaar, Teok, Jorhat-785112', contact: '9401472168', description: 'Neseti Institute Progya Tailoring Center specializes in tailoring and fashion design.' },
    { name: 'Princita Tailoring Center', location: 'Princita Tailoring, Phukan Habi Gaon, Mogroi, Nakasari, Jorhat-785635', contact: '6000832852', description: 'Neseti Institute Princita Tailoring Center offers courses in tailoring and garment making.' },
    { name: 'Abhinash Complex Center', location: 'Abhinash Complex, Cahraibahi-785616', contact: '8822633074', description: 'Neseti Institute Abhinash Complex Center provides various vocational training programs.' }
  ];

  const faculty = [
    { name: 'Mr. Ranjit Saikia', role: 'Director', experience: 'M.A(Sociology, Psychology), PGDCA, Certificate in Health and Family Education(HIV), DHE(Diploma in Hardware Engineering), Certificate in Diet and Nutritionist)' },
    { name: 'Debajit Saikia', role: 'Assistant Director', experience: 'M.A in Assamese and Hindi, Advance Diploma in Computer Application' },
    { name: 'Ankur Bora', role: 'General Manager', experience: 'Skilled in institutional management' },
    { name: 'Dr. Chandraj Gogoi', role: 'Chairperson', experience: 'M.B.B.S, M.D' },
    { name: 'Samarjit Saikia', role: 'Chairperson', experience: 'B.A COPA' },
    { name: 'Bhagreshree Hazarika', role: 'Faculty', experience: 'B.A., PGDCA' },
    { name: 'Sumi Bora', role: 'Faculty', experience: 'Diploma in Laboratory Technician' },
    { name: 'Sanjiv Saikia', role: 'Faculty', experience: 'B.A., PGDCA(Dibrugarh University)' },
    { name: 'Prince Phukan', role: 'Faculty', experience: 'M.Sc IT' },
    { name: 'Mampi Handique', role: 'Faculty cum Marketing officer', experience: 'M.A Education' },
    { name: 'Mainee Kakoti', role: 'Faculty cum Branch Director, Namsuk, Teok', experience: '' },
    { name: 'Javed Akhtar', role: 'Branch Director, Dhalanjan', experience: '' },
    { name: 'Sumitra Baruah', role: 'Branch Director, Ankita Cutting and Embroidery Training School', experience: '' },
    { name: 'Mousumi Saikia Borkakoti', role: 'Branch Director, Princita Tailor', experience: '' },
    { name: 'Kaberi Sadhanidar', role: 'Branch Director, Praygya Tailoring', experience: '' },
    { name: 'Joonmoni Gogoi', role: 'Branch Director, Jailroad and Sivasagar', experience: 'M.Sc Agriculture' },
    { name: 'Chiranjeev Bora', role: 'Branch Director, Charaibahi Nesiti Center', experience: 'M.Sc Agriculture' },
    { name: 'Sudarshan Bora', role: 'Account Officer', experience: '' },
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
  /*
    const galleryImages = [
    
    ]
    let currentImage = 0;
    
    onMount(() => {
      const interval = setInterval(() => {
        currentImage = (currentImage + 1) % galleryImages.length;
      }, 5000);
      
      return () => clearInterval(interval);
    });
    */
</script>

<div class=" min-h-screen">
  <section class="text-gray-800 py-20">
    <div class="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl font-bold mb-4">About Neseti Institute - Leading Educational Institution in Assam</h1>
      <p class="text-xl mb-8">Empowering minds since 2014</p>
      <p class="text-lg text-justify">
        Neseti Institute, founded in 2014, is a premier educational institution in Assam dedicated to bridging the gap between education and industry needs. We provide high-quality, innovative learning experiences in technology, digital skills, healthcare, makeup artistry, and astrology. Our diverse range of practical courses empowers students to thrive in rapidly evolving industries. With over 200 students trained across multiple centers in Assam, we offer programs taught by industry expert instructors who are actively working in their fields. Our courses are MCA & ISO certified, and NSDC & MSME affiliated, ensuring the highest standards of education and recognition.
      </p>
    </div>
  </section>
  <!--
  <section class="p-4"> 
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {#each galleryImages as image}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="../src/lib/images/gallery-images/WhatsApp Image 2023-01-18 at 3.04.02 PM (1).jpeg"
            alt="Gallery image of Neseti Institute"
            class="w-full h-64 object-cover"
          />
        </div>
      {/each}
    </div>
  </section>
-->
  

  <div class="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-16 ">


    <section class="mb-16 flex flex-col items-center">
      <button class="bg-gray-800 w-[80%] text-white px-4 py-2 rounded-md mb-4" onclick="document.getElementById('centersDropdown').classList.toggle('hidden')">
         View all Centers 👆
      </button>
      <div id="centersDropdown" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hidden">
        {#each centers as center}
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-gray-800 hover:shadow-lg transition duration-300" aria-labelledby="{center.name}">
            <h3 class="text-xl font-semibold text-blue-800 mb-2" id="{center.name}">{center.name}</h3>
            <p class="text-blue-600 mb-2">{center.location}</p>
            <p class="text-blue-700">Contact: {center.contact}</p>
            <p class="text-blue-700">{center.description}</p>
          </div>
        {/each}
      </div>
    </section>

    <section class=" flex flex-col items-center">
      <button class="w-[80%] bg-green-600 text-white px-4 py-2 rounded-md mb-4 flex justify-center items-center" onclick="document.getElementById('teamDropdown').classList.toggle('hidden')">
        Our Team 👆
      </button>
      <div id="teamDropdown" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 hidden">
        {#each faculty as member}
          <div class="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 hover:shadow-lg transition duration-300" aria-labelledby="{member.name}">
            <div class="flex items-center mb-4">
              <div class="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mr-4">
                <span class="text-green-800 font-bold">{member.name.charAt(0)}</span>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-blue-800">{member.name}</h3>
                <p class="text-blue-600">{member.role}</p>
              </div>
            </div>
            <p class="text-blue-700">{member.experience}</p>
          </div>
        {/each}
      </div>
    </section>

  </div>
  <section class="w-full bg-blue-50">
    <Affiliations />
  </section>
    
</div>
