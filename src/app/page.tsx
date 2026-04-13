'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import Image from 'next/image';
import { CustomCursor } from '../components/motion/CustomCursor';
import { MagneticCursor } from '../components/ui/MagneticCursor';
import { FloatingNavigation } from '../components/navigation/FloatingNavigation';
import { SectionIndicator } from '../components/navigation/SectionIndicator';
import { useParallax } from '../hooks/useScrollAnimation';
import { InteractiveProjectCard } from '../components/projects/InteractiveProjectCard';
import { ProjectSnippetGrid } from '../components/projects/ProjectSnippetGrid';
import { 
  AcceleratedInnovationIcon,
  ExperienceOrchestrationIcon,
  IntelligentOperationsIcon,
  TransformationFoundationsIcon,
  StrategyConsultingIcon,
  CustomerIntelligenceIcon
} from '../components/icons/services';
import { ExperienceTimeline } from '../components/ui/ExperienceTimeline';
import {
  RevealHeading,
  RevealBody,
  RevealImage,
  RevealGroup,
  RevealItem,
  SectionReveal,
} from '../components/motion/RevealSystem';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  const [heroImageZoom, setHeroImageZoom] = useState(false);
  const [imageZoomedIn, setImageZoomedIn] = useState(false);
  const [detailHeroLoaded, setDetailHeroLoaded] = useState(false);

  // Reset detail hero fade-in whenever the project changes
  useEffect(() => {
    setDetailHeroLoaded(false);
  }, [selectedProject]);
  
  // Android viewport height fix
  useEffect(() => {
    const setVH = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);
  
  // Enhanced scroll animations
  const parallaxTransform = useParallax(0.3);
  
  // Foundation Project Exploration System
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth <= 640);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  
  // Services hover expansion state
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [aboutLoaded, setAboutLoaded] = useState(false);

  // Gallery video ref — controls playback speed for projects with galleryVideo
  const galleryVideoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (galleryVideoRef.current) {
      galleryVideoRef.current.playbackRate = 1.75;
    }
  });


  // Sophisticated navigation functions with elegant transitions



  // SERVICES DATA - 100% COPY COMPLIANT WITH PROVIDED CONTENT
  const referenceServices = [
    {
      number: "01",
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market in half the time",
      description: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
      demand: "Speed to market without sacrificing strategic depth.",
      tags: ["AI Prototyping", "Innovation Sprints", "Go-to-Market"],
      icon: AcceleratedInnovationIcon
    },
    {
      number: "02",
      title: "Experience Orchestration",
      subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
      description: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
      demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance.",
      tags: ["Omnichannel", "Systems Thinking", "Brand Architecture"],
      icon: ExperienceOrchestrationIcon
    },
    {
      number: "03",
      title: "Intelligent Operations Architecture",
      subtitle: "Building AI-augmented teams that outperform traditional structures",
      description: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
      demand: "Operations that think, adapt, and evolve. Intelligence embedded in every process.",
      tags: ["Agentic AI", "Org Design", "Intelligence Systems"],
      icon: IntelligentOperationsIcon
    },
    {
      number: "04",
      title: "Transformation Foundations",
      subtitle: "Engineering organizational evolution through scalable design foundations",
      description: "Design systems become organizational DNA. Every component strengthens the whole. Every decision accelerates the next. I create modular, scalable frameworks—turning organizational complexity into competitive advantage.",
      demand: "Transformation that compounds. Every change strengthens the foundation for the next leap.",
      tags: ["Design Systems", "Scalable Frameworks", "Cultural Change"],
      icon: TransformationFoundationsIcon
    },
    {
      number: "05",
      title: "Strategic Innovation Consulting",
      subtitle: "Converting market disruption into systematic advantage",
      description: "Navigate complexity with frameworks that transform uncertainty into opportunity. I blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
      demand: "Innovation with precision. Strategies that move from boardroom to market with velocity.",
      tags: ["Strategic Advisory", "Behavioral Economics", "Foresight"],
      icon: StrategyConsultingIcon
    },
    {
      number: "06",
      title: "Customer Intelligence Platforms",
      subtitle: "Turning customer behavior into competitive advantage",
      description: "Architecting intelligence systems that don't just track customer behavior—they anticipate it. I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
      demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy.",
      tags: ["Behavioral Data", "Experience Intelligence", "Platform Design"],
      icon: CustomerIntelligenceIcon
    }
  ];

  // REMOVED: Duplicate expandedService state - already declared above
  
  // Timeline progress state - REMOVED: No longer using timeline
  
  // Memoize projects array to prevent unnecessary re-renders
  const projects = useMemo(() => [
    {
      title: "Kayanee",
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
      image: "/projects/nomade/main-hero-carrusel.jpeg",
      secondaryImage: "/projects/nomade/secundary-hero.jpeg",
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
      title: "STC Kuwait CEX Center",
      subtitle: "Building the Heart, Mind, and Soul of CX Transformation",
      description: "Designed the full strategic and operational foundation for STC Kuwait's Customer Experience Center — a physical and operational hub on the 16th floor of HQ, unifying CX performance, accountability, and cross-functional action in one place.",
      tech: ["CX Strategy", "Experience Design", "Service Design"],
      industryTags: ["Telecommunications"],
      category: "Telecommunications",
      year: "2026",
      client: "STC Kuwait — via Bejo Limited",
      location: "Kuwait City, Kuwait",
      impactMetrics: {
        scale: "25 Stakeholders",
        reach: "B2C & B2B",
        transformation: "15 Use Cases"
      },
      image: "/projects/gcc-telecom/hero-gcc-telecom.png",
      secondaryImage: "/projects/gcc-telecom/secondary-gcc-telecom.png",
      galleryImages: [
        "/projects/gcc-telecom/gallery-gcc-telecom-1.png",
        "/projects/gcc-telecom/gallery-gcc-telecom-2.png"
      ],
      context: "STC Kuwait is one of the Gulf's leading telecom operators, serving millions of B2C and B2B customers across a fiercely competitive market. In late 2024, leadership embedded customer experience as a core strategic pillar through the REACH framework — CX moved from aspiration to accountability. That decision created momentum and an urgent question: what does CX excellence actually look like when you build it from scratch?",
      scope: "The answer was a Customer Experience Center on the 16th floor of STC Kuwait HQ — not a showroom, not a dashboard wall, but a working space where CX performance becomes visible, actionable, and accountable across the organisation. As Lead CX Architect, contracted through Bejo Limited, I owned the design inputs track — personas, use cases, spatial concept inputs, and the rituals that connect space to the people performing each scenario. Every claim, every persona, every use case traced back to specific stakeholder evidence. No assumptions.",
      impact: "Fifteen structured interviews engaging twenty-five stakeholders across ten functional areas: executive leadership, strategy, commercial, technology, retail, and quality. Thematic coding produced eight insight themes, six validated findings, and three strategic imperatives defining the path forward. Fifteen validated use cases mapped B2C and B2B scenarios across four readiness tiers and three delivery horizons — moving from insight trapped in silos to intelligence flowing across functions.",
      testimonial: {
        quote: "The primary barriers were not technical. They were structural and cultural — governance clarity, decision rights, and shared accountability across functions. This architecture gave us the foundation to address all three.",
        author: "Engagement Stakeholder",
        role: "STC Kuwait — via Bejo Limited"
      }
    }
  ], []); // Empty dependency array - static data

  // SNIPPET PROJECTS DATA - Ordered newest → oldest
  const snippetProjects = useMemo(() => [
    {
      id: 'dzrt-badel',
      client: 'Badel · DZRT',
      title: 'Permission before product. Always.',
      year: '2026',
      location: 'Saudi Arabia',
      capabilities: ['Brand Stretching', 'Consumer Research', 'Methodology Design'],
      industry: 'Health & Consumer Goods',
      serviceType: 'Product Strategy | Strategic Design',
      website: 'https://www.dzrt.com/en-sa',
      image: '/projects/snippets/dzrt-badel.png',
      emailSubject: 'Inquiry about DZRT Brand Stretching Architecture — Badel · Saudi Arabia'
    },
    {
      id: 'parques-reunidos',
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
      client: 'Danone',
      title: 'Smart Pricing System',
      year: '2020',
      location: 'Global',
      capabilities: ['Digital Transformation', 'Pricing Strategy'],
      industry: 'Food & Beverage',
      serviceType: 'Digital Transformation | Pricing Strategy',
      website: 'https://www.danone.com/',
      image: '/projects/danone/main-hero-carrusel.jpeg',
      emailSubject: 'Inquiry about Smart Pricing System - Danone Digital Transformation Project'
    },
    {
      id: 'c4ir-colombia',
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
      client: 'Viva Mall',
      title: 'Phygital Retail Revolution',
      year: '2019',
      location: 'Colombia',
      capabilities: ['Experience Architecture', 'Digital Transformation'],
      industry: 'Retail & Real Estate',
      serviceType: 'Experience Architecture | Digital Transformation',
      website: 'https://ccviva.com/',
      image: '/projects/snippets/viva-malls.png',
      emailSubject: 'Inquiry about Phygital Retail Revolution - Retail & Real Estate Project'
    },
    {
      id: 'grupo-exito',
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
      client: 'Tigo · Millicom',
      title: 'Telecom Customer Intelligence Platform',
      year: '2010',
      location: 'Colombia',
      capabilities: ['Business Expansion', 'Customer Experience'],
      industry: 'Telecommunications',
      serviceType: 'Product Direction | Market Expansion Strategy',
      website: 'https://www.tigo.com.co/',
      image: '/projects/snippets/tigo-millicom.png',
      emailSubject: 'Inquiry about Telecom Customer Intelligence Platform - Telecommunications Project'
    }
  ], []); // Empty dependency array - static data

  const projectCategories = ["ALL WORK", "EXPERIENCE DESIGN", "PRODUCT STRATEGY", "SERVICE DESIGN", "USER RESEARCH", "DESIGN OPS"];
  
  // Project-specific color personalities using our 3-color system
  const currentProjectColor = useMemo(() => {
    if (selectedProject === null) return 'project-charcoal-dominant';
    
    const project = projects[selectedProject];
    const projectColorMoods = {
      'Kayanee': 'project-coral-dominant',
      'Augoor': 'project-charcoal-dominant',
      'Chime Care J&J': 'project-cream-dominant',
      'Nomade Tulum': 'project-charcoal-dominant',
      'Flagship Entertainment Destination, KSA': 'project-coral-dominant'
    };
    
    return projectColorMoods[project.title as keyof typeof projectColorMoods] || 'project-charcoal-dominant';
  }, [selectedProject, projects]);
  
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL WORK") return projects;
    const categoryToTechTag: Record<string, string> = {
      "EXPERIENCE DESIGN": "Experience Design",
      "PRODUCT STRATEGY": "Product Strategy",
      "SERVICE DESIGN": "Service Design",
      "USER RESEARCH": "User Research",
      "DESIGN OPS": "Design Ops",
    };
    const tag = categoryToTechTag[selectedCategory];
    return projects.filter(p => p.tech.some(t => t.toLowerCase() === tag.toLowerCase()));
  }, [projects, selectedCategory]);

  // Sophisticated navigation functions - moved after filteredProjects declaration
  const goToProjectWithTransition = useCallback((index: number) => {
    if (index === featuredProjectIndex) return;
    setIsTransitioning(true);
    setFeaturedProjectIndex(Math.min(index, Math.max(0, filteredProjects.length - 1)));
    setTimeout(() => setIsTransitioning(false), 450);
  }, [featuredProjectIndex, filteredProjects.length]);

  // Keyboard Navigation Support - Award-Winning Accessibility (moved after filteredProjects)
  useEffect(() => {
    const handleKeyNavigation = (e: KeyboardEvent) => {
      // Only handle if not typing in input fields
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault();
          const prevIndex = featuredProjectIndex === 0 ? filteredProjects.length - 1 : featuredProjectIndex - 1;
          goToProjectWithTransition(prevIndex);
          break;
        case 'ArrowRight':
          e.preventDefault();
          const nextIndex = (featuredProjectIndex + 1) % filteredProjects.length;
          goToProjectWithTransition(nextIndex);
          break;
        case 'Space':
          e.preventDefault();
          setIsAutoPlaying(!isAutoPlaying);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyNavigation);
    return () => window.removeEventListener('keydown', handleKeyNavigation);
  }, [featuredProjectIndex, filteredProjects.length, isAutoPlaying, goToProjectWithTransition]);

  // Detect prefers-reduced-motion for accessibility
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
      if (e.matches) {
        setIsAutoPlaying(false); // Disable autoplay for reduced motion
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Cinematic Auto-carousel with Smooth Right→Left Flow
  useEffect(() => {
    if (!isAutoPlaying || filteredProjects.length <= 1 || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setFeaturedProjectIndex(prev => {
        const nextIndex = prev === filteredProjects.length - 1 ? 0 : prev + 1;
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 450);
        return nextIndex;
      });
    }, 6000); // 6 seconds per slide — enough time to read

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length, prefersReducedMotion]);


  // Award-Winning Section Transition Orchestration
  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'project-snippets', 'services', 'experience'];
    
    // Enhanced intersection observer for smooth transitions
    const observerOptions = {
      threshold: [0, 0.1, 0.5, 0.9],
      rootMargin: '-10% 0px -10% 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const sectionId = entry.target.id;
        const progress = Math.min(Math.max(entry.intersectionRatio, 0), 1);
        
        if (entry.isIntersecting) {
          // Add sophisticated section entrance effects
          entry.target.classList.add('section-in-view');
          
          // TypeScript-safe style property access
          if (entry.target instanceof HTMLElement) {
            entry.target.style.setProperty('--section-progress', progress.toString());
          }
          
          // Update global section state for color transitions
          if (progress > 0.5) {
            document.documentElement.className = `scroll-section-${sectionId}`;
            document.documentElement.style.setProperty('--current-section', sectionId);
          }
          
          // Preload next section assets
          const currentIndex = sections.indexOf(sectionId);
          const nextSection = sections[currentIndex + 1];
          if (nextSection && progress > 0.8) {
            const nextElement = document.getElementById(nextSection);
            if (nextElement) {
              nextElement.classList.add('section-preload');
            }
          }
        } else {
          entry.target.classList.remove('section-in-view');
        }
      });
    }, observerOptions);

    // Observe all major sections
    sections.forEach(sectionId => {
      const section = document.getElementById(sectionId);
      if (section) {
        sectionObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
    };
  }, []);

  // Award-Winning Context-Aware Cursor System
  useEffect(() => {
    if (isMobile) return;
    
    const cursor = document.getElementById('award-winning-cursor');
    if (!cursor) return;

    const updateCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.setProperty('--cursor-x', `${x}px`);
      cursor.style.setProperty('--cursor-y', `${y}px`);
      
      // Context-aware cursor behavior
      const target = e.target as HTMLElement;
      const isButton = target.closest('button, [role="button"], a, .snippet-cta-bottom-right');
      const isImage = target.closest('.snippet-image-container, .project-card, .gallery-item');
      
      cursor.className = 'award-winning-cursor';
      
      if (isButton) {
        cursor.classList.add('cursor-button');
      } else if (isImage) {
        cursor.classList.add('cursor-image');
      }
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = '1';
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isMobile]);

  // Ensure featuredProjectIndex is within bounds
  const safeFeaturedProjectIndex = Math.min(featuredProjectIndex, Math.max(0, filteredProjects.length - 1));

  return (
    <div className="min-h-screen" style={{backgroundColor: 'var(--vanilla)'}}>
      
      {/* ACCESSIBILITY - Skip Navigation Links */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-coral text-white px-6 py-3 rounded-lg z-50 font-medium"
        style={{ backgroundColor: 'var(--coral)' }}
      >
        Skip to main content
      </a>
      <a 
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 bg-coral text-white px-6 py-3 rounded-lg z-50 font-medium"
        style={{ backgroundColor: 'var(--coral)' }}
      >
        Skip to about section
      </a>
      
      {/* AWWWARDS MAGNETIC CURSOR SYSTEM (hidden on mobile) */}
      {!isMobile && <MagneticCursor />}
      {!isMobile && <CustomCursor />}
      
      {/* Award-Winning Context-Aware Cursor */}
      {!isMobile && (
        <div 
          className="award-winning-cursor"
          id="award-winning-cursor"
        />
      )}
      
      {/* AWWWARDS FLOATING NAVIGATION SYSTEM */}
      <FloatingNavigation />
      
      {/* SOPHISTICATED SECTION INDICATOR */}
      <SectionIndicator />


      {/* HERO FOUNDATION - Award-Winning Visual Communication */}
      <main id="main-content">
      <section 
        id="hero" 
        className="hero-section-luxury section-hero-sophisticated section-transition-sophisticated topographic-luxury"
        data-topographic="hero"
        aria-labelledby="hero-title"
        aria-describedby="hero-description"
        role="banner"
      >
        <div className="hero-bg-unified">
          {/* Artistic Photo Background Layer - Cohesive Integration */}
          <div className="hero-photo-layer-unified">
            <Image
              src="/silvana-hero.jpg"
              alt="Silvana Restrepo, Principal Experience Architect, professional headshot in business attire with confident smile"
              fill
              className="hero-photo-artistic-unified parallax-element gpu-accelerated"
              style={{}}
              quality={100}
              unoptimized
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Unified Color Story Overlay */}
          <div className="hero-unified-color-story"></div>
          
          {/* Cohesive Gradient Foundation */}
          <div className="unified-gradient-foundation"></div>
          
          {/* Visual Bridge to About Section */}
          <div className="unified-section-connector"></div>
          
          {/* Sophisticated Vignette - Preserved */}
          <div className="hero-vignette-luxury"></div>
        </div>
        
        {/* Content Over Photo */}
        <div className="hero-content-luxury">
            {/* Name — above the primary title */}
          <motion.p
            className="hero-name-label"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 1.0, delay: isMobile ? 0.05 : 0.18 }}
          >
            Silvana Restrepo
          </motion.p>

          <motion.h1
            id="hero-title"
            className="hero-title-luxury-centered"
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, delay: isMobile ? 0.12 : 0.382 }} /* Faster on mobile */
          >
            Experience Architect
          </motion.h1>

          <motion.p
            className="hero-role-line"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.618, delay: isMobile ? 0.2 : 0.72 }}
          >
            Experience Design · Strategy · Transformation
          </motion.p>

          {/* ELEGANT CTA BUTTONS - Small and Sophisticated */}
          <motion.div 
            className="hero-cta-elegant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 1.0, delay: isMobile ? 0.24 : 0.8 }}
          >
            <motion.button
              onClick={() => {
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                }
              }}
              className="hero-cta-button"
              aria-label="Navigate to featured projects section"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.618, delay: isMobile ? 0.36 : 1.0, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Projects
            </motion.button>
            
            <motion.a
              href="/CV_Silvana_Restrepo_Final.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button hero-cta-button--secondary"
              aria-label="Open Silvana Restrepo's curriculum vitae in new tab"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 0.618, delay: isMobile ? 0.48 : 1.382, ease: [0.34, 1.56, 0.64, 1] }}
            >
              Executive CV
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="hero-scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2, duration: 1 }}
            aria-hidden="true"
          >
            <span className="hero-scroll-line" />
          </motion.div>

        </div>
      </section>

      {/* ABOUT SECTION - Ultra-Luxury Single-View */}
      <section 
        id="about" 
        className="about-section-ultra-luxury luxury-background-texture section-about-sophisticated section-transition-sophisticated topographic-luxury"
        data-topographic="about"
        aria-labelledby="about-heading"
        aria-describedby="about-description"
        role="main"
      >
        {/* Background interference elements removed for clean design */}
        <div className="about-container-ultra-luxury" style={{ display: 'block', width: '100%', boxSizing: 'border-box', padding: '0 clamp(24px, 4vw, 64px)', margin: '0' }}>
          {/* Section Header */}
          <SectionReveal as="header" className="about-header-ultra-luxury">
            <div className="about-header-content">
              <RevealHeading
                id="about-heading"
                as="h2"
                className="about-title-ultra-luxury typography-h2"
              >
                about
              </RevealHeading>
            </div>
          </SectionReveal>

          {/* Two-Column Layout */}
          <div className="about-content-ultra-luxury">
            {/* Left Column — text reveals as staggered group */}
            <div className="about-text-column">
              <RevealGroup as="div" className="about-text-content" stagger={0.14} delayChildren={0.1}>
                <RevealItem as="p" className="about-main-story">
                  I believe the most compelling stories begin with curiosity—<br />
                  a spark that has carried me across continents, <br />
                  blending diverse perspectives from anthropology to business, <br />
                  from innovation to experience design, <br />
                  and from emerging technologies to business transformation.
                </RevealItem>

                <RevealItem as="p" className="about-main-story">
                  Each endeavor deepens my mission: <br />
                  bridging strategic business goals with the human truths <br />
                  that drive transformation.
                </RevealItem>

                <RevealItem as="p" className="about-main-story">
                  Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
                </RevealItem>

                <RevealItem as="p" className="about-welcome">
                  Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility.
                </RevealItem>
              </RevealGroup>
            </div>

            {/* Right Column — photo reveals with scale */}
            <div className="about-photo-column" style={{ display: 'block', width: '100%' }}>
              <RevealImage className="about-photo-container about-photo-unified-sophisticated" style={{ width: '100%', maxWidth: 'none', display: 'block' }}>
                <Image
                  src="/silvana-about.jpg"
              alt="Silvana Restrepo working at her desk, black and white professional photo showing her workspace and thoughtful expression"
              width={600}
              height={500}
              className="about-photo-perfect about-photo-cohesive"
                  style={{
                width: '100%',
                height: 'clamp(360px, 50vw, 560px)',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '6px',
                display: 'block',
                opacity: aboutLoaded ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }}
              quality={100}
              unoptimized
              priority
              onError={() => setAboutLoaded(true)}
              onLoad={() => setAboutLoaded(true)}
            />
                
                {/* Unified Color Harmony */}
                <div className="about-photo-unified-harmony"></div>
                {/* Cohesive Accent System */}
                <div className="about-photo-unified-accent"></div>
              </RevealImage>
            </div>
          </div>

          {/* Philosophy Quote */}
          <RevealBody
            as="div"
            className="about-philosophy-ultra-luxury"
            delay={0.1}
          >
            <blockquote className="philosophy-quote-ultra-luxury">
              <em>The art of my craft lies in listening to the unspoken, seeing the invisible, and revealing the intangible nature of human desire.</em>
            </blockquote>
          </RevealBody>
        </div>
      </section>

      {/* PROJECTS SECTION - Award-Winning Enhancement */}
      <section 
        id="projects" 
        className="projects-section-award-winning luxury-background-texture section-projects-sophisticated section-transition-sophisticated topographic-luxury"
        data-topographic="projects"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Background interference elements removed for clean design */}
        <div className="projects-container-award-winning">
          {/* Award-Winning Section Header with Sophisticated Spacing */}
          <motion.div
            className="projects-header-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="projects-header-content-award">
              <motion.h2
                className="projects-title-award-winning typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.1 : 0.236 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
            </div>

            {/* Filter buttons */}
            <div className="projects-filter-tags-award">
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  className={`filter-tag-award-winning${selectedCategory === cat ? ' active' : ''}`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setFeaturedProjectIndex(0);
                    setIsAutoPlaying(false);
                  }}
                  aria-pressed={selectedCategory === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

          </motion.div>
          
          {/* Projects: Editorial Index + Carousel */}
          <motion.div
            className="projects-carousel-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.618, delay: 0.3 }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="projects-main-layout">

              {/* ── Editorial Index — desktop sidebar ── */}
              <nav className="projects-editorial-index" aria-label="Project index">
                {filteredProjects.map((proj, idx) => (
                  <button
                    key={idx}
                    className={`project-index-item${idx === safeFeaturedProjectIndex ? ' is-active' : ''}`}
                    onClick={() => { goToProjectWithTransition(idx); setIsAutoPlaying(false); }}
                    aria-label={`View ${proj.title}`}
                    aria-current={idx === safeFeaturedProjectIndex ? 'true' : undefined}
                  >
                    <span className="project-index-num">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="project-index-name">{proj.title}</span>
                  </button>
                ))}
              </nav>

              {/* ── Carousel core ── */}
              <div className="projects-carousel-core">

                {/* Mobile: dots + chevrons */}
                {isMobile && (
                  <div className="carousel-dot-navigation">
                    <motion.button
                      onClick={() => {
                        const prevIndex = safeFeaturedProjectIndex === 0
                          ? filteredProjects.length - 1
                          : safeFeaturedProjectIndex - 1;
                        goToProjectWithTransition(prevIndex);
                        setIsAutoPlaying(false);
                      }}
                      className="carousel-chevron"
                      aria-label="Previous project"
                      whileHover={{ scale: 1.12, x: -2 }}
                      whileTap={{ scale: 0.88 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15,18 9,12 15,6" />
                      </svg>
                    </motion.button>
                    <div className="carousel-dots">
                      {filteredProjects.map((proj, dotIndex) => (
                        <motion.button
                          key={dotIndex}
                          className="carousel-dot"
                          onClick={() => { goToProjectWithTransition(dotIndex); setIsAutoPlaying(false); }}
                          aria-label={`Go to ${proj.title}`}
                          animate={{
                            width: dotIndex === safeFeaturedProjectIndex ? 24 : 8,
                            background: dotIndex === safeFeaturedProjectIndex
                              ? 'var(--coral)'
                              : 'rgba(74, 85, 104, 0.28)'
                          }}
                          transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                          whileHover={{ scale: 1.35 }}
                          whileTap={{ scale: 0.82 }}
                        />
                      ))}
                    </div>
                    <motion.button
                      onClick={() => {
                        const nextIndex = (safeFeaturedProjectIndex + 1) % filteredProjects.length;
                        goToProjectWithTransition(nextIndex);
                        setIsAutoPlaying(false);
                      }}
                      className="carousel-chevron"
                      aria-label="Next project"
                      whileHover={{ scale: 1.12, x: 2 }}
                      whileTap={{ scale: 0.88 }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9,18 15,12 9,6" />
                      </svg>
                    </motion.button>
                  </div>
                )}

                {/* Card */}
                <AnimatePresence mode="wait">
                  <motion.div
                    className="projects-3d-container"
                    key={safeFeaturedProjectIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      opacity: { duration: 0.3 },
                    }}
                    onHoverStart={() => setIsAutoPlaying(false)}
                    onHoverEnd={() => setIsAutoPlaying(true)}
                  >
                    <InteractiveProjectCard
                      project={filteredProjects[safeFeaturedProjectIndex]}
                      index={safeFeaturedProjectIndex}
                      isActive={!isTransitioning}
                      onSelect={setSelectedProject}
                      className="project-card-cinematic-flow"
                    />
                  </motion.div>
                </AnimatePresence>


              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROJECT SNIPPETS SECTION - ADDITIONAL WORK */}
      <section 
        id="project-snippets" 
        className="snippet-section section-transition-sophisticated topographic-luxury"
        data-topographic="projects"
        aria-labelledby="snippets-heading"
      >
        <div className="snippet-container">
          {/* Snippet Section Header */}
          <motion.div
            className="projects-header-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
            viewport={{ once: true, amount: 0.01 }}
          >
            <div className="projects-header-content-award">
              <motion.h2 
                id="snippets-heading"
                className="projects-title-award-winning typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.1 : 0.236 }}
                viewport={{ once: true }}
              >
                Also this.
              </motion.h2>
            </div>
            
          </motion.div>
          
          {/* Snippet Projects Grid */}
          <ProjectSnippetGrid projects={snippetProjects} />
        </div>
      </section>

      {/* SERVICES SECTION - GRAPEFRUIT BUSINESS CONFIDENCE */}
      <section 
        id="services"
        className="section-luxury section-services-sophisticated section-transition-sophisticated topographic-luxury"
        data-topographic="services"
        aria-labelledby="services-heading"
      >
        <div className="container-foundation">
          {/* Section header */}
          <SectionReveal as="div" className="svc-header">
            <RevealHeading as="h2" className="svc-heading">
              services
            </RevealHeading>
          </SectionReveal>

          {/* Enhanced editorial accordion */}
          <div className="svc-list">
            {referenceServices.map((service, index) => {
              const isOpen = expandedService === service.title;
              return (
                <motion.div
                  key={service.title}
                  className={`svc-row${isOpen ? ' svc-row--open' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.07, ease: [0.23, 1, 0.32, 1] }}
                  viewport={{ once: true }}
                >
                  {/* ── Clickable header ── */}
                  <button
                    className="svc-row-header"
                    onClick={() => setExpandedService(isOpen ? null : service.title)}
                    aria-expanded={isOpen}
                    aria-controls={`svc-body-${index}`}
                  >
                    <div className="svc-text">
                      <span className="svc-title">{service.title}</span>
                      <span className="svc-tagline">{service.subtitle}</span>
                    </div>

                    <motion.span
                      className="svc-chevron"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    >
                      +
                    </motion.span>
                  </button>

                  {/* ── Expanded body ── */}
                  <motion.div
                    id={`svc-body-${index}`}
                    className="svc-body"
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="svc-body-inner">
                      <p className="svc-description">{service.description}</p>

                      <p className="svc-demand">
                        <em>{service.demand}</em>
                      </p>

                      {/* Capability tags */}
                      <div className="svc-tags">
                        {(service.tags || []).map((tag: string) => (
                          <span key={tag} className="svc-tag">{tag}</span>
                        ))}
                      </div>

                      <motion.button
                        className="svc-cta"
                        onClick={(e) => {
                          e.stopPropagation();
                          const subject = `Inquiry — ${service.title}`;
                          const body = `Hi Silvana, I'm interested in learning more about "${service.title}". Could we schedule a conversation?`;
                          window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Ask About This Service →
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Horizontal Auto-Scroll Timeline */}
      <ExperienceTimeline />

      {/* EDITORIAL FOOTER */}
      <footer id="footer" className="footer-editorial">
        <div className="footer-editorial-inner">
          <p className="footer-editorial-statement">
            Let&rsquo;s build something<br />worth remembering.
          </p>
          <a
            href="https://silvana.mmm.page/human-perspective"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-editorial-voice"
          >
            My design voice ↗
          </a>
          <div className="footer-editorial-contact">
            <a href="mailto:silvanarestrepo888@gmail.com" className="footer-editorial-link">
              Mail
            </a>
            <span className="footer-editorial-sep" aria-hidden="true">·</span>
            <a href="https://linkedin.com/in/silvanarestrepo" target="_blank" rel="noopener noreferrer" className="footer-editorial-link">
              LinkedIn
            </a>
          </div>
          <p className="footer-editorial-credit">© 2026 Silvana Restrepo</p>
        </div>
      </footer>
      </main>

      {/* AWARD-WINNING PROJECT DETAILS PAGE - LANDOR STANDARDS */}
      <AnimatePresence mode="wait">
      {selectedProject !== null && (
        <motion.div
          className={`project-details-overlay ${currentProjectColor}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        >
          {/* TOP NAVIGATION — unified minimal strip */}
          <div className="project-details-navigation-system">
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="project-back-button-ultra"
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <span className="back-icon">←</span>
              <span className="back-text">Back</span>
            </motion.button>

            <motion.span
              className="project-title-bar-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              {selectedProject !== null ? projects[selectedProject].title : ''}
            </motion.span>

            <motion.button
              onClick={() => setSelectedProject(null)}
              className="project-close-button-ultra"
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              aria-label="Close project details"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>

          {/* HERO SECTION - Full-bleed cinematic image */}
          <div className="project-hero-section project-details-hero-section">
            <div className="detail-hero-image-wrap">
              <Image
                src={projects[selectedProject].secondaryImage || projects[selectedProject].image}
                alt={projects[selectedProject].title}
                fill
                className="detail-hero-image"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  opacity: detailHeroLoaded ? 1 : 0,
                  transition: 'opacity 0.6s ease',
                }}
                priority
                unoptimized
                sizes="100vw"
                onLoad={() => setDetailHeroLoaded(true)}
                onError={() => setDetailHeroLoaded(true)}
              />
            </div>
          </div>

          {/* Project Title — cleanly below the hero image */}
          <div className="project-title-section">
            <motion.h1
              className="project-title typography-h1"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              {projects[selectedProject].title}
            </motion.h1>
            <motion.p
              className="project-subtitle typography-body"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {projects[selectedProject].subtitle}
            </motion.p>
          </div>

          {/* PROJECT METADATA SECTION - PROPER MARGINS */}
          <div className="project-metadata-section">
            <div className="metadata-container">
              <div className="metadata-grid">
                <div className="metadata-item">
                  <span className="metadata-label typography-caption">Client</span>
                  <span className="metadata-value typography-body">{projects[selectedProject].client}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label typography-caption">Year</span>
                  <span className="metadata-value typography-body">{projects[selectedProject].year}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label typography-caption">Location</span>
                  <span className="metadata-value typography-body">{projects[selectedProject].location}</span>
                </div>
                <div className="metadata-item">
                  <span className="metadata-label typography-caption">Category</span>
                  <span className="metadata-value typography-body">{projects[selectedProject].category}</span>
                </div>
              </div>
              <div className="project-tags">
                {projects[selectedProject].tech.slice(0, 3).map((tag, index) => (
                  <span key={index} className="project-tag typography-caption">
                    {tag}
                    </span>
                ))}
                  </div>
            </div>
          </div>
                
          {/* CONTENT SECTIONS - PROPER MARGINS & 100% COPY COMPLIANCE */}
          <div className="project-content-sections project-details-content-sections">
            <div className="content-sections-container">
              
                  {/* Context Section */}
                  <motion.section
                    className="content-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.618, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: '-8% 0px' }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Context</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].context.split('\n\n').map((paragraph: string, index: number, arr: string[]) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < arr.length - 1 ? '1.5rem' : '0' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Scope of the Project Section */}
                  <motion.section
                    className="content-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.618, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: '-8% 0px' }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Scope of the Project</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].scope.split('\n\n').map((paragraph: string, index: number, arr: string[]) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < arr.length - 1 ? '1.5rem' : '0' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Approach Section */}
                  <motion.section
                    className="content-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.618, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: '-8% 0px' }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Impact</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].impact.split('\n\n').map((paragraph: string, index: number, arr: string[]) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < arr.length - 1 ? '1.5rem' : '0' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Testimonial Section */}
                    <motion.section
                className="content-section"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.618, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                viewport={{ once: true, margin: '-8% 0px' }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Testimonial</h2>
                </div>
                <div className="section-content">
                  <div className="testimonial-container">
                    <blockquote className="testimonial-quote typography-body">
                      &ldquo;{projects[selectedProject].testimonial.quote}&rdquo;
                        </blockquote>
                    <div className="testimonial-attribution">
                      <p className="testimonial-author typography-caption">
                        {projects[selectedProject].testimonial.author}
                      </p>
                      <p className="testimonial-role typography-caption">
                        {projects[selectedProject].testimonial.role}
                      </p>
                    </div>
                  </div>
                      </div>
                    </motion.section>
              
            </div>
          </div>
              
          {/* PROJECT GALLERY */}
          <div className="project-gallery-section project-details-gallery-section">
                <motion.div
              className="gallery-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="gallery-title typography-h3">Project Gallery</h2>
            </motion.div>

            {/* GALLERY — strip layout for horizontal images, editorial for everything else */}
            {selectedProject !== null && (() => {
              const imgs = projects[selectedProject].galleryImages || [];
              const vid = (projects[selectedProject] as { galleryVideo?: string }).galleryVideo;
              const layout = (projects[selectedProject] as { galleryLayout?: string }).galleryLayout;

              /* ── HORIZONTAL FILM-STRIP (e.g. Nomade: 4 wide landscape screenshots) ── */
              if (layout === 'strip') {
                return (
                  <motion.div
                    className="gallery-strip-wrapper"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    viewport={{ once: true, margin: '-60px' }}
                  >
                    <div className="gallery-strip">
                      {imgs.map((image, index) => (
                        <motion.div
                          key={index}
                          className="gallery-strip-cell"
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.7, delay: index * 0.08 }}
                          viewport={{ once: true, margin: '-40px' }}
                          onClick={() => { setCurrentGalleryImage(index); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Image
                            src={image}
                            alt={`${projects[selectedProject].title} — ${index + 1}`}
                            width={1600}
                            height={900}
                            className="gallery-strip-img"
                            style={{ height: '100%', width: 'auto', maxWidth: 'none', display: 'block', objectFit: 'cover' }}
                            quality={95}
                            unoptimized
                          />
                          <div className="gallery-strip-index">{String(index + 1).padStart(2, '0')}</div>
                        </motion.div>
                      ))}
                    </div>
                    <div className="gallery-strip-hint">← scroll →</div>
                  </motion.div>
                );
              }

              /* ── EDITORIAL LAYOUT (default — images first, video last) ── */
              return (
                <div className="gallery-editorial">
                  {/* Row 1 — Full-width hero image */}
                  {imgs[0] && (
                    <motion.div
                      className="gallery-editorial-hero"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9 }}
                      viewport={{ once: true, margin: '-60px' }}
                      onClick={() => { setCurrentGalleryImage(0); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                      style={{ cursor: 'pointer' }}
                    >
                      <Image
                        src={imgs[0]}
                        alt={`${projects[selectedProject].title} — Design system overview`}
                        width={2400}
                        height={1200}
                        className="gallery-editorial-img"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                        quality={95}
                        unoptimized
                      />
                    </motion.div>
                  )}

                  {/* Row 2 — Left dominant (wider left) */}
                  {(imgs[1] || imgs[2]) && (
                    <div className="gallery-editorial-row gallery-editorial-row--left">
                      {imgs[1] && (
                        <motion.div
                          className="gallery-editorial-cell"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9, delay: 0.1 }}
                          viewport={{ once: true, margin: '-60px' }}
                          onClick={() => { setCurrentGalleryImage(1); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Image
                            src={imgs[1]}
                            alt={`${projects[selectedProject].title} — E-commerce experience`}
                            width={1600}
                            height={1200}
                            className="gallery-editorial-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                            quality={95}
                            unoptimized
                          />
                        </motion.div>
                      )}
                      {imgs[2] && (
                        <motion.div
                          className="gallery-editorial-cell"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9, delay: 0.2 }}
                          viewport={{ once: true, margin: '-60px' }}
                          onClick={() => { setCurrentGalleryImage(2); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Image
                            src={imgs[2]}
                            alt={`${projects[selectedProject].title} — Homepage experience`}
                            width={1200}
                            height={1200}
                            className="gallery-editorial-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                            quality={95}
                            unoptimized
                          />
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Row 3 — Right dominant (wider right, Z-pattern) */}
                  {(imgs[3] || imgs[4]) && (
                    <div className="gallery-editorial-row gallery-editorial-row--right">
                      {imgs[3] && (
                        <motion.div
                          className="gallery-editorial-cell"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9, delay: 0.1 }}
                          viewport={{ once: true, margin: '-60px' }}
                          onClick={() => { setCurrentGalleryImage(3); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Image
                            src={imgs[3]}
                            alt={`${projects[selectedProject].title} — Homepage detail`}
                            width={1200}
                            height={1200}
                            className="gallery-editorial-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                            quality={95}
                            unoptimized
                          />
                        </motion.div>
                      )}
                      {imgs[4] && (
                        <motion.div
                          className="gallery-editorial-cell"
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.9, delay: 0.2 }}
                          viewport={{ once: true, margin: '-60px' }}
                          onClick={() => { setCurrentGalleryImage(4); setGalleryZoomOpen(true); setImageZoomedIn(false); }}
                          style={{ cursor: 'pointer' }}
                        >
                          <Image
                            src={imgs[4]}
                            alt={`${projects[selectedProject].title} — Progressive innovations`}
                            width={1600}
                            height={1200}
                            className="gallery-editorial-img"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                            quality={95}
                            unoptimized
                          />
                        </motion.div>
                      )}
                    </div>
                  )}

                  {/* Video — last, understated, centered */}
                  {vid && (
                    <motion.div
                      className="gallery-editorial-video-section"
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.0, delay: 0.1 }}
                      viewport={{ once: true, margin: '-60px' }}
                    >
                      <div className="gallery-editorial-video-rule" />
                      <p className="gallery-editorial-video-label">Process Documentation</p>
                      <div className="gallery-editorial-video-container">
                        <video
                          ref={galleryVideoRef}
                          src={vid}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })()}
                  </div>
                
          {/* SOPHISTICATED PROJECT NAVIGATION */}
          <div className="sophisticated-navigation-section">
            <motion.div
              className="sophisticated-nav-project prev-project"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onClick={() => {
                const prevIndex = selectedProject === 0 ? projects.length - 1 : selectedProject - 1;
                setSelectedProject(prevIndex);
                // Scroll the modal overlay to top
                setTimeout(() => {
                  const overlay = document.querySelector('.project-details-overlay');
                  if (overlay) {
                    overlay.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              whileHover={{ scale: 1.02, x: -10 }}
            >
              <div className="sophisticated-nav-thumbnail">
                <div
                  className="sophisticated-nav-image"
                        style={{
                    backgroundImage: `url(${projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                        }}
                />
                      </div>
              <div className="sophisticated-nav-info">
                <span className="sophisticated-nav-label">Previous Project</span>
                <h4 className="sophisticated-nav-title">{projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].title}</h4>
                <p className="sophisticated-nav-subtitle">{projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].subtitle}</p>
                  </div>
            </motion.div>

            <motion.div
              className="sophisticated-nav-project next-project"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      onClick={() => {
                const nextIndex = (selectedProject + 1) % projects.length;
                setSelectedProject(nextIndex);
                // Scroll the modal overlay to top
                setTimeout(() => {
                  const overlay = document.querySelector('.project-details-overlay');
                  if (overlay) {
                    overlay.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }, 100);
              }}
              whileHover={{ scale: 1.02, x: 10 }}
            >
              <div className="sophisticated-nav-info">
                <span className="sophisticated-nav-label">Next Project</span>
                <h4 className="sophisticated-nav-title">{projects[(selectedProject + 1) % projects.length].title}</h4>
                <p className="sophisticated-nav-subtitle">{projects[(selectedProject + 1) % projects.length].subtitle}</p>
                  </div>
              <div className="sophisticated-nav-thumbnail">
                <div
                  className="sophisticated-nav-image"
                        style={{
                    backgroundImage: `url(${projects[(selectedProject + 1) % projects.length].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                        }}
                />
                </div>
            </motion.div>
            </div>
          
           {/* PROJECT DETAILS FOOTER - EDITORIAL */}
           <footer className="footer-editorial">
             <div className="footer-editorial-inner">
               <p className="footer-editorial-statement">
                 Let&rsquo;s build something<br />worth remembering.
               </p>
               <a
                 href="https://silvana.mmm.page/human-perspective"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="footer-editorial-voice"
               >
                 My design voice ↗
               </a>
               <div className="footer-editorial-contact">
                 <a href="mailto:silvanarestrepo888@gmail.com" className="footer-editorial-link">
                   Mail
                 </a>
                 <span className="footer-editorial-sep" aria-hidden="true">·</span>
                 <a href="https://linkedin.com/in/silvanarestrepo" target="_blank" rel="noopener noreferrer" className="footer-editorial-link">
                   LinkedIn
                 </a>
               </div>
               <p className="footer-editorial-credit">© 2026 Silvana Restrepo</p>
             </div>
           </footer>
        </motion.div>
      )}
      </AnimatePresence>

      {/* Hero Image Zoom Modal */}
      {heroImageZoom && (
        <motion.div 
          className="hero-zoom-modal"
          onClick={() => setHeroImageZoom(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="hero-zoom-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="hero-zoom-image"
                        style={{
                backgroundImage: `url(${selectedProject !== null ? projects[selectedProject].image : ''})`,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            <motion.button 
              onClick={() => setHeroImageZoom(false)}
              className="hero-zoom-close"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
          </motion.div>
        </motion.div>
      )}

      {/* Gallery Zoom Modal */}
      {galleryZoomOpen && (
        <motion.div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
          style={{ overflow: imageZoomedIn ? 'auto' : 'hidden' }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              setGalleryZoomOpen(false);
              setImageZoomedIn(false); // Reset zoom when closing
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative max-w-[85vw] max-h-[85vh] w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <motion.div
              animate={{ scale: imageZoomedIn ? 1.25 : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              style={{ cursor: imageZoomedIn ? 'zoom-out' : 'zoom-in' }}
              onClick={(e) => {
                e.stopPropagation();
                setImageZoomedIn(!imageZoomedIn);
              }}
            >
              <Image
                src={selectedProject !== null && projects[selectedProject].galleryImages ?
                  projects[selectedProject].galleryImages[currentGalleryImage] :
                  (selectedProject !== null ? projects[selectedProject].image : '')}
                alt={`${selectedProject !== null ? projects[selectedProject].title : ''} — Gallery image ${currentGalleryImage + 1}`}
                width={1200}
                height={800}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                  borderRadius: '12px',
                }}
                quality={100}
                unoptimized
                priority
                sizes="90vw"
                onError={(e) => {
                  e.currentTarget.style.setProperty('background-color', 'var(--vanilla-depth)');
                  e.currentTarget.style.setProperty('border', '2px dashed var(--charcoal-light)');
                }}
              />
            </motion.div>
            
            {/* Navigation Arrows */}
            {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.length > 1 && (
              <>
                <button
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentGalleryImage(prev => 
                      prev === 0 ? projects[selectedProject].galleryImages.length - 1 : prev - 1
                    );
                    setImageZoomedIn(false); // Reset zoom when navigating
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  ‹
                </button>
                <button
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentGalleryImage(prev => 
                      prev === projects[selectedProject].galleryImages.length - 1 ? 0 : prev + 1
                    );
                    setImageZoomedIn(false); // Reset zoom when navigating
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg"
                >
                  ›
                </button>
              </>
            )}
            
            {/* Close Button */}
            <motion.button 
              onMouseDown={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setGalleryZoomOpen(false);
                setImageZoomedIn(false);
              }}
              className="absolute top-6 right-6 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold hover:bg-red-500 hover:text-white transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
          </motion.div>
        </motion.div>
      )}

    </div>
  );
}
