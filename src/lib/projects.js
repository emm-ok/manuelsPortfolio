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
    id: "ai-refund-support-system",
    title: "AI Refund Support System",

    category: "AI-Powered Customer Support",

    image: "/projects/refund-support-system.png",

    shortDescription:
      "An AI-assisted customer support platform that analyzes refund requests with an LLM while using deterministic backend rules to make consistent eligibility decisions.",

    description:
      "AI Refund Support System is a full-stack customer support platform designed to automate and structure the refund-request process. Customers identify their account using their email, view their existing orders, select an order, and submit a refund request with a written reason. An AI layer analyzes and classifies the customer's explanation, extracting useful intent and context, while a deterministic backend policy engine evaluates the actual refund eligibility using business rules such as order status and delivery timing. The final decision, AI analysis, policy evaluation, response, and audit information are persisted for administrative review. The architecture deliberately separates probabilistic AI interpretation from deterministic business decision-making, ensuring that the LLM assists the workflow without independently controlling financial or policy outcomes.",

    role: "Fullstack developer responsible for designing and implementing the customer refund workflow across the frontend and backend, integrating the LLM analysis layer, building deterministic refund-policy evaluation, designing the PostgreSQL and Prisma data model, implementing REST APIs, request validation, persistence, admin dashboards, audit logging, error handling, and responsive user interfaces.",

    problem:
      "Traditional refund-support workflows often require customers to contact support manually and require staff to repeatedly interpret similar refund requests against the same business rules. This can create inconsistent responses, unnecessary manual work, and limited visibility into why a refund request was approved, rejected, or requires further review.",

    solution:
      "Built an AI-assisted refund workflow where artificial intelligence is used specifically for interpreting and classifying unstructured customer explanations, while a deterministic backend policy engine remains responsible for the final eligibility decision. The system retrieves the customer's orders, associates the request with a specific order, analyzes the submitted reason, evaluates policy conditions using backend-controlled rules, generates a structured response, persists the complete decision context, and exposes refund requests and audit information through an administrative dashboard.",

    features: [
      "Customer identification using email",
      "Existing customer order retrieval",
      "Order-specific refund requests",
      "Refund request modal workflow",
      "Natural-language refund reason submission",
      "AI-powered refund reason analysis",
      "LLM-based intent and request classification",
      "Structured AI response handling",
      "Deterministic refund eligibility engine",
      "Business-rule-based refund decisions",
      "Delivery-date eligibility evaluation",
      "Separation of AI interpretation from business decisions",
      "Automated refund response generation",
      "Refund request persistence",
      "Refund request status management",
      "Request and order relationship tracking",
      "Administrative refund dashboard",
      "Refund request review and management",
      "Audit log persistence",
      "Decision traceability",
      "Backend request validation",
      "Error handling and API response management",
      "Responsive customer-facing interface",
      "Responsive administrative interface",
      "Animated request and decision states",
      "Loading and processing states for AI operations",
    ],

    architecture: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "TanStack Query",
      "Axios",
      "Zod",
      "LLM Integration",
      "Deterministic Policy Engine",
      "Audit Logging",
      "Docker",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "TanStack Query",
      "Axios",
      "Zod",
      "LLM API",
      "Framer Motion",
      "Tailwind CSS",
      "REST API",
      "Docker",
      "Git",
      "GitHub",
    ],

    challenges: [
      "Designing an architecture where an LLM assists customer-request interpretation without allowing probabilistic AI output to independently determine financial eligibility",
      "Converting unstructured customer refund explanations into structured information that can be consumed by the application workflow",
      "Designing deterministic policy rules around order and delivery data",
      "Maintaining a clear separation between AI analysis, business logic, API orchestration, and persistence",
      "Handling AI failures, malformed model responses, unavailable services, and unexpected outputs without breaking the refund workflow",
      "Designing database relationships between customers, orders, refund requests, AI analysis, decisions, and audit records",
      "Making refund decisions traceable so administrators can understand how a request was processed",
      "Managing asynchronous AI processing while maintaining clear loading, success, and error states in the frontend",
      "Building consistent API validation and error handling across customer and administrative workflows",
      "Containerizing the frontend, backend, and PostgreSQL services for reproducible local development and deployment",
    ],

    github: "https://github.com/emm-ok/Customer-Support-Refund-System",

    demo: "https://customer-support-refund-system.vercel.app",

    status: "Completed",
  },

  // {
  //   id: "resolvehub",
  //   title: "ResolveHub",
  //   featured: true,

  //   category: "Complaint & Resolution Management",

  //   image: "/projects/resolvehub.png",

  //   shortDescription:
  //     "A structured complaint-to-resolution platform that manages complaints, investigations, evidence, assignments, reviews, resolutions, and complete audit trails.",

  //   description:
  //     "ResolveHub is a full-stack complaint and resolution management platform designed to transform unstructured customer complaints into controlled operational workflows. The platform follows a structured lifecycle from intake and triage through assignment, investigation, evidence collection, review, resolution, and audit. It supports multiple organizational roles and uses role-based access control to ensure users only access the workflows and resources relevant to their responsibilities. The backend is built around a relational PostgreSQL data model with Prisma, REST APIs, authenticated user management, company and staff relationships, complaint state transitions, evidence handling, and persistent audit trails. Clerk is used for authentication with webhook-based synchronization between identity-provider users and the application's internal user model.",

  //   role: "Fullstack developer responsible for designing the application architecture and implementing the complaint lifecycle across frontend and backend systems, including authentication, Clerk webhook integration, role-based authorization, company and staff workflows, complaint intake, triage, assignment, investigation, evidence management, review, resolution, audit logging, database relationships, API design, and administrative interfaces.",

  //   problem:
  //     "Complaint handling can become fragmented when customer reports, assignments, investigation records, evidence, decisions, and resolution information are managed across disconnected systems. Without a structured workflow and audit trail, organizations can struggle to track responsibility, monitor complaint progress, maintain evidence, and demonstrate how final resolutions were reached.",

  //   solution:
  //     "Built a centralized complaint-resolution platform that models the entire operational lifecycle as a structured workflow: Intake → Triage → Assignment → Investigation → Evidence → Review → Resolution → Audit. ResolveHub connects complaints to users, companies, staff members, evidence, workflow states, and resolution records while enforcing role-based access controls and maintaining an auditable history of important actions and state changes.",

  //   features: [
  //     "Complaint intake and registration",
  //     "Structured complaint lifecycle management",
  //     "Complaint triage workflow",
  //     "Complaint categorization",
  //     "Complaint assignment to responsible staff",
  //     "Investigation workflow",
  //     "Evidence collection and management",
  //     "Evidence-to-complaint relationships",
  //     "Review and escalation workflow",
  //     "Resolution management",
  //     "Complaint status transitions",
  //     "Persistent complaint history",
  //     "Audit trail for workflow activity",
  //     "Role-based access control",
  //     "User authentication with Clerk",
  //     "Clerk webhook integration",
  //     "Internal user synchronization",
  //     "Company account management",
  //     "Staff and company role relationships",
  //     "Company invitations with predefined roles",
  //     "Platform-level user roles",
  //     "Active and suspended user states",
  //     "Protected complaint resources",
  //     "Administrative dashboards",
  //     "Complaint search and filtering",
  //     "Structured operational workflows",
  //     "Evidence access control",
  //     "Signed access to protected resources",
  //     "Audit-oriented data persistence",
  //     "Responsive dashboard interfaces",
  //   ],

  //   architecture: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "Express.js",
  //     "REST APIs",
  //     "PostgreSQL",
  //     "Prisma ORM",
  //     "Clerk Authentication",
  //     "Webhook-Based Identity Synchronization",
  //     "Role-Based Access Control",
  //     "Protected Resource Access",
  //     "Audit Logging",
  //   ],

  //   technologies: [
  //     "Next.js",
  //     "React",
  //     "TypeScript",
  //     "Node.js",
  //     "Express",
  //     "PostgreSQL",
  //     "Prisma",
  //     "Clerk",
  //     "REST API",
  //     "Role-Based Access Control",
  //     "Webhooks",
  //     "Cloud Storage",
  //     "Signed URLs",
  //     "Tailwind CSS",
  //     "Framer Motion",
  //     "Lucide React",
  //     "Git",
  //     "GitHub",
  //   ],

  //   challenges: [
  //     "Designing a complaint state machine capable of representing the complete lifecycle from initial intake through final resolution",
  //     "Maintaining valid state transitions across intake, triage, assignment, investigation, review, and resolution stages",
  //     "Designing relational data structures connecting complaints, users, companies, staff, evidence, assignments, reviews, resolutions, and audit records",
  //     "Implementing authentication synchronization between Clerk and the application's internal PostgreSQL user model",
  //     "Handling Clerk webhook events reliably while maintaining required unique relationships such as clerkId",
  //     "Designing role-based authorization across platform users, company administrators, staff members, and other operational roles",
  //     "Protecting complaint and evidence data from unauthorized access",
  //     "Managing company invitations and predefined staff roles",
  //     "Maintaining a complete audit trail for sensitive complaint and resolution operations",
  //     "Designing APIs that preserve consistency between frontend workflow state and backend business rules",
  //     "Supporting future capabilities such as recurring complaint detection, semantic search, intelligent categorization, and SLA monitoring without tightly coupling them to the initial architecture",
  //   ],

  //   github: "https://github.com/emm-ok/ResolveHub",

  //   demo: "",

  //   status: "In Development",
  // },

  {
    id: "beautyhub-store",
    title: "BeautyHub Store",

    category: "E-commerce & Personalized Beauty",

    image: "/projects/beautyhub.png",

    shortDescription:
      "A modern beauty e-commerce platform focused on trusted product discovery, personalized skincare exploration, transparent pricing, and streamlined product management.",

    description:
      "BeautyHub Store is a full-stack beauty and personal-care e-commerce platform designed around the challenges customers face when discovering and purchasing skincare and beauty products online. The platform combines a verified product catalogue, structured product categories, personalized discovery filters, product education, transparent pricing, inventory-aware browsing, and streamlined ordering into a single experience. Customers can discover products based on concerns such as acne-prone skin, dark spots, dryness, oily skin, and uneven skin tone while also filtering by product category, price range, availability, and other attributes. The administrative system provides centralized control over products, categories, pricing, product images, verification status, and catalogue management.",

    role: "Fullstack developer responsible for designing and developing the BeautyHub Store frontend and backend, including product catalogue architecture, discovery workflows, search and filtering APIs, category management, product CRUD operations, pricing logic, sale-price calculation, image management, Cloudinary integration, administrative workflows, database architecture, API validation, TanStack Query data fetching, responsive UI, and animated user experiences.",

    problem:
      "Beauty customers can struggle to determine which products are suitable for their needs while also dealing with concerns around product authenticity, unclear pricing, fragmented product information, availability, and inefficient discovery. Store administrators also need centralized tools for maintaining product information, pricing, images, categories, inventory visibility, and catalogue status.",

    solution:
      "Built a centralized beauty commerce platform that combines structured product data with a guided discovery experience. BeautyHub Store allows customers to browse categories, search and filter products by skincare concerns and commercial attributes, inspect detailed product information, and discover products based on their needs and budget. A dedicated administrative system gives the platform owner control over catalogue content, product verification status, pricing, sale pricing, categories, images, and product availability.",

    features: [
      "Beauty and personal-care product catalogue",
      "Structured product categories",
      "Product discovery by skincare concern",
      "Acne-prone skin discovery",
      "Dark-spots discovery",
      "Dry-skin discovery",
      "Oily-skin discovery",
      "Uneven-skin-tone discovery",
      "Product type filtering",
      "Budget-based discovery",
      "Product search",
      "Category filtering",
      "Price-range filtering",
      "Availability filtering",
      "Product status filtering",
      "Verification-status filtering",
      "Pagination and server-side product retrieval",
      "Configurable product sorting",
      "Detailed product pages",
      "Product descriptions and educational information",
      "Transparent product pricing",
      "Sale-price support",
      "Automatic sale-price recalculation when pricing changes",
      "Admin-controlled product verification",
      "Product creation and editing",
      "Product deletion",
      "Category creation and management",
      "Category activation and deactivation",
      "Product image upload",
      "Cloudinary image storage",
      "Product image deletion",
      "Product image reordering",
      "Primary product image management",
      "Responsive product catalogue",
      "Customer ordering workflow",
      "Delivery-area support",
      "WhatsApp-based delivery tracking workflow",
      "Administrative product management",
      "Animated discovery and catalogue interactions",
      "Responsive mobile and desktop experience",
    ],

    architecture: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "PostgreSQL",
      "Prisma ORM",
      "Clerk Authentication",
      "TanStack Query",
      "Axios",
      "Zod Validation",
      "Cloudinary",
      "Role-Based Administrative Access",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "TanStack Query",
      "Axios",
      "Zod",
      "Cloudinary",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "REST API",
      "Multer",
      "Git",
      "GitHub",
    ],

    challenges: [
      "Designing a flexible product and category data model capable of supporting beauty products with different attributes and discovery requirements",
      "Designing backend filtering that supports search, category, status, verification status, price range, inventory availability, pagination, and sorting without moving catalogue filtering entirely to the client",
      "Building a discovery workflow that translates customer skincare concerns into useful product filtering criteria",
      "Maintaining consistent pricing behavior when base prices are changed and sale prices need to be recalculated",
      "Designing an admin-controlled product verification model without introducing unnecessary supplier or verification-provider complexity into the MVP",
      "Implementing reliable product image management including uploads, deletion, ordering, and primary-image selection",
      "Integrating Cloudinary with the backend upload workflow while maintaining product-image relationships in PostgreSQL",
      "Designing reusable TanStack Query hooks and API functions for product discovery, pagination, filtering, and administrative mutations",
      "Preventing unnecessary frontend rerenders while synchronizing search and filter state with URL query parameters",
      "Handling debounced product search and URL synchronization without creating router-update loops",
      "Maintaining consistent product and category state between customer-facing catalogue pages and administrative management interfaces",
      "Designing the MVP architecture so future AI-powered beauty recommendations can be introduced without coupling AI logic to the core product catalogue and commerce workflows",
    ],

    github: "https://github.com/emm-ok/BeautyHub",

    demo: "https://beauty-hub-ebon.vercel.app",

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

    status: "Completed",
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
