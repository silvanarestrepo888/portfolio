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
      subtitle: "Elevating Ophthalmic Practices with Digital Innovation",
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

  const projectCategories = ["ALL WORK", "EXPERIENCE DESIGN", "PRODUCT STRATEGY", "SERVICE DESIGN", "USER RESEARCH", "DESIGN OPS"];
  
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
          
          {/* Sophisticated Noise Texture - Landor Standards */}
          <div className="hero-texture-noise"></div>
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
                className="about-title-ultra-luxury typography-h2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                The Journey
              </motion.h2>
                </div>
            <motion.p 
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
              <div className="about-photo-container">
                <img
                  src="/silvana-profile.jpg"
                  alt="Silvana Restrepo - Principal Experience Architect"
                  className="about-photo-perfect"
                  style={{
                    width: '100%',
                    height: '500px',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    borderRadius: '12px',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1,
                    maxWidth: '100%',
                    minHeight: '500px',
                    backgroundColor: '#f3f4f6'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'block';
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.border = '2px dashed #d1d5db';
                  }}
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
                    <div className="balanced-image-container">
                      <Image
                        src={filteredProjects[safeFeaturedProjectIndex]?.image || ''}
                        alt={filteredProjects[safeFeaturedProjectIndex]?.title || ''}
                        width={800}
                        height={600}
                        className="balanced-image-perfect gpu-accelerated"
                  style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain',
                          objectPosition: 'center'
                        }}
                        quality={100}
                        priority
                        loading="eager"
                      />
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
            className="experience-header text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              <span 
              className="section-number text-sm font-semibold tracking-wider uppercase block mb-4"
              style={{ color: 'var(--grapefruit-primary)' }}
              >
                03
              </span>
            <h2 className="typography-h2">
                Experience
              </h2>
            <p className="typography-body text-center max-w-4xl mx-auto">
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
            {/* Clean Experience Section - No Floating Elements */}

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
                  color: 'var(--grapefruit-primary)'
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
              Strategic consulting and design services that transform business challenges into competitive advantages through experience-driven innovation and human-centered design.
            </motion.p>
          </motion.div>
          
          {/* SERVICES SECTION - SIMPLE & CLEAN */}
          <div className="services-simple-container">
            <div className="services-simple-grid">
              {referenceServices.map((service, index) => (
                <div key={service.number} className="service-simple-card">
                  <div className="service-simple-header">
                    <span className="service-simple-number">{service.number}</span>
                    <h3 className="service-simple-title">{service.title}</h3>
                  </div>
                  
                  <div className="service-simple-capabilities">
                    {service.capabilities.map((capability, capIndex) => (
                      <div key={capIndex} className="service-simple-capability">
                        {capability}
                      </div>
                    ))}
                  </div>
                  
                  <div className="service-simple-description">
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
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
                  className="footer-contact-link-landor typography-caption luxury-hover-glow"
              >
                  <Mail size={16} />
                Contact
              </a>
              <a 
                href="https://linkedin.com/in/silvanarestrepo"
                target="_blank"
                rel="noopener noreferrer"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow"
              >
                  <Linkedin size={16} />
                LinkedIn
              </a>
              <a 
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                  className="footer-contact-link-landor typography-caption luxury-hover-glow"
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
              className="back-button typography-body"
              whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
              ← Back to Projects
              </motion.button>
          </div>

          {/* HERO SECTION - Perfect Visual Exploration with Proper Spacing */}
          <div className="project-hero-section">
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
          <div className="project-content-sections">
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
                    {projects[selectedProject].description}
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
                    Strategic transformation initiative encompassing user experience design, 
                    digital platform optimization, and business process enhancement to drive 
                    measurable growth and operational excellence.
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
                  <h2 className="section-title typography-h3">Approach</h2>
                </div>
                <div className="section-content">
                  <p className="section-text typography-body">
                    Innovation methodology combining user research, strategic design, 
                    and digital transformation to deliver measurable business impact.
                  </p>
                  <div className="capability-tags">
                    {projects[selectedProject].tech.map((capability, index) => (
                      <span key={index} className="capability-tag typography-caption">
                        {capability}
                      </span>
                    ))}
                  </div>
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
                      &ldquo;Silvana&apos;s strategic approach transformed our digital ecosystem. Her expertise in experience design and business transformation delivered measurable results that exceeded our expectations.&rdquo;
                        </blockquote>
                    <div className="testimonial-attribution">
                      <p className="testimonial-author typography-caption">
                        {projects[selectedProject].client}
                      </p>
                      <p className="testimonial-role typography-caption">
                        {projects[selectedProject].category}
                      </p>
                    </div>
                  </div>
                      </div>
                    </motion.section>
              
            </div>
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
              <h2 className="gallery-title typography-h3">Project Gallery</h2>
              <span className="gallery-count typography-caption">
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
                          width={400}
                          height={300}
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
                  &ldquo;Silvana&apos;s strategic approach transformed our digital ecosystem. Her expertise in experience design and business transformation delivered measurable results that exceeded our expectations.&rdquo;
                </blockquote>
                <div className="testimonial-attribution">
                  <p className="testimonial-author typography-caption">
                    {selectedProject !== null ? projects[selectedProject].client : 'Client Name'}
                  </p>
                  <p className="testimonial-role typography-caption">
                    {selectedProject !== null ? projects[selectedProject].category : 'Project Category'}
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
                <h3 className="footer-brand-name typography-h3">silvana.</h3>
                <p className="footer-brand-title typography-body">Principal Experience Architect</p>
              </div>
              <div className="footer-links">
                <a href="#about" className="footer-link typography-body">About</a>
                <a href="#projects" className="footer-link typography-body">Projects</a>
                <a href="#experience" className="footer-link typography-body">Experience</a>
                <a href="#services" className="footer-link typography-body">Services</a>
                <a href="#footer" className="footer-link typography-body">Contact</a>
              </div>
            </div>
          </footer>
        </motion.div>
      )}
    </div>
  );
}
