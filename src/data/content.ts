// Site content. Copy is unchanged from the previous page.tsx; only the
// art-direction fields (art, cardVideo, cardPoster, filmVideo, filmRatio,
// processFilm) are new. Legacy fields (image, video, galleryVideo…) are kept
// for reference but the new components read the art-direction fields.

export type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  industryTags: string[];
  category: string;
  year: string;
  client: string;
  location: string;
  website?: string;
  impactMetrics: { scale: string; reach: string; transformation: string };
  image: string;
  objectPosition?: string;
  secondaryImage?: string;
  video?: string;
  galleryVideo?: string;
  galleryLayout?: string;
  galleryImages: string[];
  context: string;
  scope: string;
  impact: string;
  testimonial?: { quote: string; author: string; role: string };
  art: string;
  cardVideo?: string;
  cardPoster?: string;
  filmVideo?: string;
  filmRatio?: string;
  processFilm?: string;
};

export type Snippet = {
  id: string;
  art: string;
  client: string;
  title: string;
  year: string;
  location: string;
  capabilities: string[];
  industry: string;
  serviceType: string;
  website?: string;
  image: string;
  objectPosition?: string;
  emailSubject: string;
};

export type Service = {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  demand: string;
  tags: string[];
};

export const CONTACT_EMAIL = 'silvanarestrepo888@gmail.com';
export const LINKEDIN_URL = 'https://linkedin.com/in/silvanarestrepo';
export const VOICE_URL = 'https://silvana.mmm.page/human-perspective';

export const services: Service[] = [
    {
      number: "01",
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market in half the time",
      description: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
      demand: "Speed to market without sacrificing strategic depth.",
      tags: ["AI Prototyping", "Innovation Sprints", "Go-to-Market"]
    },
    {
      number: "02",
      title: "Experience Orchestration",
      subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
      description: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
      demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance.",
      tags: ["Omnichannel", "Systems Thinking", "Brand Architecture"]
    },
    {
      number: "03",
      title: "Intelligent Operations Architecture",
      subtitle: "Building AI-augmented teams that outperform traditional structures",
      description: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
      demand: "Operations that think, adapt, and evolve. Intelligence embedded in every process.",
      tags: ["Agentic Systems", "Org Design", "Intelligence Systems"]
    },
    {
      number: "04",
      title: "Customer Intelligence Platforms",
      subtitle: "Turning customer behavior into competitive advantage",
      description: "Architecting intelligence systems that don't just track customer behavior—they anticipate it. I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
      demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy.",
      tags: ["Behavioral Data", "Experience Intelligence", "Platform Design"]
    },
    {
      number: "05",
      title: "Venture Design",
      subtitle: "Finding the condition every competitor is glued to, unnoticed",
      description: "Most competitive strategy optimizes capability—what a team already knows how to build, made faster or cheaper. I go after the condition every competitor in the category depends on, the one thing all of them are still standing on without knowing it. Remove it, and the capability obsession stops mattering, because the ground everyone was optimizing on top of has already moved.",
      demand: "What survives is never a product. It's a position.",
      tags: ["Business Design", "Systems Thinking", "Service Design"]
    }
];

