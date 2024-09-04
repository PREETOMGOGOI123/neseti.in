<script>
    import { fade, fly } from 'svelte/transition';

    export let courseInfo = {
        title: "Post Graduate Diploma in Computer Applications (PGDCA)",
        overview: "The PGDCA program is designed to provide advanced knowledge in computer applications. It covers various aspects of computer science and information technology, preparing students for careers in the IT industry.",
        duration: "1 year",
        careerProspects: "Software Developer, System Analyst, Database Administrator, Web Developer",
        syllabus: [
            "Introduction to Programming",
            "Database Management Systems",
            "Web Technologies",
            "Software Engineering",
            "Computer Networks",
            "Data Structures and Algorithms"
        ],
        eligibility: "Bachelor's degree in any discipline with a minimum of 50% marks",
        courseHead: {
            name: "Dr. Anita Sharma",
            qualification: "Ph.D. in Computer Science",
            phoneNumber: "+91 9876543210"
        },
        relatedCourses: [
            { title: "MCA", link: "/courses/mca" },
            { title: "B.Tech in Computer Science", link: "/courses/btech-cs" }
        ]
    };

    let showEnquiryForm = false;
    let name = '';
    let email = '';
    let message = '';

    function toggleEnquiryForm() {
        showEnquiryForm = !showEnquiryForm;
    }

    function submitEnquiry() {
        console.log('Enquiry submitted:', { name, email, message });
        showEnquiryForm = false;
        name = '';
        email = '';
        message = '';
    }
</script>

<div class="w-full min-h-screen bg-gradient-to-br from-blue-100 to-purple-100" in:fade={{ duration: 300 }}>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-5xl font-bold mb-12 text-center text-indigo-800 shadow-text">{courseInfo.title}</h1>
        
        <div class="bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-indigo-700">Course Overview</h2>
            <p class="text-lg text-gray-700 mb-4">{courseInfo.overview}</p>
            <div class="flex flex-wrap justify-between items-center">
                <p class="text-xl"><strong class="text-indigo-600">Duration:</strong> {courseInfo.duration}</p>
            </div>
        </div>

        <div class="bg-indigo-700 text-white rounded-xl shadow-2xl p-8 mb-12">
            <h2 class="text-3xl font-semibold mb-4">Career Prospects</h2>
            <p class="text-lg">{courseInfo.careerProspects}</p>
        </div>

        <div class="bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-indigo-700">Syllabus</h2>
            <ul class="list-disc pl-5 text-lg text-gray-700 grid grid-cols-1 md:grid-cols-2 gap-2">
                {#each courseInfo.syllabus as topic}
                    <li>{topic}</li>
                {/each}
            </ul>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div class="bg-purple-700 text-white rounded-xl shadow-2xl p-8">
                <h2 class="text-3xl font-semibold mb-4">Eligibility</h2>
                <p class="text-lg">{courseInfo.eligibility}</p>
            </div>

            <div class="bg-indigo-600 text-white rounded-xl shadow-2xl p-8">
                <h2 class="text-3xl font-semibold mb-4">Course Head</h2>
                <p class="text-lg mb-2"><strong>{courseInfo.courseHead.name}</strong></p>
                <p class="text-lg mb-2">{courseInfo.courseHead.qualification}</p>
                <p class="text-lg mb-2">Phone: {courseInfo.courseHead.phoneNumber}</p>
            </div>
        </div>

        <div class="bg-white bg-opacity-80 rounded-xl shadow-2xl p-8 mb-12">
            <h2 class="text-3xl font-semibold mb-4 text-indigo-700">Related Courses</h2>
            <div class="flex flex-wrap gap-4">
                {#each courseInfo.relatedCourses as course}
                    <a href={course.link} class="bg-indigo-100 text-indigo-800 px-6 py-3 rounded-full text-lg font-semibold hover:bg-indigo-200 transition duration-300">{course.title}</a>
                {/each}
            </div>
        </div>

        <div class="text-center">
            <button
                on:click={toggleEnquiryForm}
                class="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300 shadow-lg"
            >
                {showEnquiryForm ? 'Close Enquiry Form' : 'Open Enquiry Form'}
            </button>
        </div>

        {#if showEnquiryForm}
            <form on:submit|preventDefault={submitEnquiry} class="mt-12 bg-white bg-opacity-90 rounded-xl shadow-2xl p-8" in:fly={{ y: 20, duration: 300 }}>
                <div class="mb-6">
                    <label for="name" class="block mb-2 text-lg font-semibold text-gray-700">Name:</label>
                    <input type="text" id="name" bind:value={name} required class="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                </div>
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-lg font-semibold text-gray-700">Email:</label>
                    <input type="email" id="email" bind:value={email} required class="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
                </div>
                <div class="mb-6">
                    <label for="message" class="block mb-2 text-lg font-semibold text-gray-700">Message:</label>
                    <textarea id="message" bind:value={message} required class="w-full px-4 py-3 border-2 border-indigo-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" rows="4"></textarea>
                </div>
                <button type="submit" class="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-indigo-600 hover:to-purple-700 transition duration-300 shadow-lg">
                    Submit Enquiry
                </button>
            </form>
        {/if}
    </div>
</div>

<style>
    .shadow-text {
        text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
</style>
