const profiles = [
  {
    id: 1,
    name: "Sarah Chen",
    age: 28,
    job: "UI/UX Designer",
    location: "San Francisco, CA",
    match: "94%",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    skills: ["Figma", "UX Research", "Design Systems"],
    description: "Product designer focused on clean apps and startup tools.",
    about:
      "Sarah is a product-focused UI/UX designer who enjoys turning rough ideas into clean digital experiences. She works with startups, founders, and frontend teams to design user-friendly interfaces.",
    lookingFor:
      "Frontend developers, startup founders, and product teams who need help designing clean user experiences.",
    projects: [
      {
        title: "Mobile Banking App",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
        description:
          "Designed a modern mobile banking experience with dashboards, transfers, cards, and spending insights.",
        tools: ["Figma", "UX", "Design System"]
      },
      {
        title: "SaaS Analytics Dashboard",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        description:
          "Created a clean analytics dashboard for startup teams to track users, growth, and performance.",
        tools: ["UI Design", "Prototyping", "Dashboard"]
      }
    ]
  },
  {
    id: 2,
    name: "Omar Haddad",
    age: 24,
    job: "Frontend Developer",
    location: "Beirut, Lebanon",
    match: "91%",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
    skills: ["React", "JavaScript", "CSS"],
    description: "Frontend developer building responsive web interfaces.",
    about:
      "Omar builds responsive frontend applications with React and modern CSS. He enjoys translating UI designs into clean reusable components and improving user experience through smooth interactions.",
    lookingFor:
      "Designers, backend developers, and small teams building portfolio, dashboard, or startup websites.",
    projects: [
      {
        title: "Portfolio Builder",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a reusable portfolio layout with project cards, animations, and responsive sections.",
        tools: ["React", "CSS", "Vite"]
      },
      {
        title: "Task Management UI",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80",
        description:
          "Developed a task board interface with cards, filters, priority labels, and clean component structure.",
        tools: ["React", "State", "Components"]
      }
    ]
  },
  {
    id: 3,
    name: "Maya Nasser",
    age: 26,
    job: "Brand Designer",
    location: "Dubai, UAE",
    match: "88%",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
    skills: ["Branding", "Illustrator", "Social Media"],
    description: "Brand designer creating clean identities and content kits.",
    about:
      "Maya helps small businesses and creators build strong visual identities. She works on brand systems, social media templates, packaging concepts, and launch visuals.",
    lookingFor:
      "Marketing teams, content creators, and businesses that need clean branding and social media visuals.",
    projects: [
      {
        title: "Cafe Brand Identity",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80",
        description:
          "Created logo, colors, typography, packaging, and Instagram templates for a boutique cafe.",
        tools: ["Branding", "Illustrator", "Templates"]
      },
      {
        title: "Beauty Product Campaign",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
        description:
          "Designed a soft, feminine campaign style for skincare product launches and social media posts.",
        tools: ["Art Direction", "Canva", "Photoshop"]
      }
    ]
  },
  {
    id: 4,
    name: "Daniel Brooks",
    age: 30,
    job: "Full Stack Developer",
    location: "London, UK",
    match: "86%",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=900&q=80",
    skills: ["Node.js", "React", "PostgreSQL"],
    description: "Full stack developer building dashboards and APIs.",
    about:
      "Daniel works on full stack web applications, from backend APIs to polished frontend dashboards. He focuses on clean database design, authentication, and scalable project structure.",
    lookingFor:
      "Product designers, founders, and frontend developers working on SaaS tools or internal systems.",
    projects: [
      {
        title: "Help Desk System",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a ticket management system with users, roles, priorities, comments, and admin dashboards.",
        tools: ["React", "API", "PostgreSQL"]
      },
      {
        title: "Inventory Manager",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
        description:
          "Created an inventory dashboard for tracking products, stock levels, suppliers, and alerts.",
        tools: ["Node.js", "Database", "Dashboard"]
      }
    ]
  },
  {
    id: 5,
    name: "Lina Farah",
    age: 23,
    job: "Mobile App Developer",
    location: "Amman, Jordan",
    match: "90%",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    skills: ["Flutter", "Firebase", "UI"],
    description: "Mobile developer creating simple and polished apps.",
    about:
      "Lina builds mobile apps with Flutter and Firebase. She enjoys creating smooth onboarding flows, clean mobile layouts, and simple app experiences for students and small businesses.",
    lookingFor:
      "Designers and backend developers who want to build mobile-first products and MVPs.",
    projects: [
      {
        title: "Study Timer App",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        description:
          "Created a study timer app with focus sessions, progress tracking, and clean mobile screens.",
        tools: ["Flutter", "Firebase", "UX"]
      },
      {
        title: "Food Ordering App",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a food ordering prototype with menus, cart flow, checkout, and order status screens.",
        tools: ["Flutter", "Mobile UI", "State"]
      }
    ]
  },
  {
    id: 6,
    name: "Youssef Karim",
    age: 27,
    job: "Data Analyst",
    location: "Cairo, Egypt",
    match: "84%",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
    skills: ["Python", "Excel", "Power BI"],
    description: "Data analyst turning raw data into useful dashboards.",
    about:
      "Youssef analyzes business data and turns it into clear dashboards, reports, and insights. He focuses on making data easier to understand for non-technical teams.",
    lookingFor:
      "Business owners, startups, and product teams who need dashboards or reporting systems.",
    projects: [
      {
        title: "Sales Dashboard",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a sales analytics dashboard showing revenue, regions, customer trends, and product performance.",
        tools: ["Power BI", "Excel", "Analytics"]
      },
      {
        title: "Customer Insights Report",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
        description:
          "Analyzed customer behavior and created insights for retention, segmentation, and campaign planning.",
        tools: ["Python", "Charts", "Reporting"]
      }
    ]
  },
  {
    id: 7,
    name: "Nour Saleh",
    age: 25,
    job: "Content Strategist",
    location: "Riyadh, Saudi Arabia",
    match: "87%",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
    skills: ["Copywriting", "SEO", "Marketing"],
    description: "Content strategist helping brands communicate clearly.",
    about:
      "Nour helps brands plan content, write clear copy, and build stronger digital presence. She works on landing pages, social campaigns, and content calendars.",
    lookingFor:
      "Designers, developers, and startup teams who need content direction and strong copy.",
    projects: [
      {
        title: "Startup Landing Page Copy",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        description:
          "Wrote landing page content for a SaaS startup, focusing on clarity, conversion, and brand tone.",
        tools: ["Copywriting", "SEO", "Brand Voice"]
      },
      {
        title: "Social Media Campaign",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
        description:
          "Planned a month-long campaign with captions, content pillars, and post ideas for a growing brand.",
        tools: ["Marketing", "Content", "Strategy"]
      }
    ]
  },
  {
    id: 8,
    name: "Adam Reed",
    age: 29,
    job: "Product Manager",
    location: "Toronto, Canada",
    match: "82%",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
    skills: ["Roadmaps", "Agile", "Product Strategy"],
    description: "Product manager organizing teams and product direction.",
    about:
      "Adam works with designers, developers, and stakeholders to define product goals, prioritize features, and keep teams aligned. He enjoys early-stage product planning.",
    lookingFor:
      "Developers, designers, and founders working on MVPs, SaaS ideas, or product improvements.",
    projects: [
      {
        title: "MVP Roadmap",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
        description:
          "Created a product roadmap for an MVP, including user stories, feature priorities, and launch phases.",
        tools: ["Roadmap", "Agile", "Planning"]
      },
      {
        title: "Feature Prioritization System",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a prioritization framework to help a team decide what to build based on impact and effort.",
        tools: ["Product", "Strategy", "UX"]
      }
    ]
  },
  {
    id: 9,
    name: "Jana Mourad",
    age: 22,
    job: "Graphic Designer",
    location: "Beirut, Lebanon",
    match: "89%",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=900&q=80",
    skills: ["Photoshop", "Canva", "Packaging"],
    description: "Graphic designer creating clean visuals and product posts.",
    about:
      "Jana designs social media visuals, packaging mockups, posters, and simple brand assets. She focuses on clean layouts, soft colors, and professional product presentation.",
    lookingFor:
      "Small businesses, Instagram shops, and creators who need clean product visuals and templates.",
    projects: [
      {
        title: "Instagram Product Templates",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=900&q=80",
        description:
          "Designed reusable Instagram templates for product posts, offers, and new collection launches.",
        tools: ["Canva", "Photoshop", "Social Media"]
      },
      {
        title: "Packaging Mockup Set",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1585386959984-a41552231658?auto=format&fit=crop&w=900&q=80",
        description:
          "Created packaging visuals and mockups for a feminine beauty and lifestyle product concept.",
        tools: ["Packaging", "Mockups", "Branding"]
      }
    ]
  },
  {
    id: 10,
    name: "Ethan Miller",
    age: 31,
    job: "3D Web Developer",
    location: "Berlin, Germany",
    match: "85%",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=900&q=80",
    skills: ["Three.js", "React", "Animation"],
    description: "Creative developer building interactive 3D web scenes.",
    about:
      "Ethan builds interactive websites using React, Three.js, and animation. He enjoys creating landing pages with 3D objects, cursor effects, and smooth visual interactions.",
    lookingFor:
      "Designers, creative agencies, and developers interested in interactive web experiences.",
    projects: [
      {
        title: "Interactive Robot Landing Page",
        year: "2026",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
        description:
          "Built a landing page with a 3D robot, mouse tracking, animated background shapes, and smooth sections.",
        tools: ["Three.js", "React", "Animation"]
      },
      {
        title: "3D Product Showcase",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
        description:
          "Created an interactive product viewer with lighting, rotation, and responsive web layout.",
        tools: ["WebGL", "Three.js", "UX"]
      }
    ]
  }
];

export default profiles;