export const projects: Project[] = [
    {
      title: "Kayanee",
      art: "/art/projects/kayanee.jpg",
      cardVideo: "/art/video/kayanee-loop.mp4",
      cardPoster: "/art/video/kayanee-poster.jpg",
      filmVideo: "/art/video/kayanee-film.mp4",
      filmRatio: "1280 / 648",
      processFilm: "/art/video/kayanee-beat-film.mp4",
      subtitle: "The First-of-Its-Kind Collective Saudi Wellness Experience Platform",
      description: "The first of its kind collective Saudi wellness experience platform. Beyond fitness or nutrition alone, Kayanee pioneers an ecosystem where women discover wellness as an holistic journey.",
      tech: ["Experience Design", "Service Design", "Product Strategy"],
      industryTags: ["Health & Wellness"],
      category: "Health & Wellness",
      year: "2022",
      client: "Kayanee, a PIF Company",
      location: "Saudi Arabia",
      website: "https://kayanee.com/",
      impactMetrics: {
        scale: "$19B Industry",
        reach: "Saudi Arabia",
        transformation: "First-of-its-kind Platform"
      },
      image: "/projects/kayanee/hero-kayanee.jpeg",
      objectPosition: "center",
      secondaryImage: "/projects/kayanee/Project Gallery /gallery-01-brand-expression.png",
      video: "/projects/kayanee/kayanee-story.mp4",
      galleryVideo: "/projects/kayanee/beat-concept-v2.mp4",
      galleryImages: [
        "/projects/kayanee/gallery-01-brand-expression.png",
        "/projects/kayanee/gallery-02-live-website.png",
        "/projects/kayanee/gallery-03-ecommerce.png",
        "/projects/kayanee/gallery-04-diagnostics.png",
        "/projects/kayanee/gallery-05-journey.png"
      ],
      context: "Saudi Arabia's wellness market represents $19 billion. No platform connected physical wellness venues with digital products and e-commerce for women. Kayanee — backed by PIF — needed a complete experience ecosystem designed from scratch: consumer research, brand experience translation, omnichannel journey architecture, product design across three MVPs, and a design system serving two languages.\n\nWe shaped the solution from the pre-sale stage and led the experience design from day one, in strategic partnership with BCG. The scope covered the full design lifecycle — from qualitative research inside Saudi women's homes in Riyadh to a shipped bilingual e-commerce platform at kayanee.com.",
      scope: "We designed and led the qualitative consumer research — in-home sessions in Riyadh using a discussion framework we authored, building on quantitative data from 552 women surveyed across Saudi Arabia. The research validated the digital product interaction and the value proposition itself. Parts of the planned offering turned out to be irrelevant to the women we sat with — the research reshaped what Kayanee would offer before a single screen was designed.\n\nWe mapped the complete omnichannel customer journey — nine stages from Inspire through Support, across six business lines (Fitness, Personal Care, Learning, Nutrition, Apparel, Healthy Eating) and four product versions. We translated that journey into feature sets, information architecture, and user flows for each MVP.\n\nWe designed the Health Screener, the Wellness Profile dashboard, and the data flows envisioning the connection with physical venue touchpoints (MS Fit biometric kiosk, proximity sensors, QR scanning, digital signage) with the mobile app and e-commerce platform. We built the design system — color tokens serving three surfaces and two alphabets from the ground up.",
      impact: "$19 billion market addressed with a platform designed end to end. Consumer research across 552 women reshaped the product offering before development began. Three MVPs researched, designed, and shipped. Six experience pillars structured every touchpoint — digital and physical. Complete omnichannel journey architecture governing product decisions across four platform versions.\n\nBilingual design system (EN/AR) serving website, mobile app, and e-commerce. Content-led commerce platform live at kayanee.com — editorial storytelling and product discovery on one surface. Phygital ecosystem architecture connecting physical venues with digital channels through biometric data flows, behavioural personalisation, and proximity technology.",
      testimonial: {
        quote: "Amazing proposal and presentation for Kayanee and princess Reema @ KSA...you are already on the next level. Keep rocking!",
        author: "Martin Migoya",
        role: "CEO - Globant"
      }
    },
    {
      title: "Augoor",
      art: "/art/projects/augoor.jpg",
      filmVideo: "/art/video/augoor-film.mp4",
      filmRatio: "1280 / 580",
      subtitle: "Transforming static code into dynamic knowledge",
      description: "Transforming software development, Augoor reinvents how engineers navigate vast codebases,using AI-driven intelligence to convert static repositories into dynamic knowledge hubs, amplifying efficiency, collaboration, and human ingenuity in tech ecosystems.",
      tech: ["Service Design", "User Research", "Product Strategy"],
      industryTags: ["AI Software Development"],
      category: "AI Software Development",
      year: "2020",
      client: "Globant X",
      location: "Worldwide",
      website: "https://www.augoor.com/",
      impactMetrics: {
        scale: "Global Platform",
        reach: "Engineering Teams",
        transformation: "AI-Driven Development"
      },
      image: "/projects/augoor/hero-2.png",
      objectPosition: "left center",
      secondaryImage: "/projects/augoor/photo-main-carrusel.jpeg",
      video: "/projects/augoor/product-demo.mp4",
      galleryImages: [
        "/projects/augoor/Project Gallery/Screenshot 2025-04-15 at 13.33.51.png",
        "/projects/augoor/Project Gallery/Screenshot 2025-04-15 at 13.34.12.png",
        "/projects/augoor/Project Gallery/Screenshot 2025-04-15 at 13.34.27.png"
      ],
      context: "In the ever-evolving landscape of software development, navigating and understanding vast, complex codebases is one of the most significant challenges developers face. Augoor was developed within Globant X—a pioneering incubator creating AI-driven products for digital acceleration. It transforms static repositories into dynamic, navigable data warehouses enhancing developer efficiency and collaboration.",
      scope: "Back in 2020 we conducted global ethnographic research to uncover how developers search, document, and navigate complex code systems to transform writing code using plain English, a way of creating technology that today, in 2025 It's not only a reality, but a strong well established way of developing. Adaptive intelligence frameworks were architected with feedback loops that evolve through contextual developer interactions. We designed seamless UX patterns by integrating AI-assisted documentation, code dependencies and code search that feel natural within existing development workflows.",
      impact: "Engineers now work with greater confidence, automating tedious tasks while focusing on creative development. Every feature is designed to feel like a natural extension of engineering workflows, not just another tool. Augoor amplifies human ingenuity rather than replacing it, unlocking collaborative innovation across development teams.",
      testimonial: {
        quote: "Silvana has been a great team player who is proactive to help, listen the issues, put herself in other's shoes and think about the solutions. She is very thoughtful in providing the solution which will help keep satisfying the customers. I have always enjoyed my conversation with her as it has taught me so many things from customer experience perspective.",
        author: "Deepika Wahi Lopez",
        role: "Product Manager - Globant"
      }
    },
    {
      title: "Chime Care J&J",
      art: "/art/projects/chime-care.jpg",
      subtitle: "Elevating Ophthalmic Practices with Experience-Driven Innovation",
      description: "CHiME Care supports ophthalmic practices by uniting digital tools with clinical expertise. CHiME Care streamlines surgical patient management workflows, allowing practitioners to focus entirely on precision care while intelligent systems handle complexity behind the scenes.",
      tech: ["Design Ops", "Design Systems", "Service Design"],
      industryTags: ["Health & Wellness"],
      category: "Health & Wellness",
      year: "2022",
      client: "Johnson & Johnson Surgical Vision",
      location: "United States",
      website: "https://us-vision.jjcustomerconnect.com",
      impactMetrics: {
        scale: "Healthcare Innovation",
        reach: "Surgical Practices", 
        transformation: "Digital Workflow"
      },
      image: "/projects/chime-care/hero-j&j.jpeg",
      objectPosition: "60% center",
      secondaryImage: "/projects/chime-care/hero-chime-clinical.png",
      galleryImages: [
        "/projects/chime-care/Project GalleryImages/Screenshot 2025-03-06 at 171139-VSCO.jpeg",
        "/projects/chime-care/Project GalleryImages/Screenshot 2025-04-15 at 13.23.31.png",
        "/projects/chime-care/Project GalleryImages/Secundary Image-VSCO.jpeg"
      ],
      context: "For optometrists and surgeons, precision is essential—every decision and data point affects patient vision outcomes. CHiME Care was envisioned as more than just a digital tool; it is an intelligent support system that guides practitioners through complex surgical workflows. In partnership with Johnson & Johnson's Experience Design leadership, we established the foundations for this specialised platform.",
      scope: "We researched with practicing optometrists to reveal workflow patterns and decision points critical to surgical planning. Intuitive interfaces were designed for specialised tools, including toric calculators, case reviews, and performance metrics, to enhance clinical decisions. A comprehensive design system architecture was created to ensure consistent experiences while supporting rapid platform evolution.",
      impact: "CHiME Care transforms fragmented ophthalmic practices into connected ecosystems where intelligence amplifies surgical precision. Optometrists now benefit from a digital assistant that enhances workflow, optimises surgical planning, and provides meaningful procedural insights. The platform drives widespread adoption throughout Johnson & Johnson Vision's ecosystem while laying the foundation for future innovations based on behavioural usage patterns.",
      testimonial: {
        quote: "Silvana is an excellent professional that has been a great plus in the \"cosmic eyes\" POD. Her commitment and skills are outstanding",
        author: "Karina Paola Bailetti",
        role: "Project Manager - Globant"
      }
    },
    {
      title: "Nomade Tulum",
      art: "/art/projects/nomade.jpg",
      subtitle: "Preserving deeply personal guest experiences while meeting digital expectations",
      description: "Nestled in Riviera Maya, Nomade faced a modern dilemma: preserving deeply personal guest experiences while meeting digital expectations. Their new operational ecosystem curatesmeaningful interactions without sacrificing the soul of spontaneous connection.",
      tech: ["Experience Design", "Service Design", "Digital Transformation"],
      industryTags: ["Hospitality"],
      category: "Hospitality",
      year: "2021",
      client: "Nomade Group",
      location: "Mexico-Tulum",
      website: "https://nomadetulum.com/",
      impactMetrics: {
        scale: "Hospitality Excellence",
        reach: "Riviera Maya",
        transformation: "Digital-Physical Fusion"
      },
      // Card hero swapped to the brand image: the previous asset was a
      // website screenshot whose white navigation bar rendered as a bright
      // strip across the top of a dark card. This one is 2860x1454 (1.97),
      // an almost exact fit for the 2:1 band, with no chrome.
      image: "/projects/nomade/secundary-hero.jpeg",
      objectPosition: "center",
      secondaryImage: "/projects/nomade/main-hero-carrusel.jpeg",
      galleryLayout: "strip",
      galleryImages: [
        "/projects/nomade/Project Gallery/Screenshot 2024-11-15 at 15.21.56.png",
        "/projects/nomade/Project Gallery/Screenshot 2025-04-15 at 13.46.25.png",
        "/projects/nomade/Project Gallery/Screenshot 2025-04-15 at 13.57.49.png",
        "/projects/nomade/Project Gallery/Screenshot 2025-04-15 at 14.08.50.png"
      ],
      context: "Riviera Maya's Nomade Hotels are sanctuaries that blend luxury with nature, evolving alongside guest expectations. The challenge was clear: how to preserve a deeply personal, ritualistic, and human-centred approach while seamlessly integrating digital efficiencies. Nomade envisioned a transformation into a tech-enabled hospitality brand without losing its soul.",
      scope: "In collaboration with Nomade team, we envisioned a guest-centric digital ecosystem integrating CRM, personalisation engines, and an intuitive e-concierge system. Service blueprinting was build to reimagin every touchpoint—from booking to check-out—as opportunities for meaningful cultural connection. Backend systems integration unified operations were mapped out to preserve the spontaneous, authentic interactions defining Nomade's essence.",
      impact: "Discovery research provided insights into transforming fragmented guest touchpoints into integrated digital and physical narratives. The integrated platform proposed truthfully taught to eliminate operational inefficiencies while enhancing real-time decision-making across all departments. This approach has delivered measurable operational efficiency and enriched the guest experience to be adopted as part of the opex and capex strategy, with the vision to expand from two assets to a vision of 10 more in a pipeline of eight years as presented by the client.",
      testimonial: {
        quote: "It was a pleasure to work with Sil, I found a great professional, very collaborative, open to challenge and to make her part. Both clients we work with were very happy with her, and excellent feedaback received",
        author: "Gerardo Bava",
        role: "VP Delivery - Globant"
      }
    },
    {
      title: "Flagship Entertainment Destination, KSA",
      art: "/art/projects/qiddiya.jpg",
      cardVideo: "/art/video/qiddiya-loop.mp4",
      cardPoster: "/art/video/qiddiya-poster.jpg",
      filmVideo: "/art/video/qiddiya-film.mp4",
      filmRatio: "1280 / 760",
      subtitle: "PoC Guest Support Platform",
      description: "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project. Theme parks, water attractions, sports facilities, and retail centers operated through a unified digital infrastructure where both guests and operational staff would encounter these systems for the first time.",
      tech: ["Product Strategy", "Service Design", "Prototyping"],
      industryTags: ["Hospitality-Themed Parks-Retail"],
      category: "Hospitality-Themed Parks-Retail",
      year: "2025",
      client: "Qiddiya",
      location: "KSA",
      website: "https://qiddiya.com/",
      impactMetrics: {
        scale: "Flagship Destination",
        reach: "Saudi Vision 2030",
        transformation: "Guest Experience Platform"
      },
      image: "/projects/qiddiya/hero-qiddiya.png",
      objectPosition: "center",
      secondaryImage: "/projects/qiddiya/secondary-qiddiya.png",
      video: "/projects/qiddiya/qiddiya-city.mp4",
      galleryImages: [
        "/projects/qiddiya/emergency-management.png",
        "/projects/qiddiya/guest-search-digital-id.png",
        "/projects/qiddiya/unified-guest-interaction.png"
      ],
      context: "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project. Theme parks, water attractions, sports facilities, and retail centers operated through a unified digital infrastructure where both guests and operational staff would encounter these systems for the first time. Cultural complexity demanded sophisticated solutions: Saudi families, GCC visitors, and international tourists each brought different service expectations, with every touchpoint depending entirely on digital systems without analog alternatives available.",
      scope: "This proof of concept established a validated product strategy for complex entertainment ecosystem requirements through stakeholder collaboration and technical feasibility. Provided development teams with validated integration requirements, with PRDs specifying exact connections with Digital ID and ticketing systems. Workflow validation created shared understanding through stakeholder alignment via tangible prototypes, while designing data collection specs for guest interaction patterns and defining KPI structures for digital adoption and cultural adaptation success.",
      impact: "Technical Foundation Established: Development teams received validated integration requirements, enabling confident planning without major architectural uncertainty. Operational Readiness Framework: Workflow validation created a shared understanding with achievable roadmaps that reflect real operational constraints. Intelligence Framework Design: Blueprints outlined future experience preservation measurement, paving the way for a truly world-class digital guest experience.",
      testimonial: {
        quote: "This foundational work provided our internal teams with the confidence and clarity needed to align internal visions and also determine what part of the experience wouldn't be considered if it weren't for this envisioning.",
        author: "Project Stakeholder",
        role: "Qiddiya"
      }
    },
    {
      title: "GCC Telecom Leader — Customer Experience Center",
      art: "/art/projects/gcc-telecom.jpg",
      subtitle: "Building the Heart, Mind, and Soul of CX Transformation",
      description: "Designed the full strategic and operational foundation for a leading GCC telecom operator's Customer Experience Center — a physical and operational hub unifying CX performance, accountability, and cross-functional action in one place.",
      tech: ["CX Strategy", "Experience Design", "Service Design"],
      industryTags: ["Telecommunications"],
      category: "Telecommunications",
      year: "2026",
      client: "GCC Telecom Leader",
      location: "Kuwait City, Kuwait",
      impactMetrics: {
        scale: "25 Stakeholders",
        reach: "B2C & B2B",
        transformation: "15 Use Cases"
      },
      image: "/projects/gcc-telecom/hero-gcc-telecom.png",
      objectPosition: "center",
      secondaryImage: "/projects/gcc-telecom/secondary-gcc-telecom.png",
      galleryImages: [
        "/projects/gcc-telecom/gallery-gcc-telecom-1.png",
        "/projects/gcc-telecom/gallery-gcc-telecom-2.png",
        "/projects/gcc-telecom/gallery-gcc-telecom-3.png"
      ],
      context: "In the Gulf's most competitive telecom market, customer experience had become the last true differentiator. The operator understood something subtler: experience can't be delegated to a department that doesn't exist yet — it has to be built as an organizational capability, with its own culture, its own rituals, its own operating logic. The mandate was not a project. It was a cultural change.",
      scope: "We designed the Center on three fronts at once. Culture: making customer experience an internal language, not an external promise. Use cases: grounding the Center's purpose in concrete, operational cases rather than aspirational statements. Operational design: governance, cadence, and the working rhythms that let the Center function after the consultants leave — because a capability that needs its designers isn't a capability yet.",
      impact: "Fifteen structured interviews engaging twenty-five stakeholders across ten functional areas: executive leadership, strategy, commercial, technology, retail, and quality. Thematic coding produced eight insight themes, six validated findings, and three strategic imperatives defining the path forward. Fifteen validated use cases mapped B2C and B2B scenarios across four readiness tiers and three delivery horizons — moving from insight trapped in silos to intelligence flowing across functions.",
    }
];

