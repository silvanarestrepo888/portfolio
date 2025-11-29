'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';
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
import { BackgroundProvider, BackgroundLayer } from '../components/backgrounds/BackgroundProvider';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  // REMOVED: selectedCategory state - filter tags are visual-only
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  const [heroImageZoom, setHeroImageZoom] = useState(false);
  const [imageZoomedIn, setImageZoomedIn] = useState(false);
  
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
  
  


  // Sophisticated navigation functions with elegant transitions



  // SERVICES DATA - 100% COPY COMPLIANT WITH PROVIDED CONTENT
  const referenceServices = [
    {
      number: "01",
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market in half the time",
      description: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
      demand: "Speed to market without sacrificing strategic depth.",
      icon: AcceleratedInnovationIcon
    },
    {
      number: "02", 
      title: "Experience Orchestration",
      subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
      description: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
      demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance.",
      icon: ExperienceOrchestrationIcon
    },
    {
      number: "03",
      title: "Intelligent Operations Architecture", 
      subtitle: "Building AI-augmented teams that outperform traditional structures",
      description: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
      demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process.",
      icon: IntelligentOperationsIcon
    },
    {
      title: "Transformation Foundations",
      subtitle: "Engineering organizational evolution through scalable design foundations", 
      description: "Design systems become organizational DNA. Every component strengthens the whole. Every decision accelerates the next. I collaborate to create modular, scalable frameworks —turning organizational complexity into competitive advantage.",
      demand: "Transformation that compounds. Every change strengthens the foundation for the next leap.",
      icon: TransformationFoundationsIcon
    },
    {
      number: "05",
      title: "Strategic Innovation Consulting",
      subtitle: "Converting market disruption into systematic advantage",
      description: "Navigate complexity with frameworks that transform uncertainty into opportunity. I blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
      demand: "Innovation with precision. Strategies that move from boardroom to market with velocity.",
      icon: StrategyConsultingIcon
    },
    {
      number: "06",
      title: "Customer Intelligence Platforms",
      subtitle: "Turning customer behavior into a competitive advantage",
      description: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
      demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy.",
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
      secondaryImage: "/projects/kayanee/secundary-kayanee.jpeg",
      galleryImages: [
        "/projects/kayanee/Project Gallery /secundary-kayanee.jpeg",
        "/projects/kayanee/Project Gallery /Screenshot 2024-11-15 at 10.42.42.png",
        "/projects/kayanee/Project Gallery /Screens-VSCO.jpeg"
      ],
      context: "For centuries, wellness has been a deeply personal journey—rooted in culture, tradition, and individual aspirations. In Saudi Arabia, a new chapter is being written, Kayanne is more than just a wellness brand; it's a movement, a vision, and a revolution in how women experience health, self-care, and empowerment. Kayanee is the first ecosystem integrating physical, digital, and social experiences for women's holistic wellbeing.",
      scope: "Spaces were designed to intuitively recognise wellness needs, blending physical environments with AI-driven digital journeys. Crafted to be a phygital ecosystem merging behavioural science with technology to create deeply personalised transformative experiences. Seamless interactions across touch points—from retail environments to digital platforms—enhancing women's holistic wellbeing journey.",
      impact: "Kayanee redefines possibility within Saudi Arabia's $19 billion wellness industry through cultural-technological fusion. The e-commerce platform launch initiates a vision extending beyond digital into integrated experiences. The full vision is still unfolding, with new innovations, experiences, and services continuously being developed to shape the future of women's wellness in Saudi Arabia.",
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
      secondaryImage: "/projects/chime-care/secundary-jjpeg.jpeg",
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
      title: "Danone Digital Transformation",
      subtitle: "Driving Digital Transformation in Pricing Strategy",
      description: "In volatile markets, reactive pricing costs opportunities. Danone's Smart Pricing System represents a fundamental shift—data intelligence and predictive analytics now enable real-time market response, transforming pricing from operational necessity into competitive advantage.",
      tech: ["Digital Transformation", "Service Design", "Product Strategy"],
      industryTags: ["Food and Beverage"],
      category: "Food and Beverage",
      year: "2021",
      client: "Danone",
      location: "Argentina",
      website: "https://www.danone.com/",
      impactMetrics: {
        scale: "Corporate Strategy", 
        reach: "Market Intelligence",
        transformation: "Pricing Innovation"
      },
      image: "/projects/danone/main-hero-carrusel.jpeg",
      secondaryImage: "/projects/danone/secundary-hero.png",
      galleryImages: [
        "/projects/danone/Project Gallery/Screenshot 2025-04-15 at 14.01.55.png",
        "/projects/danone/Project Gallery/Screenshot 2025-04-15 at 14.03.20.png",
        "/projects/danone/Project Gallery/secundary-danone.jpeg"
      ],
      context: "In food and beverage, pricing decisions must be intelligent and adaptive against rapidly shifting market dynamics. Danone needed to transition from a reactive, inflationary pricing approach to predictive models aligned with erratic market behaviour. A comprehensive Digital Maturity Assessment was undertaken to evaluate capabilities across technology, data, processes, and organisational culture.",
      scope: "We led the maturity assessment, identifying capability gaps between Danone's digital ambition and its current operational reality. Critical challenges in data governance, technology automation, and cross-functional processes Scalability was diagnosed. A modular pricing framework was architected to ensure strategic alignment with broader organisational transformation objectives.",
      impact: "The strategic roadmap established foundations for dynamic pricing capabilities leveraging predictive analytics and automation. Detailed implementation frameworks outlined pathways to overcome silos between pricing, sales, and finance teams. The discovery phase delivered a scalable vision positioning pricing as strategic advantage in Danone's digital transformation.",
      testimonial: {
        quote: "Silvana is a person who shows permanent commitment to the project, always responsible and collaborating not only with regard to her tasks and objectives but also with those of the team and the project. On the other hand, she has proven to be innovative, proposing, challenging and always seeking to optimize work dynamics and tools to work with clients.",
        author: "Roberto Hernán Murdocca",
        role: "Tech Director - Globant"
      }
    },
    {
      title: "Parques Reunidos",
      subtitle: "Catalog Harmonisation",
      description: "Seventy diverse entertainment venues created stunning operational complexity. A unified product language now preserves venue-specific narratives while enabling enterprise-wide product strategies, turning fragmented systems into coordinated platform across three continents.",
      tech: ["Experience Design", "Service Design", "Digital Transformation"],
      industryTags: ["Themed Parks"],
      category: "Themed Parks",
      year: "2023",
      client: "Parques Reunidos",
      location: "Spain",
      website: "https://www.parquesreunidos.com/",
      impactMetrics: {
        scale: "70 Entertainment Venues",
        reach: "3 Continents", 
        transformation: "Unified Platform"
      },
      image: "/projects/parques-reunidos/hero-parque-reunidos.png",
      secondaryImage: "/projects/parques-reunidos/secundary-image.jpeg",
      galleryImages: [
        "/projects/parques-reunidos/Project Gallery/Envisioning for Digital Planning and Booking.png",
        "/projects/parques-reunidos/Project Gallery/Envisioning for Dynamic Booking.png",
        "/projects/parques-reunidos/Project Gallery/Project Envisioning Customer Journey Unfied .png"
      ],
      context: "Parques Reunidos is a global leisure leader operating seventy diverse entertainment venues spanning three continents and multiple experience categories. Portfolio diversity created operational complexity—particularly across six sales channels and seven distinct product categories. Fragmented systems limited consistent guest experiences and prevented implementation of enterprise-wide product strategies.",
      scope: "In collaboration with internal teams, we created a unified product taxonomy to enable operational efficiency while preserving the authenticity of local venue offerings. We designed governance frameworks that balance centralised intelligence with venue-specific innovation across diverse properties. Integration pathways were mapped to connect disparate systems into a coherent operational ecosystem, enhancing both efficiency and engagement.",
      impact: "As Globant we established master catalog architecture, creating a unified product language while preserving unique venue-specific narratives. Designed a governance system, transforming fragmented decision processes into coordinated strategic actions across the portfolio. Envisioned an implementation roadmap elevating product ecosystems from operational necessities to strategic enablers of guest delight.",
      testimonial: {
        quote: "We have completed the Catalog Harmonisation Project in the expected time and conditions, despite having a very complex scope, with changes along the way. We have simultaneously created spaces for new project opportunities and increase client satisfactions with a NPS of 9",
        author: "Diego Salcedo",
        role: "Delivery Manager - Globant"
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
    }
  ], []); // Empty dependency array - static data

  // SNIPPET PROJECTS DATA - Additional Work Across Diverse Sectors
  const snippetProjects = useMemo(() => [
    {
      id: 'c4ir-colombia',
      title: 'Policy Innovation for Emerging Technologies',
      industry: 'Government & Public Policy',
      serviceType: 'Strategic Framework Design | Stakeholder Orchestration',
      website: 'https://centres.weforum.org/centre-for-frontier-technologies-and-innovation/network',
      image: '/projects/snippets/c4ir-colombia.png',
      emailSubject: 'Inquiry about Policy Innovation for Emerging Technologies - Government & Public Policy Project'
    },
    {
      id: 'wef-designit',
      title: 'Industrial IoT Governance Models',
      industry: 'Technology Policy & Innovation',
      serviceType: 'Cross-Sector Partnership Design | Strategic Advisory',
      website: 'https://www.designit.com/',
      image: '/projects/snippets/wef-designit.png',
      emailSubject: 'Inquiry about Industrial IoT Governance Models - Technology Policy & Innovation Project'
    },
    {
      id: 'viva-malls',
      title: 'Phygital Retail Revolution',
      industry: 'Retail & Real Estate',
      serviceType: 'Experience Architecture | Digital Transformation',
      website: 'https://ccviva.com/',
      image: '/projects/snippets/viva-malls.png',
      emailSubject: 'Inquiry about Phygital Retail Revolution - Retail & Real Estate Project'
    },
    {
      id: 'grupo-exito',
      title: 'Retail Experience Ecosystem',
      industry: 'Retail & Consumer Goods',
      serviceType: 'Service Design | Organizational Transformation',
      website: 'https://www.grupoexito.com.co/es',
      image: '/projects/snippets/grupo-exito.png',
      emailSubject: 'Inquiry about Retail Experience Ecosystem - Retail & Consumer Goods Project'
    },
    {
      id: 'tigo-millicom',
      title: 'Telecom Customer Intelligence Platform',
      industry: 'Telecommunications',
      serviceType: 'Product Direction| Market Expansion Strategy',
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
      'Danone Digital Transformation': 'project-coral-dominant',
      'Parques Reunidos': 'project-charcoal-dominant',
      'Flagship Entertainment Destination, KSA': 'project-coral-dominant'
    };
    
    return projectColorMoods[project.title as keyof typeof projectColorMoods] || 'project-charcoal-dominant';
  }, [selectedProject, projects]);
  
  // Always show all projects - filter tags are visual-only
  const filteredProjects = projects;

  // Sophisticated navigation functions - moved after filteredProjects declaration
  const goToProjectWithTransition = useCallback((index: number) => {
    if (index === featuredProjectIndex) return;
    setIsTransitioning(true);
    setFeaturedProjectIndex(Math.min(index, Math.max(0, filteredProjects.length - 1)));
    setTimeout(() => setIsTransitioning(false), 1200);
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
        // Smooth 1.2s cinematic transition
        setTimeout(() => setIsTransitioning(false), 1200);
        return nextIndex;
      });
    }, 3000); // 3 seconds per slide - more engaging pace

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
    <BackgroundProvider>
      <div className="min-h-screen" style={{backgroundColor: '#fffbee'}}>
      
      {/* ACCESSIBILITY - Skip Navigation Links */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-coral text-white px-6 py-3 rounded-lg z-50 font-medium"
        style={{ backgroundColor: '#ff6663' }}
      >
        Skip to main content
      </a>
      <a 
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-40 bg-coral text-white px-6 py-3 rounded-lg z-50 font-medium"
        style={{ backgroundColor: '#ff6663' }}
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
      <BackgroundLayer 
        section="hero"
        className="hero-section-luxury section-hero-sophisticated section-transition-sophisticated"
      >
        <section 
          id="hero" 
          data-section="hero"
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
              style={{ transform: parallaxTransform }}
              quality={100}
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
          <motion.h1 
            id="hero-title"
            className="hero-title-luxury-centered"
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, delay: isMobile ? 0.12 : 0.382 }} /* Faster on mobile */
          >
            Experience Architect
          </motion.h1>
          
          
          
          {/* ELEGANT CTA BUTTONS - Small and Sophisticated */}
          <motion.div 
            className="hero-cta-elegant"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.24 : 1.618 }}
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
              transition={{ duration: isMobile ? 0.4 : 1.0, delay: isMobile ? 0.36 : 2.618 }} /* Mathematical progression */
            >
              Projects
            </motion.button>
            
            <motion.a
              href="/CV_Silvana_Restrepo_Final.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button"
              aria-label="Open Silvana Restrepo's curriculum vitae in new tab"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: isMobile ? 0.4 : 1.0, delay: isMobile ? 0.48 : 3.236 }} /* Mathematical progression */
            >
              Executive CV
            </motion.a>
          </motion.div>
        </div>
      </section>
      </BackgroundLayer>

      {/* ABOUT SECTION - Ultra-Luxury Single-View */}
      <BackgroundLayer 
        section="about"
        className="about-section-ultra-luxury luxury-background-texture section-about-sophisticated section-transition-sophisticated"
      >
        <section 
          id="about" 
          data-section="about"
          aria-labelledby="about-heading"
          aria-describedby="about-description"
          role="main"
          style={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background interference elements removed for clean design */}
        <div className="about-container-ultra-luxury" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 max(1rem, 3vw)' }}>
          {/* Ultra-Luxury Section Header - Perfectly Centered */}
              <motion.header
            className="about-header-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, delay: isMobile ? 0.1 : 0.236 }}
              >
            <div className="about-header-content">
              <motion.h2 
                id="about-heading"
                className="about-title-ultra-luxury typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.16 : 0.382 }}
              >
                About Me
              </motion.h2>
                </div>
            <motion.p 
              id="about-description"
              className="about-description-ultra-luxury typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.2 : 0.618 }}
            >
              Two decades of transforming how global brands connect with human experiences
            </motion.p>
              </motion.header>

          {/* Ultra-Luxury Symmetric Two-Column Layout - Stella Petkova Style */}
              <motion.div
            className="about-content-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 1, delay: isMobile ? 0.2 : 0.8 }}
          >
            {/* Left Column - Your Exact Content */}
            <div className="about-text-column">
              <div className="about-text-content">
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.24 : 1.0 }}
                >
                  I believe the most compelling stories begin with curiosity—<br />
                  a spark that has carried me across continents, <br />
                  blending diverse perspectives from anthropology to business, <br />
                  from innovation to experience design, <br />
                  and from emerging technologies to business transformation.
                </motion.p>
                
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.28 : 1.272 }}
                >
                  Each endeavor deepens my mission: <br />
                  bridging strategic business goals with the human truths <br />
                  that drive transformation.
                </motion.p>
                
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.32 : 1.618 }}
                >
                  Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
                </motion.p>
                
                <motion.p 
                  className="about-welcome"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.36 : 2.0 }}
                >
                  Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility.
                </motion.p>
                </div>
            </div>

            {/* Right Column - Profile Photo */}
            <div className="about-photo-column">
              <div className="about-photo-container about-photo-unified-sophisticated">
                <Image
                  src="/silvana-about.jpg"
              alt="Silvana Restrepo working at her desk, black and white professional photo showing her workspace and thoughtful expression"
              width={600}
              height={500}
              className="about-photo-perfect about-photo-cohesive"
                  style={{
                width: '100%',
                height: '500px',
                objectFit: 'cover',
                objectPosition: 'center',
                borderRadius: '20px'
              }}
              quality={100}
              priority
              onError={(e) => {
                console.log('Profile image load error - Next.js Image');
                // Graceful fallback - show a subtle background instead of broken image
                e.currentTarget.style.backgroundColor = '#f3f4f6';
                e.currentTarget.style.border = '2px dashed #d1d5db';
              }}
              onLoad={() => {
                console.log('Profile image loaded successfully - Next.js Image');
              }}
            />
                
                {/* Unified Color Harmony */}
                <div className="about-photo-unified-harmony"></div>
                
                {/* Cohesive Accent System */}
                <div className="about-photo-unified-accent"></div>
              </div>
            </div>
          </motion.div>
          
          {/* Ultra-Luxury Philosophy Quote - Your Exact Quote */}
                <motion.div 
            className="about-philosophy-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.5, delay: isMobile ? 0.28 : 1.6 }}
            >
            <motion.blockquote 
              className="philosophy-quote-ultra-luxury"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: isMobile ? 0.6 : 1.5, delay: isMobile ? 0.28 : 1.6 }}
            >
              <em>The art of my craft lies in listening to the unspoken, seeing the invisible, and revealing the intangible nature of human desire.</em>
            </motion.blockquote>
          </motion.div>
        </div>
      </section>
      </BackgroundLayer>

      {/* PROJECTS SECTION - Award-Winning Enhancement */}
      <BackgroundLayer 
        section="projects"
        className="projects-section-award-winning luxury-background-texture section-projects-sophisticated section-transition-sophisticated"
      >
        <section 
          id="projects" 
          data-section="projects"
          style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        {/* Background interference elements removed for clean design */}
        <div className="projects-container-award-winning" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 max(1rem, 3vw)' }}>
          {/* Award-Winning Section Header with Sophisticated Spacing */}
          <motion.div 
            className="projects-header-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
            viewport={{ once: true }}
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
            
            <motion.p 
              className="projects-description-award-winning typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.16 : 0.382 }}
              viewport={{ once: true }}
            >
              A curated selection of projects that demonstrate my expertise in experience design, digital transformation, and business innovation across diverse industries and global markets.
            </motion.p>
            
            {/* Sophisticated Filter Tags with Perfect Spacing */}
            <motion.div 
              className="projects-filter-tags-award"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {projectCategories.map((category) => (
                <span
                  key={category}
                  className="filter-tag-award-winning"
                >
                  {category}
                </span>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Award-Winning Project Carousel with Organic Flow */}
            <motion.div 
            className="projects-carousel-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* PROMINENT MANUAL NAVIGATION CONTROLS */}
            <motion.div 
              className="carousel-navigation-prominent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.2 : 1.0 }}
              viewport={{ once: true }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 'clamp(0.5rem, 2vw, 1rem)', /* REDUCED gap to fit all elements */
                marginBottom: '2rem',
                width: '100%', /* Full width */
                maxWidth: '100%', /* Prevent overflow */
                padding: '0 1rem', /* Small padding for edge space */
                flexWrap: 'nowrap', /* Keep all elements in one line */
                overflowX: 'visible' /* Ensure no horizontal clipping */
              }}
            >
              {/* Previous Project Button */}
              <motion.button
                onClick={() => {
                  const prevIndex = safeFeaturedProjectIndex === 0 
                    ? filteredProjects.length - 1 
                    : safeFeaturedProjectIndex - 1;
                  goToProjectWithTransition(prevIndex);
                  setIsAutoPlaying(false);
                }}
                className="carousel-nav-button"
                data-cursor="button"
                aria-label="Navigate to previous project"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem', /* Reduced gap for space efficiency */
                  padding: '12px 20px', /* REDUCED padding to fit container */
                  background: 'rgba(74, 85, 104, 0.8)',
                  color: 'white',
                  border: '2px solid #4A5568',
                  borderRadius: '50px',
                  fontSize: '0.875rem', /* REDUCED font size to fit container */
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-architectural-body)',
                  letterSpacing: '0.02em',
                  boxShadow: '0 4px 16px rgba(74, 85, 104, 0.25)',
                  whiteSpace: 'nowrap', /* Prevent text wrapping */
                  flexShrink: 0 /* Prevent button from shrinking */
                }}
                whileHover={{ 
                  scale: 1.08,
                  backgroundColor: '#2D3748', /* Darker charcoal on hover */
                  boxShadow: '0 6px 24px rgba(74, 85, 104, 0.35)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                ← Previous Project
              </motion.button>

              {/* Play/Pause Control */}
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="carousel-play-pause"
                data-cursor="button"
                aria-label={isAutoPlaying ? 'Pause automatic carousel' : 'Start automatic carousel'}
                style={{
                  display: isMobile ? 'none' : 'flex',
                  alignItems: 'center',
                  gap: '0.25rem', /* REDUCED gap */
                  padding: '8px 12px', /* REDUCED padding to save space */
                  background: isAutoPlaying ? 'rgba(255, 102, 99, 0.1)' : 'rgba(74, 85, 104, 0.1)',
                  color: isAutoPlaying ? 'var(--grapefruit-intelligence)' : '#4A5568',
                  border: `1px solid ${isAutoPlaying ? 'var(--grapefruit-intelligence)' : '#4A5568'}`,
                  borderRadius: '50px',
                  fontSize: '0.75rem', /* REDUCED font size */
                  fontWeight: '500',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-architectural-body)',
                  flexShrink: 0 /* Prevent shrinking */
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isAutoPlaying ? '⏸ Pause' : '▶ Play'}
              </motion.button>
              
              {/* Project Counter */}
              <div 
                style={{
                  color: '#4A5568',
                  fontSize: '0.75rem', /* REDUCED font size to save space */
                  fontWeight: '500',
                  fontFamily: 'var(--font-architectural-body)',
                  whiteSpace: 'nowrap', /* Prevent wrapping */
                  flexShrink: 0 /* Prevent shrinking */
                }}
              >
                {safeFeaturedProjectIndex + 1} / {filteredProjects.length}
              </div>

              {/* Next Project Button - PROMINENT AND CLEAR */}
              <motion.button
                onClick={() => {
                  const nextIndex = (safeFeaturedProjectIndex + 1) % filteredProjects.length;
                  goToProjectWithTransition(nextIndex);
                  setIsAutoPlaying(false);
                }}
                className="carousel-nav-button next-project-prominent"
                data-cursor="button"
                aria-label="Navigate to next project"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem', /* REDUCED gap to match Previous button */
                  padding: '12px 20px', /* REDUCED padding to fit container */
                  background: 'var(--grapefruit-intelligence)',
                  color: 'white',
                  border: '2px solid var(--grapefruit-intelligence)',
                  borderRadius: '50px',
                  fontSize: '0.875rem', /* REDUCED font size to fit container */
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-architectural-body)',
                  letterSpacing: '0.02em',
                  textTransform: 'none',
                  boxShadow: '0 4px 16px rgba(255, 102, 99, 0.3)',
                  whiteSpace: 'nowrap', /* Prevent text wrapping */
                  flexShrink: 0 /* Prevent button from shrinking */
                }}
                whileHover={{ 
                  scale: 1.08,
                  backgroundColor: '#E55A5A', /* Consistent coral hover for visibility */
                  boxShadow: '0 6px 24px rgba(255, 102, 99, 0.4)',
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                Next Project →
              </motion.button>
            </motion.div>
            
            {/* Mobile swipe hint */}
            {isMobile && (
              <div style={{ textAlign: 'center', color: '#4A5568', fontSize: '0.8125rem', marginBottom: '0.5rem' }}>
                Swipe to browse projects
              </div>
            )}
            
            {/* CINEMATIC CAROUSEL - SMOOTH RIGHT→LEFT FLOW */}
            <AnimatePresence mode="wait">
            <motion.div 
              className="projects-3d-container"
              key={safeFeaturedProjectIndex}
                initial={{ 
                  opacity: 0, 
                  x: 100, // Enter from RIGHT
                  scale: 0.95
                }}
              animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1
                }}
                exit={{ 
                  opacity: 0, 
                  x: -100, // Exit to LEFT
                  scale: 0.95
              }}
              transition={{
                  duration: isMobile ? 0.6 : 1.2,
                  ease: [0.25, 0.46, 0.45, 0.94], // Cubic bezier for elegance
                  opacity: { duration: isMobile ? 0.4 : 0.8 },
                  scale: { duration: isMobile ? 0.5 : 1.0 }
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
        <div className="snippet-container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 max(1rem, 3vw)' }}>
          {/* Snippet Section Header */}
          <motion.div 
            className="projects-header-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
            viewport={{ once: true }}
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
                Project Snippets
              </motion.h2>
            </div>
            
            <motion.p 
              className="projects-description-award-winning typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.16 : 0.382 }}
              viewport={{ once: true }}
            >
              Quick glimpses into diverse work across sectors
            </motion.p>
          </motion.div>
          
          {/* Snippet Projects Grid */}
          <ProjectSnippetGrid projects={snippetProjects} />
        </div>
      </section>
      </BackgroundLayer>

      {/* SERVICES SECTION - GRAPEFRUIT BUSINESS CONFIDENCE */}
      <BackgroundLayer 
        section="services"
        className="section-luxury section-services-sophisticated section-transition-sophisticated"
      >
        <section 
          id="services"
          data-section="services"
          aria-labelledby="services-heading"
        >
        <div className="container-foundation" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 max(1rem, 3vw)' }}>
          <motion.div 
            className="projects-header-award-winning"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 1.618, ease: [0.236, 0.618, 0.382, 1.0] }}
            viewport={{ once: true }}
          >
            <div className="projects-header-content-award">
              <motion.h2 
                className="projects-title-award-winning typography-h2"
                  initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.1 : 0.236 }}
            viewport={{ once: true }}
          >
                services
              </motion.h2>
            </div>
            
            <motion.p 
              className="projects-description-award-winning typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: isMobile ? 0.5 : 1.618, delay: isMobile ? 0.16 : 0.382 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions addressing demanding market realities and evolving client needs.
            </motion.p>
          </motion.div>
          
          {/* SINGLE-SCREEN SERVICES OVERVIEW - SCROLLABLE */}
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            padding: '0 max(1rem, 3vw)',
            maxHeight: '60vh', // Limit height to prevent off-screen cards
            overflowY: 'auto', // Allow scrolling when cards expand
            overflowX: 'hidden',
            scrollBehavior: 'smooth'
          }}>
            {referenceServices.map((service, index) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1.618, 
                  delay: index * 0.1, // Fibonacci stagger
                  ease: [0.236, 0.618, 0.382, 1.0] // Your mathematical easing
                }}
                viewport={{ once: true }}
                style={{
                  // ACCESSIBILITY: Better contrast overlay for text readability
                  background: 'rgba(0, 0, 0, 0.1)', // Subtle dark overlay for better text contrast
                  border: '1px solid rgba(253, 252, 248, 0.2)',
                  borderLeft: '3px solid var(--vanilla-whisper)',
                  borderRadius: '16px',
                  marginBottom: '16px', // Breathing room
                  padding: '20px 24px',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  /* NO box-shadow - ultra-clean approach */
                  transition: 'all 0.618s cubic-bezier(0.236, 0.618, 0.382, 1.0)'
                }}
                whileHover={{
                  background: 'rgba(0, 0, 0, 0.2)', // Stronger contrast on hover
                  borderColor: 'rgba(253, 252, 248, 0.3)',
                  /* NO box-shadow - ultra-clean approach */
                  transform: 'translateY(-2px)'
                }}
                onClick={() => setExpandedService(expandedService === service.title ? null : service.title)}
                data-cursor="button"
                role="button"
                aria-expanded={expandedService === service.title}
                aria-controls={`service-content-${service.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedService(expandedService === service.title ? null : service.title);
                  }
                }}
              >
                {/* ULTRA COMPACT Header */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px', // REDUCED spacing
                  padding: 0
                }}>
                <span style={{
                  fontSize: '11px', // REDUCED from 12px
                  fontWeight: '700',
                  color: 'var(--vanilla-whisper)',
                  background: 'var(--grapefruit-intelligence)',
                  padding: '6px 12px', // REDUCED from 8px 16px
                  borderRadius: '6px', // REDUCED from 8px
                  minWidth: '28px', // REDUCED from 32px
                  textAlign: 'center',
                  fontFamily: 'var(--font-architectural-body)'
                }}>
                  {service.number || String(index + 1).padStart(2, '0')}
                  </span>
                
                <h3 style={{
                  flex: 1,
                  fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', // REDUCED: 18px → 22px (was 34px!)
                  fontFamily: 'var(--font-architectural-display)',
                  color: 'var(--vanilla-whisper)', /* Design system breathing elegance on grapefruit */
                  margin: 0,
                  fontWeight: '300', // Danish elegance matching your about section
                  letterSpacing: '-0.02em', // Your luxury spacing
                  lineHeight: '1.1' // Your established ratio
                }}>
                  {service.title}
                </h3>
                
                <motion.span 
                  style={{
                    fontSize: '18px', // REDUCED from 20px
                    color: 'var(--grapefruit-intelligence)',
                    fontWeight: '300',
                    minWidth: '20px', // REDUCED from 24px
                    textAlign: 'center'
                  }}
                  animate={{
                    rotate: expandedService === service.title ? 45 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  +
                </motion.span>
              </div>
              
                {/* SINGLE-SCREEN COMPACT CONTENT */}
                {expandedService === service.title && (
                  <motion.div 
                    id={`service-content-${service.title}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.618, ease: [0.236, 0.618, 0.382, 1.0] }} // Your mathematical timing
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="service-enhanced-content">
                      {/* Service Subtitle - Prominent Display */}
                      <div className="service-subtitle-section">
                        <em className="service-subtitle-enhanced">
                          {service.subtitle}
                        </em>
                      </div>
                      
                      {/* Strategic Capability Section */}
                      <div className="service-capability-section">
                        <h4 className="service-section-label">Strategic Capability</h4>
                        <p className="service-description-enhanced">
                          {service.description}
                        </p>
                      </div>
                      
                      {/* Project Demand Section */}
                      <div className="service-demand-section">
                        <h4 className="service-section-label">For Projects That Demand</h4>
                        <p className="service-demand-enhanced">
                          {service.demand}
                        </p>
                      </div>
                      
                      {/* Call to Action */}
                      <div className="service-cta-section">
                        <motion.button
                          className="service-cta-button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const subject = `Inquiry about ${service.title} - Service Discussion`;
                            const body = `Hi Silvana, I'm interested in learning more about your "${service.title}" service. Could we schedule a conversation to discuss how this might apply to my project?`;
                            window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                          }}
                          whileHover={{ 
                            scale: 1.02,
                            backgroundColor: '#E55A5A',
                            transition: { duration: 0.2 }
                          }}
                          whileTap={{ scale: 0.98 }}
                          data-cursor="button"
                        >
                          Ask About This Service →
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </BackgroundLayer>

      {/* EXPERIENCE SECTION - Horizontal Auto-Scroll Timeline */}
      <BackgroundLayer 
        section="experience"
        className="experience-section-sophisticated"
        enableVideo={false}
      >
        <ExperienceTimeline />
      </BackgroundLayer>

      {/* LANDOR STANDARDS FOOTER - ULTRA-LUXURY */}
      <footer id="footer" className="footer-landor-standards">
        <div className="footer-container-landor">
          <div className="footer-content-landor">
            {/* Brand Section */}
            <div className="footer-brand-landor">
              <a 
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-brand-name-landor typography-h3"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                silvana.
              </a>
              <p className="footer-brand-title-landor typography-body">Experience Architect</p>
              <p className="footer-brand-description-landor typography-caption">
                Transforming business challenges into strategic advantages through experience-driven innovation.
              </p>
            </div>
            
            {/* Navigation section */}
            <div className="footer-navigation-landor">
              <h4 className="footer-nav-title-landor typography-body">Navigation</h4>
              <div className="footer-nav-links-landor">
                <a href="#about" className="footer-nav-link-landor typography-caption">About</a>
                <a href="#projects" className="footer-nav-link-landor typography-caption">Projects</a>
                <a href="#services" className="footer-nav-link-landor typography-caption">Services</a>
                <a href="#experience" className="footer-nav-link-landor typography-caption">Experience</a>
              </div>
            </div>
            
            {/* Contact section */}
            <div className="footer-contact-landor">
              <h4 className="footer-contact-title-landor typography-body">Contact</h4>
              <div className="footer-contact-links-landor">
              <a 
                href="mailto:silvanarestrepo888@gmail.com"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <Mail size={14} />
                Contact
              </a>
              <a 
                href="https://linkedin.com/in/silvanarestrepo"
                target="_blank"
                rel="noopener noreferrer"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <Linkedin size={14} />
                Linkedin
              </a>
              <a 
                href="#projects"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <ExternalLink size={14} />
                Projects
              </a>
              </div>
            </div>
            </div>
            
          {/* Footer Bottom - Enhanced */}
          <div className="footer-bottom-landor">
            <div className="footer-copyright-landor">
              <span className="footer-copyright-text-landor typography-caption">
                © 2025 Silvana Restrepo. All rights reserved.
              </span>
            </div>
            <div className="footer-legal-landor">
              <a href="#" className="footer-legal-link-landor typography-caption">Privacy Policy</a>
              <a href="#" className="footer-legal-link-landor typography-caption">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      </main>

      {/* AWARD-WINNING PROJECT DETAILS PAGE - LANDOR STANDARDS */}
      {selectedProject !== null && (
        <motion.div 
          className={`project-details-overlay ${currentProjectColor}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* ULTRA-PROMINENT NAVIGATION SYSTEM */}
          <div className="project-details-navigation-system">
              <motion.button
                onClick={() => setSelectedProject(null)}
              className="project-back-button-ultra"
              whileHover={{ scale: 1.05, x: -6 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="back-icon">←</span>
              <span className="back-text">back to projects</span>
              </motion.button>
            
            <motion.div 
              className="project-title-bar"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <span className="project-title-bar-text">
                {selectedProject !== null ? projects[selectedProject].title : ''}
              </span>
              <kbd className="kbd-hint">ESC</kbd>
            </motion.div>
            
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="project-close-button-ultra"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              aria-label="Close project details"
            >
              <svg width={isMobile ? 32 : 24} height={isMobile ? 32 : 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>
          </div>

          {/* HERO SECTION - Perfect Visual Exploration with Proper Spacing */}
          <div className="project-hero-section project-details-hero-section">
            <div className="hero-image-container">
              <Image
                src={projects[selectedProject].secondaryImage || projects[selectedProject].image}
                alt={projects[selectedProject].title}
                width={1200}
                height={600}
                className="hero-image-perfect"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '60vh',
                  objectFit: 'contain',
                  objectPosition: 'center'
                }}
                priority
              />
            </div>

            {/* Project Title and Metadata - BELOW IMAGE with Proper Spacing */}
            <div className="project-title-section">
              <motion.h1 
                className="project-title typography-h1"
                initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    {projects[selectedProject].title}
              </motion.h1>
              <motion.p 
                className="project-subtitle typography-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                    {projects[selectedProject].subtitle}
              </motion.p>
            </div>
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
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Context</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].context.split('. ').reduce((acc: string[], sentence: string, index: number, array: string[]) => {
                    // Group sentences into 3 roughly equal paragraphs
                    const sentencesPerParagraph = Math.ceil(array.length / 3);
                    const paragraphIndex = Math.floor(index / sentencesPerParagraph);
                    
                    if (!acc[paragraphIndex]) {
                      acc[paragraphIndex] = '';
                    }
                    
                    acc[paragraphIndex] += (acc[paragraphIndex] ? '. ' : '') + sentence;
                    return acc;
                  }, []).map((paragraph: string, index: number) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < 2 ? '1.5rem' : '0' }}>
                      {paragraph}{paragraph.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Scope of the Project Section */}
                  <motion.section
                    className="content-section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Scope of the Project</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].scope.split('. ').reduce((acc: string[], sentence: string, index: number, array: string[]) => {
                    // Group sentences into 3 roughly equal paragraphs
                    const sentencesPerParagraph = Math.ceil(array.length / 3);
                    const paragraphIndex = Math.floor(index / sentencesPerParagraph);
                    
                    if (!acc[paragraphIndex]) {
                      acc[paragraphIndex] = '';
                    }
                    
                    acc[paragraphIndex] += (acc[paragraphIndex] ? '. ' : '') + sentence;
                    return acc;
                  }, []).map((paragraph: string, index: number) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < 2 ? '1.5rem' : '0' }}>
                      {paragraph}{paragraph.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Approach Section */}
                  <motion.section
                    className="content-section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="section-header">
                  <h2 className="section-title typography-h3">Impact</h2>
                </div>
                <div className="section-content">
                  {projects[selectedProject].impact.split('. ').reduce((acc: string[], sentence: string, index: number, array: string[]) => {
                    // Group sentences into 3 roughly equal paragraphs
                    const sentencesPerParagraph = Math.ceil(array.length / 3);
                    const paragraphIndex = Math.floor(index / sentencesPerParagraph);
                    
                    if (!acc[paragraphIndex]) {
                      acc[paragraphIndex] = '';
                    }
                    
                    acc[paragraphIndex] += (acc[paragraphIndex] ? '. ' : '') + sentence;
                    return acc;
                  }, []).map((paragraph: string, index: number) => (
                    <p key={index} className="section-text typography-body" style={{ marginBottom: index < 2 ? '1.5rem' : '0' }}>
                      {paragraph}{paragraph.endsWith('.') ? '' : '.'}
                    </p>
                  ))}
                </div>
                  </motion.section>
                  
              {/* Testimonial Section */}
                    <motion.section
                className="content-section"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
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
              <span className="gallery-count typography-caption">
                Gallery — 3 Images
              </span>
            </motion.div>
            <div className="gallery-grid">
              {/* Gallery Images - All 3 from galleryImages array */}
              {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.slice(0, 3).map((image, index) => (
                <motion.div 
                        key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{ scale: 1.01 }}
                  onClick={() => {
                    setCurrentGalleryImage(index);
                    setGalleryZoomOpen(true);
                    setImageZoomedIn(false);
                  }}
                  style={{ cursor: 'pointer' }}
                      >
                        <Image
                          src={image}
                          alt={`${projects[selectedProject].title} - Image ${index + 2}`}
                          width={1200}
                          height={800}
                          className="gallery-image-perfect"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                          quality={95}
                          onError={(e) => {
                            console.log('Gallery thumbnail load error:', image);
                            // Graceful fallback for gallery images
                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                            e.currentTarget.style.border = '1px solid #d1d5db';
                          }}
                          onLoad={() => {
                            console.log('Gallery thumbnail loaded successfully:', image);
                          }}
                        />
                </motion.div>
                    ))}
            </div>
                  </div>
                
          {/* SOPHISTICATED PROJECT NAVIGATION */}
          <div className="sophisticated-navigation-section">
            <motion.div 
              className="sophisticated-nav-project prev-project"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
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
          
           {/* PROJECT DETAILS FOOTER - EXACT MATCH TO MAIN FOOTER */}
           <footer className="footer-landor-standards">
             <div className="footer-container-landor">
               <div className="footer-content-landor">
                 {/* Brand Section */}
                 <div className="footer-brand-landor">
                   <a 
                     href="https://silvana.mmm.page/human-perspective"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="footer-brand-name-landor typography-h3"
                     style={{ textDecoration: 'none', color: 'inherit' }}
                   >
                     silvana.
                   </a>
                   <p className="footer-brand-title-landor typography-body">Experience Architect</p>
                   <p className="footer-brand-description-landor typography-caption">
                     Transforming business challenges into strategic advantages through experience-driven innovation.
                   </p>
                 </div>
                 
                 {/* Navigation Section */}
                 <div className="footer-navigation-landor">
                   <h4 className="footer-nav-title-landor typography-body">Navigation</h4>
                   <div className="footer-nav-links-landor">
                     <a href="#about" onClick={() => setSelectedProject(null)} className="footer-nav-link-landor typography-caption">About</a>
                     <a href="#projects" onClick={() => setSelectedProject(null)} className="footer-nav-link-landor typography-caption">Projects</a>
                     <a href="#services" onClick={() => setSelectedProject(null)} className="footer-nav-link-landor typography-caption">Services</a>
                     <a href="#experience" onClick={() => setSelectedProject(null)} className="footer-nav-link-landor typography-caption">Experience</a>
                   </div>
                 </div>
                 
                 {/* Contact Section */}
                 <div className="footer-contact-landor">
                   <h4 className="footer-contact-title-landor typography-body">Contact</h4>
                   <div className="footer-contact-links-landor">
                    <a 
                      href="mailto:silvanarestrepo888@gmail.com"
                      className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
                    >
                      <Mail size={14} />
                      Contact
                    </a>
                    <a 
                      href="https://linkedin.com/in/silvanarestrepo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
                    >
                      <Linkedin size={14} />
                      Linkedin
                    </a>
                    <a 
                      href="#projects"
                      onClick={() => setSelectedProject(null)}
                      className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
                    >
                      <ExternalLink size={14} />
                      Projects
                    </a>
                   </div>
                 </div>
               </div>
               
               {/* Footer Bottom */}
               <div className="footer-bottom-landor">
                 <div className="footer-copyright-landor">
                   <span className="footer-copyright-text-landor typography-caption">
                     © 2025 Silvana Restrepo. All rights reserved.
                   </span>
                 </div>
                 <div className="footer-legal-landor">
                   <a href="#" className="footer-legal-link-landor typography-caption">Privacy Policy</a>
                   <a href="#" className="footer-legal-link-landor typography-caption">Terms of Service</a>
                 </div>
               </div>
             </div>
           </footer>
        </motion.div>
      )}

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
              console.log('Gallery modal background clicked - closing');
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
            className="relative max-w-[48vw] max-h-[48vh] w-full mx-4"
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
                alt={`${selectedProject !== null ? projects[selectedProject].title : ''} - Gallery image ${currentGalleryImage + 1} zoomed view`} 
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-xl shadow-2xl" 
                quality={100}
                priority
                onError={(e) => {
                  console.log('Gallery zoom image load error');
                  // Graceful fallback for zoom images
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.border = '2px dashed #d1d5db';
                }}
                onLoad={() => {
                  console.log('Gallery zoom image loaded successfully');
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
                console.log('Gallery modal close button clicked');
                setGalleryZoomOpen(false);
                setImageZoomedIn(false);
              }}
              className="absolute top-6 right-6 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold hover:bg-red-500 hover:text-white transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
            {/* Image Counter and Zoom Hint */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm">
              <div className="text-center">
                <div>Image {currentGalleryImage + 1} of {selectedProject !== null && projects[selectedProject].galleryImages ? 
                  projects[selectedProject].galleryImages.length : 0}</div>
                <div className="text-sm text-white/70 mt-1">
                  {imageZoomedIn ? 'Click to zoom out' : 'Click image to zoom in 25%'}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
    </BackgroundProvider>
  );
}
