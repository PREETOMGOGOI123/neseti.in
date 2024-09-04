<script>
    import Course from '$lib/components/Course.svelte'
    
</script>
<Course courseInfo={{
    title: "Advanced Diploma in Computer Applications (ADCA)",
    overview: "The ADCA program is designed to provide comprehensive knowledge in computer applications, office productivity software, graphic design, accounting, and basic hardware maintenance. It covers a wide range of practical skills from computer fundamentals to professional software applications, preparing students for various roles in the modern workplace.",
    duration: "1 year",
    careerProspects: "Office Administrator, Graphic Designer, Accounts Assistant, IT Support Technician, Data Entry Specialist",
    syllabus: [
        "Computer Fundamentals",
        "Microsoft Windows 7/8/10/11",
        "Microsoft Office (Word, Excel, PowerPoint)",
        "Desktop Publishing (Adobe PageMaker, Adobe Photoshop, Corel Draw)",
        "Scanning & Printing",
        "Manual Accounting and Tally ERP",
        "Typing Master",
        "Internet & Email Technology",
        "Basic Computer Hardware Maintenance",
        "Project",
        "Examination"
    ],
    eligibility: "10+2 or equivalent with basic computer knowledge",
    courseHead: {
        name: "Ranjit Saikia",
        qualification: "Ph.D. in Computer Science",
        phoneNumber: "+91 9876543210"
    },
    relatedCourses: [
        { title: "PGDCA", link: "/courses/pgdca" },
        { title: "DCA", link: "/courses/dca" }
    ]
}} />