// --- IMAGE IMPORTS ---
// It's good practice to keep image imports with the data that uses them.
import image1 from "../assets/figma/1.png";
import image2 from "../assets/figma/2.png";
import image3 from "../assets/figma/3.png";
import image4 from "../assets/figma/4.png";
import image5 from "../assets/figma/5.png";
import image6 from "../assets/figma/6.png";
import image7 from "../assets/figma/7.png";
import image8 from "../assets/figma/8.png";

// --- EVENT DATA ARRAY ---
// Each event now has a 'registrationUrl' property.
export const allEvents = [
    { 
        id: 1, 
        title: "AI & Robotics Expo", 
        category: "technical", 
        description: "Explore the latest advancements in AI and Robotics. A full day of demos, talks, and workshops.", 
        date: "Oct 10, 2025", 
        venue: "Innovation Hall", 
        imageUrl: image1,
        registrationUrl: "https://konfhub.com/ai-robotics-expo" // Your specific event URL
    },
    { 
        id: 2, 
        title: "Quantum Computing Summit", 
        category: "technical", 
        description: "A deep dive into the world of quantum computing with leading researchers and industry pioneers.", 
        date: "Oct 12, 2025", 
        venue: "Quantum Auditorium", 
        imageUrl: image2,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 3, 
        title: "CyberSec Conference", 
        category: "technical", 
        description: "Learn about the latest threats, vulnerabilities, and defense strategies from top security experts.", 
        date: "Oct 15, 2025", 
        venue: "SecureData Center", 
        imageUrl: image3,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 4, 
        title: "Cloud Native & DevOps", 
        category: "technical", 
        description: "Mastering container orchestration, CI/CD pipelines, and infrastructure as code for modern applications.", 
        date: "Oct 17, 2025", 
        venue: "DevOps Dome", 
        imageUrl: image4,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 5, 
        title: "Gaming Tournament", 
        category: "non-technical", 
        description: "Compete in the annual e-sports tournament. Featuring popular titles, cash prizes, and a live audience.", 
        date: "Oct 18, 2025", 
        venue: "E-Sports Arena", 
        imageUrl: image5,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 6, 
        title: "Startup Pitch Night", 
        category: "non-technical", 
        description: "Watch the brightest new startups pitch their ideas to a panel of venture capitalists.", 
        date: "Oct 20, 2025", 
        venue: "Venture Hub", 
        imageUrl: image6,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 7, 
        title: "Tech Industry Social Mixer", 
        category: "non-technical", 
        description: "A casual social event for professionals in the tech industry to connect, share ideas, and build their network.", 
        date: "Oct 22, 2025", 
        venue: "The Network Lounge", 
        imageUrl: image7,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
    { 
        id: 8, 
        title: "Creative Design Workshop", 
        category: "non-technical", 
        description: "Unlock your creative potential with hands-on sessions on UI/UX design, branding, and digital art.", 
        date: "Oct 25, 2025", 
        venue: "Artisan's Hall", 
        imageUrl: image8,
        registrationUrl: "https://konfhub.com/" // Demo URL
    },
];
