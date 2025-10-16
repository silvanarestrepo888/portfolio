'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  
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
      {/* LANDOR LUXURY NAVIGATION - Enhanced Visual Clarity */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 navigation-breathing">
        <div className="container mx-auto px-8 py-8">
          <div className="flex justify-center items-center">
            {/* Centered Navigation with Section Numbers */}
            <motion.div 
              className="flex items-center gap-16"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Logo */}
              <motion.a
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-bold mr-8"
                style={{ color: '#ff6663' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05 }}
              >
                silvana.
              </motion.a>
              
              {/* PHASE 4: LANDOR LUXURY NAVIGATION - Sophisticated Interactions */}
              {[
                { name: 'About', number: '01' },
                { name: 'Projects', number: '02' },
                { name: 'Experience', number: '03' },
                { name: 'Services', number: '04' }
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={`#${item.name.toLowerCase()}`}
                  className="flex items-center gap-3 text-sm font-medium text-gray-700 transition-all duration-700 px-4 py-2 rounded-lg relative overflow-hidden group"
                  style={{ 
                    letterSpacing: '0.05em',
                    minWidth: '44px',
                    minHeight: '44px',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -2,
                    transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                  }}
                  onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    target.style.color = '#ff6663';
                    target.style.backgroundColor = 'rgba(255, 102, 99, 0.08)';
                    target.style.boxShadow = '0 8px 25px rgba(255, 102, 99, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    target.style.color = '#374151';
                    target.style.backgroundColor = 'transparent';
                    target.style.boxShadow = 'none';
                  }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <span 
                    className="text-xs font-light"
                    style={{ color: 'rgba(255, 102, 99, 0.6)' }}
                  >
                    {item.number}
                  </span>
                  <span>{item.name.toUpperCase()}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      {/* IMPACTFUL HERO: Full-Screen Photo Background */}
      <section 
        id="hero"
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
        {/* GUARANTEED VISIBLE PHOTO BACKGROUND */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 1
        }}>
          <motion.div
            style={{
              width: '100%', 
              height: '110%',
              position: 'relative'
            }}
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -20, 0],
              filter: ['brightness(0.7)', 'brightness(0.8)', 'brightness(0.7)']
            }}
            transition={{
              duration: 15,
              repeat: Infinity, 
              ease: "easeInOut"
            }}
          >
            <Image
              src="/silvana-profile.jpg"
              alt="Silvana Restrepo - Principal Experience Architect in professional portrait showcasing strategic design leadership"
              fill
              quality={100}
              priority
              style={{
                objectFit: 'cover',
                objectPosition: 'center top'
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
            {/* H1: EXPERIENCE ARCHITECT - Large Impactful Display */}
            <motion.h1 
              style={{
                fontSize: 'clamp(5rem, 12vw, 12rem)',
                letterSpacing: '-0.04em',
                fontWeight: 300,
                lineHeight: '0.9',
                textAlign: 'center',
                color: 'white',
                textShadow: '0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)',
                margin: '0 auto 4rem auto',
                maxWidth: '1200px'
              }}
            >
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ 
                  color: 'white',
                  display: 'block',
                  marginBottom: '-0.1em'
                }}
                whileHover={{ 
                  textShadow: '0 8px 32px rgba(255,102,99,0.5), 0 4px 16px rgba(0,0,0,0.3)',
                  transition: { duration: 0.4 }
                }}
              >
                Experience
              </motion.span>
              
              <motion.span 
                className="block"
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ 
                  color: '#ff6663',
                  fontWeight: 400,
                  textShadow: '0 8px 32px rgba(0,0,0,0.4), 0 4px 16px rgba(0,0,0,0.3)'
                }}
                whileHover={{ 
                  color: '#ffffff',
                  transition: { duration: 0.4 }
                }}
              >
                Architect
              </motion.span>
            </motion.h1>
            
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
        
        {/* LANDOR LUXURY: Simple, elegant scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const aboutSection = document.getElementById('about');
            aboutSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(255, 102, 99, 0.15)'
          }}
        >
          <ArrowDown style={{color: '#ff6663'}} size={20} />
        </motion.div>
      </section>

      {/* SIMPLE DESKTOP ABOUT SECTION - GUARANTEED CENTERING */}
      <section 
        id="about" 
        className="section-desktop"
        style={{ 
          backgroundColor: 'white'
        }}
      >
        <div className="container-desktop">
          <motion.div
            className="desktop-centered"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            viewport={{ once: true }}
            >
              <div style={{textAlign: 'center', marginBottom: '3rem'}}>
                <motion.h2 
                  style={{
                    fontSize: '4rem',
                    fontWeight: '300',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    color: '#374151',
                    marginBottom: '2rem'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <span style={{
                    display: 'block',
                    fontSize: '1rem',
                    color: 'rgba(255, 102, 99, 0.6)',
                    letterSpacing: '0.2em',
                    marginBottom: '1rem',
                    fontWeight: '300'
                  }}>
                    01
                  </span>
                  About Me
                </motion.h2>
                
                <motion.p 
                  style={{ 
                    fontSize: '1.125rem',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: '0 auto',
                    textAlign: 'center',
                    maxWidth: '500px',
                    marginBottom: '2rem'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Discover the journey of strategic design thinking, business transformation, and the human perspective that drives meaningful innovation across industries.
                </motion.p>
              </div>
              
              {/* Body: 3-sentence paragraph structure - Phase 3 */}
              <div 
                style={{
                  maxWidth: '500px',
                  margin: '0 auto',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3rem'
                }}
              >
                <motion.p 
                  className="text-lg text-gray-700 font-normal"
                  style={{ lineHeight: '1.7' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  I believe the most compelling stories begin with{' '}
                  <span style={{color: '#ff6663', fontWeight: '500'}}>curiosity</span>
                  —a spark that has carried me across continents, blending diverse perspectives 
                  from anthropology to business, from innovation to experience design, and from emerging technologies to business transformation.
                </motion.p>
                
                <motion.p 
                  className="text-lg text-gray-700 font-normal"
                  style={{ lineHeight: '1.7' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Each endeavour brings me closer to my mission: connecting strategic business goals 
                  with the essence of the{' '}
                  <span style={{color: '#ff6663', fontWeight: '500'}}>#human perspective</span>.
                </motion.p>
                
                <motion.div 
                  className="border-l-4 pl-8 py-6 my-12"
                  style={{ 
                    borderLeftColor: '#ff6663',
                    backgroundColor: 'rgba(255, 102, 99, 0.05)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p 
                    className="text-2xl text-gray-800 font-normal"
                    style={{ lineHeight: '1.5', fontStyle: 'italic' }}
                  >
                    The art of{' '}
                    <span style={{color: '#ff6663', fontWeight: '500'}}>MY CRAFT</span>
                    {' '}lies in listening to the unspoken, seeing the invisible, and touching the
                    intangible essence of human desire.
                  </p>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-700 font-normal"
                  style={{ lineHeight: '1.7' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                >
                  <span className="font-medium" style={{color: '#ff6663'}}>Welcome to my world</span>
                  —where strategy meets soul, and design becomes the universal language of possibility.
                </motion.p>
              </div>
            </motion.div>

            {/* Floating Elegant Photo */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div 
                  className="w-full aspect-[3/4] rounded-3xl overflow-hidden relative"
                  style={{
                    boxShadow: '0 40px 80px rgba(255, 102, 99, 0.15)'
                  }}
                >
                  {/* Professional Photo */}
                  <Image
                    src="/silvana-profile.jpg"
                    alt="Silvana Restrepo - Principal Experience Architect, WEF Alumni, demonstrating human-centered design expertise"
                    fill
                    className="object-cover"
                    quality={95}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
                    priority
                    style={{ objectPosition: 'center top' }}
                  />
                  
                  {/* Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Professional Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="text-center text-white">
                      <div 
                        className="inline-block px-4 py-2 rounded-full mb-4"
                        style={{
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.3)'
                        }}
                      >
                        <p className="text-sm font-light">Principal</p>
                      </div>
                      <p className="text-lg font-light">Experience Architect</p>
                    </div>
                  </div>
                  
                  {/* LANDOR LUXURY: Professional credential badge */}
                  <div 
                    className="absolute top-8 right-8"
                  >
                    <div 
                      className="px-4 py-2 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(255, 255, 255, 0.9)',
                        color: '#ff6663',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      WEF Alumni
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
        </div>
      </section>

      {/* LANDOR LUXURY PROJECTS SECTION - Direct Styling */}
      <section 
        id="projects" 
        style={{
          background: 'linear-gradient(180deg, #fffbee 0%, #fefcf3 50%, #fffbee 100%)',
          paddingTop: '8rem',
          paddingBottom: '8rem',
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
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-8"
              style={{ 
                lineHeight: '1.1',
                letterSpacing: '-0.02em'
              }}
            >
              <span 
                className="text-lg font-light block mb-4"
                style={{ 
                  color: 'rgba(255, 102, 99, 0.6)',
                  letterSpacing: '0.2em'
                }}
              >
                02
              </span>
              Projects
            </h2>
            <motion.p 
              className="description-landor"
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
          
          {/* LUXURY BRAND PROJECT SHOWCASE - Hermès/LV Inspired */}
          <div className="max-w-[95vw] mx-auto">
            {/* Project Navigation */}
            <div className="flex justify-between items-center mb-16 px-8">
              <motion.button
                onClick={() => setCurrentSlide(currentSlide === 0 ? filteredProjects.length - 1 : currentSlide - 1)}
                className="group flex items-center gap-4 px-8 py-4 bg-white rounded-full transition-all duration-500"
                style={{ 
                  border: '1px solid rgba(255, 102, 99, 0.2)',
                  boxShadow: '0 8px 30px rgba(255, 102, 99, 0.08)'
                }}
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowDown size={20} style={{ transform: 'rotate(90deg)', color: '#ff6663' }} />
                <span className="text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Previous
                </span>
              </motion.button>
              
              <div className="flex gap-3">
                {filteredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${
                      currentSlide === index ? 'scale-150' : 'opacity-40 hover:opacity-70'
                    }`}
                    style={{ backgroundColor: '#ff6663' }}
                  />
                ))}
              </div>
              
              <motion.button
                onClick={() => setCurrentSlide((currentSlide + 1) % filteredProjects.length)}
                className="group flex items-center gap-4 px-8 py-4 bg-white rounded-full transition-all duration-500"
                style={{ 
                  border: '1px solid rgba(255, 102, 99, 0.2)',
                  boxShadow: '0 8px 30px rgba(255, 102, 99, 0.08)'
                }}
                whileHover={{ scale: 1.05, x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-gray-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Next
                </span>
                <ArrowDown size={20} style={{ transform: 'rotate(-90deg)', color: '#ff6663' }} />
              </motion.button>
            </div>

            {/* Full-Screen Project Showcase */}
            <motion.div
              className="relative"
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Hero Image - Full Width */}
              <div 
                className="aspect-[21/9] rounded-3xl overflow-hidden relative group cursor-pointer"
                style={{ boxShadow: '0 40px 100px rgba(0, 0, 0, 0.12)' }}
                onClick={() => {
                  setSelectedProject(currentSlide);
                  setCurrentGalleryImage(0);
                }}
              >
                <Image
                  src={filteredProjects[currentSlide].image}
                  alt={`${filteredProjects[currentSlide].title} - Luxury brand showcase`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  quality={98}
                  sizes="95vw"
                  style={{ objectPosition: 'center center' }}
                />
                
                {/* Elegant Content Overlay - Appears on Hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-16 text-white transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700"
                >
                  <div className="max-w-4xl">
                    <motion.h2 
                      className="text-6xl font-light mb-6 leading-tight"
                      style={{ letterSpacing: '-0.03em' }}
                    >
                      {filteredProjects[currentSlide].title}
                    </motion.h2>
                    
                    <motion.div className="grid md:grid-cols-3 gap-16 items-end">
                      <div>
                        <p className="text-2xl font-medium mb-4" style={{ color: '#ff6663' }}>
                          {filteredProjects[currentSlide].client}
                        </p>
                        <div className="flex gap-6 text-lg opacity-90">
                          <span>{filteredProjects[currentSlide].year}</span>
                          <span>•</span>
                          <span>{filteredProjects[currentSlide].location}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-xl leading-relaxed opacity-90">
                          {filteredProjects[currentSlide].subtitle}
                        </p>
                      </div>
                      
                      <div className="flex gap-4">
                        <motion.button 
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(currentSlide);
                            setCurrentGalleryImage(0);
                          }}
                          className="px-8 py-4 bg-white text-gray-800 rounded-full font-medium transition-all duration-300 hover:scale-105"
                          whileHover={{ backgroundColor: '#ff6663', color: 'white' }}
                        >
                          Explore Project
                        </motion.button>
                        <motion.a 
                          href={filteredProjects[currentSlide].website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="px-8 py-4 border-2 border-white text-white rounded-full font-medium transition-all duration-300 hover:scale-105"
                          whileHover={{ backgroundColor: 'white', color: '#ff6663' }}
                        >
                          Live Project
                        </motion.a>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
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
          paddingTop: '8rem',
          paddingBottom: '8rem',
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
            <h2 
              style={{
                fontSize: '4rem',
                fontWeight: '300',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#374151',
                marginBottom: '2rem'
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '1rem',
                color: 'rgba(255, 102, 99, 0.6)',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
                fontWeight: '300'
              }}>
                03
              </span>
              Experience
            </h2>
            <motion.p 
              className="description-landor"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              More than two decades of continuous evolution, upscaling global enterprises, reinventing business models, and reimagining how brands connect with human experiences across cultures and industries.
            </motion.p>
          </motion.div>
          
          {/* DESKTOP CENTERED EXPERIENCE TIMELINE */}
          <div className="desktop-centered" style={{display: 'flex', flexDirection: 'column', gap: '4rem'}}>
            {[
              {
                year: "2020—2025",
                role: "Business Partner & Experience Architect",
                company: "Globant",
                description: "I orchestrate enterprise-scale digital initiatives for global brands, translating their vision intopractical roadmaps that support business goals. Contributed to architect physical-digital systems for healthcare, entertainment, hospitality, retail, Finance, and wellness teams, supporting faster value delivery."
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
                company: "TIGO- Millicom",
                description: "I supported corporate expansion through mergers and acquisitions, enhancing national competitive positioning while integrating diverse teams into the main brand."
              }
            ].map((experience, index) => (
              <motion.div 
                key={index}
                className="flex gap-8 items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Clean Timeline Dot */}
                <div className="w-4 h-4 rounded-full mt-2" style={{backgroundColor: '#ff6663'}}></div>
                
                {/* Simplified Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <span 
                      className="px-3 py-1 text-white text-sm rounded-full"
                      style={{backgroundColor: '#ff6663'}}
                    >
                      {experience.year}
                    </span>
                    <h3 className="text-xl font-medium text-gray-800">
                      {experience.role}
                    </h3>
                  </div>
                  <p className="text-lg font-medium" style={{color: '#ff6663'}}>
                    {experience.company}
                  </p>
                  <p 
                    className="text-gray-700 font-normal"
                    style={{ lineHeight: '1.7' }}
                  >
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* LANDOR LUXURY SERVICES SECTION - Direct Styling */}
      <section 
        id="services"
        style={{ 
          background: 'linear-gradient(180deg, #ffffff 0%, #fefefe 50%, #ffffff 100%)',
          paddingTop: '8rem',
          paddingBottom: '8rem'
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
            <h2 
              style={{
                fontSize: '4rem',
                fontWeight: '300',
                lineHeight: '1.1',
                letterSpacing: '-0.02em',
                color: '#374151',
                marginBottom: '2rem'
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '1rem',
                color: 'rgba(255, 102, 99, 0.6)',
                letterSpacing: '0.2em',
                marginBottom: '1rem',
                fontWeight: '300'
              }}>
                04
              </span>
              Services
            </h2>
            <motion.p 
              className="description-landor"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Meticulously architected solutions that transform complex business challenges into strategic advantages, addressing demanding market realities while anticipating future possibilities.
            </motion.p>
          </motion.div>
          
          <div className="desktop-centered" style={{maxWidth: '1000px'}}>
            {[
              {
                title: "Accelerated Product Innovation",
                subtitle: "From concept to market reach in half the time",
                capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation. Implementing innovation sprints where data accelerates ideation, AI accelerates testing, and go-to-market strategies—turning months of development into weeks of strategic clarity.",
                demand: "Speed to market without sacrificing strategic depth."
              },
              {
                title: "Experience Orchestration",
                subtitle: "Harmonizing thousands of touchpoints across locations/channels/vendors into one resonant brand voice",
                capability: "Systems thinking applied to create unified experience architectures where daily interactions feel like one seamless conversation—whether digital, physical, or hybrid.",
                demand: "Coherent brand experiences that scale without losing soul. Global reach with local resonance."
              },
              {
                title: "Intelligent Operations Architecture",
                subtitle: "Building AI-augmented teams that outperform traditional structures",
                capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence. I help to architect operational ecosystems with embedded market monitoring, competitive intelligence, and automated research capabilities—creating self-optimizing organizations.",
                demand: "Operations that think, adapt, and evolve. Intelligence is embedded in every process."
              },
              {
                title: "Transformation Foundations",
                subtitle: "Engineering organizational evolution through scalable design foundations",
                capability: "Design systems become organizational DNA. Every component strengthens the whole. Every decision accelerates the next. I collaborate to create modular, scalable frameworks —turning organizational complexity into competitive advantage.",
                demand: "Transformation that compounds. Every change strengthens the foundation for the next leap."
              },
              {
                title: "Strategic Innovation Consulting",
                subtitle: "Converting market disruption into systematic advantage",
                capability: "Navigate complexity with frameworks that transform uncertainty into opportunity. I blend behavioral economics, emerging technology foresight, and cultural intelligence to create innovation strategies that don't just respond to change—they create it.",
                demand: "Innovation with precision. Strategies that move from boardroom to market with velocity."
              },
              {
                title: "Customer Intelligence Platforms",
                subtitle: "Turning customer behavior into a competitive advantage",
                capability: "Architecting intelligence systems that don't just track customer behavior—they anticipate it, I design platforms where every interaction feeds learning algorithms, creating self-improving experiences that evolve faster than market demands.",
                demand: "Customer relationships that deepen with every interaction. Intelligence that scales intimacy."
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="border-b border-gray-100 last:border-b-0 pb-12 mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true }}
              >
                <div className="grid md:grid-cols-4 gap-8 items-start">
                  {/* Service Number */}
                  <motion.div 
                    className="text-center md:text-right"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  >
                    <span 
                      className="text-5xl font-light"
                      style={{ 
                        color: 'rgba(255, 102, 99, 0.3)',
                        lineHeight: '1'
                      }}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </motion.div>
                  
                  {/* Service Content */}
                  <div className="md:col-span-3 space-y-6">
                    <motion.h3 
                      className="text-3xl font-light text-gray-800"
                      style={{ 
                        lineHeight: '1.3',
                        letterSpacing: '-0.01em'
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.4 }}
                    >
                      {service.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-lg text-gray-600 font-normal"
                      style={{ lineHeight: '1.7' }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.6 }}
                    >
                      {service.subtitle}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DESKTOP FOOTER - CONSISTENT LAYOUT */}
      <footer 
        style={{
          backgroundColor: '#ff6663',
          paddingTop: '8rem',
          paddingBottom: '8rem'
        }}
      >
        <div className="container-desktop">
          <div 
            className="grid md:grid-cols-4 gap-16 mb-16"
          >
            {/* Brand */}
            <div className="md:col-span-2">
              <a
                href="https://silvana.mmm.page/human-perspective"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 
                  className="text-5xl font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    color: '#fffbee',
                    letterSpacing: '-0.02em',
                    marginBottom: 'var(--margin-normal)'
                  }}
                >
                  <span 
                    className="text-lg font-light block"
                    style={{ 
                      color: 'rgba(255, 251, 238, 0.6)',
                      letterSpacing: '0.2em',
                      marginBottom: 'var(--margin-tight)'
                    }}
                  >
                    05
                  </span>
                  silvana.
                </h3>
              </a>
              
              <p 
                className="text-sm font-semibold"
                style={{
                  color: '#fffbee',
                  opacity: '0.9',
                  marginBottom: 'var(--margin-luxury)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}
              >
                Principal Experience Architect
              </p>
              
              <p 
                className="text-xl font-medium text-verbatim"
                style={{
                  color: '#fffbee',
                  lineHeight: '1.8',
                  marginBottom: 'var(--margin-luxury)'
                }}
              >
                Transforming business vision into human experiences—where strategic design meets 
                operational excellence and technological possibility.
              </p>
              
              <div className="flex space-x-8">
                <a 
                  href="https://linkedin.com/in/silvanarestrepo" 
                  className="w-14 h-14 rounded-xl elevation-2 flex items-center justify-center premium-ease hover:elevation-3 transform hover:scale-110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: 'rgba(255, 251, 238, 0.15)' }}
                >
                  <Linkedin size={26} style={{color: '#fffbee'}} />
                </a>
                <a 
                  href="mailto:silvanarestrepo888@gmail.com" 
                  className="w-14 h-14 rounded-xl elevation-2 flex items-center justify-center premium-ease hover:elevation-3 transform hover:scale-110"
                  style={{ backgroundColor: 'rgba(255, 251, 238, 0.15)' }}
                >
                  <Mail size={26} style={{color: '#fffbee'}} />
                </a>
                <a 
                  href="https://silvana.mmm.page/human-perspective" 
                  className="w-14 h-14 rounded-xl elevation-2 flex items-center justify-center premium-ease hover:elevation-3 transform hover:scale-110" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: 'rgba(255, 251, 238, 0.15)' }}
                >
                  <ExternalLink size={26} style={{color: '#fffbee'}} />
                </a>
              </div>
            </div>
            
            {/* Quick Links with Luxury Spacing */}
            <div>
              <h4 
                className="text-xl font-semibold"
                style={{
                  color: '#fffbee',
                  marginBottom: 'var(--margin-normal)'
                }}
              >
                Quick Links
              </h4>
              <ul className="space-y-5">
                {['About', 'Projects', 'Experience', 'Services'].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`}
                      className="font-medium transition-opacity duration-300 hover:opacity-80"
                      style={{color: '#fffbee'}}
                    >
                      {link}
                    </a>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://silvana.mmm.page/human-perspective"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium transition-opacity duration-300 hover:opacity-80"
                    style={{color: '#fffbee'}}
                  >
                    MyVoice
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact with Luxury Spacing */}
            <div>
              <h4 
                className="text-xl font-semibold"
                style={{
                  color: '#fffbee',
                  marginBottom: 'var(--margin-normal)'
                }}
              >
                Let&apos;s Talk
              </h4>
              <div className="space-y-8">
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{
                      color: '#fffbee',
                      marginBottom: 'var(--margin-tight)'
                    }}
                  >
                    Want to explore more about my experience
                  </p>
                  <a 
                    href="https://linkedin.com/in/silvanarestrepo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:underline flex items-center gap-3"
                    style={{color: '#fffbee'}}
                  >
                    <Linkedin size={18} />
                    linkedin.com/in/silvanarestrepo
                  </a>
                </div>
                <div>
                  <p 
                    className="text-sm font-medium"
                    style={{
                      color: '#fffbee',
                      marginBottom: 'var(--margin-tight)'
                    }}
                  >
                    Email
                  </p>
                  <a 
                    href="mailto:silvanarestrepo888@gmail.com"
                    className="font-medium hover:underline flex items-center gap-3"
                    style={{color: '#fffbee'}}
                  >
                    <Mail size={18} />
                    silvanarestrepo888@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div 
            className="border-t pt-8"
            style={{borderColor: '#fffbee'}}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p 
                className="font-medium mb-4 md:mb-0"
                style={{color: '#fffbee'}}
              >
                © 2024 Experience Architect. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a 
                  href="#"
                  className="font-medium transition-opacity duration-300 hover:opacity-80"
                  style={{color: '#fffbee'}}
                >
                  Privacy Policy
                </a>
                <a 
                  href="#"
                  className="font-medium transition-opacity duration-300 hover:opacity-80"
                  style={{color: '#fffbee'}}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Immersive Project Case Study Experience */}
      {selectedProject !== null && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)', backdropFilter: 'blur(20px)' }}
          onClick={() => setSelectedProject(null)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="bg-white rounded-3xl elevation-4 overflow-hidden"
            style={{ 
              position: 'relative',
              isolation: 'isolate',
              backgroundColor: 'white',
              zIndex: 1,
              width: '98vw',
              maxWidth: '1600px',
              maxHeight: '95vh',
              margin: '1vh auto'
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Scroll Progress Bar - Phase 4.1 */}
            <motion.div 
              className="absolute top-0 left-0 right-0 h-1 z-10"
              style={{ 
                backgroundColor: '#ff6663',
                scaleX: 0.3,
                transformOrigin: "0%"
              }}
              animate={{
                scaleX: [0.3, 0.7, 1]
              }}
              transition={{
                duration: 2,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative overflow-y-auto" style={{ backgroundColor: 'white', maxHeight: '95vh' }}>
              {/* HERO IMAGE - Clean Visual Presentation */}
              <motion.div 
                className="h-80 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={projects[selectedProject].image}
                  alt={`${projects[selectedProject].title} - ${projects[selectedProject].category} project hero showcase`}
                  fill
                  className="object-cover"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 90vw"
                  style={{ objectPosition: 'center center' }}
                />
                
                {/* PROFESSIONAL NAVIGATION - Highly Visible */}
                <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-3 px-8 py-4 bg-white/95 rounded-2xl text-lg font-medium text-gray-800 backdrop-blur-sm shadow-lg"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    ← Back to Projects
                  </motion.button>
                  
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-16 h-16 bg-white/95 rounded-2xl flex items-center justify-center backdrop-blur-sm shadow-lg"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(255, 102, 99, 0.9)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    <span className="text-2xl font-bold text-gray-800">×</span>
                  </motion.button>
                  
                  <motion.button
                    onClick={() => {
                      const nextIndex = (selectedProject + 1) % projects.length;
                      setSelectedProject(nextIndex);
                      setCurrentGalleryImage(0);
                    }}
                    className="flex items-center gap-3 px-8 py-4 bg-white/95 rounded-2xl text-lg font-medium text-gray-800 backdrop-blur-sm shadow-lg"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0 12px 30px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Next Project →
                  </motion.button>
                </div>
              </motion.div>

              {/* PROJECT IDENTITY SECTION - Properly Centered */}
              <div className="px-24 py-24" style={{ borderBottom: '1px solid #f3f4f6' }}>
                <motion.div
                  className="text-center max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Project Title - H1 Level - Perfectly Centered */}
                  <h1 
                    className="text-6xl font-light text-gray-800 mb-8"
                    style={{ 
                      lineHeight: '1.1',
                      letterSpacing: '-0.02em'
                    }}
                  >
                    {projects[selectedProject].title}
                  </h1>
                  
                  {/* Client Name - H2 Level - Perfectly Centered */}
                  <h2 
                    className="text-3xl font-medium mb-12" 
                    style={{ color: '#ff6663' }}
                  >
                    {projects[selectedProject].client}
                  </h2>
                  
                  {/* Project Metadata - Generous Spacing */}
                  <div className="flex justify-center gap-16 text-xl text-gray-600 mb-20">
                    <span className="flex items-center gap-4">
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6663' }}></span>
                      <span className="font-medium">{projects[selectedProject].year}</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6663' }}></span>
                      <span className="font-medium">{projects[selectedProject].location}</span>
                    </span>
                    <span className="flex items-center gap-4">
                      <span className="w-4 h-4 rounded-full" style={{ backgroundColor: '#ff6663' }}></span>
                      <span className="font-medium">{projects[selectedProject].category}</span>
                    </span>
                  </div>
                  
                  {/* Live Project Link - Generous Spacing */}
                  <div className="mt-16">
                    <a 
                      href={projects[selectedProject].website} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-4 px-16 py-6 rounded-full text-xl font-medium transition-all duration-300 hover:scale-105"
                      style={{ 
                        backgroundColor: '#ff6663',
                        color: 'white',
                        boxShadow: '0 16px 40px rgba(255, 102, 99, 0.4)',
                        minWidth: '280px',
                        justifyContent: 'center'
                      }}
                    >
                      <ExternalLink size={22} />
                      Visit Live Project
                    </a>
                  </div>
                </motion.div>
              </div>
              
              {/* STRATEGIC CAPABILITY TAGS - Properly Sized */}
              <div className="px-24 py-20" style={{ backgroundColor: '#fafafa', borderBottom: '1px solid #f3f4f6' }}>
                <motion.div
                  className="max-w-6xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <div className="grid md:grid-cols-2 gap-16">
                    {/* Core Capabilities - 3 Maximum */}
                    {projects[selectedProject].tech && projects[selectedProject].tech.length > 0 && (
                      <div className="text-center">
                        <h4 className="text-xl font-medium text-gray-700 mb-8">Core Capabilities</h4>
                        <div className="flex flex-wrap justify-center gap-4">
                          {projects[selectedProject].tech.slice(0, 3).map((tech, index) => (
                            <span 
                              key={index}
                              className="px-8 py-4 rounded-full text-base font-medium"
                              style={{ 
                                backgroundColor: '#ff6663', 
                                color: 'white',
                                minWidth: '160px',
                                display: 'inline-block'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Industry Focus - 1 Maximum */}
                    {projects[selectedProject].industryTags && projects[selectedProject].industryTags.length > 0 && (
                      <div className="text-center">
                        <h4 className="text-xl font-medium text-gray-700 mb-8">Industry Focus</h4>
                        <div className="flex justify-center">
                          <span 
                            className="px-8 py-4 rounded-full text-base font-medium"
                            style={{ 
                              backgroundColor: 'rgba(255, 102, 99, 0.1)', 
                              color: '#ff6663', 
                              border: '2px solid rgba(255, 102, 99, 0.3)',
                              minWidth: '180px',
                              display: 'inline-block'
                            }}
                          >
                            {projects[selectedProject].industryTags[0]}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
              
              {/* CONTENT NARRATIVE STRUCTURE - Properly Centered */}
              <div className="px-24 py-20 max-w-6xl mx-auto">
                {/* CONTEXT SECTION - Centered Layout */}
                <motion.div
                  id="context"
                  className="scroll-mt-24 mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-6 mb-12">
                      <span 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl"
                        style={{ backgroundColor: '#ff6663' }}
                      >
                        01
                      </span>
                      <h3 className="text-4xl font-light text-gray-800">Context & Background</h3>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                      {(() => {
                        const sentences = projects[selectedProject].context.split('. ');
                        return sentences.map((sentence, index) => (
                          <div key={index} className="mb-8">
                            <div className="flex items-start gap-6 justify-center">
                              <span className="w-3 h-3 rounded-full mt-4 flex-shrink-0" style={{ backgroundColor: '#ff6663' }}></span>
                              <p className="text-xl text-gray-700 leading-relaxed font-normal text-left max-w-4xl">
                                {sentence}{index < sentences.length - 1 ? '.' : ''}
                              </p>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </motion.div>

                {/* APPROACH SECTION - Properly Centered */}
                <motion.div
                  id="approach"
                  className="scroll-mt-24 mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ marginTop: '8rem' }}
                >
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-6 mb-12">
                      <span 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl"
                        style={{ backgroundColor: '#ff6663' }}
                      >
                        02
                      </span>
                      <h3 className="text-4xl font-light text-gray-800">Our Approach</h3>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                      {(() => {
                        const sentences = projects[selectedProject].challenge.split('. ');
                        return sentences.map((sentence, index) => (
                          <div key={index} className="mb-8">
                            <div className="flex items-start gap-6 justify-center">
                              <span className="w-3 h-3 rounded-full mt-4 flex-shrink-0" style={{ backgroundColor: '#ff6663' }}></span>
                              <p className="text-xl text-gray-700 leading-relaxed font-normal text-left max-w-4xl">
                                {sentence}{index < sentences.length - 1 ? '.' : ''}
                              </p>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </motion.div>
                </div>

                {/* PROFESSIONAL GALLERY CAROUSEL - Properly Centered */}
                <motion.div
                  id="gallery"
                  className="scroll-mt-24 mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  style={{ marginTop: '8rem' }}
                >
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-6 mb-12">
                      <span 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl"
                        style={{ backgroundColor: '#ff6663' }}
                      >
                        03
                      </span>
                      <h3 className="text-4xl font-light text-gray-800">Project Gallery</h3>
                    </div>
                    
                    <div className="max-w-5xl mx-auto">
                      <div className="relative">
                        <div 
                          className="aspect-[16/9] rounded-2xl overflow-hidden mb-8 cursor-zoom-in relative group"
                          onClick={() => setGalleryZoomOpen(true)}
                          style={{ boxShadow: '0 25px 50px rgba(0,0,0,0.12)' }}
                        >
                          <Image 
                            src={projects[selectedProject].galleryImages ? projects[selectedProject].galleryImages[currentGalleryImage] : projects[selectedProject].image} 
                            alt={`${projects[selectedProject].title} - Gallery image ${currentGalleryImage + 1} showcasing project details`}
                            fill 
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            quality={95}
                            sizes="(max-width: 768px) 100vw, 90vw"
                          />
                          
                          {/* Gallery Navigation Arrows - Professional Design */}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const maxImages = projects[selectedProject].galleryImages ? projects[selectedProject].galleryImages.length : 2;
                              setCurrentGalleryImage(currentGalleryImage === 0 ? maxImages - 1 : currentGalleryImage - 1);
                            }}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/90 hover:scale-110"
                            style={{ fontSize: '1.5rem' }}
                          >
                            ←
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const maxImages = projects[selectedProject].galleryImages ? projects[selectedProject].galleryImages.length : 2;
                              setCurrentGalleryImage((currentGalleryImage + 1) % maxImages);
                            }}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-black/80 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/90 hover:scale-110"
                            style={{ fontSize: '1.5rem' }}
                          >
                            →
                          </button>
                        </div>
                        
                        {/* Gallery Counter - Clean and Centered */}
                        <div className="text-center mb-8">
                          <span className="text-lg font-medium text-gray-600">
                            Image {currentGalleryImage + 1} of {projects[selectedProject].galleryImages ? projects[selectedProject].galleryImages.length : 2}
                          </span>
                        </div>
                        
                        {/* Gallery Navigation Dots - Professional */}
                        <div className="flex justify-center gap-4">
                          {projects[selectedProject].galleryImages ? 
                            projects[selectedProject].galleryImages.map((_, index) => (
                              <button 
                                key={index}
                                onClick={() => setCurrentGalleryImage(index)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                                  currentGalleryImage === index ? '' : 'opacity-40'
                                }`}
                                style={{ backgroundColor: '#ff6663' }}
                              />
                            )) :
                            [0, 1].map((index) => (
                              <button 
                                key={index}
                                onClick={() => setCurrentGalleryImage(index)}
                                className={`w-4 h-4 rounded-full transition-all duration-300 hover:scale-125 ${
                                  currentGalleryImage === index ? '' : 'opacity-40'
                                }`}
                                style={{ backgroundColor: '#ff6663' }}
                              />
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                </div>

                {/* IMPACT SECTION - Properly Centered */}
                <motion.div
                  id="impact"
                  className="scroll-mt-24 mb-20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  style={{ marginTop: '8rem' }}
                >
                  <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-6 mb-12">
                      <span 
                        className="w-16 h-16 rounded-full flex items-center justify-center text-white font-medium text-xl"
                        style={{ backgroundColor: '#ff6663' }}
                      >
                        04
                      </span>
                      <h3 className="text-4xl font-light text-gray-800">Impact & Results</h3>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                      {(() => {
                        const sentences = projects[selectedProject].impact.split('. ');
                        return sentences.map((sentence, index) => (
                          <div key={index} className="mb-8">
                            <div className="flex items-start gap-6 justify-center">
                              <span className="w-3 h-3 rounded-full mt-4 flex-shrink-0" style={{ backgroundColor: '#ff6663' }}></span>
                              <p className="text-xl text-gray-700 leading-relaxed font-normal text-left max-w-4xl">
                                {sentence}{index < sentences.length - 1 ? '.' : ''}
                              </p>
                            </div>
                          </div>
                        ));
                      })()}
                    </div>
                  </div>
                </motion.div>

              {/* CLIENT TESTIMONIAL - Properly Centered */}
              {projects[selectedProject].testimonial && projects[selectedProject].testimonialAuthor && (
                <div className="px-24 py-24" style={{ backgroundColor: '#fafafa', marginTop: '8rem' }}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    className="max-w-6xl mx-auto"
                  >
                    <div className="bg-white border-l-8 px-20 py-20 rounded-3xl text-center" style={{ borderLeftColor: '#ff6663', boxShadow: '0 25px 50px rgba(0,0,0,0.1)' }}>
                      <blockquote 
                        className="text-3xl text-gray-800 mb-16 leading-relaxed max-w-4xl mx-auto"
                        style={{ fontStyle: 'italic', lineHeight: '1.6' }}
                      >
                        &ldquo;{projects[selectedProject].testimonial}&rdquo;
                      </blockquote>
                      <cite 
                        className="text-2xl font-medium"
                        style={{ color: '#ff6663' }}
                      >
                        {projects[selectedProject].testimonialAuthor}
                      </cite>
                    </div>
                  </motion.div>
                </div>
              )}

              {/* PROJECT NAVIGATION - Highly Visible & Professional */}
              <div className="bg-gradient-to-b from-gray-50 to-white px-24 py-24 border-t-4" style={{ borderTopColor: '#ff6663', marginTop: '8rem' }}>
                <motion.div
                  className="max-w-7xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
                    {/* Previous Project - Highly Visible Button */}
                    <motion.button
                      onClick={() => {
                        const prevIndex = selectedProject === 0 ? projects.length - 1 : selectedProject - 1;
                        setSelectedProject(prevIndex);
                        setCurrentGalleryImage(0);
                      }}
                      className="flex flex-col md:flex-row items-center gap-8 p-10 rounded-3xl bg-white hover:bg-gray-50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, x: -8 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)', minHeight: '160px', border: '2px solid #f3f4f6' }}
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0">
                        <Image
                          src={projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].image}
                          alt="Previous project"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center md:text-left">
                        <p className="text-lg text-gray-500 uppercase tracking-wide mb-3 font-semibold">← Previous Project</p>
                        <p className="text-2xl font-medium text-gray-800 leading-tight mb-2">
                          {projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].title}
                        </p>
                        <p className="text-lg text-gray-600">
                          {projects[selectedProject === 0 ? projects.length - 1 : selectedProject - 1].client}
                        </p>
                      </div>
                    </motion.button>

                    {/* Project Counter - Prominent and Clear */}
                    <div className="text-center">
                      <div 
                        className="w-32 h-32 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-6 mx-auto"
                        style={{ 
                          backgroundColor: '#ff6663', 
                          boxShadow: '0 20px 50px rgba(255, 102, 99, 0.4)',
                          border: '4px solid white'
                        }}
                      >
                        {selectedProject + 1}
                      </div>
                      <p className="text-xl font-medium text-gray-700">of {projects.length} projects</p>
                    </div>

                    {/* Next Project - Highly Visible Button */}
                    <motion.button
                      onClick={() => {
                        const nextIndex = (selectedProject + 1) % projects.length;
                        setSelectedProject(nextIndex);
                        setCurrentGalleryImage(0);
                      }}
                      className="flex flex-col md:flex-row items-center gap-8 p-10 rounded-3xl bg-white hover:bg-gray-50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05, x: 8 }}
                      whileTap={{ scale: 0.95 }}
                      style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.12)', minHeight: '160px', border: '2px solid #f3f4f6' }}
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden relative flex-shrink-0 order-2 md:order-1">
                        <Image
                          src={projects[(selectedProject + 1) % projects.length].image}
                          alt="Next project"
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-center md:text-right order-1 md:order-2">
                        <p className="text-lg text-gray-500 uppercase tracking-wide mb-3 font-semibold">Next Project →</p>
                        <p className="text-2xl font-medium text-gray-800 leading-tight mb-2">
                          {projects[(selectedProject + 1) % projects.length].title}
                        </p>
                        <p className="text-lg text-gray-600">
                          {projects[(selectedProject + 1) % projects.length].client}
                        </p>
                      </div>
                    </motion.button>
                  </div>
                </motion.div>
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
