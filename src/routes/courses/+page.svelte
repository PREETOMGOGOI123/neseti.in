<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    const industries = [
      {
        name: "Healthcare Courses",
        icon: "🏥",
        certification: "Certified by National Skill Development Council",
        courses: [
          { title: "DIPLOMA IN ASSISTANT NURSING", description: "Comprehensive 6-month program covering essential nursing care skills under professional supervision, preparing students for entry-level nursing roles.", link: "/courses/assistant-nursing", duration: "6 months" },
          { title: "General Duty Nursing", description: "Intensive 1-year course providing in-depth training in general nursing duties, patient care, and advanced medical procedures, preparing students for a career in nursing.", link: "/courses/general-duty-nursing", duration: "1 year" },
          { title: "General Duty Assistant Advance", description: "12-month advanced program focusing on developing comprehensive skills for managing healthcare facilities effectively, including leadership and administrative aspects.", link: "/courses/general-duty-assistant-advance", duration: "12 months" },
          { title: "Geriatric Care Assistance", description: "Year-long specialized course in geriatric care, covering the unique needs of elderly patients, age-related conditions, and specialized care techniques.", link: "/courses/geriatric-care-assistance", duration: "12 months" },
          { title: "Emergency Care Assistant", description: "Intensive 12-month program training students in emergency medical care, including triage, life-saving procedures, and crisis management in healthcare settings.", link: "/courses/emergency-care-assistant", duration: "12 months" },
          { title: "Pharmacy Assistant", description: "Comprehensive year-long course covering pharmaceutical practices, medication management, and ethical considerations in pharmacy operations.", link: "/courses/pharmacy-assistant", duration: "12 months" },
          { title: "CERTIFICATE IN WARD BOY AND WARD GIRL", description: "6-month certificate program focusing on essential skills for hospital ward management, patient care assistance, and maintaining a hygienic healthcare environment.", link: "/courses/ward-boy-ward-girl", duration: "6 months" },
          { title: "CERTIFICATE IN LABORATORY MEDICAL TECHNICIAN", description: "A 12-month program designed to equip students with the skills needed for laboratory procedures, including specimen collection, analysis, and quality control in medical laboratories.", link: "/courses/laboratory-medical-technician", duration: "12 months" }
        ]
      },
      {
        name: "Computer Skills Courses",
        icon: "💻",
        certification: "Certified by NESETI, approved by Ministry of Corporate Affairs",
        courses: [
          { title: "Post Graduate Diploma in Computer Applications", description: "In-depth study of advanced computer applications, software development, and project management for graduates.", link: "/courses/computer-skills/pgdca", duration: "12 months" },
          { title: "Diploma in Computer Applications", description: "Comprehensive course covering fundamental computer skills, office applications, and basic programming concepts.", link: "/courses/computer-skills/dca", duration: "6 months" },
          { title: "Advanced Diploma in Computer Applications", description: "Advanced course building on DCA, covering more complex software applications and programming languages.", link: "/courses/computer-skills/adca", duration: "12 months" },
          { title: "Diploma in Hardware and Networking", description: "Focused course on computer hardware, networking fundamentals, and system maintenance.", link: "/courses/computer-skills/diploma-hardware-netwworking", duration: "6 months" },
          { title: "Post Graduate Diploma in Information Technology", description: "Advanced study of IT concepts, including software development, database management, and network administration.", link: "/courses/computer-skills/pgdit-information-technology", duration: "12 months" },
          { title: "Desktop Publishing", description: "Comprehensive course on digital publishing tools and techniques for creating professional documents and layouts.", link: "/courses/computer-skills/dtp", duration: "6 months" },
          { title: "PGDST -Tally ERP 9", description: "Advanced program focusing on software development methodologies, programming languages, and emerging technologies.", link: "/courses/computer-skills/pgdst-tally", duration: "12 months" },
          { title: "CERTIFICATE IN COMPUTER APPLICATION", description: "Comprehensive introduction to computer applications, covering essential software and basic computing concepts.", link: "/courses/computer-skills/certificate-in-computer-application", duration: "3 months" },
          { title: "CERTIFICATE IN BASIC COMPUTER", description: "Quick-start program providing fundamental computer skills for beginners, including basic operations and software usage.", link: "/courses/computer-skills/certificate-in-basic-computer", duration: "30 days" }
        ]
      },
      {
        name: "Miscellaneous",
        icon: "🎨",
        certification: "Certified by NESETI, approved by Ministry of Corporate Affairs",
        courses: [
          { title: "Phlebotomy", description: "Comprehensive training in blood collection techniques, patient care, and laboratory procedures.", link: "/courses/phlebotomy", duration: "12 months" },
          { title: "Home Health Aide", description: "Learn essential skills for providing in-home care and support to patients with various health needs.", link: "/courses/home-health-aide", duration: "6 months" },
          { title: "Hospital Front Desk Coordinator", description: "Master the skills needed to manage hospital admissions, patient inquiries, and administrative tasks.", link: "/courses/hospital-front-desk", duration: "6 months" },
          { title: "Dietetic Aide", description: "Gain knowledge in nutrition, meal planning, and dietary support for patients with various health conditions.", link: "/courses/dietetic-aide", duration: "6 months" },
          { title: "Emergency Medical Technician", description: "Intensive training in emergency medical care, including life-saving techniques and patient transport.", link: "/courses/emt", duration: "6 months" },
          { title: "CERTIFICATE IN DIET ASSISTANT", description: "Learn to assist in creating and implementing dietary plans for individuals with various nutritional needs.", link: "/courses/diet-assistant", duration: "6 months" },
          { title: "CERTIFICATE AND DIPLOMA IN YOGA", description: "Comprehensive study of yoga practices, philosophy, and teaching methodologies.", link: "/courses/yoga", duration: "3/6/12 months" },
          { title: "CERTIFICATE AND DIPLOMA IN BEAUTICIAN", description: "Master various beauty treatments, skincare techniques, and salon management skills.", link: "/courses/beautician", duration: "3/6/12 months" },
          { title: "CERTIFICATE AND DIPLOMA IN MAKEUP ARTIST", description: "Learn professional makeup application techniques for various settings including fashion, film, and special events.", link: "/courses/makeup-artist", duration: "3/6/12 months" },
          { title: "CERTIFICATE/DIPLOMA IN CUTTING AND TAILORING", description: "Develop skills in garment construction, pattern making, and fabric selection for various clothing styles.", link: "/courses/cutting-tailoring", duration: "3/6/12 months" },
          { title: "CERTIFICATE AND DIPLOMA IN ASTROLOGY", description: "Comprehensive programs covering astrological principles, chart interpretation, and predictive techniques for both beginners and advanced practitioners.", link: "/courses/astrology", duration: "6/12 months" }
        ]
      }
    ];
  
    let visibleIndustry = null;
  
    function toggleIndustry(industry) {
      visibleIndustry = visibleIndustry === industry ? null : industry;
    }
    onMount(() => {
      document.body.style.backgroundColor = '#f0f4f8';
    });
  </script>
  
  
  <!-- Hero Section -->
  <div class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 hidden sm:block">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h1 class="text-5xl md:text-6xl font-extrabold mb-6 leading-tight" in:fade={{ duration: 300 }}>
          Empower Your Future<br>with Our Courses
        </h1>
        <p class="text-xl md:text-2xl mb-10 max-w-3xl mx-auto" in:fade={{ duration: 300, delay: 200 }}>
          Discover a wide range of professional courses to boost your career and unlock your potential
        </p>
        <div 
          class="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold inline-block shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          in:fade={{ duration: 300, delay: 400 }}
        >
          Over 20+ Professional Courses Available
        </div>
      </div>
    </div>
    <div class="text-gray-200 text-center pt-16 text-xl font-light">
      <strong class="font-semibold">HSLC</strong> and <strong class="font-semibold">HS</strong> direct exam available - Certified by Board of Open Schooling & Skill Education
    </div>
    <div class="text-gray-200 text-center pt-16 text-xl font-light">
      <strong class="font-semibold">Online examination available for </strong> B.A.<strong class="font-semibold">M.A.</strong> - Certified by Gyan Bihar University
    </div>
  </div>

  <div id="course-list" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
    {#each industries as industry, i}
      <section class="mb-16" in:fly={{ y: 50, duration: 200}}>
        <button
          on:click|preventDefault={() => toggleIndustry(industry)}
          class="w-full text-left bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-xl focus:outline-none border-l-8 border-blue-500"
        >
          <h2 class="text-3xl font-bold text-gray-800 mb-3 flex items-center">
            <span class="mr-4 text-4xl">{industry.icon}</span>
            {industry.name}
          </h2>
          <p class="text-md text-gray-600">{industry.certification}</p>
        </button>
  
        {#if visibleIndustry === industry}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8" transition:fade={{ duration: 300 }}>
            {#each industry.courses as course, j}
              <div
                class="bg-white rounded-xl shadow-md p-8 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                in:fly={{ y: 20, duration: 300, delay: j * 100 }}
              >
                <h3 class="text-2xl font-semibold text-gray-900 mb-4">{course.title}</h3>
                <p class="text-gray-600 mb-4 text-sm leading-relaxed">{course.description}</p>
                <p class="text-sm text-blue-600 mb-6 font-medium">Duration: {course.duration}</p>
                {#if industry.name === "Computer Skills Courses"}
                  <a
                    href={course.link}
                    class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300 shadow-md hover:shadow-lg"
                  >
                    Learn More
                  </a>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
      </section>
    {/each}
  </div>