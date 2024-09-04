<script>
  const featuredCourses = [
    {
      image: "https://images.pexels.com/photos/4047186/pexels-photo-4047186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Postgraduate Diploma in Computer Application",
      description: "Advance your computer skills with comprehensive training in software development, database management, and advanced computing concepts.",
      link: "/courses/computer-skills/pgdca"
    },
    {
      image: "https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Postgraduate Diploma in Software Technology - Tally ERP9",
      description: "Master Tally ERP9 along with advanced software technology concepts for comprehensive financial management and business operations.",
      link: "/courses/computer-skills/pgdst-tally"
    },
    {
      image: "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Diploma in Computer Application",
      description: "Gain essential computer skills including MS Office, internet technologies, and basic hardware maintenance for various office and IT roles.",
      link: "/courses/computer-skills/dca"
    }
  ];
</script>

<section class="bg-gray-100 py-16">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 class="text-3xl font-extrabold text-gray-900 text-center mb-12">Featured Courses</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each featuredCourses as course}
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={course.image} alt={course.title} class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
            <p class="text-gray-600 mb-4">{course.description}</p>
            <a href={course.link} class="text-blue-600 hover:text-blue-800 font-medium">Learn More &rarr;</a>
          </div>
        </div>
      {/each}
    </div>
    <div class="text-center mt-12">
      <a href="/courses" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
        View All Courses
      </a>
    </div>
  </div>
</section>