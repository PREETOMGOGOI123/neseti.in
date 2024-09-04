<script>
    import Course from '$lib/components/Course.svelte'
    
</script>
<Course courseInfo={{
    title: "Diploma in Hardware and Networking",
    overview: "The Diploma in Hardware and Networking is a comprehensive 6-month course designed to provide students with in-depth knowledge and practical skills in computer hardware, networking technologies, and system maintenance. This program prepares students for various roles in IT infrastructure management and support.",
    duration: "6 months",
    careerProspects: "IT Support Technician, Network Administrator, Hardware Specialist, System Maintenance Engineer",
    syllabus: [
        "Computer Hardware Fundamentals",
        "Operating Systems (Windows, Linux)",
        "Networking Concepts and Protocols",
        "Network Configuration and Troubleshooting",
        "Server Administration",
        "Network Security",
        "Virtualization Technologies",
        "Cloud Computing Basics",
        "IT Service Management",
        "Practical Projects",
        "Certification Preparation (CompTIA A+, Network+)",
        "Final Examination"
    ],
    eligibility: "12th pass or equivalent",
    courseHead: {
        name: "Mr. Ranjit Saikia",
        qualification: "Ph.D. in Computer Science",
        phoneNumber: "+91 9876543210"
    },
    relatedCourses: [
        { title: "ADCA", link: "/courses/computer-skills/adca" },
        { title: "PGDCA", link: "/courses/computer-skills/pgdca" }
    ]
}} />