export const snippets: Snippet[] = [
    {
      id: 'dzrt-badel',
      art: '/art/snippets/dzrt-badel.jpg',
      client: 'Badel · DZRT',
      title: 'Brand Stretching',
      year: '2026',
      location: 'Saudi Arabia',
      capabilities: ['Brand Stretching', 'Consumer Research', 'Methodology Design'],
      industry: 'Health & Consumer Goods',
      serviceType: 'Product Strategy | Strategic Design',
      website: 'https://www.dzrt.com/en-sa',
      image: '/projects/snippets/dzrt-badel.png',
      emailSubject: 'Inquiry about DZRT Brand Stretching — Badel · Saudi Arabia'
    },
    {
      id: 'parques-reunidos',
      art: '/art/snippets/parques-reunidos.jpg',
      client: 'Parques Reunidos',
      title: 'Catalog Harmonisation — 70 Venues',
      year: '2023',
      location: 'Europe',
      capabilities: ['Business Design', 'Experience Design'],
      industry: 'Themed Parks & Entertainment',
      serviceType: 'Experience Design | Platform Architecture',
      website: 'https://www.parquesreunidos.com/',
      image: '/projects/parques-reunidos/hero-parque-reunidos.png',
      emailSubject: 'Inquiry about Catalog Harmonisation - Parques Reunidos Project'
    },
    {
      id: 'danone',
      art: '/art/snippets/danone.jpg',
      client: 'Danone',
      title: 'Smart Pricing System',
      year: '2020',
      location: 'Argentina',
      capabilities: ['Digital Transformation', 'Pricing Strategy'],
      industry: 'Food & Beverage',
      serviceType: 'Digital Transformation | Pricing Strategy',
      website: 'https://www.danone.com/',
      image: '/projects/danone/main-hero-carrusel.jpeg',
      emailSubject: 'Inquiry about Smart Pricing System - Danone Digital Transformation Project'
    },
    {
      id: 'c4ir-colombia',
      art: '/art/snippets/c4ir-colombia.jpg',
      client: 'C4IR Colombia · WEF',
      title: 'Policy Innovation for Emerging Technologies',
      year: '2019',
      location: 'Colombia',
      capabilities: ['Strategic Design', 'Policy Innovation'],
      industry: 'Government & Public Policy',
      serviceType: 'Strategic Framework Design | Stakeholder Orchestration',
      website: 'https://centres.weforum.org/centre-for-frontier-technologies-and-innovation/network',
      image: '/projects/snippets/c4ir-colombia.png',
      emailSubject: 'Inquiry about Policy Innovation for Emerging Technologies - Government & Public Policy Project'
    },
    {
      id: 'wef-designit',
      art: '/art/snippets/wef-designit.jpg',
      client: 'World Economic Forum · Designit',
      title: 'Industrial IoT Governance Models',
      year: '2019',
      location: 'Brazil',
      capabilities: ['Strategic Design', 'Cross-Sector Partnerships'],
      industry: 'Technology Policy & Innovation',
      serviceType: 'Cross-Sector Partnership Design | Strategic Advisory',
      website: 'https://www.designit.com/',
      image: '/projects/snippets/wef-designit.png',
      emailSubject: 'Inquiry about Industrial IoT Governance Models - Technology Policy & Innovation Project'
    },
    {
      id: 'viva-malls',
      art: '/art/snippets/viva-malls.jpg',
      client: 'Viva Mall',
      title: 'Retail Experience',
      year: '2019',
      location: 'Colombia',
      capabilities: ['Experience Design', 'Digital Channels'],
      industry: 'Retail & Real Estate',
      serviceType: 'Experience Design | Digital Channels',
      website: 'https://ccviva.com/',
      image: '/projects/snippets/viva-malls.png',
      emailSubject: 'Inquiry about Retail Experience - Retail & Real Estate Project'
    },
    {
      id: 'grupo-exito',
      art: '/art/snippets/grupo-exito.jpg',
      client: 'Grupo Éxito',
      title: 'Retail Experience Ecosystem',
      year: '2019',
      location: 'Colombia',
      capabilities: ['Design Direction', 'Service Design', 'Phygital Design'],
      industry: 'Retail & Consumer Goods',
      serviceType: 'Service Design | Organizational Transformation',
      website: 'https://www.grupoexito.com.co/es',
      image: '/projects/snippets/grupo-exito.png',
      emailSubject: 'Inquiry about Retail Experience Ecosystem - Retail & Consumer Goods Project'
    },
    {
      id: 'tigo-millicom',
      art: '/art/snippets/tigo-millicom.jpg',
      client: 'Tigo · Millicom',
      title: 'Merger & Acquisition Strategy',
      year: '2010',
      location: 'Colombia',
      capabilities: ['Business Expansion', 'Customer Experience'],
      industry: 'Telecommunications',
      serviceType: 'Product Direction | Market Expansion Strategy',
      website: 'https://www.tigo.com.co/',
      image: '/projects/snippets/tigo-millicom.png',
      objectPosition: 'left center',
      emailSubject: 'Inquiry about Merger & Acquisition Strategy - Telecommunications Project'
    }
];

