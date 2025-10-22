'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import Image from 'next/image';
import { CustomCursor } from '../components/motion/CustomCursor';
import { MagneticCursor } from '../components/ui/MagneticCursor';
import { FloatingNavigation } from '../components/navigation/FloatingNavigation';
import { SectionIndicator } from '../components/navigation/SectionIndicator';
import { useParallax } from '../hooks/useScrollAnimation';
import { InteractiveProjectCard } from '../components/projects/InteractiveProjectCard';
import { SilvanaLoader } from '../components/ui/SilvanaLoader';
import { 
  AcceleratedInnovationIcon,
  ExperienceOrchestrationIcon,
  IntelligentOperationsIcon,
  TransformationFoundationsIcon,
  StrategyConsultingIcon,
  CustomerIntelligenceIcon
} from '../components/icons/services';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  const [heroImageZoom, setHeroImageZoom] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  // Enhanced scroll animations
  const parallaxTransform = useParallax(0.2);
  
  // Loading sequence like Stella's approach
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Sophisticated loading duration
    return () => clearTimeout(timer);
  }, []);
  
  // PHASE 7: Keyboard Navigation - ESC to Close Modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedProject !== null) {
        setSelectedProject(null);
      }
    };
    
    if (selectedProject !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      
      // CRITICAL FIX: Scroll to top when project changes
      const overlay = document.querySelector('.project-details-overlay');
      if (overlay) {
        overlay.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);
  
  // Foundation Project Exploration System
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  


  // Sophisticated navigation functions with elegant transitions



  // SERVICES DATA - 100% COPY COMPLIANT WITH PROVIDED CONTENT
  const referenceServices = [
    {
      number: "01",
      title: "Accelerated Product Innovation",
      subtitle: "From concept to market reach in half the time",
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
      number: "04",
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

  // Services hover expansion state
  const [expandedService, setExpandedService] = useState<string | null>(null);
  
  // Timeline progress state
  const [timelineProgress, setTimelineProgress] = useState(0);
  
  const projects = [
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
      image: "/projects/qiddiya/hero-qiddiya.png",
      secondaryImage: "/projects/qiddiya/secondary-qiddiya.png",
      galleryImages: [
        "/projects/qiddiya/Project gallery  images/Emergency Management-Unified Alert System.png",
        "/projects/qiddiya/Project gallery  images/Guest Search by Digital ID.png",
        "/projects/qiddiya/Project gallery  images/Unified Guest Interaction History.png"
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
  ];

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
  
  const filteredProjects = selectedCategory === "ALL WORK" 
    ? projects 
    : projects.filter(project => 
        project.tech.some(t => t.includes(selectedCategory.replace(" DESIGN", "").replace(" STRATEGY", "").replace(" TRANSFORMATION", "").replace(" RESEARCH", "").replace(" OPS", ""))) ||
        (project.industryTags && project.industryTags.some(tag => tag.includes(selectedCategory)))
      );

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

  // Elegant Auto-carousel effect with sophisticated timing
  useEffect(() => {
    if (!isAutoPlaying || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setFeaturedProjectIndex(prev => {
        const nextIndex = prev === filteredProjects.length - 1 ? 0 : prev + 1;
        setIsTransitioning(true);
        // Faster transition for cinematic feel
        setTimeout(() => setIsTransitioning(false), 800);
        return nextIndex;
      });
    }, 3000); // Auto-advance every 3 seconds for faster, more cinematic experience

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  // Scroll effect for parallax and progressive disclosure
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  // Award-Winning Scroll-Triggered Section Detection
  useEffect(() => {
    const handleSectionScroll = () => {
      const sections = ['hero', 'about', 'projects', 'experience', 'services'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      sections.forEach((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;
          
          if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
            document.documentElement.className = `scroll-section-${sectionId}`;
          }
        }
      });
    };

    const handleTimelineProgress = () => {
      const experienceSection = document.getElementById('experience');
      if (experienceSection) {
        const rect = experienceSection.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
        
        // Calculate progress based on how much of the section is visible
        const progress = Math.max(0, Math.min(100, 
          ((windowHeight - sectionTop) / (windowHeight + sectionHeight)) * 100
        ));
        
        setTimelineProgress(progress);
      }
    };
    
    window.addEventListener('scroll', handleSectionScroll);
    window.addEventListener('scroll', handleTimelineProgress);
    handleSectionScroll(); // Initial check
    handleTimelineProgress(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleSectionScroll);
      window.removeEventListener('scroll', handleTimelineProgress);
    };
  }, []);




  // Ensure featuredProjectIndex is within bounds
  const safeFeaturedProjectIndex = Math.min(featuredProjectIndex, Math.max(0, filteredProjects.length - 1));

  return (
    <div className="min-h-screen" style={{backgroundColor: '#fffbee'}}>
      
      {/* SILVANA SIGNATURE LOADER - STELLA-INSPIRED */}
      {isLoading && <SilvanaLoader />}
      
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
      
      {/* AWWWARDS MAGNETIC CURSOR SYSTEM */}
      <MagneticCursor />
      <CustomCursor />
      
      {/* AWWWARDS FLOATING NAVIGATION SYSTEM */}
      <FloatingNavigation />
      
      {/* SOPHISTICATED SECTION INDICATOR */}
      <SectionIndicator />


      {/* HERO FOUNDATION - Award-Winning Visual Communication */}
      <main id="main-content">
      <section 
        id="hero" 
        className="hero-section-luxury section-hero-sophisticated section-transition-sophisticated hero-refined-award-winning"
        aria-labelledby="hero-title"
        aria-describedby="hero-description"
        role="banner"
      >
        <div className="hero-bg-unified parallax-container">
          {/* Artistic Photo Background Layer - Cohesive Integration */}
          <div className="hero-photo-layer-unified hero-photo-refined">
            <Image 
              src="/silvana-hero.jpg"
              alt="Silvana Restrepo, Principal Experience Architect, professional headshot in business attire with confident smile"
              fill
              className="hero-photo-artistic-unified parallax-element gpu-accelerated hero-photo-sophisticated"
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
            className="hero-title-luxury-centered hero-title-award-winning hero-title-split-sophisticated"
            initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.span 
              className="word-experience word-experience-tactile"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              Experience
            </motion.span>
            <motion.span 
              className="word-architect word-architect-tactile"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.7, 
                ease: [0.25, 0.46, 0.45, 0.94] 
              }}
            >
              Architect
            </motion.span>
          </motion.h1>
          
          {/* ELEGANT CTA BUTTONS - Small and Sophisticated */}
          <motion.div 
            className="hero-cta-elegant hero-cta-award-winning"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
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
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              Projects
            </motion.button>
            
            <motion.a
              href="/CV-Silvana-Restrepo.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-button"
              aria-label="Open Silvana Restrepo's curriculum vitae in new tab"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              Executive CV
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION - Ultra-Luxury Single-View */}
      <section 
        id="about" 
        className="about-section-ultra-luxury luxury-background-texture section-about-sophisticated section-transition-sophisticated"
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
        <div className="about-container-ultra-luxury">
          {/* Ultra-Luxury Section Header - Perfectly Centered */}
              <motion.header
            className="about-header-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
            <div className="about-header-content">
              <span className="about-section-number">01</span>
              <motion.h2 
                id="about-heading"
                className="about-title-ultra-luxury typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                About Me
              </motion.h2>
                </div>
            <motion.p 
              id="about-description"
              className="about-description-ultra-luxury typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Two decades of transforming how global brands connect with human experiences
            </motion.p>
              </motion.header>

          {/* Ultra-Luxury Symmetric Two-Column Layout - Stella Petkova Style */}
              <motion.div
            className="about-content-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Left Column - Your Exact Content */}
            <div className="about-text-column">
              <div className="about-text-content">
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  I believe the most compelling stories begin with curiosity—a spark that has carried me across continents, blending diverse perspectives from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
                </motion.p>
                
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span className="highlight-human-typography">#human perspective</span>.
                </motion.p>
                
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                >
                  Whether leading teams in retail innovation or pioneering Experience design for global brands, my passion remains: to reveal what lies beneath and transform it into tangible expansion.
                </motion.p>
                
                <motion.p 
                  className="about-welcome"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                >
                  Welcome to my world—where strategy meets soul, and design becomes the universal language of possibility
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
            transition={{ duration: 1, delay: 1.4 }}
          >
            <motion.blockquote 
              className="philosophy-quote-ultra-luxury"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.6 }}
            >
              &ldquo;The art of <motion.span 
                className="craft-highlight-luxury"
                initial={{ opacity: 0.7 }}
                whileInView={{ 
                  opacity: 1,
                  transition: { duration: 0.6, delay: 1.8 }
                }}
                onViewportEnter={() => {
                  // Add class to trigger underline animation
                  setTimeout(() => {
                    const element = document.querySelector('.craft-highlight-luxury');
                    if (element) element.classList.add('animate-underline');
                  }, 1800);
                }}
              >MY CRAFT</motion.span> lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - Award-Winning Enhancement */}
      <section 
        id="projects" 
        className="projects-section-award-winning luxury-background-texture section-projects-sophisticated section-transition-sophisticated"
        style={{
          minHeight: '100vh',
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
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="projects-header-content-award">
              <span className="projects-section-number-award">02</span>
              <motion.h2 
                className="projects-title-award-winning typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
            </div>
            
            <motion.p 
              className="projects-description-award-winning typography-body text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
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
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="filter-tag-award-winning"
                >
                  {category}
                </button>
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
            {/* Sophisticated Carousel Indicators */}
            <motion.div 
              className="sophisticated-carousel-indicators"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
              <div className="carousel-status">
                <div className="auto-play-indicator">
                  <div className={`auto-play-dot ${isAutoPlaying ? 'playing' : 'paused'}`}></div>
                  <span className="auto-play-text">
                    {isAutoPlaying ? 'Auto-playing' : 'Paused'}
                </span>
              </div>
                
                <div className="project-counter">
                  <span className="current-project">{safeFeaturedProjectIndex + 1}</span>
                  <span className="divider">/</span>
                  <span className="total-projects">{filteredProjects.length}</span>
                    </div>
                  </div>
                  
              {/* Upcoming Projects Preview */}
              <div className="upcoming-projects-preview">
                <div className="upcoming-label">Coming Up</div>
                <div className="upcoming-thumbnails">
                  {filteredProjects.slice(safeFeaturedProjectIndex + 1, safeFeaturedProjectIndex + 4).map((project, index) => (
                    <div 
                      key={`upcoming-${index}`}
                      className="upcoming-thumbnail"
                      style={{ backgroundImage: `url(${project.image})` }}
                      onClick={() => goToProjectWithTransition(safeFeaturedProjectIndex + index + 1)}
                    />
                        ))}
                      </div>
                  </div>
                  
                  {/* Keyboard Navigation Hints */}
                  <motion.div 
                    className="keyboard-navigation-hints"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    viewport={{ once: true }}
                  >
                    <span className="keyboard-hint typography-caption">
                      Use ← → arrow keys to navigate • Space to pause
                    </span>
                  </motion.div>
            </motion.div>
            
            {/* 3D INTERACTIVE PROJECT CAROUSEL - AWARD-WINNING */}
            <motion.div 
              className="projects-3d-container"
              key={safeFeaturedProjectIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ 
                opacity: isTransitioning ? 0.95 : 1, 
                y: 0
              }}
              transition={{
                duration: isTransitioning ? 0.6 : 1.0, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              <InteractiveProjectCard
                project={filteredProjects[safeFeaturedProjectIndex]}
                index={safeFeaturedProjectIndex}
                isActive={!isTransitioning}
                onSelect={setSelectedProject}
                className="project-card-3d-enter"
              />
            </motion.div>
            
            </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Vertical Timeline */}
      <section 
        id="experience"
        className="experience-timeline-section"
        style={{ 
          minHeight: '100vh',
          background: 'var(--experience-gradient)'
        }}
      >
        <div className="experience-timeline-container">
          {/* Section Header */}
          <motion.div 
            className="experience-timeline-header text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <span 
              className="section-number text-sm font-semibold tracking-wider uppercase block mb-4"
              style={{ color: 'var(--grapefruit-pure)' }}
              >
                03
              </span>
            <h2 className="typography-h2" style={{ color: '#FFFFFF' }}>
                Experience
              </h2>
            <p className="typography-body text-center max-w-3xl mx-auto" style={{ 
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: '1.4',
              fontSize: '0.95rem',
              margin: '0 auto'
            }}>
              Some of the <span className="highlight-word" style={{ color: '#FF6663' }}>hats</span> I have worn over more than <span className="highlight-word" style={{ color: '#FF6663' }}>20 years</span> of non-stop, continuous <span className="highlight-word" style={{ color: '#FF6663' }}>upscaling, reinventing, evolving,</span> and <span className="highlight-word" style={{ color: '#FF6663' }}>reimagining</span> business, brands, and teams.
            </p>
          </motion.div>
          
          {/* Vertical Timeline */}
          <div className="experience-timeline-wrapper">
            {/* Timeline Line */}
            <div className="experience-timeline-line">
              <div 
                className="experience-timeline-progress"
                style={{ height: `${timelineProgress}%` }}
              ></div>
            </div>

            {/* Timeline Content */}
            <div className="experience-timeline-content">
              {[
                {
                  year: "2020—2025",
                  role: "Business Partner & Experience Architect", 
                  company: "Globant",
                  description: "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals. Contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance, and wellness teams, supporting faster value delivery."
                },
                {
                  year: "2019—2020",
                  role: "Senior Researcher",
                  company: "Centre for Fourth Industrial Revolution-WEF",
                  description: "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation."
                },
                {
                  year: "2018—2019", 
                  role: "Strategic Design Director",
                  company: "Designit a WIPRO Company",
                  description: "I led regional operations to scale market presence and transform business complexity into actionable design solutions."
                },
                {
                  year: "2016—2018",
                  role: "Marketing Director",
                  company: "Grupo Éxito",
                  description: "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation."
                },
                {
                  year: "2013—2016",
                  role: "Business Intelligence Manager",
                  company: "Industrias HACEB", 
                  description: "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies."
                },
                {
                  year: "2012—2016",
                  role: "Independent Advisor",
                  company: "Independent",
                  description: "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps."
                },
                {
                  year: "2002—2011",
                  role: "Senior Marketing Analyst",
                  company: "TIGO-Millicom",
                  description: "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand."
                }
              ].map((experience, index) => (
                <div key={index} className={`experience-timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
                  {/* Timeline Node */}
                <motion.div 
                    className="experience-timeline-node"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ 
                      scale: 1, 
                      opacity: 1,
                      transition: { 
                        duration: 0.6,
                        delay: 0.2 + (index * 0.2),
                        type: "spring",
                        bounce: 0.6
                      }
                  }}
                  viewport={{ once: true }}
                  />

                  {/* Text Container */}
                <motion.div 
                    className="experience-text-container"
                  initial={{ opacity: 0, y: 20 }}
                    whileInView={{ 
                      opacity: 1, 
                      y: 0,
                      transition: { 
                        duration: 0.8,
                        delay: 0.4 + (index * 0.2),
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }
                    }}
                  viewport={{ once: true }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="experience-text-content">
                      <span className="experience-year">{experience.year}</span>
                      <h3 className="experience-role">{experience.role}</h3>
                      <p className="experience-company">{experience.company}</p>
                      <p className="experience-description">{experience.description}</p>
                  </div>
                </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - Foundation Design */}
      <section 
        id="services"
        className="section-luxury section-services-sophisticated section-transition-sophisticated"
      >
        <div className="container-foundation">
          <motion.div 
            className="heading-desktop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="mb-phi-xl">
              <span 
                className="text-foundation-sm font-foundation-accent block mb-phi-sm"
                style={{
                  color: 'var(--grapefruit-pure)'
                }}
              >
                04
              </span>
              <h2 className="typography-h2">
                Services
              </h2>
            </div>
            <motion.p 
              className="typography-body text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions addressing demanding market realities and evolving client needs.
            </motion.p>
          </motion.div>
          
          {/* LANDOR-LEVEL SERVICES ACCORDION - AWARD-WINNING DESIGN */}
          <div className="services-accordion-landor">
            {referenceServices.map((service, index) => (
              <motion.div 
                key={service.number}
                className={`service-accordion-item-landor ${expandedService === service.number ? 'expanded' : ''}`}
                onMouseEnter={() => setExpandedService(service.number)}
                onMouseLeave={() => setExpandedService(null)}
                onClick={() => setExpandedService(expandedService === service.number ? null : service.number)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ 
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                {/* Sophisticated Header */}
                <div className="service-header-landor">
                  <div className="service-header-content">
                    <div className="service-number-container">
                      <span className="service-number-landor">{service.number}</span>
                      <div className="service-number-line"></div>
                    </div>
                    
                    <div className="service-title-container">
                      <h3 className="service-title-landor">{service.title}</h3>
                      <p className="service-subtitle-landor">{service.subtitle}</p>
                    </div>
                    
                    <div className="service-icon-container">
                      <motion.div 
                        className="service-icon-landor"
                        animate={{ 
                          rotate: expandedService === service.number ? 45 : 0,
                          scale: expandedService === service.number ? 1.1 : 1
                        }}
                        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <service.icon />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Elegant Progress Indicator */}
                  <div className="service-progress-landor">
                    <motion.div 
                      className="service-progress-bar"
                      initial={{ width: 0 }}
                      animate={{ 
                        width: expandedService === service.number ? '100%' : '0%'
                      }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  </div>
                </div>
                
                {/* Sophisticated Expanded Content */}
                <motion.div 
                  className="service-content-landor"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: expandedService === service.number ? 'auto' : 0,
                    opacity: expandedService === service.number ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.5, 
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="service-content-inner">
                    {/* Strategic Capability Section */}
                    <div className="service-capability-section">
                      <div className="service-section-header">
                        <span className="service-section-number">01</span>
                        <h4 className="service-section-title">Strategic Capability</h4>
                      </div>
                      <p className="service-section-description">{service.description}</p>
                    </div>
                    
                    {/* Project Demand Section */}
                    <div className="service-demand-section">
                      <div className="service-section-header">
                        <span className="service-section-number">02</span>
                        <h4 className="service-section-title">For Projects That Demand</h4>
                      </div>
                      <p className="service-section-description">{service.demand}</p>
                    </div>
                    
                    {/* Sophisticated Action Area */}
                    <div className="service-action-landor">
                      <motion.button 
                        className="service-cta-landor"
                        whileHover={{ 
                          scale: 1.05,
                          y: -2
                        }}
                        whileTap={{ 
                          scale: 0.95
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add contact or project inquiry action
                        }}
                      >
                        <span>Discuss This Service</span>
                        <motion.span 
                          className="cta-arrow"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDOR STANDARDS FOOTER - ULTRA-LUXURY */}
      <footer id="footer" className="footer-landor-standards">
        <div className="footer-container-landor">
          <div className="footer-content-landor">
            {/* Brand Section - Enhanced */}
            <div className="footer-brand-landor">
              <h3 className="footer-brand-name-landor typography-h3">silvana.</h3>
              <p className="footer-brand-title-landor typography-body">Principal Experience Architect</p>
              <p className="footer-brand-description-landor typography-caption">
                Transforming business challenges into strategic advantages through experience-driven innovation.
              </p>
            </div>
            
            {/* Navigation Section */}
            <div className="footer-navigation-landor">
              <h4 className="footer-nav-title-landor typography-body">Navigation</h4>
              <div className="footer-nav-links-landor">
                <a href="#about" className="footer-nav-link-landor typography-caption">About</a>
                <a href="#projects" className="footer-nav-link-landor typography-caption">Projects</a>
                <a href="#experience" className="footer-nav-link-landor typography-caption">Experience</a>
                <a href="#services" className="footer-nav-link-landor typography-caption">Services</a>
              </div>
            </div>
            
            {/* Contact Section - Enhanced */}
            <div className="footer-contact-landor">
              <h4 className="footer-contact-title-landor typography-body">Contact</h4>
              <div className="footer-contact-links-landor">
              <a 
                href="mailto:silvanarestrepo888@gmail.com"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <Mail size={16} />
                Contact
              </a>
              <a 
                href="https://linkedin.com/in/silvanarestrepo"
                target="_blank"
                rel="noopener noreferrer"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow magnetic-button touch-friendly"
              >
                  <ExternalLink size={16} />
                Portfolio
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
          {/* ULTRA-PROMINENT NAVIGATION - IMPOSSIBLE TO MISS */}
          <div className="project-details-navigation-system">
            {/* MASSIVE Back Button - Top Left */}
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="project-back-button-ultra"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: "0 16px 60px var(--grapefruit-soft)"
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to Projects"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="back-icon"
              >
                <path 
                  d="M15 18L9 12L15 6" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              <span className="back-text">Back to Projects</span>
            </motion.button>

            {/* Close Button - Top Right */}
            <motion.button
              onClick={() => setSelectedProject(null)}
              className="project-close-button-ultra"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ 
                scale: 1.08,
                rotate: 90
              }}
              whileTap={{ scale: 0.95 }}
              aria-label="Close Project Details"
            >
              <svg 
                width="28" 
                height="28" 
                viewBox="0 0 28 28" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M21 7L7 21M7 7L21 21" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </motion.button>
            
            {/* Project Title Bar - Center */}
            <motion.div 
              className="project-title-bar"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="project-title-bar-text">
                {selectedProject !== null ? projects[selectedProject].title : ''}
              </span>
              <kbd className="kbd-hint-inline">ESC</kbd>
            </motion.div>
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
                  <span className="section-number typography-caption">01</span>
                  <h2 className="section-title typography-h3">Context</h2>
                </div>
                <div className="section-content">
                  <p className="section-text typography-body">
                      {projects[selectedProject].context}
                    </p>
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
                  <span className="section-number typography-caption">02</span>
                  <h2 className="section-title typography-h3">Scope of the Project</h2>
                </div>
                <div className="section-content">
                  <p className="section-text typography-body">
                    {projects[selectedProject].scope}
                  </p>
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
                  <span className="section-number typography-caption">03</span>
                  <h2 className="section-title typography-h3">Impact</h2>
                </div>
                <div className="section-content">
                  <p className="section-text typography-body">
                      {projects[selectedProject].impact}
                    </p>
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
                  <span className="section-number typography-caption">04</span>
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
              {/* Primary Image */}
              <motion.div 
                className="gallery-item primary"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  console.log('Hero image clicked');
                  setHeroImageZoom(true);
                }}
                whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={projects[selectedProject].image}
                    alt={projects[selectedProject].title}
                    width={600}
                    height={400}
                    className="gallery-image-perfect"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    quality={100}
                  />
                <div className="gallery-overlay">
                  <span className="zoom-text typography-caption">Click to explore</span>
                </div>
                </motion.div>
                
              {/* Secondary Images - Only First 2 for Symmetrical 3-Image Gallery */}
              {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.slice(0, 2).map((image, index) => (
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log('Gallery image clicked:', index);
                          setCurrentGalleryImage(index);
                          setGalleryZoomOpen(true);
                        }}
                  whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={image}
                          alt={`${projects[selectedProject].title} - Image ${index + 2}`}
                          width={600}
                          height={400}
                          className="gallery-image-perfect"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center'
                          }}
                          quality={100}
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
                  <div className="gallery-overlay">
                    <span className="zoom-text typography-caption">Click to explore</span>
                  </div>
                </motion.div>
                    ))}
            </div>
                  </div>
                  
          {/* CLIENT TESTIMONIAL - TEXT CONTAINER */}
          <div className="testimonial-text-section">
            <motion.div
              className="testimonial-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="testimonial-title typography-h3">Client Testimonial</h3>
              <div className="testimonial-quote-container">
                <blockquote className="testimonial-quote typography-body">
                  &ldquo;{selectedProject !== null ? projects[selectedProject].testimonial.quote : ''}&rdquo;
                </blockquote>
                <div className="testimonial-attribution">
                  <p className="testimonial-author typography-caption">
                    {selectedProject !== null ? projects[selectedProject].testimonial.author : ''}
                  </p>
                  <p className="testimonial-role typography-caption">
                    {selectedProject !== null ? projects[selectedProject].testimonial.role : ''}
                  </p>
                </div>
              </div>
            </motion.div>
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
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
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
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) {
              console.log('Gallery modal background clicked - closing');
              setGalleryZoomOpen(false);
            }
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative max-w-[95vw] max-h-[95vh] w-full mx-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onMouseDown={(e) => e.stopPropagation()}
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
              }}
              className="absolute top-6 right-6 w-14 h-14 bg-white/95 rounded-full flex items-center justify-center text-gray-800 text-2xl font-bold hover:bg-red-500 hover:text-white transition-all duration-200 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm">
              Image {currentGalleryImage + 1} of {selectedProject !== null && projects[selectedProject].galleryImages ? 
                projects[selectedProject].galleryImages.length : 0}
            </div>
          </motion.div>
          
          {/* REDESIGNED FOOTER - ALWAYS VISIBLE WITH BACK TO TOP */}
          <footer className="project-details-footer-ultra">
            <div className="footer-ultra-content">
              {/* Back to Top Button */}
              <motion.button
                onClick={() => {
                  const overlay = document.querySelector('.project-details-overlay');
                  if (overlay) {
                    overlay.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="back-to-top-button"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Back to Top</span>
              </motion.button>
              
              <div className="footer-grid-ultra">
                <div className="footer-brand-ultra">
                  <h3 className="footer-brand-name typography-h3">silvana.</h3>
                  <p className="footer-brand-title typography-body">Principal Experience Architect</p>
                  <p className="footer-brand-description typography-caption">
                    Transforming business challenges into strategic advantages through experience-driven innovation.
                  </p>
                </div>
                
                <div className="footer-contact-ultra">
                  <a href="mailto:silvanarestrepo888@gmail.com" className="footer-contact-link typography-caption">
                    Contact
                  </a>
                  <a href="https://linkedin.com/in/silvanarestrepo" className="footer-contact-link typography-caption">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </motion.div>
      )}

    </div>
  );
}
