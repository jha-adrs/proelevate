enum SelectContraint {
    SINGLE = "single",
    MULTIPLE = "multiple"
}


export const siteConfig = {
    navbarItems: [
        {
            label: "Home",
            href: "/",
            expandable: false
        },
        //DSA Practice
        {
            label: "DSA Practice",
            href: "/dsa",
            expandable: true,
        },
        //Jobs
        {
            label: "Jobs",
            href: "/jobs",
            expandable: true
        
        },
        //Competitions
        {
            label: "Competitions",
            href: "/competitions",
            expandable: false
        },
        //Resources
        {
            label: "Resources",
            href: "/resources",
            expandable: false
        },
        //interviews
        {
            label: "Interviews",
            href: "/interviews",
            expandable: false
        },
        
    ],
    eventFilters: [
        {
            label: "Status",
            options: [
                {
                    label: "All",
                    value: "all"
                },
                {
                    label: "Upcoming",
                    value: "upcoming"
                },
                {
                    label: "Past",
                    value: "past"
                }
            ],
            selectConstraint:  SelectContraint.SINGLE,
            disabled: false
        },
        {
            label: "Category",
            options: [
                {
                    label: "All",
                    value: "all"
                },
                {
                    label: "Tech",
                    value: "tech"
                },
                {
                    label: "Music",
                    value: "music"
                },
                {
                    label: "Food",
                    value: "food"
                },
                {
                    label: "Art",
                    value: "art"
                }
            ],
            selectConstraint:  SelectContraint.SINGLE,
            disabled: true
        },
        {
            label: "Location",
            options: [
                {
                    label: "All",
                    value: "all"
                },
                {
                    label: "Remote",
                    value: "remote"
                },
                {
                    label: "In-Person",
                    value: "in-person"
                },
            ],
            selectConstraint: SelectContraint.SINGLE,
            disabled: false
        },
        {
            label: "Date",
            options: [
                {
                    label: "All",
                    value: "all"
                },
                {
                    label: "Today",
                    value: "today"
                },
                {
                    label: "Tomorrow",
                    value: "tomorrow"
                },
                {
                    label: "This Week",
                    value: "this-week"
                },
                {
                    label: "Next Week",
                    value: "next-week"
                }
            ],
            selectConstraint: SelectContraint.SINGLE,
            disabled: false
        }
    ],

    sampleEvents: [
        {
            id: "1",
            title: "Tech Crunch Disrupt 2021",
            description: "TechCrunch Disrupt is the world’s leading authority in debuting revolutionary startups, introducing game-changing technologies, and discussing what’s top of mind for the tech industry’s key innovators.",
            date: "2021-09-21",
            location: "online",
            category: "Tech",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png"
        },
        {
            id: "2",
            title: "Flipkart Hackathon",
            description: "Flipkart Hackathon is a 24-hour coding competition where developers and designers come together to build innovative solutions.",
            date: "2021-09-22",
            location: "online",
            category: "Tech",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png"
        },
        {
            id: "3",
            title: "Music Festival 2021",
            description: "Join us for a weekend of music, food, and fun! Featuring live performances from top artists, delicious food, and exciting activities for all ages.",
            date: "2021-09-25",
            location: "in-person",
            category: "Music",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png"
        },
        {
            id: "4",
            title: "Art Exhibition",
            description: "Experience the beauty of art at our exclusive exhibition. Discover stunning works from talented artists and immerse yourself in a world of creativity.",
            date: "2021-09-28",
            location: "in-person",
            category: "Art",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png"  
        },
        {
            id: "5",
            title: "Food Festival",
            description: "Savor the flavors of our food festival! Indulge in delicious dishes, sample gourmet treats, and enjoy a culinary adventure like no other.",
            date: "2021-10-01",
            location: "in-person",
            category: "Food",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png"
        }

    ]
}