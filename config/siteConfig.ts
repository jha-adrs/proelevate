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
    ]
}