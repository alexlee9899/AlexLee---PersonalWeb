export const projectsData = [
  {
    id: 1,
    title: "KDS Real-time System",
    description:
      "A high-performance Kitchen Display System used in commercial kitchens. Built using React Native and Node.js, featuring sub-second sync of orders via custom TCP and Socket.IO protocols.",
    image: "/images/projects/KDS.png",
    tag: ["Real-time", "React Native", "Node.js"],
    gitUrl: "https://github.com/alexlee9899/KDS",
    previewUrl: "https://github.com/alexlee9899/KDS",
  },
  {
    id: 2,
    title: "Achoio",
    description:
      "Achoio is an online collaboration platform for PhD researchers in speech synthesis, enabling users to create and manage voice projects and audio samples, browse and rate others’ work, and provide high‑quality feedback data for AI model correction and optimization.",
    image: "/images/projects/achoio.png",
    tag: [
      "Speech Synthesis",
      "Audio Feedback",
      "Machine Learning",
      "React",
      "shadcn/ui",
    ],
    gitUrl: "",
    previewUrl: "https://www.achoio.com/",
  },
  {
    id: 3,
    title: "VTGMAMA E-commerce Platform",
    description:
      "A scalable e-commerce platform built from scratch using Next.js 15 and FastAPI. Supports full-stack features such as product listing, checkout flow, admin dashboard, and user authentication.",
    image: "/images/projects/VTG.png",
    tag: ["Full-Stack", "Next.js", "FastAPI", "MongoDB"],
    gitUrl: "https://github.com/haoweilou/OnlineShop",
    previewUrl: "https://vtgmama.vercel.app/",
  },
  {
    id: 4,
    title: "Game-Hub",
    description:
      "A game discovery platform built with React.js, helping users explore and find their favorite games from a curated selection. Implemented game search, filtering, and sorting features, and integrated with game APIs.",
    image: "/images/projects/Gamehub.png",
    tag: ["Third Party API", "React", "TypeScript"],
    gitUrl: "https://github.com/alexlee9899/game-hub-Third-Party-API-",
    previewUrl: "https://game-hub-phi-liard.vercel.app/",
  },
  {
    id: 5,
    title: "Jobpin AI Subscription Platform",
    description:
      "A subscription-based pricing and billing system built with Nest.js and MongoDB. Includes responsive UI for plan management and Dockerized backend deployed with CI/CD pipelines.",
    image: "/images/projects/JobPin.png",
    tag: ["Backend", "Nest.js", "MongoDB", "Docker"],
    gitUrl: "",
    previewUrl: "",
  },
  {
    id: 6,
    title: "Personal Website Development",
    description:
      "Designed and developed a responsive personal website to showcase personal information, skills, and project experience. Built with Next.js and Tailwind CSS, implementing dark theme, dynamic content loading, and contact form functionality.",
    image: "/images/projects/3.png",
    tag: ["Web", "Next.js", "Tailwind CSS"],
    gitUrl: "https://github.com/alexlee9899/AlexLee---PersonalWeb",
    previewUrl: "https://alexlee-web.vercel.app/",
  },
];
export const projectDetails = {
  1: {
    features: [
      "Custom TCP protocol for real-time communication between KDS devices",
      "Built real-time order sync with Socket.IO achieving sub-second latency",
      "High-performance UI components optimized for fast-paced kitchen workflows",
      "Permission management dashboard with user-level access control",
      "Deployed backend services on AWS EC2, used S3 for media storage",
    ],
    technologies: [
      { name: "React Native", class: "bg-blue-900/30 text-blue-400" },
      { name: "TypeScript", class: "bg-blue-900/30 text-blue-400" },
      { name: "Node.js", class: "bg-green-900/30 text-green-400" },
      { name: "Socket.IO", class: "bg-purple-900/30 text-purple-400" },
      { name: "MongoDB", class: "bg-green-900/30 text-green-400" },
    ],
  },
  2: {
    features: [
      "Full‑stack architecture with React frontend, Node.js/Express backend, MongoDB for metadata and AWS S3 for audio storage",
      "Secure JWT‑based authentication with account registration, login and role‑based permissions (researcher, reviewer, admin)",
      "RESTful APIs for project creation, audio uploads, feedback submission and data export in CSV/JSON",
      "Interactive waveform player with version history, real‑time playback controls and timestamped comments",
      "Collaborative review dashboard enabling multi‑dimensional scoring, aggregated feedback metrics and notification workflows",
      "Responsive design optimized for desktop and mobile, with global state management Context API",
    ],

    technologies: [
      { name: "Next.js", class: "bg-black/30 text-white" },
      { name: "FastAPI", class: "bg-yellow-900/30 text-yellow-400" },
      { name: "shadcn/ui", class: "bg-blue-900/30 text-blue-400" },
      { name: "MongoDB", class: "bg-green-900/30 text-green-400" },
      { name: "Tailwind CSS", class: "bg-blue-900/30 text-blue-400" },
      { name: "Context API", class: "bg-purple-900/30 text-purple-400" },
    ],
  },
  3: {
    features: [
      "Full-stack architecture with Next.js frontend and FastAPI backend",
      "Secure JWT-based authentication with login, register, and role control",
      "RESTful APIs for product management, user operations, and checkout",
      "Admin dashboard for managing products, categories, and tags",
      "Responsive design with optimized performance and global state handling",
    ],
    technologies: [
      { name: "Next.js 15", class: "bg-black/30 text-white" },
      { name: "FastAPI", class: "bg-yellow-900/30 text-yellow-400" },
      { name: "MongoDB", class: "bg-green-900/30 text-green-400" },
      { name: "Tailwind CSS", class: "bg-blue-900/30 text-blue-400" },
      { name: "Context API", class: "bg-purple-900/30 text-purple-400" },
    ],
  },
  4: {
    features: [
      "Game search and filtering functionality, supporting filtering by type, platform, and rating",
      "Responsive design, adapting to mobile devices and desktop platforms",
      "Integration with RAWG game API to fetch the latest game data",
      "Dark theme UI design, providing a good user experience",
      "Game details page, displaying game screenshots, ratings, and system requirements",
    ],
    technologies: [
      { name: "React.js", class: "bg-blue-900/30 text-blue-400" },
      { name: "TypeScript", class: "bg-blue-900/30 text-blue-400" },
      { name: "Chakra UI", class: "bg-purple-900/30 text-purple-400" },
      { name: "Axios", class: "bg-green-900/30 text-green-400" },
      { name: "React Query", class: "bg-red-900/30 text-red-400" },
    ],
  },
  5: {
    features: [
      "CRUD-based subscription system for pricing plans and user billing",
      "Modular UI built with React and Emotion.js for plan comparison",
      "Seed data automation across environments using Nest.js services",
      "Dockerized backend with integrated CI/CD pipeline (build, test, deploy)",
      "Optimized MongoDB queries and real-time API response handling",
    ],
    technologies: [
      { name: "Nest.js", class: "bg-red-900/30 text-red-400" },
      { name: "MongoDB", class: "bg-green-900/30 text-green-400" },
      { name: "Docker", class: "bg-blue-900/30 text-blue-400" },
      { name: "CI/CD", class: "bg-purple-900/30 text-purple-400" },
      { name: "Material UI", class: "bg-indigo-900/30 text-indigo-400" },
    ],
  },
  6: {
    features: [
      "Responsive design, adapting to various screen sizes",
      "Dark theme interface, providing a modern visual experience",
      "Dynamic content loading, improving page performance",
      "Integrated email sending functionality, making it easy for visitors to contact",
      "Project showcase and details pages, displaying personal works",
    ],
    technologies: [
      { name: "Next.js", class: "bg-black/30 text-white" },
      { name: "Tailwind CSS", class: "bg-blue-900/30 text-blue-400" },
      { name: "React", class: "bg-blue-900/30 text-blue-400" },
      { name: "Resend API", class: "bg-purple-900/30 text-purple-400" },
      { name: "Vercel Deployment", class: "bg-black/30 text-white" },
    ],
  },
};

