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
            selectConstraint: SelectContraint.SINGLE,
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
            selectConstraint: SelectContraint.SINGLE,
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
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png",
            tags: ["Tech", "Startup", "Innovation"],
            instructions: `
            <p>Instructions:</p>
            <ul>
                <li>Register for the event by clicking on the "Register Now" button.</li>
                <li>Join the event online on the specified date and time.</li>
                <li>Participate in the various sessions, workshops, and networking opportunities.</li>
                <li>Connect with other attendees, speakers, and sponsors to make the most of the event.</li>
            </ul>
            
            
            `
        },
        {
            id: "2",
            title: "Flipkart Hackathon",
            description: "Flipkart Hackathon is a 24-hour coding competition where developers and designers come together to build innovative solutions.",
            date: "2021-09-22",
            location: "online",
            category: "Tech",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png",
            tags: ["Tech", "Hackathon", "Coding"],
            instructions: `
            <p>Instructions:</p>
            <ul>
                <li>Register for the hackathon by clicking on the "Register Now" button.</li>
                <li>Join the hackathon online on the specified date and time.</li>
                <li>Form a team or participate individually to solve the challenges.</li>
                <li>Submit your project before the deadline and present it to the judges.</li>
            </ul>
            `
        },
        {
            id: "3",
            title: "Music Festival 2021",
            description: "Join us for a weekend of music, food, and fun! Featuring live performances from top artists, delicious food, and exciting activities for all ages.",
            date: "2021-09-25",
            location: "in-person",
            category: "Music",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png",
            tags: ["Music", "Festival", "Concert"],
            instructions: `
            <p>Instructions:</p>
            <ul>
                <li>Purchase tickets for the music festival by clicking on the "Register Now" button.</li>
                <li>Attend the festival in person at the specified venue.</li>
                <li>Enjoy live performances, food stalls, and interactive activities throughout the event.</li>
                <li>Follow the event schedule and participate in your favorite activities.</li>
            </ul>
            `
        },
        {
            id: "4",
            title: "Art Exhibition",
            description: "Experience the beauty of art at our exclusive exhibition. Discover stunning works from talented artists and immerse yourself in a world of creativity.",
            date: "2021-09-28",
            location: "in-person",
            category: "Art",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png",
            tags: ["Art", "Exhibition", "Gallery"],
            instructions: `
            <p>Instructions:</p>
            <ul>
                <li>Visit the art exhibition at the specified venue on the specified date.</li>
                <li>Explore the various art installations, paintings, and sculptures on display.</li>
                <li>Interact with the artists and learn more about their creative process.</li>
                <li>Purchase your favorite artworks or simply enjoy the visual feast.</li>
            </ul>
            `
        },
        {
            id: "5",
            title: "Food Festival",
            description: "Savor the flavors of our food festival! Indulge in delicious dishes, sample gourmet treats, and enjoy a culinary adventure like no other.",
            date: "2021-10-01",
            location: "in-person",
            category: "Food",
            image: "https://utfs.io/f/3039f938-ed28-459c-b062-8f64ccfc2734-uwto3t.png",
            tags: ["Food", "Festival", "Cuisine", "Gourmet", "Tasting", "Food", "Festival", "Cuisine", "Gourmet", "Tasting"],
            instructions: `
<p>Welcome to the Annual Food Festival! We are excited to have you join us for a day filled with delicious food, exciting activities, and wonderful company. Please follow the instructions below to ensure you have a fantastic experience:</p>

<ul>
    <li><span class="highlight">Attend the food festival</span> at the specified venue on the specified date. Make sure to arrive early to make the most of your day. The festival will be held at Central Park on June 15th from 10 AM to 8 PM.</li>
    <li><span class="highlight">Taste a variety of dishes</span> from different cuisines and food stalls. From savory snacks to sweet treats, there's something for everyone. Don't miss out on the signature dishes from renowned chefs and local vendors.</li>
    <li><span class="highlight">Participate in cooking demonstrations</span>, workshops, and food tastings. Learn new recipes, cooking techniques, and culinary tips from expert chefs. Check the schedule for timings and locations of these activities.</li>
    <li><span class="highlight">Discover new flavors</span>, meet fellow food enthusiasts, and enjoy a gastronomic experience. Engage with vendors, share your experiences on social media using #FoodFest2024, and make new friends who share your passion for food.</li>
</ul>

<p>Remember to stay hydrated, wear comfortable clothing, and bring along a big appetite! We hope you have a memorable time at the Food Festival.</p>

<p>For any inquiries or assistance during the festival, please visit the information booth near the main entrance or contact our support team at <a href="mailto:support@foodfest.com">support@foodfest.com</a>.</p>
            `
        }

    ]
}