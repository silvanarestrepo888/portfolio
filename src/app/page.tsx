'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CustomCursor } from '../components/motion/CustomCursor';
import { MagneticCursor } from '../components/ui/MagneticCursor';
import { FloatingNavigation } from '../components/navigation/FloatingNavigation';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  const [heroImageZoom, setHeroImageZoom] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  
  // Foundation Project Exploration System
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  


  // Sophisticated navigation functions with elegant transitions


  const goToProjectWithTransition = (index: number) => {
    if (index === featuredProjectIndex) return;
    setIsTransitioning(true);
    setFeaturedProjectIndex(Math.min(index, Math.max(0, filteredProjects.length - 1)));
    setTimeout(() => setIsTransitioning(false), 1200);
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
        "/projects/kayanee/secundary-kayanee.jpeg",
        "/projects/kayanee/Screenshot 2024-11-15 at 10.42.42.png"
      ]
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
        "/projects/augoor/photo-main-carrusel.jpeg",
        "/projects/augoor/Screenshot 2025-04-15 at 13.33.51.png",
        "/projects/augoor/Screenshot 2025-04-15 at 13.34.12.png",
        "/projects/augoor/Screenshot 2025-04-15 at 13.34.27.png"
      ]
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
        "/projects/chime-care/secundary-jjpeg.jpeg",
        "/projects/chime-care/Screenshot 2025-03-06 at 171139-VSCO.jpeg",
        "/projects/chime-care/Screenshot 2025-04-15 at 13.23.31.png"
      ]
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
        "/projects/nomade/secundary-hero.jpeg",
        "/projects/nomade/Screenshot 2024-11-15 at 15.21.56.png",
        "/projects/nomade/Screenshot 2025-04-15 at 13.46.25.png",
        "/projects/nomade/Screenshot 2025-04-15 at 13.57.49.png"
      ]
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
        "/projects/danone/secundary-hero.png",
        "/projects/danone/Screenshot 2025-04-15 at 14.01.55.png",
        "/projects/danone/Screenshot 2025-04-15 at 14.03.20.png"
      ]
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
        "/projects/parques-reunidos/secundary-image.jpeg",
        "/projects/parques-reunidos/Envisioning for Digital Planning and Booking.png",
        "/projects/parques-reunidos/Envisioning for Dynamic Booking.png",
        "/projects/parques-reunidos/Project Envisioning Customer Journey Unfied .png"
      ]
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
        "/projects/qiddiya/secondary-qiddiya.png",
        "/projects/qiddiya/emergency-management.png",
        "/projects/qiddiya/guest-search-digital-id.png",
        "/projects/qiddiya/unified-guest-interaction.png"
      ]
    }
  ];

  const projectCategories = ["ALL WORK", "EXPERIENCE DESIGN", "PRODUCT STRATEGY", "SERVICE DESIGN", "USER RESEARCH", "DESIGN OPS", "DIGITAL TRANSFORMATION"];
  
  const filteredProjects = selectedCategory === "ALL WORK" 
    ? projects 
    : projects.filter(project => 
        project.tech.some(t => t.includes(selectedCategory.replace(" DESIGN", "").replace(" STRATEGY", "").replace(" TRANSFORMATION", "").replace(" RESEARCH", "").replace(" OPS", ""))) ||
        (project.industryTags && project.industryTags.some(tag => tag.includes(selectedCategory)))
      );

  // Elegant Auto-carousel effect with sophisticated timing
  useEffect(() => {
    if (!isAutoPlaying || filteredProjects.length <= 1) return;

    const interval = setInterval(() => {
      setFeaturedProjectIndex(prev => {
        const nextIndex = prev === filteredProjects.length - 1 ? 0 : prev + 1;
        setIsTransitioning(true);
        // Longer transition for more elegant feel
        setTimeout(() => setIsTransitioning(false), 1200);
        return nextIndex;
      });
    }, 4500); // Auto-advance every 4.5 seconds for perfect reading pace and always-in-motion experience

    return () => clearInterval(interval);
  }, [isAutoPlaying, filteredProjects.length]);

  // Scroll effect for parallax and progressive disclosure
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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
    
    window.addEventListener('scroll', handleSectionScroll);
    handleSectionScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleSectionScroll);
  }, []);




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
        className="about-section-ultra-luxury luxury-background-texture"
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
                className="about-title-ultra-luxury luxury-section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                The Journey
              </motion.h2>
                </div>
            <motion.p 
              className="about-description-ultra-luxury luxury-description"
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
                  transition={{ duration: 1, delay: 1.0 }}
                >
                  I have embarked on projects ranging from wellness movements to creating AI-driven platforms that empower developers worldwide.
                </motion.p>
                
                <motion.p 
                  className="about-main-story"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                >
                  Each endeavour brings me closer to my mission: connecting strategic business goals with the essence of the <span className="highlight-human">#human perspective</span>.
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
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                transition={{ duration: 1.2, delay: 1.8, ease: "easeInOut" }}
              >MY CRAFT</motion.span> lies in listening to the unspoken, seeing the invisible, and touching the intangible essence of human desire&rdquo;
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION - Award-Winning Enhancement */}
      <section 
        id="projects" 
        className="projects-section-award-winning luxury-background-texture"
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
                className="projects-title-award-winning luxury-section-header"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
            </div>
            
            <motion.p 
              className="projects-description-award-winning luxury-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A curated selection of <span className="highlight-term-award">strategic consulting projects</span> that demonstrate <span className="highlight-term-award">experience-driven innovation</span>, <span className="highlight-term-award">digital transformation</span>, and <span className="highlight-term-award">business acceleration</span> across diverse industries and global markets.
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
            </motion.div>
            
            {/* CLEAN BALANCED CAROUSEL - BACK TO PERFECTION */}
            <motion.div 
              className="balanced-carousel-container"
              key={safeFeaturedProjectIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: isTransitioning ? 0.9 : 1, 
                y: 0
              }}
              transition={{
                duration: isTransitioning ? 0.6 : 1.0, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              onHoverStart={() => setIsAutoPlaying(false)}
              onHoverEnd={() => setIsAutoPlaying(true)}
            >
              <div className="balanced-project-card luxury-hover-elevation luxury-shadow-medium">
                {/* Clean Balanced Layout: 60% Image / 40% Content */}
                <div className="balanced-layout-grid">
                  
                  {/* Image Section - 60% (Perfect Balance) */}
                  <div className="balanced-image-section">
                    <div 
                      className="balanced-image-container"
                  style={{
                        backgroundImage: `url(${filteredProjects[safeFeaturedProjectIndex]?.image || ''})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                      }}
                    >
                      {/* Tags Inside Image Container */}
                      <div className="balanced-overlay-tags">
                        <span className="balanced-year-tag">
                          {filteredProjects[safeFeaturedProjectIndex]?.year || ''}
                        </span>
                        <span className="balanced-category-tag">
                          {filteredProjects[safeFeaturedProjectIndex]?.category || ''}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content Section - 40% (Perfect Balance) */}
                  <div className="balanced-content-section">
                    <div className="balanced-content-inner">
                      
                      {/* Clean Project Header */}
                      <header className="balanced-header">
                        <h3 className="balanced-title">
                          {filteredProjects[safeFeaturedProjectIndex]?.title || ''}
                        </h3>
                        
                        <p className="balanced-client">
                          {filteredProjects[safeFeaturedProjectIndex]?.client || ''}
                        </p>
                        
                        <div className="balanced-meta">
                          <span>{filteredProjects[safeFeaturedProjectIndex]?.year || ''}</span>
                          <span className="balanced-divider">•</span>
                          <span>{filteredProjects[safeFeaturedProjectIndex]?.location || ''}</span>
                      </div>
                      </header>
                      
                      {/* Clean Description */}
                      <div className="balanced-description">
                        <p className="balanced-subtitle">
                          {filteredProjects[safeFeaturedProjectIndex]?.subtitle || ''}
                        </p>
                        
                        <p className="balanced-description-text">
                          {filteredProjects[safeFeaturedProjectIndex]?.description || ''}
                        </p>
                      </div>
                      
                      {/* Clean Capability Tags */}
                      <div className="balanced-capabilities">
                        <div className="balanced-tags">
                          {filteredProjects[safeFeaturedProjectIndex] && filteredProjects[safeFeaturedProjectIndex].tech && filteredProjects[safeFeaturedProjectIndex].tech.slice(0, 3).map((capability) => (
                            <span key={capability} className="balanced-tag">
                              {capability}
                          </span>
                        ))}
                        </div>
                      </div>
                      
                      {/* Clean Action Buttons */}
                      <div className="balanced-actions">
                      <button
                          onClick={() => setSelectedProject(safeFeaturedProjectIndex)}
                          className="balanced-btn primary"
                        >
                          View Full Case Study
                      </button>
                        
                        {filteredProjects[safeFeaturedProjectIndex]?.website && (
                          <a 
                            href={filteredProjects[safeFeaturedProjectIndex].website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="balanced-btn secondary"
                          >
                            Visit Website
                          </a>
                        )}
                </div>
                </div>
              </div>
          </div>
              </div>
            </motion.div>
            
            </motion.div>
        </div>
      </section>

      {/* EXPERIENCE SECTION - Architectural Transformation */}
      <section 
        id="experience"
        className="experience-architecture-container luxury-background-texture"
        style={{ 
          minHeight: '100vh'
        }}
      >
        {/* Background interference elements removed for clean design */}
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
            <h2 className="luxury-section-header">
                Experience
              </h2>
            <p className="luxury-description max-w-4xl mx-auto">
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
              className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 luxury-hover-elevation luxury-shadow-medium"
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
              <h2 className="luxury-section-header">
                Services
              </h2>
            </div>
            <motion.p 
              className="luxury-description text-center max-w-4xl mx-auto mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions that transform complex business challenges into strategic advantages, addressing demanding market realities while anticipating future possibilities.
            </motion.p>
          </motion.div>
          
          {/* ELITE SERVICES SECTION - ORIGINAL COPY COMPLIANT - Enhanced Visual Treatment */}
          <div className="w-full max-w-[90vw] mx-auto px-4">
            {/* Interactive Services System */}
            <div className="services-hover-system flex h-[70vh] border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-2xl services-luxury-enhanced">
              {referenceServices.map((service, index) => (
                <motion.div
                  key={service.number}
                  className="service-column-interactive relative cursor-pointer border-r border-gray-200 last:border-r-0 service-column-landor luxury-hover-scale luxury-border-subtle"
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
                    <span className="luxury-caption">
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
                    <h3 className="service-title-interactive whitespace-nowrap luxury-project-title">
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
                      <span className="service-number-clean luxury-caption">{service.number}</span>
                      <h3 className="service-title-expanded-clean luxury-project-title">{service.title}</h3>
                    </div>
                    
                    {/* Capabilities List - Clean Vertical Layout Following Inspiration */}
                    <div className="capabilities-section-clean">
                      {service.capabilities.map((capability, capIndex) => (
                        <motion.div
                          key={capIndex}
                          className="capability-line-clean luxury-body"
                          style={{ '--index': capIndex } as React.CSSProperties}
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
                          {capability}
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
                      <p className="service-description-text luxury-description">
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

      {/* AWARD-WINNING PROJECT DETAILS PAGE - LANDOR STANDARDS */}
      {selectedProject !== null && (
        <motion.div 
          className="project-details-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* ULTRA-LUXURY NAVIGATION HEADER */}
          <div className="project-details-header">
            {/* Back to Projects Button - Top Left */}
              <motion.button
                onClick={() => setSelectedProject(null)}
              className="back-button luxury-navigation"
              whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              ← Back to Projects
              </motion.button>
              
            {/* Project Navigation - Top Right */}
            <div className="project-navigation">
              {/* Previous Project */}
                <motion.button
                  onClick={() => {
                    const prevIndex = selectedProject === 0 ? projects.length - 1 : selectedProject - 1;
                    setSelectedProject(prevIndex);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="nav-button prev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="nav-project-info">
                  <Image
                    src={projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].image}
                    alt={projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].title}
                    width={60}
                    height={40}
                    className="nav-project-image"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="nav-project-text">
                    <span className="luxury-caption">Previous</span>
                    <span className="luxury-body">{projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].title}</span>
                  </div>
                </div>
                </motion.button>
                
              {/* Next Project */}
                <motion.button
                  onClick={() => {
                    const nextIndex = (selectedProject + 1) % projects.length;
                    setSelectedProject(nextIndex);
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }, 100);
                }}
                className="nav-button next"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="nav-project-info">
                  <Image
                    src={projects[(selectedProject + 1) % projects.length].image}
                    alt={projects[(selectedProject + 1) % projects.length].title}
                    width={60}
                    height={40}
                    className="nav-project-image"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className="nav-project-text">
                    <span className="luxury-caption">Next</span>
                    <span className="luxury-body">{projects[(selectedProject + 1) % projects.length].title}</span>
                  </div>
                </div>
                </motion.button>
              </div>
            </div>

          {/* HERO SECTION - Full Width with Secondary Image */}
          <div className="project-hero-section">
            <div className="hero-image-container">
              <Image
                src={projects[selectedProject].secondaryImage || projects[selectedProject].image}
                alt={projects[selectedProject].title}
                fill
                className="hero-image"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                priority
              />
              <div className="hero-overlay">
                <div className="hero-content">
                  <motion.h1 
                    className="project-title luxury-hero"
                    initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                    {projects[selectedProject].title}
                  </motion.h1>
                  <motion.p 
                    className="project-subtitle luxury-description"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {projects[selectedProject].subtitle}
                  </motion.p>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT METADATA SECTION */}
          <div className="project-metadata-section">
            <div className="metadata-grid">
              <div className="metadata-item">
                <span className="metadata-label luxury-caption">Client</span>
                <span className="metadata-value luxury-body">{projects[selectedProject].client}</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-label luxury-caption">Year</span>
                <span className="metadata-value luxury-body">{projects[selectedProject].year}</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-label luxury-caption">Location</span>
                <span className="metadata-value luxury-body">{projects[selectedProject].location}</span>
              </div>
              <div className="metadata-item">
                <span className="metadata-label luxury-caption">Category</span>
                <span className="metadata-value luxury-body">{projects[selectedProject].category}</span>
              </div>
            </div>
            <div className="project-tags">
              {projects[selectedProject].tech.map((tag, index) => (
                <span key={index} className="project-tag luxury-caption">
                  {tag}
                    </span>
              ))}
                  </div>
          </div>
                
          {/* CONTENT SECTIONS - 3 SENTENCES MAXIMUM */}
          <div className="project-content-sections">
                  {/* Context Section */}
                  <motion.section
                    className="content-section"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="section-header">
                <span className="section-number luxury-caption">01</span>
                <h2 className="section-title luxury-section-header">Context</h2>
              </div>
              <div className="section-content">
                <p className="section-text luxury-body">
                  {projects[selectedProject].description}
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
                <span className="section-number luxury-caption">02</span>
                <h2 className="section-title luxury-section-header">Approach</h2>
              </div>
              <div className="section-content">
                <p className="section-text luxury-body">
                  Experience-driven innovation methodology combining user research, strategic design, 
                  and digital transformation to deliver measurable business impact.
                </p>
                <div className="capability-tags">
                  {projects[selectedProject].tech.map((capability, index) => (
                    <span key={index} className="capability-tag luxury-caption">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
                  </motion.section>
                  
                  {/* Impact Section */}
                  <motion.section
                    className="content-section"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="section-header">
                <span className="section-number luxury-caption">03</span>
                <h2 className="section-title luxury-section-header">Impact</h2>
              </div>
              <div className="section-content">
                <p className="section-text luxury-body">
                  Delivered strategic transformation that enabled {projects[selectedProject].client} to achieve 
                  enhanced user experience and business growth across their digital platforms.
                </p>
                      </div>
                    </motion.section>
          </div>
              
          {/* PROJECT GALLERY */}
          <div className="project-gallery-section">
                <motion.div 
              className="gallery-header"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="gallery-title luxury-section-header">Project Gallery</h2>
              <span className="gallery-count luxury-caption">
                {selectedProject !== null && projects[selectedProject].galleryImages ? 
                  `1 of ${projects[selectedProject].galleryImages.length + 1}` : 
                  '1 of 1'
                }
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
                onClick={() => setHeroImageZoom(true)}
                whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={projects[selectedProject].image}
                  alt={projects[selectedProject].title}
                  fill
                  className="gallery-image"
                  style={{ objectFit: 'cover' }}
                />
                <div className="gallery-overlay">
                  <span className="zoom-text luxury-caption">Click to explore</span>
                </div>
                </motion.div>
                
              {/* Secondary Images */}
              {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.map((image, index) => (
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
                        onClick={() => {
                          setCurrentGalleryImage(index);
                          setGalleryZoomOpen(true);
                        }}
                  whileHover={{ scale: 1.02 }}
                      >
                        <Image
                          src={image}
                    alt={`${projects[selectedProject].title} - Image ${index + 2}`}
                          fill
                    className="gallery-image"
                    style={{ objectFit: 'cover' }}
                        />
                  <div className="gallery-overlay">
                    <span className="zoom-text luxury-caption">Click to explore</span>
                  </div>
                </motion.div>
                    ))}
            </div>
                  </div>
                  
          {/* TESTIMONIAL GALLERY */}
          <div className="testimonial-gallery-section">
            <motion.h3 
              className="gallery-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Testimonial Gallery
            </motion.h3>
            <div className="testimonial-grid">
              {selectedProject !== null && projects[selectedProject].galleryImages && projects[selectedProject].galleryImages.map((image, index) => (
                <motion.div
                  key={`testimonial-${index}`}
                  className="testimonial-item"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                      onClick={() => {
                          setCurrentGalleryImage(index);
                          setGalleryZoomOpen(true);
                        }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -15,
                    transition: { duration: 0.3 }
                  }}
                      >
                        <Image
                          src={image}
                    alt={`${projects[selectedProject].title} - Testimonial ${index + 1}`}
                    fill
                    className="testimonial-image"
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                  />
                  <div className="testimonial-overlay">
                    <div className="testimonial-icon">💬</div>
                    <span className="testimonial-text">View Testimonial</span>
                  </div>
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

          {/* FOOTER */}
          <footer className="project-details-footer">
            <div className="footer-content">
              <div className="footer-brand">
                <h3 className="footer-brand-name luxury-project-title">silvana.</h3>
                <p className="footer-brand-title luxury-body">Principal Experience Architect</p>
              </div>
              <div className="footer-links">
                <a href="#about" className="footer-link luxury-body">About</a>
                <a href="#projects" className="footer-link luxury-body">Projects</a>
                <a href="#experience" className="footer-link luxury-body">Experience</a>
                <a href="#services" className="footer-link luxury-body">Services</a>
                <a href="#footer" className="footer-link luxury-body">Contact</a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