// Skills data
export const skillsData = [
  "React.js / React 19",
  "Next.js 15",
  "TypeScript",
  "Node.js / Express.js",
  "Nest.js",
  "FastAPI / Flask",
  "PostgreSQL / Prisma",
  "MongoDB / Mongoose",
  "Tailwind CSS / Sass",
  "Redux / Context API",
  "Docker / PM2",
  "CI/CD (GitHub Actions, Git Lab)",
  "AWS EC2 / S3 / CloudFront",
  "Socket.IO / Custom TCP Protocol",
  "RESTful APIs",
  "Git & GitHub / Bitbucket",
  "Jest / Postman / Testing",
  "UI/UX Design",
  "Agile / Jira / Zeplin",
  "IBM Watson Assistant",
];

// Education data
export const educationData = [
  {
    degree: "Master of Information Technology",
    institution: "University of New South Wales",
    period: "2022-2024",
  },
  {
    degree: "Bachelor of Information Technology",
    institution: "Henan Institute of Science and Technology",
    period: "2018-2022",
  },
];

// Experience data
export const experienceData = [
  {
    position: "Pospal Australia: Full-stack Developer",
    period: "Feb 2025 – Present",
    responsibilities: [
      "Led the development of a real-time Kitchen Display System using React Native, TypeScript, and MongoDB",
      "Implemented socket-based communication and custom TCP protocols for sub-second order sync",
      "Built an agent-facing web dashboard with Next.js and Tailwind, supporting live service activation and access control",
      "Deployed scalable backend services on AWS and integrated third-party POS APIs for real-time sync",
    ],
  },
  {
    position: "Jobpin AI: Full-stack Developer",
    period: "Oct 2024 – Feb 2025",
    responsibilities: [
      "Created a pricing system with Nest.js and MongoDB, enabling dynamic plan CRUD and user subscription logic",
      "Built the UI with React, Material UI, and Emotion.js, improving responsiveness and design consistency",
      "Used Docker and CI/CD pipelines to automate testing and deployment",
    ],
  },
  {
    position: "Melfish: Frontend Developer",
    period: "Oct 2023 – Jun 2024",
    responsibilities: [
      "Developed a full-featured event management app with Next.js and the MERN stack",
      "Collaborated on API integrations, payment logic, and analytics tracking",
      "Maintained accessibility and performance through best front-end practices",
    ],
  },
];
