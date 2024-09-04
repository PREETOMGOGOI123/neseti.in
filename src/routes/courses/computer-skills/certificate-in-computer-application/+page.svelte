<script>
    import Course from '$lib/components/Course.svelte'
    
</script>
<Course courseInfo={{
    title: "Certificate in Basic Computer",
    overview: "The DCA program is designed to provide essential knowledge in computer fundamentals, Microsoft Windows, Microsoft Office applications, internet technologies, and basic hardware maintenance. This course equips students with practical skills needed for entry-level positions in various office and IT environments.",
    duration: "3 months",
    careerProspects: "Office Assistant, Data Entry Operator, Junior IT Support, Administrative Assistant",
    syllabus: [
        "Computer Fundamentals",
        "Microsoft Windows 7/8/10/11",
        "Microsoft Office 2003/2007 (Word, Excel, PowerPoint)",
        "Internet & E-mail Technology",
        "Basic Computer Hardware Maintenance",
        "Examination"
    ],
    eligibility: "10th pass or equivalent",
    courseHead: {
        name: "Mr.Ranjit Saikia",
        qualification: "Ph.D. in Computer Science",
        phoneNumber: "+91 9876543210"
    },
    relatedCourses: [
        { title: "ADCA", link: "/courses/computer-skills/adca" },
        { title: "PGDCA", link: "/courses/computer-skills/pgdca" }
    ]
}} />