<script>
    import Course from '$lib/components/Course.svelte'
    
</script>
<Course courseInfo={{
    title: "Post Graduate Diploma in Information Technology (PGDIT)",
    overview: "The PGDIT program is an advanced course designed to provide comprehensive knowledge and skills in various aspects of Information Technology. This program covers advanced topics in software development, database management, networking, cybersecurity, and emerging technologies. It aims to prepare students for leadership roles in the IT industry.",
    duration: "12 months",
    careerProspects: "Software Developer, Database Administrator, Network Architect, IT Project Manager, Cybersecurity Specialist",
    syllabus: [
        "Advanced Programming Concepts",
        "Database Design and Management",
        "Web Technologies and Development",
        "Network Administration and Security",
        "Cloud Computing and Virtualization",
        "Artificial Intelligence and Machine Learning",
        "Big Data Analytics",
        "Mobile Application Development",
        "IT Project Management",
        "Cybersecurity and Ethical Hacking",
        "Internet of Things (IoT)",
        "Final Project",
        "Comprehensive Examination"
    ],
    eligibility: "Bachelor's degree in Computer Science, IT, or related field",
    courseHead: {
        name: "Dr. Ranjit Saikia",
        qualification: "Ph.D. in Computer Science",
        phoneNumber: "+91 9876543210"
    },
    relatedCourses: [
        { title: "MCA", link: "/courses/computer-skills/mca" },
        { title: "PGDCA", link: "/courses/computer-skills/pgdca" }
    ]
}} />