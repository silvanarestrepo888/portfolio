'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';
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
  
  // Foundation Project Exploration System
  const [featuredProjectIndex, setFeaturedProjectIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
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
        className="projects-section-award-winning"
        style={{
          background: 'linear-gradient(180deg, var(--pannocotta-warm) 0%, var(--pannocotta-primary) 50%, var(--pannocotta-soft) 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
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
                className="projects-title-award-winning"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Projects
              </motion.h2>
            </div>
            
            <motion.p 
              className="projects-description-award-winning"
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
            {/* Sophisticated Navigation Controls with Perfect Spacing */}
            <motion.div 
              className="projects-navigation-award-winning"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
            >
                <button
                onClick={goToPreviousProject}
                className="nav-btn-award-winning prev"
                >
                ← Previous
                </button>
              
              <div className="project-counter-award-winning">
                <span className="current-project-award">{safeFeaturedProjectIndex + 1}</span>
                <span className="divider-award">/</span>
                <span className="total-projects-award">{filteredProjects.length}</span>
              </div>
              
                <button
                onClick={goToNextProject}
                className="nav-btn-award-winning next"
                >
                Next →
                </button>
            </motion.div>
            
            {/* Award-Winning Featured Project with Golden Ratio Layout */}
            <motion.div 
              className="featured-project-award-winning"
              key={safeFeaturedProjectIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="project-card-award-winning">
                {/* Image Section - 60% (Golden Ratio) */}
                <div className="project-image-section-award">
                  <div 
                    className="project-image-container-award"
                  style={{
                      backgroundImage: `url(${filteredProjects[safeFeaturedProjectIndex]?.image || ''})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Image Overlay Tags */}
                    <div className="image-overlay-tags-award">
                      <span className="project-year-tag-award">{filteredProjects[safeFeaturedProjectIndex]?.year || ''}</span>
                      <span className="project-category-tag-award">{filteredProjects[safeFeaturedProjectIndex]?.category || ''}</span>
                      </div>
                    </div>
                  </div>
                  
                {/* Content Section - 40% (Golden Ratio) */}
                <div className="project-content-section-award">
                  <div className="project-content-inner-award">
                      {/* Project Header */}
                    <header className="project-header-award">
                      <h3 className="project-title-award">{filteredProjects[safeFeaturedProjectIndex]?.title || ''}</h3>
                      <p className="project-client-award">{filteredProjects[safeFeaturedProjectIndex]?.client || ''}</p>
                      <div className="project-meta-award">
                        <span>{filteredProjects[safeFeaturedProjectIndex]?.year || ''}</span>
                        <span>•</span>
                        <span>{filteredProjects[safeFeaturedProjectIndex]?.location || ''}</span>
                      </div>
                    </header>
                    
                    {/* Project Description */}
                    <div className="project-description-award">
                      <p className="project-subtitle-award">{filteredProjects[safeFeaturedProjectIndex]?.subtitle || ''}</p>
                      <p className="project-description-text-award">{filteredProjects[safeFeaturedProjectIndex]?.description || ''}</p>
                      </div>
                      
                    {/* Capability Tags */}
                    <div className="project-capabilities-award">
                      <div className="capabilities-tags-award">
                        {filteredProjects[safeFeaturedProjectIndex] && filteredProjects[safeFeaturedProjectIndex].tech && filteredProjects[safeFeaturedProjectIndex].tech.slice(0, 2).map(capability => (
                          <span key={capability} className="capability-tag-award">
                            {capability}
                          </span>
                        ))}
                      </div>
                      </div>
                      
                    {/* Action Buttons */}
                    <div className="project-actions-award">
                      <button
                        onClick={() => setSelectedProject(safeFeaturedProjectIndex)}
                        className="action-btn-award primary"
                      >
                        View Full Case Study
                      </button>
                      {filteredProjects[safeFeaturedProjectIndex]?.website && (
                        <a 
                          href={filteredProjects[safeFeaturedProjectIndex].website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="action-btn-award secondary"
                        >
                          Visit Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                  </div>
                </motion.div>
            
            {/* Award-Winning Project Thumbnails with Perfect Spacing */}
            <motion.div 
              className="projects-thumbnails-award-winning"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              {filteredProjects.map((project, index) => (
                <motion.button 
                  key={project.title}
                  className={`project-thumbnail-award ${index === safeFeaturedProjectIndex ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div 
                    className="thumbnail-image-award"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="thumbnail-overlay-award">
                    <div className="thumbnail-info-award">
                      <span className="thumbnail-title-award">{project.title}</span>
                      <span className="thumbnail-client-award">{project.client}</span>
                    </div>
                    <div className="thumbnail-indicator-award"></div>
                  </div>
                </motion.button>
              ))}
            </motion.div>
            
            {/* Elegant Pagination Dots */}
            <motion.div 
              className="pagination-dots-award-winning"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              <div className="pagination-dots-container">
                  {filteredProjects.map((_, index) => (
                  <button
                      key={index}
                    className={`pagination-dot ${index === safeFeaturedProjectIndex ? 'active' : ''}`}
                    onClick={() => goToProject(index)}
                    />
                  ))}
              </div>
            </motion.div>
            </motion.div>
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
                      {projects[selectedProject].description}
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
                      This project demonstrates our approach to {projects[selectedProject].category.toLowerCase()} challenges through innovative design solutions.
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
                      This project showcases our expertise in {projects[selectedProject].tech.join(', ').toLowerCase()} and delivers measurable results for our clients.
                    </p>
                  </motion.section>
                  
                  {/* Project Details Section */}
                  <motion.section
                    className="content-section"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <h2 className="text-foundation-2xl font-foundation-display text-gray-800 mb-phi-lg">Project Details</h2>
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="text-foundation-lg font-foundation-display text-gray-800 mb-2">Client</h3>
                        <p className="text-foundation-base font-foundation-body text-gray-700">{projects[selectedProject].client}</p>
                      </div>
                      <div>
                        <h3 className="text-foundation-lg font-foundation-display text-gray-800 mb-2">Year</h3>
                        <p className="text-foundation-base font-foundation-body text-gray-700">{projects[selectedProject].year}</p>
                      </div>
                      <div>
                        <h3 className="text-foundation-lg font-foundation-display text-gray-800 mb-2">Location</h3>
                        <p className="text-foundation-base font-foundation-body text-gray-700">{projects[selectedProject].location}</p>
                      </div>
                      <div>
                        <h3 className="text-foundation-lg font-foundation-display text-gray-800 mb-2">Category</h3>
                        <p className="text-foundation-base font-foundation-body text-gray-700">{projects[selectedProject].category}</p>
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