export const projectCategories = ['ALL WORK', 'EXPERIENCE DESIGN', 'PRODUCT STRATEGY', 'SERVICE DESIGN', 'USER RESEARCH', 'DESIGN OPS'] as const;

export const categoryToTag: Record<string, string> = {
  'EXPERIENCE DESIGN': 'Experience Design',
  'PRODUCT STRATEGY': 'Product Strategy',
  'SERVICE DESIGN': 'Service Design',
  'USER RESEARCH': 'User Research',
  'DESIGN OPS': 'Design Ops',
};

// Experience — copy unchanged from ExperienceTimeline.tsx
export const experiences = [
  { company: 'Tigo · UNE',           label: 'Scale & Integration',            reveal: 'Regional expansion — rolled four acquired operators into one national brand.' },
  { company: 'Haceb',                label: 'Data → Consumer',                reveal: 'Founded the Business Intelligence Unit — research and pilots steering investment to highest-impact bets.' },
  { company: 'Grupo Éxito',          label: 'Commerce → Belonging',           reveal: '32 retail destinations · 3 new malls launched · 580,000 m² GLA portfolio.' },
  { company: 'Designit · Wipro',     label: 'Creativity Scaled',              reveal: 'Scaling creativity — 20+ multidisciplinary team, regional operations.' },
  { company: 'WEF · C4IR',           label: 'Technology Governed',            reveal: 'Co-authored C4IR white papers · LATAM stakeholder architecture across government, academia and industry.' },
  { company: 'Globant',              label: 'Experience Engineered',          reveal: 'Client Partner, Inditex · Wellness, hospitality & gaming corporate ventures (PIF).' },
  { company: 'Experience Architect', label: 'Human-AI Workflow Architecture', reveal: 'GCC telecom CX Center · DZRT market entry · Fruta — venture design, LATAM finance, client confidential.' },
];

export const measuredIn = 'Measured in: 3 telecoms merged · 1,000 engineers on one platform · 32 shopping mall operations · 508,000 m² retail · 60+ discovery projects · a CX Center built from zero.';
