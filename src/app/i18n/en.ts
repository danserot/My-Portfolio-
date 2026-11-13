export const en = {
  header: {
    logoAlt: "Artem Khloptsev logo",
    languageSwitcher: "Language switcher",
    menuLabel: "Toggle navigation",
    nav: {
      home: "Home",
      projects: "Projects",
      certificates: "Certificates",
      about: "About",
      resume: "Resume",
      contact: "Contact",
    },
  },
  home: {
    heroAlt: "Main banner",
    titleLine: "I do code and",
    titleAccent: "explore it!",
    subtitle:
      "Frontend developer with strong proficiency in HTML5, CSS3, JavaScript (ES6+), and React. Experienced in building scalable, component-based interfaces, working with REST APIs and Supabase for backend integration. Solid foundation in backend fundamentals and object-oriented programming, with hands-on experience developing Java applications using core OOP principles. Focused on clean architecture, performance, and high-quality user experience.",
    primaryAction: "Get in Touch",
    secondaryAction: "View CV",
    experienceTitle: "EXPERIENCE WITH",
  },
  resume: {
    title: "Resume",
    subtitle: "View my experience, education, and technical skills online.",
    downloadAction: "Download PDF",
    openAction: "Open in new tab",
    viewerTitle: "Artem Khloptsev resume",
    fallback:
      "Your browser cannot display the PDF here. Open it in a new tab or download the file.",
  },
  certificates: {
    title: "Certificates",
    subtitle: "Courses and professional achievements in one fast, searchable library.",
    countLabel: "certificates",
    searchPlaceholder: "Search certificate titles",
    allCategories: "All categories",
    openAction: "Open preview",
    downloadAction: "Download PDF",
    closeAction: "Close preview",
    previewTitle: "Certificate preview",
    emptyText: "No certificates match your search.",
    pdfLabel: "PDF document",
    categories: {
      AdvancedProgramming: "Advanced programming",
      ComputationalMathematics: "Computational mathematics",
      ComputerArchitecture: "Computer architecture",
    },
  },
  footer: {
    role: "Frontend Developer • Software Engineering Student",
    rights: "All rights reserved.",
  },
  about: {
    title: "About me",
    subtitle:
      "Frontend developer • Student at Astana IT University • Volleyball player",
    techTitle: "Tech Stack",
    experience: {
      title: "Work Experience",
      subtitle: "Frontend development internship",
      role: "Frontend Developer Intern",
      company: "Park Technologies",
      period: "May 2026 — June 30, 2026",
      location: "Kazakhstan",
      achievements: [
        "Built responsive landing pages and product interfaces with React, TypeScript, HTML, and CSS.",
        "Created reusable UI components and improved page performance across desktop and mobile.",
        "Integrated REST APIs and delivered maintainable interfaces from idea to production.",
        "Tested layouts across browsers and improved accessibility and responsive behavior.",
      ],
    },
    techCards: [
      {
        title: "Frontend",
        text: "HTML5 • CSS3 • JavaScript (ES6+) • React • Responsive Design",
      },
      {
        title: "UI / Styling",
        text: "CSS Grid • Flexbox • Animations • Glassmorphism UI • Modern Layout",
      },
      {
        title: "Tools",
        text: "Git • GitHub • Figma • VS Code • npm",
      },
      {
        title: "Other",
        text: "REST API • Component Architecture • Performance Optimization",
      },
    ],
    rows: {
      frontend: {
        alt: "Developer",
        title: "Frontend Development",
        text: "I build responsive interfaces using React and modern UI principles. Clean code, structured components and production-ready layout.",
      },
      volleyball: {
        alt: "Volleyball",
        title: "Volleyball",
        text: "Competitive mindset, discipline and teamwork. Sport keeps my focus sharp and my performance consistent.",
      },
      hackathons: {
        alt: "Hackathon",
        title: "Hackathons",
        text: "Participated in startup competitions and won a recent battle. Fast execution and idea validation under pressure.",
      },
      startup: {
        alt: "Award",
        title: "Startup Battle Winner",
        text: "Recognition for product thinking and execution. Focus on real-world value and scalable ideas.",
      },
      university: {
        alt: "Astana IT University campus",
        title: "Astana IT University",
        text: "I am majoring in Software Engineering at Astana IT University, one of the strongest IT programs in Kazakhstan. The program provides a solid foundation in algorithms, data structures, databases, and modern software development practices.",
      },
    },
  },
  projects: {
    title: "My Projects",
    goToPage: "Go to the page",
    viewDetails: "View case study",
    imageAlt: "project screenshot",
    detail: {
      backToProjects: "Back to projects",
      liveDemo: "Open live demo",
      sourceCode: "Source code",
      roleTitle: "My role",
      stackTitle: "Technology stack",
      overviewTitle: "Project overview",
      challengeTitle: "Challenge",
      approachTitle: "Approach",
      resultTitle: "Result",
      galleryTitle: "Interface gallery",
      notFoundTitle: "Project not found",
      notFoundText: "The requested project does not exist or its link has changed.",
      byCategory: {
        real: {
          role: "Frontend development, interface architecture, responsive implementation",
          challenge: "Turn a real product idea into a clear interface that remains stable on different devices and can grow without duplicated UI code.",
          approach: "I separated the interface into reusable components, established predictable layout rules, and focused on readable states, navigation, and performance.",
          result: "A production-oriented responsive interface with a consistent component structure and a clear path for future development.",
        },
        fun: {
          role: "Frontend development, UI implementation, interaction design",
          challenge: "Build a compact project that demonstrates one useful workflow without unnecessary complexity.",
          approach: "I focused on a small component model, clear state transitions, responsive layout, and immediate feedback for user actions.",
          result: "A focused working product that demonstrates practical frontend skills and can be extended with new features.",
        },
        games: {
          role: "Game logic, interface development, responsive interaction",
          challenge: "Keep game state predictable while making controls and feedback understandable on different screen sizes.",
          approach: "I separated game rules from visual state, handled win and restart flows explicitly, and kept the UI lightweight.",
          result: "A playable browser game with clear state, responsive controls, and maintainable game logic.",
        },
      },
    },
    filters: {
      all: "All",
      real: "Web applications",
      ai: "AI & data",
      study: "Coursework",
      hackathons: "Hackathons",
      fun: "Practice",
      games: "Online games",
    },
    items: {
      plannaer: {
        title: "Plannaer — Personal Planner",
        description: ["A web application for goals, tasks, calendars, habits, and manual finances. Includes a customizable dashboard, weekly reviews, .ics event import, and data export. The Fastify server supports SQLite and PostgreSQL; the assistant requires separate configuration."],
      },
      secureguard: {
        title: "SecureGuard — Landing Page & Event Dashboard",
        description: ["A retail video review service landing page with an interactive event review demonstration, FAQ, and lead form using Google Apps Script. The preview uses demonstration data; the existing dashboard requires a separate backend."],
      },
      resort: {
        title: "Chernoyarskaya Zhemchuzhina — Resort Website",
        description: ["A resort website with accommodation listings, a photo gallery, date selection, and a booking interface. Uses Flatpickr, gallery filters, and availability API requests; real reservations require an operational backend."],
      },
      supplyai: {
        title: "SupplyAI — Supplier Search",
        description: ["A semantic offer search demonstration. FastAPI, multilingual MiniLM, and pgvector select up to five unique suppliers, applying budget and quantity constraints before ranking. The interface explains the selection."],
      },
      readdocument: {
        title: "ReadDocument — Commercial Proposal Extraction",
        description: ["Model-based document and image processing for company details, line items, text fragments, and citations. Includes JSON and arithmetic validation, token and cost accounting, and result caching. Extracted values and citations need comparison with the original."],
      },
      procurement: {
        title: "Procurement Graph Lab — Purchase Consolidation",
        description: ["A technical pilot for matching purchase positions using local character-trigram vectors, name/SKU/manufacturer normalization, cosine similarity, and category filtering. The method compares spelling patterns without an external model."],
      },
      schedule: {
        title: "Schedual — Local Schedule",
        description: ["A React day planner that stores schedule data on the user's device between visits. A practical project exploring application state and personal records."],
      },
      "tanstack-todo": {
        title: "To-do — TanStack Router & Query",
        description: ["A separate TypeScript practice planner with task creation, status changes, and deletion through an HTTP API. TanStack Query manages requests and list updates; a local /todos API is required."],
      },
      "furniture-store": {
        title: "Online Shop — Furniture Catalog",
        description: ["A React furniture catalog with category filters, product details, and a shopping cart. A practice implementation using class components; real payment and order processing are not included."],
      },
      rentocar: {
        title: "RentoCar — Car Rental Coursework",
        description: ["A team midterm project with vehicle listings, categories, a comparison table, and a Bootstrap booking form. Trip pricing and confirmation are demonstrations; no real reservations or payments are processed."],
      },
      "web-basics": {
        title: "Web Technologies 1 — HTML & CSS Basics",
        description: ["Multi-page coursework with a personal page, profile card, lists, links, and responsive styling. Practice in semantic HTML structure and basic CSS."],
      },
      "flexbox-grid": {
        title: "Field Notes — Flexbox & CSS Grid",
        description: ["A five-page coursework site with navigation, cards, a layout exercise, a gallery, and a portfolio. Flexbox handles navigation and cards, while CSS Grid provides page layouts."],
      },
      "forms-validation": {
        title: "Web Technologies 4 — Forms & Validation",
        description: ["Contact and registration forms with HTML5 validation, Bootstrap layouts, and JavaScript feedback. Password checks run only in the browser; no backend or account creation is connected."],
      },
      "javascript-basics": {
        title: "Web Technologies 5 — JavaScript & DOM",
        description: ["Practical exercises covering variables, arithmetic, DOM updates, mouse and keyboard events, a calculator with input validation, and an in-memory task list. No libraries or backend required."],
      },
      "builder-pattern": {
        title: "Builder Pattern — Computer Configuration",
        description: ["Java coursework implementing a fluent computer Builder with required and optional properties, preset configurations, and RAM, GPU, and power supply compatibility validation."],
      },
      "divide-conquer": {
        title: "Algorithms — Sorting & QuickSelect",
        description: ["Java implementations of MergeSort, QuickSort, and QuickSelect. Benchmarks track execution time, comparisons, and recursion depth across input types, alongside JUnit tests and an asymptotic analysis report."],
      },
      "workload-engine": {
        title: "In-Memory Workload Engine — Data Structures",
        description: ["Custom integer DynamicArray, linked list, and MinHeap implementations in Java 17. Reproducible workloads, operation counters, median timing measurements, CSV results, and comparison plots."],
      },
      "game-statistics": {
        title: "Game Statistics Analyzer",
        description: ["A Python team final project for match statistics, rankings, leaderboards, player search, and report export. Uses an OOP architecture, JSON/CSV storage, and unit tests."],
      },
      hacknu: {
        title: "HackNU — Zaman AI Prototype",
        description: ["A hackathon React finance assistant prototype with goals, a demonstration product catalog, and Web Speech API voice input. Chat replies use local rules; banking transactions and LLM integration are not implemented."],
      },
      goleador: {
        title: "Goleador — Commercial Football Store",
        description: [
          "Goleador is a commercial online store specializing in professional football apparel and sports equipment. The platform presents Kelme collections and other high-quality gear for teams and individual players.",
          "⚽ Official football kits and training wear.\n🧤 Professional equipment and accessories.\n🛒 Modern, responsive e-commerce interface.",
          "The website is designed with a clean layout, clear product presentation, and user-friendly navigation to ensure smooth shopping experience across all devices.",
        ],
      },
      autoscout: {
        title: "AutoScout — Car Monitoring App",
        description: [
          "AutoScout is a car monitoring web application that allows users to track and manage their favorite vehicles. The platform provides a user-friendly interface for browsing car listings, saving interesting options, and working with vehicle data.",
        ],
      },
      gsc: {
        title: "Golden Students Club — Startup Platform",
        description: [
          "Golden Students Club is my startup project designed to support ambitious students by connecting them with verified opportunities: scholarships, internships, events, and a community for growth.",
          "🏆 With this project, I won a startup battle that included 5 countries and 120 teams.\n🚀 Product idea + UI/UX + implementation mindset.\n📌 Built as a modern, responsive web experience.",
        ],
      },
      landing: {
        title: "Short landing",
        description: [
          "My pet project, made for experience and to show my ability to create a landing page.",
        ],
      },
      hangman: {
        title: "Mini-game (Hangman)",
        description: ["A short mini game (Hangman / “Виселица”)."],
      },
      tictactoe: {
        title: "Tic-tac-toe",
        description: ["Classic tic-tac-toe mini game."],
      },
      birthday: {
        title: "Birthday website",
        description: ["A simple website made for my birthday."],
      },
      todo: {
        title: "Focus — Local Task Planner",
        description: ["A React application with an inbox, today view, priorities, due dates, search, and undo after deletion. Data persists locally; optional Supabase synchronization requires configuration."],
      },
      pomodoro: {
        title: "Pomodoro Technique Timer",
        description: [
          "Boost your focus. Beat procrastination. Work smarter — not harder.",
          "⚡ 25-minute sprints • 🌿 5-minute breaks • 💡 long break after 4 rounds",
        ],
      },
      monkey: {
        title: "Monkey Bouncer Game",
        description: [
          "A browser canvas game where a monkey jumps across regular, moving, and breakable trampolines, collects bananas, and scores points. Use the arrow keys or A/D to move and spacebar to restart after losing.",
        ],
      },
    },
  },
  contact: {
    title: "Let's work together",
    subtitle: "Tell me about your product, website, or frontend task. I will reply by email.",
    nameLabel: "Your name",
    emailLabel: "Email",
    messageLabel: "Project details",
    submitAction: "Send message",
    submittingAction: "Sending...",
    errorText: "The form could not be sent. Try again or email me directly:",
    privacyNote: "The form is processed securely by Netlify Forms.",
    successTitle: "Message sent",
    successText: "Thank you. I received your message and will get back to you shortly.",
    backHome: "Back to home",
  },
  notFound: {
    eyebrow: "Navigation error",
    title: "This page got lost in the code",
    text: "The link may be outdated or the address may contain a typo. Choose one of the available routes.",
    homeAction: "Back home",
    projectsAction: "View projects",
    contactAction: "Contact me",
  },
  seo: {
    home: {
      title: "Artem Khloptsev — Frontend Developer",
      description: "Frontend developer portfolio: React, TypeScript, Chakra UI, responsive interfaces, and product projects.",
    },
    projects: {
      title: "Projects — Artem Khloptsev",
      description: "Frontend case studies, commercial interfaces, web applications, and interactive browser projects.",
    },
    about: {
      title: "About — Artem Khloptsev",
      description: "Experience, technology stack, education, and background of frontend developer Artem Khloptsev.",
    },
    resume: {
      title: "Resume — Artem Khloptsev",
      description: "View and download Artem Khloptsev's frontend developer resume.",
    },
    certificates: {
      title: "Certificates — Artem Khloptsev",
      description: "Browse Artem Khloptsev's course and professional certificates with fast PDF previews.",
    },
    contact: {
      title: "Contact — Artem Khloptsev",
      description: "Contact frontend developer Artem Khloptsev about websites, React interfaces, and product development.",
    },
  },
};
