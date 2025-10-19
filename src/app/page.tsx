'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { 
  AcceleratedInnovationIcon,
  ExperienceOrchestrationIcon, 
  IntelligentOperationsIcon,
  TransformationFoundationsIcon,
  StrategyConsultingIcon,
  CustomerIntelligenceIcon 
} from '../components/icons';
import { CustomCursor } from '../components/motion/CustomCursor';
import { MagneticCursor } from '../components/ui/MagneticCursor';
import { FloatingNavigation } from '../components/navigation/FloatingNavigation';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  
  // PROPRIETARY ICON MAPPING - 100% Copy Compliant (Available for future use)
  // const serviceIcons = {
  //   "Accelerated Product Innovation": AcceleratedInnovationIcon,
  //   "Experience Orchestration": ExperienceOrchestrationIcon, 
  //   "Intelligent Operations Architecture": IntelligentOperationsIcon,
  //   "Transformation Foundations": TransformationFoundationsIcon,
  //   "Strategic Innovation Consulting": StrategyConsultingIcon,
  //   "Customer Intelligence Platforms": CustomerIntelligenceIcon
  // };

  // AWARD-WINNING SERVICES DATA - Vertical Expansion System
  const awardWinningServices = [
    {
      title: "Accelerated Product Innovation",
      capabilities: [
        "AI-POWERED PROTOTYPING",
        "RAPID VALIDATION", 
        "INNOVATION SPRINTS",
        "DATA ACCELERATION"
      ],
      shortDescription: "Transform product visions into market reality through rapid prototyping and validation.",
      icon: AcceleratedInnovationIcon
    },
    {
      title: "Experience Orchestration", 
      capabilities: [
        "TOUCHPOINT HARMONIZATION",
        "UNIFIED ARCHITECTURES",
        "SEAMLESS CONVERSATIONS",
        "BRAND VOICE CONSISTENCY"
      ],
      shortDescription: "Systems thinking creating unified experience architectures where interactions feel seamless.",
      icon: ExperienceOrchestrationIcon
    },
    {
      title: "Intelligent Operations Architecture",
      capabilities: [
        "AI-AUGMENTED TEAMS",
        "UNIFIED INTELLIGENCE", 
        "MARKET MONITORING",
        "COMPETITIVE INTELLIGENCE"
      ],
      shortDescription: "Design agentic systems where AI specialists and human experts collaborate intelligently.",
      icon: IntelligentOperationsIcon
    },
    {
      title: "Transformation Foundations",
      capabilities: [
        "SCALABLE FRAMEWORKS",
        "ORGANIZATIONAL DNA",
        "MODULAR SYSTEMS", 
        "COMPETITIVE ADVANTAGE"
      ],
      shortDescription: "Create modular, scalable frameworks turning organizational complexity into advantage.",
      icon: TransformationFoundationsIcon
    },
    {
      title: "Strategic Innovation Consulting",
      capabilities: [
        "COMPLEXITY NAVIGATION",
        "MARKET DISRUPTION",
        "SYSTEMATIC ADVANTAGE",
        "INNOVATION STRATEGIES"
      ],
      shortDescription: "Navigate complexity with frameworks that transform uncertainty into systematic opportunity.",
      icon: StrategyConsultingIcon
    },
    {
      title: "Customer Intelligence Platforms", 
      capabilities: [
        "BEHAVIORAL TRACKING",
        "PREDICTIVE ANALYTICS",
        "LEARNING ALGORITHMS",
        "SELF-IMPROVING SYSTEMS"
      ],
      shortDescription: "Architect intelligence systems that anticipate customer behavior and evolve continuously.",
      icon: CustomerIntelligenceIcon
    }
  ];

  // COLUMN DIMENSION CALCULATOR - Award-Winning Animation
  const getColumnDimensions = (index: number) => {
    if (hoveredService === null) {
      return { width: '16.66%', opacity: 0.8 }; // Equal distribution
    }
    if (hoveredService === index) {
      return { width: '45%', opacity: 1 };      // Expanded with content
    }
    return { width: '11%', opacity: 0.6 };       // Compressed minimal
  };
  
  const projects = [
    {
      title: "Kayanee",
      subtitle: "The First-of-Its-Kind Collective Saudi Wellness Experience Platform",
      description: "The first of its kind collective Saudi wellness experience platform. Beyond fitness or nutrition alone, Kayanee pioneers an ecosystem where women discover wellness as an holistic journey.",
      tech: ["Experience Design", "Service Design", "Product Strategy", "Cultural Intelligence", "Ecosystem Design"],
      industryTags: ["Health & Wellness", "Saudi Market", "Women's Empowerment", "Phygital Experiences"],
      category: "Health & Wellness",
      year: "2022",
      client: "Kayanee, a PIF Company",
      location: "Saudi Arabia",
      website: "https://kayanee.com/",
      image: "/projects/kayanee/hero-kayanee.jpeg",
      secondaryImage: "/projects/kayanee/secundary-kayanee.jpeg",
      galleryImages: [
        "/projects/kayanee/secundary-kayanee.jpeg",
        "/projects/kayanee/Screenshot 2024-11-15 at 10.42.42.png"
      ],
      testimonial: "Amazing proposal and presentation for Kayanee and princess Reema @ KSA...you are already on the next level. Keep rocking!",
      testimonialAuthor: "Martin Migoya -CEO - Globant",
      context: "For centuries, wellness has been a deeply personal journey rooted in culture, tradition, and individual aspirations. In Saudi Arabia, Kayanee writes a new chapter as more than just a wellness brand—it's a movement revolutionizing how women experience health and empowerment. This pioneering ecosystem integrates physical, digital, and social experiences for women's holistic wellbeing.",
      challenge: "Spaces were designed to intuitively recognise wellness needs, blending physical environments with AI-driven digital journeys. We crafted a phygital ecosystem merging behavioural science with technology to create deeply personalised transformative experiences. Seamless interactions across touchpoints—from retail environments to digital platforms—enhance women's holistic wellbeing journey.",
      impact: "Kayanee redefines possibility within Saudi Arabia's wellness industry through cultural-technological fusion. The e-commerce platform launch initiates a vision extending beyond digital into integrated experiences. New innovations, experiences, and services continuously develop to shape the future of women's wellness in Saudi Arabia."
    },
    {
      title: "Augoor",
      subtitle: "Transforming static code into dynamic knowledge",
      description: "Transforming software development, Augoor reinvents how engineers navigate vast codebases,using AI-driven intelligence to convert static repositories into dynamic knowledge hubs, amplifying efficiency, collaboration, and human ingenuity in tech ecosystems.",
      tech: ["Service Design", "User Research", "Product Strategy", "AI Integration", "Developer Experience"],
      industryTags: ["AI Software Development", "Enterprise Solutions", "Developer Tools", "Code Intelligence"],
      category: "AI Software Development",
      year: "2020",
      client: "Globant X",
      location: "Worldwide",
      website: "https://www.augoor.com/",
      image: "/projects/augoor/hero-2.png",
      secondaryImage: "/projects/augoor/photo-main-carrusel.jpeg",
      galleryImages: [
        "/projects/augoor/photo-main-carrusel.jpeg",
        "/projects/augoor/Screenshot 2025-04-15 at 13.33.51.png",
        "/projects/augoor/Screenshot 2025-04-15 at 13.34.12.png",
        "/projects/augoor/Screenshot 2025-04-15 at 13.34.27.png"
      ],
      testimonial: "Silvana has been a great team player who is proactive to help, listen the issues, put herself in other's shoes and think about the solutions. She is very thoughtful in providing the solution which will help keep satisfying the customers. I have always enjoyed my conversation with her as it has taught me so many things from customer experience perspective.",
      testimonialAuthor: "Deepika Wahi Lopez-Product Manager-Globant",
      context: "In the ever-evolving landscape of software development, navigating vast, complex codebases remains one of the most significant challenges developers face. Augoor was developed within Globant X—a pioneering incubator creating AI-driven products for digital acceleration. It transforms static repositories into dynamic, navigable data warehouses enhancing developer efficiency and collaboration.",
      challenge: "In 2020 we conducted global ethnographic research to uncover how developers search, document, and navigate complex code systems. Our goal was transforming code writing using plain English—a approach that by 2025 became a well-established development methodology. We designed seamless UX patterns integrating AI-assisted documentation, code dependencies, and search that feel natural within existing development workflows.",
      impact: "Engineers now work with greater confidence, automating tedious tasks while focusing on creative development. Every feature feels like a natural extension of engineering workflows, not just another tool. Augoor amplifies human ingenuity rather than replacing it, unlocking collaborative innovation across development teams."
    },
    {
      title: "Chime Care J&J",
      subtitle: "Elevating Ophthalmic Practices with Experience-Driven Innovation",
      description: "CHiME Care supports ophthalmic practices by uniting digital tools with clinical expertise. CHiME Care streamlines surgical patient management workflows, allowing practitioners to focus entirely on precision care while intelligent systems handle complexity behind the scenes.",
      tech: ["Design Ops", "Design Systems", "Service Design", "Healthcare UX", "Clinical Workflow"],
      industryTags: ["Healthcare Technology", "Surgical Systems", "Medical Devices", "Clinical Excellence"],
      category: "Health & Wellness",
      year: "2022",
      client: "Johnson & Johnson Surgical Vision",
      location: "United States",
      website: "https://us-vision.jjcustomerconnect.com",
      image: "/projects/chime-care/hero-j&j.jpeg",
      secondaryImage: "/projects/chime-care/secundary-jjpeg.jpeg",
      galleryImages: [
        "/projects/chime-care/secundary-jjpeg.jpeg",
        "/projects/chime-care/Screenshot 2025-03-06 at 171139-VSCO.jpeg",
        "/projects/chime-care/Screenshot 2025-04-15 at 13.23.31.png"
      ],
      testimonial: "Silvana is an excellent professional that has been a great plus in the \"cosmic eyes\" POD. Her commitment and skills are outstanding",
      testimonialAuthor: "Karina Paola Bailetti-Project Manager-Globant",
      context: "For optometrists and surgeons, precision is essential—every decision and data point affects patient vision outcomes. CHiME Care was envisioned as more than just a digital tool; it's an intelligent support system guiding practitioners through complex surgical workflows. In partnership with Johnson & Johnson's Experience Design leadership, we established the foundations for this specialised platform.",
      challenge: "We researched with practicing optometrists to reveal workflow patterns and decision points critical to surgical planning. Intuitive interfaces were designed for specialised tools, including toric calculators, case reviews, and performance metrics to enhance clinical decisions. A comprehensive design system architecture ensures consistent experiences while supporting rapid platform evolution.",
      impact: "CHiME Care transforms fragmented ophthalmic practices into connected ecosystems where intelligence amplifies surgical precision. Optometrists now benefit from a digital assistant that enhances workflow, optimises surgical planning, and provides meaningful procedural insights. The platform drives widespread adoption throughout Johnson & Johnson Vision's ecosystem while laying foundations for future innovations."
    },
    {
      title: "Nomade Tulum",
      subtitle: "Preserving deeply personal guest experiences while meeting digital expectations",
      description: "Nestled in Riviera Maya, Nomade faced a modern dilemma: preserving deeply personal guest experiences while meeting digital expectations. Their new operational ecosystem curatesmeaningful interactions without sacrificing the soul of spontaneous connection.",
      tech: ["Experience Design", "Service Design", "Digital Transformation", "Hospitality Innovation", "Guest Journey"],
      industryTags: ["Luxury Hospitality", "Guest Experience", "Tourism Technology", "Cultural Preservation"],
      category: "Hospitality",
      year: "2021",
      client: "Nomade Group",
      location: "Mexico-Tulum",
      website: "https://nomadetulum.com/",
      image: "/projects/nomade/main-hero-carrusel.jpeg",
      secondaryImage: "/projects/nomade/secundary-hero.jpeg",
      galleryImages: [
        "/projects/nomade/secundary-hero.jpeg",
        "/projects/nomade/Screenshot 2024-11-15 at 15.21.56.png",
        "/projects/nomade/Screenshot 2025-04-15 at 13.46.25.png",
        "/projects/nomade/Screenshot 2025-04-15 at 13.57.49.png"
      ],
      testimonial: "It was a pleasure to work with Sil, I found a great professional, very collaborative, open to challenge and to make her part. Both clients we work with were very happy with her, and excellent feedaback received",
      testimonialAuthor: "Gerardo Bava-VP Delivery-Globant",
      context: "Riviera Maya's Nomade Hotels are sanctuaries that blend luxury with nature, evolving alongside guest expectations. The challenge was clear: how to preserve a deeply personal, ritualistic, and human-centred approach while seamlessly integrating digital efficiencies. Nomade envisioned a transformation into a tech-enabled hospitality brand without losing its soul.",
      challenge: "In collaboration with Nomade team, we envisioned a guest-centric digital ecosystem integrating CRM, personalisation engines, and an intuitive e-concierge system. Service blueprinting reimagined every touchpoint—from booking to check-out—as opportunities for meaningful cultural connection. Backend systems integration unified operations while preserving the spontaneous, authentic interactions defining Nomade's essence.",
      impact: "Discovery research provided insights into transforming fragmented guest touchpoints into integrated digital and physical narratives. The integrated platform eliminates operational inefficiencies while enhancing real-time decision-making across all departments. This approach delivers measurable operational efficiency and enriches guest experience, supporting expansion from two assets to ten more in an eight-year pipeline."
    },
    {
      title: "Danone Digital Transformation",
      subtitle: "Driving Digital Transformation in Pricing Strategy",
      description: "In volatile markets, reactive pricing costs opportunities. Danone's Smart Pricing System represents a fundamental shift—data intelligence and predictive analytics now enable real-time market response, transforming pricing from operational necessity into competitive advantage.",
      tech: ["Digital Transformation", "Service Design", "Product Strategy", "Pricing Intelligence", "Market Analytics"],
      industryTags: ["Food & Beverage", "Pricing Strategy", "Market Intelligence", "Operational Excellence"],
      category: "Food and Beverage",
      year: "2021",
      client: "Danone",
      location: "Argentina",
      website: "https://www.danone.com/",
      image: "/projects/danone/main-hero-carrusel.jpeg",
      secondaryImage: "/projects/danone/secundary-hero.png",
      galleryImages: [
        "/projects/danone/secundary-hero.png",
        "/projects/danone/Screenshot 2025-04-15 at 14.01.55.png",
        "/projects/danone/Screenshot 2025-04-15 at 14.03.20.png"
      ],
      testimonial: "Silvana is a person who shows permanent commitment to the project, always responsible and collaborating not only with regard to her tasks and objectives but also with those of the team and the project. On the other hand, she has proven to be innovative, proposing, challenging and always seeking to optimize work dynamics and tools to work with clients",
      testimonialAuthor: "Roberto Hernán Murdocca- Tech Director-Globant",
      context: "In food and beverage, pricing decisions must be intelligent and adaptive against rapidly shifting market dynamics. Danone needed to transition from a reactive, inflationary pricing approach to predictive models aligned with erratic market behaviour. A comprehensive Digital Maturity Assessment was undertaken to evaluate capabilities across technology, data, processes, and organisational culture.",
      challenge: "We led the maturity assessment, identifying capability gaps between Danone's digital ambition and its current operational reality. Critical challenges in data governance, technology automation, and cross-functional processes Scalability was diagnosed. A modular pricing framework was architected to ensure strategic alignment with broader organisational transformation objectives.",
      impact: "The strategic roadmap established foundations for dynamic pricing capabilities leveraging predictive analytics and automation. Detailed implementation frameworks outlined pathways to overcome silos between pricing, sales, and finance teams. The discovery phase delivered a scalable vision positioning pricing as strategic advantage in Danone's digital transformation."
    },
    {
      title: "Parques Reunidos",
      subtitle: "Catalog Harmonisation",
      description: "Seventy diverse entertainment venues created stunning operational complexity. A unified product language now preserves venue-specific narratives while enabling enterprise-wide product strategies, turning fragmented systems into coordinated platform across three continents.",
      tech: ["Experience Design", "Service Design", "Digital Transformation", "Content Strategy", "Portfolio Management"],
      industryTags: ["Entertainment Industry", "Theme Parks", "Leisure Management", "Global Operations"],
      category: "Themed Parks",
      year: "2023",
      client: "Parques Reunidos",
      location: "Spain",
      website: "https://www.parquesreunidos.com/",
      image: "/projects/parques-reunidos/hero-parque-reunidos.png",
      secondaryImage: "/projects/parques-reunidos/secundary-image.jpeg",
      galleryImages: [
        "/projects/parques-reunidos/secundary-image.jpeg",
        "/projects/parques-reunidos/Envisioning for Digital Planning and Booking.png",
        "/projects/parques-reunidos/Envisioning for Dynamic Booking.png"
      ],
      testimonial: "We have completed the Catalog Harmonisation Project in the expected time and conditions, despite having a very complex scope, with changes along the way. We have simultaneously created spaces for new project opportunities and increase client satisfactions with a NPS of 9",
      testimonialAuthor: "Diego Salcedo-Delivery Manager-Globant",
      context: "Parques Reunidos is a global leisure leader operating seventy diverse entertainment venues spanning three continents and multiple experience categories. Portfolio diversity created operational complexity—particularly across six sales channels and seven distinct product categories. Fragmented systems limited consistent guest experiences and prevented implementation of enterprise-wide product strategies.",
      challenge: "In collaboration with internal teams, we created a unified product taxonomy to enable operational efficiency while preserving the authenticity of local venue offerings. We designed governance frameworks that balance centralised intelligence with venue-specific innovation across diverse properties. Integration pathways were mapped to connect disparate systems into a coherent operational ecosystem, enhancing both efficiency and engagement.",
      impact: "We established master catalog architecture, creating a unified product language while preserving unique venue-specific narratives. The governance system transforms fragmented decision processes into coordinated strategic actions across the portfolio. Our implementation roadmap elevates product ecosystems from operational necessities to strategic enablers of guest delight."
    },
    {
      title: "Flagship Entertainment Destination, KSA",
      subtitle: "PoC Guest Support Platform",
      description: "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project.",
      tech: ["Product Strategy", "Service Design", "Prototyping", "Guest Support Systems", "Cultural Adaptation"],
      industryTags: ["Entertainment Destination", "Guest Services", "Cultural Intelligence", "Digital Infrastructure"],
      category: "Hospitality-Themed Parks-Retail",
      year: "2025",
      client: "Qiddiya",
      location: "KSA",
      website: "https://qiddiya.com/",
      image: "/projects/qiddiya/hero-qiddiya.png",
      secondaryImage: "/projects/qiddiya/secondary-qiddiya.png",
      galleryImages: [
        "/projects/qiddiya/secondary-qiddiya.png",
        "/projects/qiddiya/emergency-management.png",
        "/projects/qiddiya/guest-search-digital-id.png",
        "/projects/qiddiya/unified-guest-interaction.png"
      ],
      testimonial: "This foundational work provided our internal teams with the confidence and clarity needed to align internal visions and also determine what part of the experience wouldn't be considered if it weren't for this envisioning.",
      testimonialAuthor: "Project Stakeholder",
      context: "Saudi Arabia's flagship entertainment destination required comprehensive guest support systems navigating uncharted territory in a landmark entertainment project. Theme parks, water attractions, sports facilities, and retail centers operated through a unified digital infrastructure where both guests and operational staff would encounter these systems for the first time. Cultural complexity demanded sophisticated solutions: Saudi families, GCC visitors, and international tourists each brought different service expectations, with every touchpoint depending entirely on digital systems.",
      challenge: "This proof of concept established a validated product strategy for complex entertainment ecosystem requirements through stakeholder collaboration and technical feasibility. We provided development teams with validated integration requirements, with PRDs specifying exact connections with Digital ID and ticketing systems. Workflow validation created shared understanding through stakeholder alignment via tangible prototypes, while designing data collection specs for guest interaction patterns.",
      impact: "Development teams received validated integration requirements, enabling confident planning without major architectural uncertainty. Workflow validation created shared understanding with achievable roadmaps that reflect real operational constraints. Our blueprints outlined future experience preservation measurement, paving the way for a truly world-class digital guest experience."
    }
  ];

  const projectCategories = ["ALL WORK", "EXPERIENCE DESIGN", "PRODUCT STRATEGY", "SERVICE DESIGN", "USER RESEARCH", "DESIGN OPS", "DIGITAL TRANSFORMATION"];
  
  const filteredProjects = selectedCategory === "ALL WORK" 
    ? projects 
    : projects.filter(project => 
        project.tech.some(t => t.includes(selectedCategory.replace(" DESIGN", "").replace(" STRATEGY", "").replace(" TRANSFORMATION", "").replace(" RESEARCH", "").replace(" OPS", ""))) ||
        (project.industryTags && project.industryTags.some(tag => tag.includes(selectedCategory)))
      );

  return (
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
      
      {/* AWWWARDS MAGNETIC CURSOR SYSTEM */}
      <MagneticCursor />
      <CustomCursor />
      
      {/* AWWWARDS FLOATING NAVIGATION SYSTEM */}
      <FloatingNavigation />
      
      {/* SIDEBAR NAVIGATION - Desktop Enhancement */}
      <motion.nav
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        aria-label="Portfolio section navigation"
        role="navigation"
      >
        <div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg focus-within:ring-2 focus-within:ring-coral focus-within:ring-offset-2"
          style={{ border: '1px solid rgba(255, 102, 99, 0.1)' }}
        >
          {/* Section Navigation */}
          <div className="space-y-4" role="list">
            {['Hero', 'About', 'Projects', 'Experience', 'Services', 'Contact'].map((section, index) => (
              <motion.a
                key={section}
                href={section === 'Contact' ? '#footer' : `#${section.toLowerCase()}`}
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-coral focus:ring-offset-2"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 102, 99, 0.08)'
                }}
                aria-label={`Navigate to ${section} section`}
                role="listitem"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const element = document.getElementById(section.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === 0 ? '#ff6663' : 'rgba(255, 102, 99, 0.3)',
                    transform: index === 0 ? 'scale(1.2)' : 'scale(1)'
                  }}
                  aria-hidden="true"
                />
                <span 
                  className="text-sm font-medium text-gray-600 group-hover:text-gray-800 group-focus:text-gray-800"
                  style={{ fontSize: '0.875rem' }}
                >
                  {section}
                </span>
              </motion.a>
            ))}
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-medium text-gray-500">Progress</span>
              <div className="flex-1 h-1 bg-gray-200 rounded-full">
                <motion.div 
                  className="h-full rounded-full"
                  style={{ backgroundColor: '#ff6663' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '40%' }}
                  transition={{ duration: 2, delay: 3 }}
                />
              </div>
            </div>
            <span className="text-xs text-gray-500">40% Complete</span>
          </div>
        </div>
      </motion.nav>

      {/* IMPACTFUL HERO: Full-Screen Photo Background */}
      <main id="main-content">
      <section 
        id="hero"
        aria-label="Hero introduction - Silvana Restrepo, Principal Experience Architect"
        style={{
          position: 'relative',
          height: '100vh',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* FLOATING IMAGE SYSTEM - Zero Cropping */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'var(--space-lg)'
        }}>
          <motion.div
            style={{
              position: 'relative',
              maxWidth: '100%',
              maxHeight: '100%',
              borderRadius: '2rem',
              overflow: 'hidden'
            }}
            animate={{
              y: [0, -8, 0],
              rotateY: [0, 2, 0],
              boxShadow: [
                '0 40px 80px rgba(0, 0, 0, 0.15)',
                '0 60px 120px rgba(0, 0, 0, 0.25)',
                '0 40px 80px rgba(0, 0, 0, 0.15)'
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            whileHover={{
              scale: 1.02,
              rotateY: 3,
              transition: { duration: 0.6 }
            }}
          >
            <Image
              src="/silvana-profile.jpg"
              alt="Silvana Restrepo - Principal Experience Architect in professional portrait showcasing strategic design leadership"
              width={800}
              height={1000}
              quality={100}
              priority
              style={{
                objectFit: 'contain',
                borderRadius: '2rem',
                filter: 'brightness(0.75) contrast(1.1)',
                maxWidth: '70vh',
                height: 'auto'
              }}
            />
          </motion.div>
        </div>
        
        {/* CSS BACKGROUND FALLBACK */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `
            linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(255,102,99,0.2) 100%),
            url('/silvana-profile.jpg')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundAttachment: 'scroll',
          zIndex: 0
        }} />
        
        {/* ENHANCED OVERLAY - GUARANTEED VISIBILITY */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.5) 0%, rgba(255,102,99,0.25) 100%)',
          zIndex: 2
        }} />
        
        {/* TEXT LAYER - MAXIMUM VISIBILITY */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            {/* AWWWARDS MAGNETIC HERO TYPOGRAPHY */}
            <div className="magnetic-field" style={{ perspective: '1000px' }}>
              <motion.h1 
                className="typography-hero magnetic-element"
                style={{
                  fontSize: 'clamp(6rem, 15vw, 20rem)',
                  textAlign: 'center',
                  color: 'transparent',
                  margin: '0 auto 4rem auto',
                  maxWidth: '1400px',
                  position: 'relative',
                  zIndex: 10
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const centerX = rect.left + rect.width / 2;
                  const centerY = rect.top + rect.height / 2;
                  const deltaX = (e.clientX - centerX) / (rect.width / 2);
                  const deltaY = (e.clientY - centerY) / (rect.height / 2);
                  
                  e.currentTarget.style.transform = `
                    perspective(1000px) 
                    rotateY(${deltaX * 5}deg) 
                    rotateX(${-deltaY * 5}deg)
                    translateZ(30px)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';
                }}
              >
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
                >
                  Experience
                </motion.span>
                
                <motion.span 
                  className="block"
                  initial={{ opacity: 0, y: 100, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  style={{ 
                    background: 'linear-gradient(135deg, #ff6663 0%, #ff8a80 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Architect
                </motion.span>
              </motion.h1>
            </div>
            
            {/* Hero Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              {/* PHASE 4: LUXURY PRIMARY CTA - Advanced Micro-Interactions */}
              <motion.a
                href="/portfolio/Silvana-Restrepo-Portfolio.pdf"
                download="Silvana-Restrepo-CV.pdf"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium transition-all duration-700 relative overflow-hidden group"
                style={{
                  backgroundColor: '#ff6663',
                  color: 'white',
                  boxShadow: '0 12px 40px rgba(255, 102, 99, 0.4), 0 4px 20px rgba(0,0,0,0.2)',
                  border: 'none'
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = '#e55555';
                  target.style.boxShadow = '0 15px 35px rgba(255, 102, 99, 0.4), 0 5px 15px rgba(255, 102, 99, 0.3)';
                  target.style.transform = 'translateY(-4px) scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = '#ff6663';
                  target.style.boxShadow = '0 8px 25px rgba(255, 102, 99, 0.3)';
                  target.style.transform = 'translateY(0px) scale(1)';
                }}
              >
                <span className="relative z-10">Download my CV</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.a>
              {/* PHASE 4: LUXURY SECONDARY CTA - Sophisticated Hover States */}
              <motion.button
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  projectsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium transition-all duration-700 relative overflow-hidden group"
                style={{
                  border: '2px solid rgba(255, 255, 255, 0.6)',
                  color: 'white',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -4,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                  target.style.color = 'white';
                  target.style.borderColor = 'rgba(255, 255, 255, 0.9)';
                  target.style.boxShadow = '0 15px 40px rgba(255, 255, 255, 0.2), 0 8px 20px rgba(0,0,0,0.3)';
                  target.style.transform = 'translateY(-4px) scale(1.08)';
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget;
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  target.style.color = 'white';
                  target.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  target.style.boxShadow = 'none';
                  target.style.transform = 'translateY(0px) scale(1)';
                }}
              >
                Explore My Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* ENHANCED SCROLL INDICATOR - User Guidance */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 8px 30px rgba(255, 102, 99, 0.2)',
            border: '1px solid rgba(255, 102, 99, 0.1)'
          }}
          aria-label="Scroll to About section"
          role="button"
        >
          <ArrowDown style={{color: '#ff6663'}} size={22} className="group-hover:scale-110 transition-transform duration-300" />
          
          {/* Tooltip */}
          <motion.div
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{ whiteSpace: 'nowrap' }}
          >
            Explore My Journey
          </motion.div>
        </motion.div>
      </section>

      {/* VIEWPORT-OPTIMIZED ABOUT SECTION - Single Screen Excellence */}
      <section 
        id="about" 
        style={{ 
          backgroundColor: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 'var(--section-gap)',
          paddingBottom: 'var(--section-gap)'
        }}
      >
        <div className="container-desktop">
          <motion.div
            className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            {/* CONTENT COLUMN - Condensed for Viewport */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="mb-6">
                  <span 
                    className="body-text-humanist text-lg block mb-4"
                    style={{ 
                      color: 'rgba(255, 102, 99, 0.6)',
                      letterSpacing: '0.2em',
                      fontWeight: '500'
                    }}
                  >
                    01
                  </span>
                  <h2 className="typography-display text-gray-800">
                    About Me
                  </h2>
                </div>
                
                <p className="typography-body text-xl text-gray-600 mb-8 max-w-xl">
                  Discover the journey of strategic design thinking, business transformation, and the human perspective that drives meaningful innovation across industries.
                </p>
              </motion.div>

              {/* CONDENSED NARRATIVE - Single Viewport */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <p className="typography-body text-lg text-gray-700 max-w-xl">
                  I believe the most compelling stories begin with{' '}
                  <span style={{color: '#ff6663', fontWeight: '600'}}>curiosity</span>
                  —a spark that has carried me across continents, blending diverse perspectives 
                  from anthropology to business, innovation to experience design.
                </p>
                
                <div 
                  className="border-l-4 pl-8 py-6 my-8 max-w-xl"
                  style={{ 
                    borderLeftColor: '#ff6663',
                    backgroundColor: 'rgba(255, 102, 99, 0.03)'
                  }}
                >
                  <p 
                    className="typography-quote text-3xl text-gray-800"
                    style={{ marginBottom: '0' }}
                  >
                    &ldquo;The art of{' '}
                    <span style={{color: '#ff6663', fontWeight: '600'}}>MY CRAFT</span>
                    {' '}lies in connecting strategic business goals with the essence of human desire.&rdquo;
                  </p>
                </div>
                
                <p className="typography-body text-lg text-gray-700 max-w-xl">
                  <span className="body-text-medium" style={{color: '#ff6663'}}>Welcome to my world</span>
                  —where strategy meets soul, and design becomes the universal language of possibility.
                </p>
              </motion.div>
            </div>

            {/* PHOTO COLUMN - Optimized for Viewport */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                animate={{ 
                  y: [0, -12, 0],
                  rotateY: [0, 1, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{
                  scale: 1.03,
                  rotateY: 2,
                  transition: { duration: 0.8 }
                }}
                style={{
                  borderRadius: '3rem',
                  overflow: 'hidden',
                  boxShadow: '0 50px 100px rgba(255, 102, 99, 0.2), 0 20px 40px rgba(0, 0, 0, 0.1)',
                  background: 'white',
                  padding: '1.5rem'
                }}
              >
                <Image
                  src="/silvana-profile.jpg"
                  alt="Silvana Restrepo - Principal Experience Architect, WEF Alumni"
                  width={500}
                  height={650}
                  quality={100}
                  priority
                  style={{
                    objectFit: 'contain',
                    borderRadius: '2rem',
                    maxHeight: '60vh',
                    height: 'auto',
                    width: 'auto'
                  }}
                />
                
                {/* FLOATING WEF BADGE */}
                <motion.div 
                  className="absolute -top-4 -right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  whileHover={{ scale: 1.1, rotate: 3 }}
                >
                  <div 
                    className="px-6 py-3 rounded-full text-sm font-medium"
                    style={{
                      background: 'linear-gradient(135deg, #ff6663 0%, #ff8a80 100%)',
                      color: 'white',
                      boxShadow: '0 8px 25px rgba(255, 102, 99, 0.3)'
                    }}
                  >
                    WEF Alumni
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* LANDOR LUXURY PROJECTS SECTION - Direct Styling */}
      <section 
        id="projects" 
        style={{
          background: 'linear-gradient(180deg, #fffbee 0%, #fefcf3 50%, #fffbee 100%)',
          paddingTop: 'var(--section-padding)',
          paddingBottom: 'var(--section-padding)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="container-desktop">
          <motion.div 
            className="heading-desktop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: 'var(--element-gap)' }}>
              <span 
                className="body-text-humanist text-lg block mb-4"
                style={{ 
                  color: 'rgba(255, 102, 99, 0.6)',
                  letterSpacing: '0.2em',
                  fontWeight: '500'
                }}
              >
                02
              </span>
              <h2 className="typography-display text-gray-800">
                Projects
              </h2>
            </div>
            <motion.p 
              className="typography-body text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              A curated selection of strategic consulting projects that demonstrate experience-driven innovation, digital transformation, and business acceleration across diverse industries and global markets.
            </motion.p>
            
            {/* Project Filter Tags */}
            <div className="flex flex-wrap justify-center gap-4">
              {projectCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === category ? '#ff6663' : 'transparent',
                    color: selectedCategory === category ? 'white' : '#ff6663',
                    border: `1px solid ${selectedCategory === category ? '#ff6663' : 'rgba(255, 102, 99, 0.3)'}`,
                    letterSpacing: '0.05em'
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
          
          {/* AUTO-MOVING PROJECT CAROUSEL - Ideas Image Inspired */}
          <div className="w-full overflow-hidden px-8">
            {/* Moving Carousel Container - Right to Left Auto-Movement */}
            <motion.div 
              className="flex gap-12"
              animate={{ 
                x: [`0%`, `-${filteredProjects.length * 100}%`]
              }}
              transition={{
                duration: filteredProjects.length * 10, // 10 seconds per project
                repeat: Infinity,
                ease: "linear"
              }}
              whileHover={{ 
                animationPlayState: 'paused',
                transition: { duration: 0.1 }
              }}
              style={{ width: `${filteredProjects.length * 200}%` }}
            >
              {/* Duplicate projects for seamless infinite loop */}
              {[...filteredProjects, ...filteredProjects].map((project, index) => (
                <motion.div
                  key={`${project.title}-${index}`}
                  className="min-w-[85vw] h-[70vh] relative rounded-3xl overflow-hidden cursor-pointer group"
                  data-cursor="project"
                  style={{
                    flexShrink: 0,
                    boxShadow: '0 25px 60px rgba(0, 0, 0, 0.15), 0 10px 30px rgba(255, 102, 99, 0.1)'
                  }}
                  onClick={() => {
                    setSelectedProject(index % filteredProjects.length);
                    setCurrentGalleryImage(0);
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 35px 80px rgba(0, 0, 0, 0.2), 0 15px 40px rgba(255, 102, 99, 0.15)',
                    transition: { duration: 0.4 }
                  }}
                >
                  {/* Project Background Image */}
                  <Image
                    src={project.image}
                    alt={`${project.title} - Auto-moving carousel showcase`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    quality={95}
                    sizes="85vw"
                    priority={index < 2}
                  />
                  
                  {/* Visual Accessibility Overlay - Left Side (Following Ideas Image) */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
                  
                  {/* Content Overlay - Following Ideas Image Layout Structure */}
                  <div className="absolute left-12 top-1/2 transform -translate-y-1/2 max-w-2xl text-white z-10">
                    {/* Project Title - Luxury Serif */}
                    <motion.h2 
                      className="luxury-title text-5xl mb-4 leading-tight"
                      style={{ 
                        textShadow: '0 8px 32px rgba(0,0,0,0.8)',
                        color: 'white'
                      }}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    >
                      {project.title}
                    </motion.h2>
                    
                    {/* Project Subtitle - Humanist Body */}
                    <motion.p 
                      className="body-text-humanist text-xl text-white/90 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    >
                      {project.subtitle}
                    </motion.p>
                    
                    {/* Client & Meta Info */}
                    <motion.div
                      className="mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    >
                      <p className="body-text-medium text-lg mb-2" style={{ color: '#ff6663' }}>
                        {project.client}
                      </p>
                      <div className="flex gap-4 text-base text-white/80">
                        <span>{project.year}</span>
                        <span>•</span>
                        <span>{project.location}</span>
                      </div>
                    </motion.div>
                    
                    {/* Capability Tags - Clean Badges (Following Ideas Image) */}
                    <motion.div 
                      className="flex flex-wrap gap-2 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                    >
                      {project.tech && project.tech.slice(0, 4).map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="body-text-humanist px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                          style={{ border: '1px solid rgba(255, 255, 255, 0.4)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </motion.div>
                    
                    {/* View Project Button - Professional CTA (Following Ideas Image) */}
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(index % filteredProjects.length);
                        setCurrentGalleryImage(0);
                      }}
                      data-cursor="button"
                      className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium transition-all duration-300"
                      style={{
                        boxShadow: '0 8px 25px rgba(255, 255, 255, 0.4)'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: '#ff6663',
                        color: 'white',
                        transition: { duration: 0.3 }
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.8 }}
                    >
                      View Project
                    </motion.button>
                  </div>
                  
                  {/* Project Number Indicator */}
                  <motion.div
                    className="absolute top-8 right-8 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 1.0 }}
                  >
                    <div 
                      className="w-12 h-12 bg-black/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold"
                      style={{ border: '1px solid rgba(255, 255, 255, 0.3)' }}
                    >
                      {String((index % filteredProjects.length) + 1).padStart(2, '0')}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Carousel Status Indicator */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
                  <span className="body-text-humanist text-sm font-medium text-gray-700">
                    Auto-Moving Projects
                  </span>
                </div>
                <div className="flex gap-2">
                  {filteredProjects.map((_, index) => (
                    <div 
                      key={index}
                      className="w-2 h-2 rounded-full bg-coral/30"
                    />
                  ))}
                </div>
                <span className="body-text-humanist text-xs text-gray-500">
                  Hover to pause • Click to explore
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* LANDOR LUXURY EXPERIENCE SECTION - Direct Styling */}
      <section 
        id="experience"
        style={{ 
          background: 'linear-gradient(180deg, #fffbee 0%, #fdf9f0 50%, #fffbee 100%)',
          paddingTop: 'var(--section-padding)',
          paddingBottom: 'var(--section-padding)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="container-desktop">
          <motion.div 
            className="heading-desktop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: 'var(--element-gap)' }}>
              <span 
                className="body-text-humanist text-lg block mb-4"
                style={{
                  color: 'rgba(255, 102, 99, 0.6)',
                  letterSpacing: '0.2em',
                  fontWeight: '500'
                }}
              >
                03
              </span>
              <h2 className="typography-display text-gray-800">
                Experience
              </h2>
            </div>
            <motion.p 
              className="typography-body text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              More than two decades of continuous evolution, upscaling global enterprises, reinventing business models, and reimagining how brands connect with human experiences across cultures and industries.
            </motion.p>
          </motion.div>
          
          {/* VIEWPORT-OPTIMIZED EXPERIENCE - Horizontal Timeline */}
          <div className="max-w-7xl mx-auto">
            {/* Experience Navigation */}
            <motion.div 
              className="flex justify-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex gap-4">
                {['Recent', 'Earlier', 'Foundation'].map((period, index) => (
                  <button
                    key={period}
                    className="px-6 py-3 rounded-full text-lg font-medium transition-all duration-300"
                    style={{
                      backgroundColor: index === 0 ? '#ff6663' : 'rgba(255, 102, 99, 0.1)',
                      color: index === 0 ? 'white' : '#ff6663',
                      border: '1px solid rgba(255, 102, 99, 0.3)'
                    }}
                  >
                    {period} Experience
                  </button>
                ))}
              </div>
            </motion.div>

            {/* EXPERIENCE GRID - 2 Viewports Maximum */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  year: "2020—2025",
                  role: "Business Partner & Experience Architect", 
                  company: "Globant",
                  description: "Orchestrating enterprise-scale digital initiatives for global brands, translating vision into practical roadmaps.",
                  featured: true
                },
                {
                  year: "2019—2020",
                  role: "Senior Researcher",
                  company: "Centre for Fourth Industrial Revolution-WEF",
                  description: "Developing frameworks connecting technologies with governance approaches for sustainable innovation.",
                  featured: true
                },
                {
                  year: "2018—2019", 
                  role: "Strategic Design Director",
                  company: "Designit a WIPRO Company",
                  description: "Leading regional operations to scale market presence and transform complexity into actionable solutions.",
                  featured: true
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-3xl p-8 relative group cursor-pointer"
                  style={{
                    boxShadow: '0 15px 35px rgba(255, 102, 99, 0.08)',
                    border: '1px solid rgba(255, 102, 99, 0.1)',
                    minHeight: '320px'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: '0 25px 50px rgba(255, 102, 99, 0.15)',
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  {/* Experience Badge */}
                  <div 
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                    style={{
                      backgroundColor: experience.featured ? '#ff6663' : 'rgba(255, 102, 99, 0.1)',
                      color: experience.featured ? 'white' : '#ff6663'
                    }}
                  >
                    {experience.year}
                  </div>
                  
                  {/* Role Title */}
                  <h3 className="text-2xl font-medium text-gray-800 mb-4 leading-tight">
                    {experience.role}
                  </h3>
                  
                  {/* Company */}
                  <p className="text-xl font-medium mb-6" style={{color: '#ff6663'}}>
                    {experience.company}
                  </p>
                  
                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {experience.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#ff6663] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              ))}
            </div>

            {/* ADDITIONAL EXPERIENCE - Second Viewport */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { year: "2016—2018", role: "Marketing Director", company: "Grupo Éxito" },
                { year: "2013—2016", role: "Business Intelligence Manager", company: "Industrias HACEB" },
                { year: "2012—2016", role: "Independent Advisor", company: "Independent" },
                { year: "2002—2011", role: "Senior Marketing Analyst", company: "TIGO- Millicom" }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-6 group hover:bg-white transition-all duration-300"
                  style={{ boxShadow: '0 8px 20px rgba(255, 102, 99, 0.04)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sm font-medium mb-3" style={{color: '#ff6663'}}>
                    {experience.year}
                  </div>
                  <h4 className="text-lg font-medium text-gray-800 mb-2 leading-tight">
                    {experience.role}
                  </h4>
                  <p className="text-base text-gray-600">
                    {experience.company}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LANDOR LUXURY SERVICES SECTION - Direct Styling */}
      <section 
        id="services"
        style={{ 
          background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 50%, #ffffff 100%)',
          paddingTop: 'var(--section-padding)',
          paddingBottom: 'var(--section-padding)'
        }}
      >
        <div className="container-desktop">
          <motion.div 
            className="heading-desktop"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div style={{ marginBottom: 'var(--element-gap)' }}>
              <span 
                className="body-text-humanist text-lg block mb-4"
                style={{
                  color: 'rgba(255, 102, 99, 0.6)',
                  letterSpacing: '0.2em',
                  fontWeight: '500'
                }}
              >
                04
              </span>
              <h2 className="typography-display text-gray-800">
                Services
              </h2>
            </div>
            <motion.p 
              className="typography-body text-xl text-gray-600 text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions that transform complex business challenges into strategic advantages, addressing demanding market realities while anticipating future possibilities.
            </motion.p>
          </motion.div>
          
          {/* AWARD-WINNING SERVICES - Vertical Expansion System */}
          <div className="max-w-[95vw] mx-auto">
            {/* SINGLE VIEWPORT SERVICES - Hover Exploration */}
            <div className="flex h-[75vh] border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-2xl">
              {awardWinningServices.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    className="relative cursor-pointer group border-r border-gray-200 last:border-r-0"
                    style={{
                      backgroundColor: hoveredService === index ? 'rgba(255, 102, 99, 0.02)' : 'white'
                    }}
                    onMouseEnter={() => setHoveredService(index)}
                    onMouseLeave={() => setHoveredService(null)}
                    animate={{
                      width: getColumnDimensions(index).width,
                      opacity: getColumnDimensions(index).opacity
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      type: "tween"
                    }}
                    whileHover={{
                      boxShadow: hoveredService === index ? '0 25px 60px rgba(255, 102, 99, 0.15)' : '0 0 0 rgba(0,0,0,0)',
                      zIndex: hoveredService === index ? 10 : 1
                    }}
                  >
                    {/* Service Number - Always Visible */}
                    <motion.div 
                      className="absolute top-8 left-6"
                      animate={{
                        opacity: hoveredService === null || hoveredService === index ? 1 : 0.3
                      }}
                    >
                      <span className="typography-accent text-lg font-semibold text-gray-400">
                        {String(index + 1).padStart(2, '0')}-{index + 1}
                      </span>
                    </motion.div>
                    
                    {/* Service Title - Vertical Typography (Collapsed State) */}
                    <motion.div
                      className="absolute top-24 left-6 origin-top-left"
                      style={{
                        transform: hoveredService === index ? 'rotate(0deg)' : 'rotate(-90deg)',
                        transformOrigin: 'top left',
                        width: hoveredService === index ? 'auto' : '300px'
                      }}
                      animate={{
                        rotate: hoveredService === index ? 0 : -90,
                        x: hoveredService === index ? 0 : 40
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      <h3 
                        className="typography-display text-gray-800 whitespace-nowrap"
                        style={{ 
                          fontSize: hoveredService === index ? '2rem' : '1.5rem',
                          transition: 'font-size 0.6s ease'
                        }}
                      >
                        {service.title}
                      </h3>
                    </motion.div>
                    
                    {/* Expanded Content - Hover Only */}
                    <motion.div
                      className="absolute inset-0 p-8 pt-32"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredService === index ? 1 : 0,
                        pointerEvents: hoveredService === index ? 'auto' : 'none'
                      }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {/* Capability List */}
                      <div className="mb-8">
                        {service.capabilities.map((capability, capIndex) => (
                          <motion.div
                            key={capIndex}
                            className="typography-accent text-sm font-medium text-gray-600 mb-3"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{
                              opacity: hoveredService === index ? 1 : 0,
                              x: hoveredService === index ? 0 : -20
                            }}
                            transition={{ 
                              duration: 0.3, 
                              delay: hoveredService === index ? 0.3 + capIndex * 0.1 : 0 
                            }}
                          >
                            / {capability}
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* LIVE FORMATION ICON - Signature Placement */}
                      <motion.div
                        className="flex justify-center mb-8"
                        initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                        animate={{
                          opacity: hoveredService === index ? 1 : 0,
                          scale: hoveredService === index ? 1 : 0.8,
                          rotateY: hoveredService === index ? 0 : 180
                        }}
                        transition={{ 
                          duration: 0.6, 
                          delay: hoveredService === index ? 0.8 : 0,
                          ease: "backOut"
                        }}
                      >
                        <div 
                          className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center"
                          style={{
                            boxShadow: '0 15px 35px rgba(255, 102, 99, 0.15)',
                            border: '2px solid rgba(255, 102, 99, 0.1)'
                          }}
                        >
                          <IconComponent 
                            size={48} 
                            color="#ff6663" 
                            animated={hoveredService === index}
                          />
                        </div>
                      </motion.div>
                      
                      {/* Short Description - Non-Complicated */}
                      <motion.p
                        className="typography-body text-base text-gray-700 leading-relaxed text-center px-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{
                          opacity: hoveredService === index ? 1 : 0,
                          y: hoveredService === index ? 0 : 10
                        }}
                        transition={{ 
                          duration: 0.4, 
                          delay: hoveredService === index ? 1.2 : 0
                        }}
                      >
                        {service.shortDescription}
                      </motion.p>
                    </motion.div>
                    
                    {/* Column Background Enhancement on Hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-coral/5 to-coral/10"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredService === index ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.div>
                );
              })}
            </div>
            
            {/* Exploration Guidance */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="typography-accent text-sm font-medium text-gray-600">
                  Hover over each service to explore
                </span>
                <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="relative py-20 overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0d1117] to-[#000000]">
        {/* Elegant Background Pattern */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
          zIndex: 1
        }} />
        
        <div className="container-desktop relative z-10">
          {/* BRAND SECTION - Elegant Typography */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href="https://silvana.mmm.page/human-perspective"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block group"
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.5 }}
            >
              <h2 
                className="brand-typography text-8xl text-white mb-8 group-hover:tracking-wider transition-all duration-500"
                style={{
                  lineHeight: '1',
                  textShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}
              >
                silvana.
              </h2>
            </motion.a>
            
            <motion.p 
              className="quote-typography text-4xl text-white/95 max-w-5xl mx-auto"
              style={{
                textShadow: '0 8px 32px rgba(0,0,0,0.4)'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              &ldquo;Transforming business vision into human experiences—where strategic design meets 
              operational excellence and technological possibility.&rdquo;
            </motion.p>
          </motion.div>

          {/* SOPHISTICATED NAVIGATION GRID */}
          <div 
            className="grid md:grid-cols-3 lg:grid-cols-4 mb-20"
            style={{ gap: 'var(--content-gap)' }}
          >
            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 
                className="text-2xl font-light text-white mb-8"
                style={{ letterSpacing: '0.02em' }}
              >
                Navigate
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                {['About', 'Projects', 'Experience', 'Services'].map((link) => (
                  <motion.a 
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-lg font-medium text-white/80 transition-all duration-300"
                    whileHover={{ 
                      color: '#fffbee', 
                      x: 8,
                      scale: 1.05 
                    }}
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* MyVoice Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <h3 
                className="text-2xl font-light text-white mb-8"
                style={{ letterSpacing: '0.02em' }}
              >
                My Voice
              </h3>
              <motion.a 
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-with-text-lg px-8 py-4 bg-white/10 backdrop-blur-sm rounded-2xl text-white transition-all duration-500 group"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 25px rgba(255, 255, 255, 0.08)'
                }}
                style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  gap: 'var(--icon-text-gap-lg)'
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink size={22} />
                </motion.div>
                <span className="text-lg font-medium">Human Perspective</span>
              </motion.a>
            </motion.div>

            {/* Contact Section - "Let's Talk" */}
            <motion.div
              className="md:col-span-2 lg:col-span-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 
                className="text-3xl font-light text-white mb-8"
                style={{ letterSpacing: '0.02em' }}
              >
                Let&apos;s Talk
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--element-gap)' }}>
                <div>
                  <p className="text-lg font-medium text-white/90 mb-4">
                    Want to explore more about my experience
                  </p>
                  <motion.a 
                    href="https://linkedin.com/in/silvanarestrepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="icon-with-text-lg p-8 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 group relative overflow-hidden"
                    style={{ 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      gap: 'var(--icon-text-gap-lg)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                    whileHover={{ 
                      scale: 1.04,
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                      boxShadow: '0 20px 50px rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      const deltaX = (e.clientX - centerX) / (rect.width / 2);
                      const deltaY = (e.clientY - centerY) / (rect.height / 2);
                      
                      e.currentTarget.style.transform = `
                        perspective(800px) 
                        rotateY(${deltaX * 4}deg) 
                        rotateX(${-deltaY * 4}deg)
                        translateZ(10px)
                      `;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `
                        perspective(800px) 
                        rotateY(0deg) 
                        rotateX(0deg)
                        translateZ(0px)
                      `;
                    }}
                  >
                    {/* Professional Network Glow */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: 5,
                        color: '#0077b5'
                      }}
                      transition={{ duration: 0.4, ease: "backOut" }}
                    >
                      <Linkedin size={32} className="text-white" />
                    </motion.div>
                    <div className="relative">
                      <p className="text-white font-medium group-hover:tracking-wider transition-all duration-400">
                        LinkedIn Profile
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                        linkedin.com/in/silvanarestrepo
                      </p>
                    </div>
                  </motion.a>
                </div>
                
                <div>
                  <motion.a 
                    href="mailto:silvanarestrepo888@gmail.com"
                    data-cursor="button"
                    className="icon-with-text-lg p-8 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 group relative overflow-hidden"
                    style={{ 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      gap: 'var(--icon-text-gap-lg)',
                      transformStyle: 'preserve-3d',
                      willChange: 'transform'
                    }}
                    whileHover={{ 
                      scale: 1.04,
                      backgroundColor: 'rgba(255, 255, 255, 0.22)',
                      boxShadow: '0 20px 50px rgba(255, 255, 255, 0.15)',
                      borderColor: 'rgba(255, 255, 255, 0.4)'
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.23, 1, 0.32, 1],
                      type: "spring",
                      stiffness: 300,
                      damping: 25
                    }}
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const centerX = rect.left + rect.width / 2;
                      const centerY = rect.top + rect.height / 2;
                      const deltaX = (e.clientX - centerX) / (rect.width / 2);
                      const deltaY = (e.clientY - centerY) / (rect.height / 2);
                      
                      e.currentTarget.style.transform = `
                        perspective(800px) 
                        rotateY(${deltaX * 4}deg) 
                        rotateX(${-deltaY * 4}deg)
                        translateZ(10px)
                      `;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = `
                        perspective(800px) 
                        rotateY(0deg) 
                        rotateX(0deg)
                        translateZ(0px)
                      `;
                    }}
                  >
                    {/* Email Glow Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ 
                        opacity: 1,
                        transition: { duration: 0.4 }
                      }}
                    />
                    
                    <motion.div
                      whileHover={{ 
                        scale: 1.15, 
                        rotate: -3,
                        y: -2
                      }}
                      transition={{ duration: 0.4, ease: "backOut" }}
                    >
                      <Mail size={32} className="text-white" />
                    </motion.div>
                    <div className="relative">
                      <p className="text-white font-medium group-hover:tracking-wider transition-all duration-400">
                        Email Contact
                      </p>
                      <p className="text-white/70 text-sm group-hover:text-white/90 transition-colors duration-300">
                        silvanarestrepo888@gmail.com
                      </p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* ELEGANT BOTTOM SECTION */}
          <motion.div 
            className="border-t pt-12 text-center"
            style={{
              borderColor: 'rgba(255, 251, 238, 0.3)',
              paddingTop: 'var(--content-gap)'
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <p 
              className="text-lg font-medium text-white/80 mb-6"
              style={{ letterSpacing: '0.02em' }}
            >
              © 2025 Silvana Restrepo - Principal Experience Architect. All rights reserved.
            </p>
            <div className="flex justify-center gap-12">
              <a 
                href="#"
                className="text-white/70 font-medium transition-all duration-300 hover:text-white hover:tracking-wider"
                style={{ fontSize: '0.95rem' }}
              >
                Privacy Policy
              </a>
              <a 
                href="#"
                className="text-white/70 font-medium transition-all duration-300 hover:text-white hover:tracking-wider"
                style={{ fontSize: '0.95rem' }}
              >
                Terms of Service
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
      </main>

      {/* LUXURY EDITORIAL PROJECT EXPERIENCE - Vogue/Wallpaper Inspired */}
      {selectedProject !== null && (
        <motion.div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="h-full overflow-y-auto"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Minimalist Navigation - Luxury Brand Standard */}
            <div className="fixed top-8 left-8 right-8 z-50 flex justify-between items-center">
              <motion.button
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-3 px-6 py-3 bg-white/90 rounded-full backdrop-blur-sm text-gray-700 font-medium"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                ← Projects
              </motion.button>
              
              <div className="flex gap-4">
                <motion.button
                  onClick={() => {
                    const prevIndex = selectedProject === 0 ? projects.length - 1 : selectedProject - 1;
                    setSelectedProject(prevIndex);
                    setCurrentGalleryImage(0);
                  }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowDown size={18} style={{ transform: 'rotate(90deg)', color: '#ff6663' }} />
                </motion.button>
                
                <motion.button
                  onClick={() => setSelectedProject(null)}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 102, 99, 0.9)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <span className="text-gray-700 text-xl">×</span>
                </motion.button>
                
                <motion.button
                  onClick={() => {
                    const nextIndex = (selectedProject + 1) % projects.length;
                    setSelectedProject(nextIndex);
                    setCurrentGalleryImage(0);
                  }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowDown size={18} style={{ transform: 'rotate(-90deg)', color: '#ff6663' }} />
                </motion.button>
              </div>
            </div>

            {/* MAGAZINE-STYLE LAYOUT - Editorial Excellence */}
            <div style={{ 
              paddingTop: 'var(--space-3xl)', 
              paddingBottom: 'var(--content-gap)' 
            }}>
              {/* FLOATING EDITORIAL HERO - Zero Cropping */}
              <motion.div 
                className="w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-white"
                style={{ 
                  marginBottom: 'var(--section-gap)',
                  minHeight: '60vh',
                  maxHeight: '80vh',
                  padding: 'var(--content-gap)',
                  borderRadius: '3rem'
                }}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="relative"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 1,
                    boxShadow: '0 60px 140px rgba(0, 0, 0, 0.2)'
                  }}
                  style={{
                    borderRadius: '2rem',
                    overflow: 'hidden',
                    boxShadow: '0 40px 100px rgba(0, 0, 0, 0.12)'
                  }}
                >
                  <Image
                    src={projects[selectedProject].image}
                    alt={`${projects[selectedProject].title} editorial hero with complete visibility`}
                    width={1400}
                    height={900}
                    quality={100}
                    sizes="95vw"
                    style={{ 
                      objectFit: 'contain',
                      borderRadius: '2rem',
                      maxHeight: '70vh',
                      height: 'auto',
                      width: 'auto'
                    }}
                  />
                  
                  {/* Elegant Info Badge - Not Blocking Image */}
                  <motion.div
                    className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <div 
                      className="px-8 py-4 bg-white rounded-full shadow-lg"
                      style={{ border: '1px solid rgba(255, 102, 99, 0.2)' }}
                    >
                      <span className="text-lg font-medium text-gray-700">
                        {projects[selectedProject].year} • {projects[selectedProject].location}
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* FLOATING PROJECT TITLE - Below Image */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <h1 className="luxury-title text-8xl text-gray-800 mb-8" style={{ 
                  textShadow: '0 8px 32px rgba(0,0,0,0.08)'
                }}>
                  {projects[selectedProject].title}
                </h1>
                <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                  <div className="text-left">
                    <p className="text-3xl font-medium mb-6" style={{ color: '#ff6663' }}>
                      {projects[selectedProject].client}
                    </p>
                    <p className="text-2xl leading-relaxed text-gray-600">
                      {projects[selectedProject].subtitle}
                    </p>
                  </div>
                  <div className="flex items-end justify-center md:justify-end">
                    <a 
                      href={projects[selectedProject].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button inline-flex items-center bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-full font-medium transition-all duration-500 hover:scale-105"
                      style={{ 
                        fontSize: '1.125rem',
                        gap: 'var(--icon-text-gap-lg)',
                        paddingLeft: 'var(--space-lg)',
                        paddingRight: 'var(--space-lg)',
                        paddingTop: 'var(--space-md)',
                        paddingBottom: 'var(--space-md)',
                        minHeight: '56px'
                      }}
                    >
                      <ExternalLink size={22} />
                      Visit Live Project
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Editorial Content Layout */}
              <div className="max-w-7xl mx-auto" style={{ paddingLeft: 'var(--content-gap)', paddingRight: 'var(--content-gap)' }}>
                <div className="grid lg:grid-cols-12" style={{ gap: 'var(--section-gap)' }}>
                  {/* Main Content Column */}
                  <div className="lg:col-span-7">
                    
                    {/* Context - Editorial Style */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      style={{ marginBottom: 'var(--section-gap)' }}
                    >
                      <h2 className="text-5xl font-light text-gray-800 leading-tight" style={{ marginBottom: 'var(--content-gap)' }}>Context</h2>
                      <div className="prose prose-2xl max-w-none">
                        <p className="text-2xl text-gray-700 font-light" style={{ lineHeight: 'var(--text-spacing-relaxed)' }}>
                          {projects[selectedProject].context}
                        </p>
                      </div>
                    </motion.div>

                    {/* Approach - Editorial Style */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                      style={{ marginBottom: 'var(--section-gap)' }}
                    >
                      <h2 className="text-5xl font-light text-gray-800 leading-tight" style={{ marginBottom: 'var(--content-gap)' }}>Approach</h2>
                      <div className="prose prose-2xl max-w-none">
                        <p className="text-2xl text-gray-700 font-light" style={{ lineHeight: 'var(--text-spacing-relaxed)' }}>
                          {projects[selectedProject].challenge}
                        </p>
                      </div>
                    </motion.div>

                    {/* Impact - Editorial Style */}
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.2 }}
                      style={{ marginBottom: 'var(--section-gap)' }}
                    >
                      <h2 className="text-5xl font-light text-gray-800 leading-tight" style={{ marginBottom: 'var(--content-gap)' }}>Impact</h2>
                      <div className="prose prose-2xl max-w-none">
                        <p className="text-2xl text-gray-700 font-light" style={{ lineHeight: 'var(--text-spacing-relaxed)' }}>
                          {projects[selectedProject].impact}
                        </p>
                      </div>
                    </motion.div>

                    {/* Testimonial - Luxury Presentation */}
                    {projects[selectedProject].testimonial && (
                      <motion.div
                        className="border-l-8"
                        style={{ 
                          borderColor: '#ff6663', 
                          backgroundColor: 'rgba(255, 255, 255, 0.6)',
                          paddingLeft: 'var(--content-gap)',
                          paddingTop: 'var(--content-gap)',
                          paddingBottom: 'var(--content-gap)',
                          marginTop: 'var(--section-gap)',
                          marginBottom: 'var(--section-gap)'
                        }}
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                      >
                        <blockquote className="quote-typography text-5xl text-gray-800" style={{ 
                          marginBottom: 'var(--content-gap)',
                          textShadow: '0 4px 12px rgba(0,0,0,0.05)'
                        }}>
                          &ldquo;{projects[selectedProject].testimonial}&rdquo;
                        </blockquote>
                        <cite className="text-2xl font-medium" style={{ color: '#ff6663' }}>
                          {projects[selectedProject].testimonialAuthor}
                        </cite>
                      </motion.div>
                    )}
                  </div>

                  {/* Gallery Sidebar - Art Collection Style */}
                  <div className="lg:col-span-5">
                    <motion.div
                      className="sticky top-32"
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <h2 className="text-3xl font-light text-gray-800" style={{ marginBottom: 'var(--content-gap)' }}>Project Gallery</h2>
                      
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--content-gap)' }}>
                        {projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.map((image, index) => (
                          <motion.div
                            key={index}
                            className="rounded-3xl overflow-hidden cursor-zoom-in group flex items-center justify-center bg-white p-6"
                            onClick={() => {
                              setCurrentGalleryImage(index);
                              setGalleryZoomOpen(true);
                            }}
                            whileHover={{ 
                              scale: 1.04,
                              rotateY: 2,
                              boxShadow: '0 35px 80px rgba(0, 0, 0, 0.18)'
                            }}
                            style={{ 
                              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.12)',
                              border: currentGalleryImage === index ? '4px solid #ff6663' : '4px solid rgba(255, 102, 99, 0.1)',
                              minHeight: '300px',
                              maxHeight: '400px'
                            }}
                          >
                            <Image
                              src={image}
                              alt={`${projects[selectedProject].title} - Gallery showcase ${index + 1} with zero cropping`}
                              width={600}
                              height={450}
                              quality={100}
                              style={{
                                objectFit: 'contain',
                                borderRadius: '1rem',
                                maxWidth: '100%',
                                maxHeight: '100%',
                                height: 'auto',
                                width: 'auto'
                              }}
                              className="group-hover:scale-105 transition-transform duration-700"
                            />
                            
                            {/* Floating Counter Badge */}
                            <motion.div 
                              className="absolute -top-3 -left-3"
                              whileHover={{ scale: 1.15, rotate: 5 }}
                              animate={{ 
                                y: [0, -2, 0],
                                rotate: [0, 1, 0]
                              }}
                              transition={{ duration: 3, repeat: Infinity }}
                            >
                              <span 
                                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-base"
                                style={{ 
                                  background: 'linear-gradient(135deg, #ff6663 0%, #ff8a80 100%)',
                                  boxShadow: '0 8px 25px rgba(255, 102, 99, 0.4)'
                                }}
                              >
                                {index + 1}
                              </span>
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Gallery Information */}
                      <div className="text-center" style={{ 
                        marginTop: 'var(--content-gap)',
                        padding: 'var(--element-gap)', 
                        backgroundColor: 'rgba(255, 102, 99, 0.05)', 
                        borderRadius: '1.5rem' 
                      }}>
                        <p className="text-xl text-gray-700 mb-4">
                          {projects[selectedProject].galleryImages?.length || 2} Images
                        </p>
                        <p className="text-lg text-gray-600">
                          Click any image to explore in detail
                        </p>
                      </div>

                      {/* Project Capabilities - Sidebar Style */}
                      <div className="bg-white rounded-3xl" style={{ 
                        marginTop: 'var(--content-gap)',
                        padding: 'var(--element-gap)', 
                        boxShadow: '0 20px 40px rgba(255, 102, 99, 0.08)' 
                      }}>
                        <h3 className="text-2xl font-light text-gray-800" style={{ marginBottom: 'var(--element-gap)' }}>Capabilities</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                          {projects[selectedProject].tech && projects[selectedProject].tech.slice(0, 3).map((tech, index) => (
                            <div 
                              key={index}
                              className="px-6 py-4 text-lg font-medium rounded-2xl"
                              style={{
                                backgroundColor: index === 0 ? '#ff6663' : 'rgba(255, 102, 99, 0.1)',
                                color: index === 0 ? 'white' : '#ff6663',
                                border: index === 0 ? 'none' : '1px solid rgba(255, 102, 99, 0.2)'
                              }}
                            >
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Gallery Zoom Modal */}
      {galleryZoomOpen && (
        <motion.div 
          className="fixed inset-0 z-60 bg-black/95 flex items-center justify-center"
          onClick={() => setGalleryZoomOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="relative max-w-[90vw] max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image 
              src={selectedProject !== null && projects[selectedProject].galleryImages ? 
                projects[selectedProject].galleryImages[currentGalleryImage] : 
                (selectedProject !== null ? projects[selectedProject].image : '')} 
              alt={`${selectedProject !== null ? projects[selectedProject].title : ''} - Gallery image ${currentGalleryImage + 1} zoomed view`} 
              width={1400}
              height={900}
              className="object-contain rounded-xl" 
              quality={95}
            />
            
            {/* Close Button */}
            <motion.button 
              onClick={() => setGalleryZoomOpen(false)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-800 text-xl font-bold"
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 102, 99, 0.9)' }}
              whileTap={{ scale: 0.9 }}
            >
              ×
            </motion.button>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 px-4 py-2 rounded-full text-sm font-medium">
              Image {currentGalleryImage + 1} of {selectedProject !== null && projects[selectedProject].galleryImages ? 
                projects[selectedProject].galleryImages.length : 2}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
