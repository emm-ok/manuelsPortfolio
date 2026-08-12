export const projects = [
  {
    id: "verispace",
    title: "VeriSpace",
    featured: true,

    category: "Real Estate Marketplace",

    image: "/projects/verispace.png",

    shortDescription:
      "A modern real estate platform built to simplify property discovery, connect users with verified agents and companies, and provide structured tools for managing property listings.",

    description:
      "VeriSpace is a full-featured real estate platform designed to make property discovery and listing management more reliable and intuitive. Users can search and filter properties by location, price, property type, bedrooms, and other relevant criteria, view detailed property information, save listings, and connect directly with agents. The platform also supports agent and company registration, verification workflows, property management, and administrative oversight, creating a trusted ecosystem for property owners, agents, companies, and property seekers.",

    role: "Fullstack developer responsible for designing and developing the platform across the frontend and backend, implementing property discovery, authentication, user and agent workflows, listing management, verification processes, dashboards, API integrations, database architecture, and responsive user experiences.",

    problem:
      "Property seekers often have to navigate fragmented listings, unreliable property information, and inefficient communication with agents. Agents and real estate companies also need better tools for managing listings, profiles, and property-related operations from a centralized platform.",

    solution:
      "Built a centralized real estate marketplace that combines property discovery, verified user and agent profiles, listing management, search and filtering, and direct communication into a single platform. VeriSpace provides dedicated workflows for property seekers, agents, companies, and administrators while maintaining a simple and intuitive browsing experience.",

    features: [
      "Property listing discovery and browsing",
      "Advanced property search and filtering",
      "Location-based property discovery",
      "Filtering by price, property type, bedrooms, and other property attributes",
      "Detailed property listing pages",
      "Property image galleries and media management",
      "Saved and favorite properties",
      "Agent profile and contact information",
      "Direct agent contact and WhatsApp integration",
      "User registration and authentication",
      "Agent registration and verification",
      "Company registration and management",
      "Company verification workflows",
      "Agents linked to and managed by real estate companies",
      "Agent property listing management",
      "Company property listing management",
      "User and account profile management",
      "Personalized user dashboards",
      "Agent and company dashboards",
      "Listing creation, editing, and management",
      "Property availability and listing status management",
      "Administrative dashboard and platform management",
      "User, agent, company, and listing oversight",
      "Verification and approval workflows",
      "Responsive mobile and desktop experience",
    ],

    architecture: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "Role-Based Access Control",
    ],

    technologies: [
      "Next.js",
      "PostgreSQL",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "REST API",
      "Authentication & Authorization",
      "Cloud Storage",
      "Git",
      "GitHub",
    ],

    challenges: [
      "Designing a flexible property data model capable of supporting different property types and listing attributes",
      "Building efficient search and filtering across multiple property criteria",
      "Designing role-based workflows for users, agents, companies, and administrators",
      "Implementing verification and approval workflows for agents, companies, and property listings",
      "Managing relationships between companies, agents, users, and property listings",
      "Maintaining a smooth property discovery experience across mobile and desktop devices",
      "Keeping listing information consistent between user-facing pages and administrative management tools",
      "Designing scalable APIs and database structures for growing property and user data",
    ],

    github: "https://github.com/emm-ok/VeriSpace-App",

    demo: "https://veri-space-app.vercel.app/",

    status: "In Development",
  },

  {
    id: "photopro",
    title: "PhotoPro",

    category: "Photography Booking Platform",

    image: "/projects/photopro.png",

    shortDescription:
      "A full-featured photography booking platform that connects guests with photographers through streamlined appointment booking, account management, and administrative workflows.",

    description:
      "PhotoPro is a modern photography booking platform designed to simplify how guests discover and book photography sessions. The platform provides dedicated user and admin dashboards, allowing guests to manage bookings, track appointment status, update their profiles, and manage their account, while administrators can manage bookings, approve appointments, update booking statuses, manage users, and control the information displayed across the client-facing platform.",

    role: "Fullstack developer responsible for designing and developing the platform across the frontend and backend, implementing booking workflows, authentication, user and admin dashboards, API integrations, data management, and production deployment.",

    problem:
      "Booking photography sessions often involves fragmented communication, manual appointment management, and limited visibility into booking status. Photographers and administrators also need a centralized system for managing appointments, users, and platform content.",

    solution:
      "Developed a centralized booking platform that digitizes the complete appointment workflow, giving guests a simple way to book and manage photography sessions while providing administrators with tools to approve appointments, manage booking statuses, maintain user information, and control platform content.",

    features: [
      "Photography session discovery and booking",
      "Appointment scheduling and booking management",
      "User authentication and account management",
      "User dashboard with booking history and status tracking",
      "Profile viewing and updating",
      "Admin dashboard for managing users and bookings",
      "Booking approval and status management",
      "Dynamic management of client-facing platform content",
      "Administrative data and workflow management",
      "Responsive interface across desktop and mobile",
    ],

    architecture: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST API",
      "Database",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Cypress",
      "GitHub Actions",
      "AWS EC2",
      "Vercel",
    ],

    challenges: [
      "Designing a reliable end-to-end booking workflow",
      "Managing different user and administrative permissions",
      "Keeping booking statuses synchronized across user and admin dashboards",
      "Building flexible administrative controls for platform content",
      "Maintaining a responsive and performant experience across devices",
    ],

    github: "https://github.com/emm-ok/photographyWebApp",

    demo: "https://photography-web-app-i1h9.vercel.app/",

    status: "Completed",
  },

  {
    id: "syncspace",
    title: "SyncSpace",
    category: "Real-time Communication Platform",

    image: "/projects/syncspace-Img2.png",

    shortDescription:
      "A modern real-time chat platform designed for seamless communication with secure authentication, online presence, and instant messaging.",

    description:
      "SyncSpace is a full-stack messaging application built to deliver a reliable communication experience. The platform focuses on real-time interactions, secure user management, and a smooth conversational interface.",

    role: "Fullstack Developer — designed the architecture, developed the frontend experience, built backend services, integrated authentication, and implemented real-time communication.",

    problem:
      "Traditional communication platforms often require complex setups and lack simple, focused experiences for small communities and teams.",

    solution:
      "Built a lightweight real-time messaging system with secure authentication, persistent conversations, image sharing, and live user availability.",

    features: [
      "Real-time messaging with Socket.IO",
      "JWT authentication with protected routes",
      "Online/offline user presence",
      "Profile management",
      "Image uploads with Cloudinary",
      "Responsive chat interface",
      "Persistent conversations",
    ],

    architecture: [
      "React frontend",
      "Node.js REST API",
      "Express backend",
      "MongoDB database",
      "Socket.IO real-time layer",
    ],

    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Cloudinary",
    ],

    challenges: [
      "Designing scalable real-time communication",
      "Managing socket authentication",
      "Synchronizing UI state with live events",
    ],

    github: "https://github.com/emm-ok/SyncSpace",

    demo: "https://sync-space-topaz.vercel.app",

    status: "In Development",
  },

  {
    id: "neominds",
    title: "Neominds Builder's Guide",
    category: "Business Growth Platform",

    image: "/projects/project7.png",

    shortDescription:
      "A platform helping startups and businesses discover resources, services, and strategies needed to grow.",

    description:
      "Neominds is a digital platform designed to connect businesses with practical tools and resources required to launch, recover, and scale.",

    role: "Frontend-focused fullstack developer responsible for application architecture, UI implementation, API integration, and database structure.",

    problem:
      "Many early-stage businesses struggle to find structured resources and guidance required for sustainable growth.",

    solution:
      "Created an organized platform where businesses can discover relevant solutions through a clean and intuitive experience.",

    features: [
      "Modern responsive interface",
      "Structured content management",
      "Business resource discovery",
      "Authentication system",
      "Database-driven content",
    ],

    architecture: [
      "Next.js application",
      "PostgreSQL database",
      "Prisma ORM",
      "Server-side rendering",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],

    challenges: [
      "Creating scalable data structures",
      "Building reusable UI components",
      "Maintaining performance",
    ],

    github: "https://github.com/emm-ok/Neominds-Builders-Guide",

    demo: "https://neominds-builders-guide.vercel.app/",

    status: "Completed",
  },

  {
    id: "cshub",
    title: "CSHub Commerce",

    category: "E-commerce Platform",

    image: "/projects/project5.png",

    shortDescription:
      "A modern ecommerce experience focused on speed, product discovery, and seamless shopping.",

    description:
      "CSHub is a Next.js ecommerce application featuring CMS-driven products, optimized browsing, and a clean purchasing workflow.",

    role: "Fullstack developer responsible for frontend architecture, CMS integration, UI development, and performance optimization.",

    problem:
      "Customers need faster and more intuitive ecommerce experiences without unnecessary complexity.",

    solution:
      "Developed a responsive shopping platform with structured content management and modern frontend practices.",

    features: [
      "Dynamic products",
      "CMS powered content",
      "Responsive storefront",
      "Optimized product pages",
      "Modern UI interactions",
    ],

    architecture: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],

    technologies: ["Next.js", "TypeScript", "Sanity", "Tailwind CSS"],

    challenges: [
      "CMS integration",
      "Reusable product components",
      "Performance optimization",
    ],

    github: "https://github.com/emm-ok/CSHub-Sanity-NextJS-Store",

    demo: "https://cs-hub-sanity-next-js-store-ulj4.vercel.app/",

    status: "Completed",
  },

  // {
  //   id: "casualshub",

  //   title: "CasualsHub",

  //   category: "E-commerce Landing Experience",

  //   image: "/projects/project1.png",

  //   shortDescription:
  //     "A modern fashion storefront designed around clean visuals and smooth user experience.",

  //   description:
  //     "CasualsHub is a responsive ecommerce landing experience focused on product presentation and user engagement.",

  //   role: "Frontend developer responsible for UI design, responsive implementation, and interaction design.",

  //   problem:
  //     "Brands need digital experiences that communicate identity while keeping users engaged.",

  //   solution:
  //     "Created a visually focused shopping experience emphasizing simplicity and conversion.",

  //   features: [
  //     "Responsive design",
  //     "Modern animations",
  //     "Product showcase",
  //     "Mobile optimization",
  //   ],

  //   architecture: ["React application", "Component-based architecture"],

  //   technologies: ["React", "Tailwind CSS", "JavaScript"],

  //   challenges: ["Creating premium visual design", "Responsive layouts"],

  //   github: "https://github.com/emm-ok/CasualsHub_Landing_Page",

  //   demo: "https://casuals-hub-landing-page.vercel.app/",

  //   status: "Completed",
  // },
];
