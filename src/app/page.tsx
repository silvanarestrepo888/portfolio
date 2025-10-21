'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { CustomCursor } from '../components/motion/CustomCursor';
import { MagneticCursor } from '../components/ui/MagneticCursor';
import { FloatingNavigation } from '../components/navigation/FloatingNavigation';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  
  // Foundation Project Exploration System
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  
  // Project navigation functions
  const goToPreviousProject = () => {
    setFeaturedProjectIndex(prev => prev === 0 ? Math.max(0, filteredProjects.length - 1) : prev - 1);
  };
  
  const goToNextProject = () => {
    setFeaturedProjectIndex(prev => (prev + 1) % Math.max(1, filteredProjects.length));
  };
  
  const goToProject = (index: number) => {
    setFeaturedProjectIndex(Math.min(index, Math.max(0, filteredProjects.length - 1)));
  };

  // SERVICES DATA - ORIGINAL COPY COMPLIANT - Enhanced Visual Treatment Only
  const referenceServices = [
    {
      number: "00-1",
      title: "WEB DESIGN",
      capabilities: [
        "MODERN LAYOUTS",
        "RESPONSIVE DESIGN", 
        "SEO-FRIENDLY STRUCTURE",
        "CLEAR NAVIGATION",
        "VISUAL STORYTELLING"
      ],
      description: "I create websites that stand out from the competition and bring real value to businesses. Each project combines creativity and functionality to deliver the best digital solutions."
    },
    {
      number: "00-2", 
      title: "UX/UI DESIGN",
      capabilities: [
        "USER RESEARCH",
        "INTERACTION DESIGN",
        "PROTOTYPING",
        "USABILITY TESTING",
        "DESIGN SYSTEMS"
      ],
      description: "User-centered design approach creating intuitive digital experiences that connect with human behavior and business objectives."
    },
    {
      number: "00-3",
      title: "CREATIVE DESIGN", 
      capabilities: [
        "BRAND IDENTITY",
        "VISUAL CONCEPTS",
        "CREATIVE DIRECTION",
        "DESIGN STRATEGY",
        "INNOVATIVE SOLUTIONS"
      ],
      description: "Creative solutions establishing strong brand presence through strategic visual communication and innovative design thinking."
    },
    {
      number: "00-4",
      title: "PRODUCT AND APP DESIGN",
      capabilities: [
        "MOBILE INTERFACES",
        "USER FLOWS",
        "INTERACTION PATTERNS",
        "PRODUCT STRATEGY",
        "APP OPTIMIZATION"
      ],
      description: "End-to-end product design from concept to launch, focusing on user needs and business success through strategic design."
    },
    {
      number: "00-5",
      title: "DEVELOPMENT",
      capabilities: [
        "FRONT-END DEVELOPMENT",
        "RESPONSIVE CODING",
        "PERFORMANCE OPTIMIZATION",
        "TECHNICAL IMPLEMENTATION",
        "QUALITY ASSURANCE"
      ],
      description: "Technical implementation bringing designs to life with clean, optimized code that performs excellently across all devices."
    }
  ];

  // Services hover expansion state - Sophisticated Interaction
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  // Column width calculator for sophisticated expansion
  const getServiceColumnWidth = (index: number) => {
    if (expandedService === null) {
      return '20%'; // Equal distribution when no hover
    }
    if (expandedService === index) {
      return '40%'; // Expanded service takes more space
    }
    return '15%'; // Compressed services
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

  // Ensure featuredProjectIndex is within bounds
  const safeFeaturedProjectIndex = Math.min(featuredProjectIndex, Math.max(0, filteredProjects.length - 1));

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
      

      {/* HERO FOUNDATION - Award-Winning Visual Communication */}
      <main id="main-content">
      <section 
        id="hero" 
        className="hero-section-luxury"
      >
        {/* Sophisticated Background System */}
        <div className="hero-bg-luxury">
          <Image 
            src="/silvana-profile.jpg"
            alt="Silvana Restrepo - Principal Experience Architect"
            fill
            className="hero-bg-image-luxury"
            quality={100}
            priority
            sizes="100vw"
          />
          
          {/* Elegant Gradient Overlays */}
          <div className="hero-gradient-overlay-1"></div>
          <div className="hero-gradient-overlay-2"></div>
          
          {/* Sophisticated Vignette */}
          <div className="hero-vignette-luxury"></div>
        </div>
        
        {/* Content Over Photo */}
        <div className="hero-content-luxury">
          <motion.h1 
            className="hero-title-luxury"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <span className="word-experience-luxury">Experience</span>
            <span className="word-architect-luxury">Architect</span>
          </motion.h1>
        </div>
      </section>

      {/* ABOUT SECTION - Ultra-Luxury Single-View */}
      <section 
        id="about" 
        className="about-section-ultra-luxury"
        style={{ 
          background: 'linear-gradient(135deg, var(--pannocotta-primary) 0%, var(--pannocotta-soft) 100%)',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center'
        }}
      >
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
                className="about-title-ultra-luxury"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                The Journey
              </motion.h2>
            </div>
            <motion.p 
              className="about-description-ultra-luxury"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Two decades of transforming how global brands connect with human experiences
            </motion.p>
          </motion.header>
          
          {/* Ultra-Luxury Symmetric Two-Column Layout */}
          <motion.div 
            className="about-content-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            {/* Left Column - Text Content */}
            <div className="about-text-column">
              <div className="about-text-content">
                <div className="about-narrative-section">
                  <h3 className="about-subtitle-luxury">
                    <span className="about-icon">🎯</span>
                    Strategic Design
                  </h3>
                  <p className="about-paragraph-luxury">
                    Business transformation through human-centered design thinking that connects strategic goals with authentic human experiences.
                  </p>
                </div>
                
                <div className="about-narrative-section">
                  <h3 className="about-subtitle-luxury">
                    <span className="about-icon">🌍</span>
                    Global Experience
                  </h3>
                  <p className="about-paragraph-luxury">
                    25+ international markets, cultural intelligence, and local adaptation expertise creating universally resonant solutions.
                  </p>
                </div>
                
                <div className="about-narrative-section">
                  <h3 className="about-subtitle-luxury">
                    <span className="about-icon">🏢</span>
                    Fortune 500 Scale
                  </h3>
                  <p className="about-paragraph-luxury">
                    Enterprise-level digital transformation, systems thinking, and organizational change management at global scale.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column - Profile Photo */}
            <div className="about-photo-column">
              <div className="about-photo-container">
                <Image 
                  src="/silvana-profile.jpg"
                  alt="Silvana Restrepo - Principal Experience Architect"
                  width={500}
                  height={600}
                  className="about-photo-luxury"
                  quality={100}
                  priority
                />
                <div className="about-photo-overlay">
                  <div className="about-photo-accent"></div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Ultra-Luxury Philosophy Quote */}
          <motion.div 
            className="about-philosophy-ultra-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0 }}
          >
            <motion.blockquote 
              className="philosophy-quote-ultra-luxury"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.2 }}
            >
              &ldquo;The art of my <motion.span 
                className="craft-highlight-luxury"
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.2, delay: 1.4, ease: "easeInOut" }}
              >craft</motion.span> lies in connecting strategic business goals with the essence of human desire&rdquo;
            </motion.blockquote>
            <motion.p 
              className="philosophy-context-luxury"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              This philosophy drives every project, every strategy, and every solution I create for global brands seeking meaningful transformation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - Ultra-Luxury Refinement */}
      <section 
        id="projects" 
        className="projects-section-ultra-luxury"
        style={{
          background: 'linear-gradient(180deg, var(--pannocotta-warm) 0%, var(--pannocotta-primary) 50%, var(--pannocotta-soft) 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <div className="projects-container-ultra-luxury">
          {/* Ultra-Luxury Section Header */}
          <motion.div 
            className="projects-header-luxury"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
          >
            <div className="projects-header-content">
              <span 
                className="projects-section-number"
                style={{ 
                  color: 'rgba(255, 102, 99, 0.6)'
                }}
              >
                02
              </span>
              <motion.h2 
                className="projects-title-luxury"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
            </div>
            <motion.p 
              className="projects-description-luxury"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A curated selection of <span className="highlight-term">strategic consulting projects</span> that demonstrate <span className="highlight-term">experience-driven innovation</span>, <span className="highlight-term">digital transformation</span>, and <span className="highlight-term">business acceleration</span> across diverse industries and global markets.
            </motion.p>
            
            {/* Project Filter Tags - Luxury Spacing */}
            <div className="flex-luxury-wrap optical-center-horizontal gap-phi-sm">
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
          
          {/* Ultra-Luxury Project Carousel */}
          <div className="projects-carousel-luxury">
            
            {/* Sophisticated Navigation Controls */}
            <motion.div 
              className="projects-navigation-luxury"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <button 
                onClick={goToPreviousProject}
                className="nav-btn-luxury"
              >
                ← Previous Project
              </button>
              
              <div className="project-counter-luxury">
                <span className="current-project-luxury">{safeFeaturedProjectIndex + 1}</span>
                <span className="divider-luxury">/</span>
                <span className="total-projects-luxury">{filteredProjects.length}</span>
              </div>
              
              <button 
                onClick={goToNextProject}
                className="nav-btn-luxury"
              >
                Next Project →
              </button>
            </motion.div>
            
            {/* Ultra-Luxury Featured Project Display */}
            <motion.div 
              className="featured-project-luxury"
              key={safeFeaturedProjectIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="project-card-luxury featured">
                {/* CSS BACKGROUND IMAGE - NUCLEAR APPROACH */}
                <div 
                  className="project-image-css-bg"
                  style={{
                    backgroundImage: `url(${filteredProjects[safeFeaturedProjectIndex]?.image || ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {/* Image Overlay Info */}
                  <div className="image-overlay-info">
                    <span className="project-year-overlay">{filteredProjects[safeFeaturedProjectIndex]?.year || ''}</span>
                    <span className="project-category-overlay">{filteredProjects[safeFeaturedProjectIndex]?.category || ''}</span>
                  </div>
                </div>
                
                {/* Systematic Content Hierarchy */}
                <div className="project-content-systematic">
                  <header className="project-header-foundation">
                    <h3 className="project-title-foundation">{filteredProjects[safeFeaturedProjectIndex]?.title || ''}</h3>
                    <p className="project-client-foundation">{filteredProjects[safeFeaturedProjectIndex]?.client || ''}</p>
                    <div className="project-meta-foundation">
                      <span>{filteredProjects[safeFeaturedProjectIndex]?.year || ''}</span>
                      <span>•</span>
                      <span>{filteredProjects[safeFeaturedProjectIndex]?.location || ''}</span>
                    </div>
                  </header>
                  
                  <div className="project-description-section">
                    <p className="project-subtitle-foundation">{filteredProjects[safeFeaturedProjectIndex]?.subtitle || ''}</p>
                    <p className="project-description-foundation">{filteredProjects[safeFeaturedProjectIndex]?.description || ''}</p>
                  </div>
                  
                  <div className="project-capabilities-section">
                    <div className="capabilities-grid">
                      {filteredProjects[safeFeaturedProjectIndex] && filteredProjects[safeFeaturedProjectIndex].tech && filteredProjects[safeFeaturedProjectIndex].tech.map(capability => (
                        <span key={capability} className="capability-tag-foundation">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-actions-section">
                    <button 
                      onClick={() => setSelectedProject(safeFeaturedProjectIndex)}
                      className="button-foundation primary"
                    >
                      View Full Case Study
                    </button>
                    {filteredProjects[safeFeaturedProjectIndex]?.website && (
                      <a 
                        href={filteredProjects[safeFeaturedProjectIndex].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-foundation"
                      >
                        Visit Live Site
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Ultra-Luxury Project Thumbnails Grid */}
            <motion.div 
              className="projects-grid-luxury"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.button 
                  key={project.title}
                  className={`project-thumbnail-luxury ${index === safeFeaturedProjectIndex ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="thumbnail-image-luxury"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="thumbnail-overlay-luxury">
                    <div className="thumbnail-info-luxury">
                      <span className="thumbnail-title-luxury">{project.title}</span>
                      <span className="thumbnail-client-luxury">{project.client}</span>
                    </div>
                    <div className="thumbnail-indicator-luxury"></div>
                  </div>
                </motion.button>
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

      {/* EXPERIENCE SECTION - Architectural Transformation */}
      <section 
        id="experience"
        className="experience-architecture-container"
        style={{ 
          background: 'linear-gradient(135deg, #fef7f0 0%, #fef3ec 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Header - Original Copy with Enhanced Typography */}
          <motion.div 
            className="experience-header text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span 
              className="section-number text-sm font-semibold tracking-wider uppercase block mb-4"
              style={{ color: 'rgba(255, 102, 99, 0.7)' }}
            >
              03
            </span>
            <h2 className="section-title text-5xl font-light text-gray-900 mb-8">
              Experience
            </h2>
            <p className="section-intro text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
              Some of the <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>hats</span> I have worn over more than <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>20 years</span> of non-stop, continuous <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>upscaling</span>, <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>reinventing</span>, <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>evolving</span>, and <span className="highlight-word" style={{ color: 'var(--grapefruit-primary)' }}>reimagining</span> business, brands, and teams.
            </p>
          </motion.div>


          {/* Architectural Layers System */}
          <motion.div 
            className="experience-layers-container"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Particle System Background */}
            <div className="experience-particles">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>

            {/* Architectural Layers */}
            <div className="experience-layers-grid">
              {[
                {
                  year: "2020—2025",
                  role: "Business Partner & Experience Architect", 
                  company: "Globant",
                  description: "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision into practical roadmaps that support business goals. Contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance, and wellness teams, supporting faster value delivery.",
                  layer: "top",
                  level: 7
                },
                {
                  year: "2019—2020",
                  role: "Senior Researcher",
                  company: "Centre for Fourth Industrial Revolution-WEF",
                  description: "I helped develop frameworks connecting technologies with governance approaches, supporting sustainable bridges between public policy and industry innovation.",
                  layer: "strategic",
                  level: 6
                },
                {
                  year: "2018—2019", 
                  role: "Strategic Design Director",
                  company: "Designit a WIPRO Company",
                  description: "I led regional operations to scale market presence and transform business complexity into actionable design solutions.",
                  layer: "leadership",
                  level: 5
                },
                {
                  year: "2016—2018",
                  role: "Marketing Director",
                  company: "Grupo Éxito",
                  description: "I transformed retail destinations into experiential ecosystems, orchestrating over 1,000 brand partnerships while driving entertainment-centric commerce innovation.",
                  layer: "business",
                  level: 4
                },
                {
                  year: "2013—2016",
                  role: "Business Intelligence Manager",
                  company: "Industrias HACEB", 
                  description: "I reengineered market segmentation frameworks from production-centric to consumer-centric models, driving sales growth and operational efficiencies.",
                  layer: "analytics",
                  level: 3
                },
                {
                  year: "2012—2016",
                  role: "Independent Advisor",
                  company: "Independent",
                  description: "I decoded emerging consumer behaviours for global enterprises, transforming abstract trend signals into implementable product innovation roadmaps.",
                  layer: "innovation",
                  level: 2
                },
                {
                  year: "2002—2011",
                  role: "Senior Marketing Analyst",
                  company: "TIGO-Millicom",
                  description: "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand.",
                  layer: "foundation",
                  level: 1
                }
              ].map((experience, index) => (
                <motion.div 
                  key={index}
                  className={`experience-layer-card layer-${experience.layer}`}
                  data-layer={experience.level}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  whileHover={{ 
                    y: -10, 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true }}
                >
                  {/* Connection Lines */}
                  {index < 6 && (
                    <div className="connection-line" />
                  )}
                  
                  {/* Layer Content */}
                  <div className="layer-content">
                    <div className="layer-header">
                      <span className="layer-year">{experience.year}</span>
                      <span className="layer-company">{experience.company}</span>
                    </div>
                    <h3 className="layer-role">{experience.role}</h3>
                    <p className="layer-description">{experience.description}</p>
                  </div>
                  
                  {/* Layer Visual Indicator */}
                  <div className="layer-indicator" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div 
            className="flex justify-center items-center mt-16 gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: '#ff6663',
                color: 'white',
                boxShadow: '0 10px 25px rgba(255, 102, 99, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </motion.button>
            
            <span className="text-sm text-gray-500 font-medium uppercase tracking-wider">
              Explore Journey
            </span>
            
            <motion.button 
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600"
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: '#ff6663',
                color: 'white',
                boxShadow: '0 10px 25px rgba(255, 102, 99, 0.3)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION - Foundation Design */}
      <section 
        id="services"
        className="section-luxury"
        style={{
          background: 'linear-gradient(-45deg, var(--pannocotta-primary) 0%, var(--pannocotta-warm) 100%)'
        }}
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
                  color: 'rgba(255, 102, 99, 0.6)'
                }}
              >
                04
              </span>
              <h2 className="text-foundation-3xl font-foundation-display text-gray-800 section-title-landor">
                Services
              </h2>
            </div>
            <motion.p 
              className="text-foundation-lg font-foundation-body text-gray-600 text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions that transform complex business challenges into strategic advantages, addressing demanding market realities while anticipating future possibilities.
            </motion.p>
          </motion.div>
          
          {/* ELITE SERVICES SECTION - ORIGINAL COPY COMPLIANT - Enhanced Visual Treatment */}
          <div className="max-w-[95vw] mx-auto">
            {/* Interactive Services System */}
            <div className="services-hover-system flex h-[75vh] border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-2xl services-luxury-enhanced">
              {referenceServices.map((service, index) => (
                <motion.div
                  key={service.number}
                  className="service-column-interactive relative cursor-pointer border-r border-gray-200 last:border-r-0 service-column-landor"
                  style={{
                    backgroundColor: expandedService === index ? 'rgba(255, 102, 99, 0.03)' : 'white'
                  }}
                  onMouseEnter={() => setExpandedService(index)}
                  onMouseLeave={() => setExpandedService(null)}
                  animate={{
                    width: getServiceColumnWidth(index),
                    opacity: expandedService === null ? 1 : (expandedService === index ? 1 : 0.7)
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    type: "tween"
                  }}
                  whileHover={{
                    boxShadow: expandedService === index ? '0 25px 60px rgba(255, 102, 99, 0.15)' : '0 0 0 rgba(0,0,0,0)',
                    zIndex: expandedService === index ? 10 : 1
                  }}
                >
                  {/* Service Number - Always Visible */}
                  <motion.div 
                    className="absolute top-8 left-6"
                    animate={{
                      opacity: expandedService === null || expandedService === index ? 1 : 0.4
                    }}
                  >
                    <span className="typography-accent font-semibold text-gray-500 service-number-landor">
                      {service.number}
                    </span>
                  </motion.div>
                  
                  {/* Service Title - Vertical when collapsed */}
                  <motion.div
                    className="absolute top-24 left-6 origin-top-left"
                    style={{
                      transformOrigin: 'top left',
                      width: expandedService === index ? 'auto' : '200px'
                    }}
                    animate={{
                      rotate: expandedService === index ? 0 : -90,
                      x: expandedService === index ? 0 : 30
                    }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <h3 
                      className="service-title-interactive text-gray-800 whitespace-nowrap service-title-landor"
                      style={{ 
                        fontSize: expandedService === index ? '1.5rem' : '1.25rem',
                        transition: 'font-size 0.6s ease',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '0.02em'
                      }}
                    >
                      {service.title}
                    </h3>
                  </motion.div>
                  
                  {/* Clean Expanded Content - Following Inspiration Design */}
                  <motion.div
                    className="service-expanded-clean"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: expandedService === index ? 1 : 0,
                      pointerEvents: expandedService === index ? 'auto' : 'none'
                    }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    {/* Service Title - Clean Header */}
                    <div className="service-header-clean">
                      <span className="service-number-clean">{service.number}</span>
                      <h3 className="service-title-expanded-clean">{service.title}</h3>
                    </div>
                    
                    {/* Capabilities List - Clean Vertical Layout Following Inspiration */}
                    <div className="capabilities-section-clean">
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capIndex}
                          className="capability-line-clean"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{
                            opacity: expandedService === index ? 1 : 0,
                            x: expandedService === index ? 0 : -10
                          }}
                          transition={{ 
                            duration: 0.2, 
                            delay: expandedService === index ? 0.1 + capIndex * 0.03 : 0 
                          }}
                        >
                          /{capability}
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Service Description - Clean Bottom Section */}
                    <motion.div
                      className="service-description-clean"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{
                        opacity: expandedService === index ? 1 : 0,
                        y: expandedService === index ? 0 : 5
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: expandedService === index ? 0.4 : 0
                      }}
                    >
                      <p className="service-description-text">
                        {service.description}
                      </p>
                    </motion.div>
                  </motion.div>
                  
                  {/* Column Background Enhancement on Hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-coral/5 to-coral/10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: expandedService === index ? 1 : 0
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Services Navigation Guidance */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
                <span className="text-foundation-xs font-foundation-accent text-gray-600">
                  Explore each service column
                </span>
                <div className="w-2 h-2 rounded-full bg-coral animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPACT PROFESSIONAL FOOTER */}
      <footer className="footer-compact">
        <div className="footer-content-efficient">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="footer-brand-name">silvana.</h3>
              <p className="footer-brand-title">Principal Experience Architect</p>
            </div>
            
            {/* Contact Links */}
            <div className="footer-contact">
              <a 
                href="mailto:silvanarestrepo888@gmail.com"
                className="footer-contact-link"
              >
                <Mail size={18} />
                Contact
              </a>
              <a 
                href="https://linkedin.com/in/silvanarestrepo"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a 
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <ExternalLink size={18} />
                Portfolio
              </a>
            </div>
            
            {/* Copyright */}
            <div className="footer-legal">
              <span className="footer-copyright">
                © 2025 Silvana Restrepo. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
      </main>

      {/* CLEAN PROJECT DETAILS - SINGLE LAYOUT */}
      {selectedProject !== null && (
        <motion.div 
          className="project-modal-clean"
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
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

            {/* ENHANCED EDITORIAL LAYOUT - Using Existing Content Structure */}
            <div className="project-modal-grid" style={{ 
              paddingTop: 'var(--space-3xl)', 
              paddingBottom: 'var(--content-gap)' 
            }}>
              
              {/* Main Content Section - Using Existing Content */}
              <main className="project-story-section">
                {/* Project Header - Using Existing Meta */}
                <motion.header
                  className="mb-phi-2xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-foundation-4xl font-foundation-display text-gray-800 mb-phi-lg">
                    {projects[selectedProject].title}
                  </h1>
                  <p className="text-foundation-xl font-foundation-display text-gray-700 mb-phi-md" style={{ fontStyle: 'italic' }}>
                    {projects[selectedProject].subtitle}
                  </p>
                  
                  {/* Project Meta */}
                  <div className="flex flex-wrap gap-6 mb-phi-lg">
                    <span className="text-foundation-lg font-foundation-accent font-semibold" style={{ color: 'var(--grapefruit-primary)' }}>
                      {projects[selectedProject].client}
                    </span>
                    <span className="text-foundation-sm font-foundation-accent text-gray-600">
                      {projects[selectedProject].year}
                    </span>
                    <span className="text-foundation-sm font-foundation-accent text-gray-600">
                      {projects[selectedProject].location}
                    </span>
                    <a 
                      href={projects[selectedProject].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foundation-sm font-foundation-accent hover:underline"
                      style={{ color: 'var(--grapefruit-primary)' }}
                    >
                      Visit Live Project →
                    </a>
                  </div>
                </motion.header>
                
                {/* Content Sections - Using Existing Content Structure */}
                <article className="space-y-16">
                  {/* Context Section */}
                  <motion.section
                    className="content-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <h2 className="text-foundation-2xl font-foundation-display text-gray-800 mb-phi-lg">Context</h2>
                    <p className="text-foundation-base font-foundation-body text-gray-700">
                      {projects[selectedProject].context}
                    </p>
                  </motion.section>
                  
                  {/* Challenge/Approach Section */}
                  <motion.section
                    className="content-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    <h2 className="text-foundation-2xl font-foundation-display text-gray-800 mb-phi-lg">Approach</h2>
                    <p className="text-foundation-base font-foundation-body text-gray-700">
                      {projects[selectedProject].challenge}
                    </p>
                  </motion.section>
                  
                  {/* Impact Section */}
                  <motion.section
                    className="content-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    <h2 className="text-foundation-2xl font-foundation-display text-gray-800 mb-phi-lg">Impact</h2>
                    <p className="text-foundation-base font-foundation-body text-gray-700">
                      {projects[selectedProject].impact}
                    </p>
                  </motion.section>
                  
                  {/* Testimonial Section - Using Existing Testimonial */}
                  {projects[selectedProject].testimonial && (
                    <motion.section
                      className="testimonial-enhanced"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.9 }}
                    >
                      <div 
                        className="border-l-4 px-phi-xl py-phi-lg bg-white rounded-2xl"
                        style={{ 
                          borderColor: '#ff6663',
                          boxShadow: '0 15px 35px rgba(255, 102, 99, 0.08)'
                        }}
                      >
                        <blockquote className="text-foundation-xl font-foundation-display text-gray-800 mb-phi-md" style={{ fontStyle: 'italic' }}>
                          &ldquo;{projects[selectedProject].testimonial}&rdquo;
                        </blockquote>
                        <cite className="text-foundation-sm font-foundation-accent font-semibold" style={{ color: 'var(--grapefruit-primary)' }}>
                          {projects[selectedProject].testimonialAuthor}
                        </cite>
                      </div>
                    </motion.section>
                  )}
                </article>
              </main>
              
              {/* Sidebar - Enhanced Gallery & Project Info Using Existing Content */}
              <aside className="project-sidebar-enhanced">
                {/* Hero Image Display */}
                <motion.div 
                  className="gallery-main-image mb-phi-lg"
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2 }}
                >
                  <div
                    className="gallery-main-image-css-bg"
                    style={{
                      backgroundImage: `url(${projects[selectedProject].image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                </motion.div>
                
                {/* Enhanced Gallery - Using Existing galleryImages */}
                <div className="gallery-luxury">
                  <h3 className="text-foundation-xl font-foundation-display text-gray-800 mb-phi-md">Gallery</h3>
                  
                  {/* Gallery Thumbnails */}
                  <div className="gallery-thumbnails">
                    {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentGalleryImage(index);
                          setGalleryZoomOpen(true);
                        }}
                        className={`gallery-thumbnail ${currentGalleryImage === index ? 'active' : ''}`}
                      >
                        <div
                          className="gallery-thumb-css-bg"
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        ></div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Gallery Navigation */}
                  <div className="gallery-navigation">
                    <button 
                      className="gallery-nav-btn"
                      onClick={() => {
                        const newIndex = currentGalleryImage === 0 ? 
                          (projects[selectedProject].galleryImages?.length || 1) - 1 : 
                          currentGalleryImage - 1;
                        setCurrentGalleryImage(newIndex);
                      }}
                    >
                      Previous
                    </button>
                    <span className="gallery-counter">
                      {currentGalleryImage + 1} of {projects[selectedProject].galleryImages?.length || 2}
                    </span>
                    <button 
                      className="gallery-nav-btn"
                      onClick={() => {
                        const newIndex = currentGalleryImage === (projects[selectedProject].galleryImages?.length || 1) - 1 ? 
                          0 : currentGalleryImage + 1;
                        setCurrentGalleryImage(newIndex);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
                
                {/* Project Capabilities - Using Existing Tech */}
                <div className="capabilities-section capabilities-section-sophisticated p-phi-lg mb-phi-lg">
                  <h3 className="text-foundation-xl font-foundation-display text-gray-800 mb-phi-md">Capabilities</h3>
                  <div className="flex flex-col gap-3">
                    {selectedProject !== null && projects[selectedProject].tech && projects[selectedProject].tech.map((capability, index) => (
                      <div 
                        key={index}
                        className="px-4 py-3 bg-gray-50 rounded-xl border-l-4"
                        style={{
                          borderColor: index === 0 ? '#ff6663' : 'rgba(255, 102, 99, 0.3)'
                        }}
                      >
                        <span className="text-foundation-sm font-foundation-accent text-gray-700">
                          {capability}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
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
