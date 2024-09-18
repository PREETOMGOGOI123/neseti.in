<script>
    import Course from '$lib/components/Course.svelte'
    
</script>
<Course courseInfo={{
    title: "Diploma in Computer Applications (DCA)",
    overview: "The DCA program is designed to provide comprehensive knowledge in computer fundamentals, Microsoft Windows, Microsoft Office applications, internet technologies, and basic hardware maintenance. This 6-month course equips students with practical skills needed for entry-level positions in various office and IT environments, including personality development to enhance professional growth.",
    duration: "6 months",
    careerProspects: "Office Assistant, Data Entry Operator, Junior IT Support, Administrative Assistant",
    syllabus: [
        "Computer Fundamentals",
        "Microsoft Windows 7/8/10/11",
        "Microsoft Office 2003/2007",
        "- Word (Word Processing)",
        "- Excel (Spreadsheet)",
        "- PowerPoint (Presentation Graphics)",
        "Internet & E-mail Technology",
        "Basic Computer Hardware Maintenance",
        "Personality Development Course",
        "Project",
        "Examination"
    ],
    eligibility: "10th pass or equivalent",
    courseHead: {
        name: "Mr.Ranjit Saikia",
        qualification: "PGDCA(Post Graduate Diploma in Computer Application), Diploma in Hardware Engineering",
        phoneNumber: "+91 9876543210"
    },
    relatedCourses: [
        { title: "ADCA", link: "/courses/computer-skills/adca" },
        { title: "PGDCA", link: "/courses/computer-skills/pgdca" }
    ]
}} />