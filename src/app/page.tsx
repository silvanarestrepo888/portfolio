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

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("ALL WORK");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0);
  const [galleryZoomOpen, setGalleryZoomOpen] = useState(false);
  
  // PROPRIETARY ICON MAPPING - 100% Copy Compliant
  const serviceIcons = {
    "Accelerated Product Innovation": AcceleratedInnovationIcon,
    "Experience Orchestration": ExperienceOrchestrationIcon, 
    "Intelligent Operations Architecture": IntelligentOperationsIcon,
    "Transformation Foundations": TransformationFoundationsIcon,
    "Strategic Innovation Consulting": StrategyConsultingIcon,
    "Customer Intelligence Platforms": CustomerIntelligenceIcon
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
      {/* FLOATING NAVIGATION - Award-Winning UX */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div 
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          style={{ border: '1px solid rgba(255, 102, 99, 0.1)' }}
        >
          {/* Section Navigation */}
          <div className="space-y-4">
            {['Hero', 'About', 'Projects', 'Experience', 'Services'].map((section, index) => (
              <motion.a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: 'rgba(255, 102, 99, 0.08)'
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: index === 0 ? '#ff6663' : 'rgba(255, 102, 99, 0.3)',
                    transform: index === 0 ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
                <span 
                  className="text-sm font-medium text-gray-600 group-hover:text-gray-800"
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
                  animate={{ width: '20%' }}
                  transition={{ duration: 2, delay: 3 }}
                />
              </div>
            </div>
            <span className="text-xs text-gray-500">20% Complete</span>
          </div>
        </div>
      </motion.div>
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
                <h2 
                  className="text-6xl font-light text-gray-800 mb-6"
                  style={{ 
                    lineHeight: 'var(--text-spacing-tight)',
                    letterSpacing: '-0.03em'
                  }}
                >
                  <span 
                    className="text-lg block mb-4"
                    style={{ 
                      color: 'rgba(255, 102, 99, 0.6)',
                      letterSpacing: '0.2em',
                      fontWeight: '300'
                    }}
                  >
                    01
                  </span>
                  About Me
                </h2>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-xl">
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
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                  I believe the most compelling stories begin with{' '}
                  <span style={{color: '#ff6663', fontWeight: '500'}}>curiosity</span>
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
                    className="text-xl text-gray-800 italic leading-relaxed"
                  >
                    "The art of{' '}
                    <span style={{color: '#ff6663', fontWeight: '500'}}>MY CRAFT</span>
                    {' '}lies in connecting strategic business goals with the essence of human desire."
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                  <span className="font-medium" style={{color: '#ff6663'}}>Welcome to my world</span>
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-4"
                  style={{ 
                    borderLeftColor: '#ff6663',
                    backgroundColor: 'rgba(255, 102, 99, 0.05)',
                    paddingLeft: 'var(--element-gap)',
                    paddingTop: 'var(--space-md)',
                    paddingBottom: 'var(--space-md)',
                    marginTop: 'var(--content-gap)',
                    marginBottom: 'var(--content-gap)'
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <p 
                    className="text-2xl text-gray-800 font-normal"
                    style={{ lineHeight: 'var(--text-spacing-normal)', fontStyle: 'italic' }}
                  >
                    The art of{' '}
                    <span style={{color: '#ff6663', fontWeight: '500'}}>MY CRAFT</span>
                    {' '}lies in listening to the unspoken, seeing the invisible, and touching the
                    intangible essence of human desire.
                  </p>
                </motion.div>
                
                <motion.p 
                  className="text-lg text-gray-700 font-normal"
                  style={{ lineHeight: 'var(--text-spacing-relaxed)' }}
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

            {/* FLOATING PHOTO - Zero Cropping Museum Quality */}
            <motion.div
              className="relative flex justify-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
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
                {/* Professional Photo - Complete Visibility */}
                <Image
                  src="/silvana-profile.jpg"
                  alt="Silvana Restrepo - Principal Experience Architect, WEF Alumni, demonstrating human-centered design expertise"
                  width={600}
                  height={800}
                  quality={100}
                  priority
                  style={{
                    objectFit: 'contain',
                    borderRadius: '2rem',
                    maxHeight: '70vh',
                    height: 'auto',
                    width: 'auto'
                  }}
                />
                
                {/* LUXURY CREDENTIAL BADGE - Floating */}
                <motion.div 
                  className="absolute -top-4 -right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
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
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800"
              style={{ 
                lineHeight: 'var(--text-spacing-tight)',
                letterSpacing: '-0.02em',
                marginBottom: 'var(--element-gap)'
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
            <div className="flex justify-between items-center px-8" style={{ marginBottom: 'var(--content-gap)' }}>
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
              {/* FLOATING PROJECT IMAGE - Perfect Fit */}
              <motion.div 
                className="rounded-3xl overflow-hidden relative group cursor-pointer flex items-center justify-center bg-white"
                style={{ 
                  boxShadow: '0 50px 120px rgba(0, 0, 0, 0.15), 0 20px 40px rgba(255, 102, 99, 0.1)',
                  minHeight: '60vh',
                  maxHeight: '80vh',
                  padding: '2rem'
                }}
                onClick={() => {
                  setSelectedProject(currentSlide);
                  setCurrentGalleryImage(0);
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 1,
                  boxShadow: '0 60px 140px rgba(0, 0, 0, 0.2), 0 25px 50px rgba(255, 102, 99, 0.15)'
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Image
                  src={filteredProjects[currentSlide].image}
                  alt={`${filteredProjects[currentSlide].title} - Luxury brand showcase with complete visibility`}
                  width={1200}
                  height={800}
                  quality={100}
                  sizes="90vw"
                  style={{ 
                    objectFit: 'contain',
                    borderRadius: '1.5rem',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    height: 'auto',
                    width: 'auto'
                  }}
                  className="group-hover:scale-105 transition-transform duration-1000"
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
              </motion.div>
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
            <h2 
              style={{
                fontSize: '4rem',
                fontWeight: '300',
                lineHeight: 'var(--text-spacing-tight)',
                letterSpacing: '-0.02em',
                color: '#374151',
                marginBottom: 'var(--element-gap)'
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '1rem',
                color: 'rgba(255, 102, 99, 0.6)',
                letterSpacing: '0.2em',
                marginBottom: 'var(--space-base)',
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
            <h2 
              style={{
                fontSize: '4rem',
                fontWeight: '300',
                lineHeight: 'var(--text-spacing-tight)',
                letterSpacing: '-0.02em',
                color: '#374151',
                marginBottom: 'var(--element-gap)'
              }}
            >
              <span style={{
                display: 'block',
                fontSize: '1rem',
                color: 'rgba(255, 102, 99, 0.6)',
                letterSpacing: '0.2em',
                marginBottom: 'var(--space-base)',
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
          
          {/* VIEWPORT-OPTIMIZED SERVICES - Grid Layout */}
          <div className="max-w-7xl mx-auto">
            {/* SERVICES GRID - 2 Viewports Maximum */}
            <div className="grid lg:grid-cols-2 gap-16 mb-20">
              {[
                {
                  title: "Accelerated Product Innovation",
                  subtitle: "From concept to market reach in half the time",
                  capability: "Transform product visions into market reality through AI-powered rapid prototyping and validation.",
                  index: 0
                },
                {
                  title: "Experience Orchestration", 
                  subtitle: "Harmonizing thousands of touchpoints into one resonant brand voice",
                  capability: "Systems thinking applied to create unified experience architectures where daily interactions feel seamless.",
                  index: 1
                },
                {
                  title: "Intelligent Operations Architecture",
                  subtitle: "Building AI-augmented teams that outperform traditional structures", 
                  capability: "Design agentic systems where AI specialists and human experts collaborate as unified intelligence.",
                  index: 2
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-white rounded-3xl p-12 group relative overflow-hidden"
                  style={{
                    boxShadow: '0 20px 40px rgba(255, 102, 99, 0.08)',
                    border: '1px solid rgba(255, 102, 99, 0.1)',
                    minHeight: '400px'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: '0 30px 60px rgba(255, 102, 99, 0.15)',
                    transition: { duration: 0.4 }
                  }}
                  viewport={{ once: true }}
                >
                  {/* Service Header with Live Icon */}
                  <div className="flex items-start gap-8 mb-8">
                    <motion.div
                      className="icon-container-luxury flex-shrink-0"
                      style={{ 
                        width: 'var(--icon-container-lg)',
                        height: 'var(--icon-container-lg)',
                        borderRadius: '1.5rem'
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateY: 3,
                        transition: { duration: 0.3 }
                      }}
                    >
                      {(() => {
                        const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
                        return IconComponent ? (
                          <IconComponent 
                            size={40} 
                            color="#ff6663"
                            animated={true}
                          />
                        ) : null;
                      })()}
                    </motion.div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span 
                          className="text-3xl font-light"
                          style={{ 
                            color: 'rgba(255, 102, 99, 0.4)',
                            lineHeight: '1'
                          }}
                        >
                          {String(service.index + 1).padStart(2, '0')}
                        </span>
                        <div className="h-px flex-1" style={{ backgroundColor: 'rgba(255, 102, 99, 0.2)' }} />
                      </div>
                      
                      <h3 className="text-3xl font-light text-gray-800 mb-4 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-xl text-gray-600 leading-relaxed mb-6">
                        {service.subtitle}
                      </p>
                      
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {service.capability}
                      </p>
                    </div>
                  </div>
                  
                  {/* Elegant Bottom Line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#ff6663] to-transparent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ width: '100%' }}
                  />
                </motion.div>
              ))}
            </div>

            {/* SECOND VIEWPORT - Additional Services */}
            <div className="grid lg:grid-cols-3 gap-12">
              {[
                {
                  title: "Transformation Foundations",
                  subtitle: "Engineering organizational evolution through scalable design foundations",
                  index: 3
                },
                {
                  title: "Strategic Innovation Consulting", 
                  subtitle: "Converting market disruption into systematic advantage",
                  index: 4
                },
                {
                  title: "Customer Intelligence Platforms",
                  subtitle: "Turning customer behavior into a competitive advantage", 
                  index: 5
                }
              ].map((service, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-2xl p-8 group hover:bg-white transition-all duration-400"
                  style={{
                    boxShadow: '0 12px 30px rgba(255, 102, 99, 0.06)',
                    minHeight: '300px'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.03,
                    boxShadow: '0 20px 45px rgba(255, 102, 99, 0.12)',
                    transition: { duration: 0.3 }
                  }}
                  viewport={{ once: true }}
                >
                  {/* Compact Service Header */}
                  <div className="flex items-center gap-6 mb-6">
                    <motion.div
                      className="w-16 h-16 bg-white rounded-xl flex items-center justify-center"
                      style={{ 
                        boxShadow: '0 8px 20px rgba(255, 102, 99, 0.1)',
                        border: '1px solid rgba(255, 102, 99, 0.15)'
                      }}
                      whileHover={{ scale: 1.05, rotateY: 2 }}
                    >
                      {(() => {
                        const IconComponent = serviceIcons[service.title as keyof typeof serviceIcons];
                        return IconComponent ? (
                          <IconComponent 
                            size={32} 
                            color="#ff6663"
                            animated={true}
                          />
                        ) : null;
                      })()}
                    </motion.div>
                    
                    <span 
                      className="text-2xl font-light"
                      style={{ 
                        color: 'rgba(255, 102, 99, 0.5)',
                        lineHeight: '1'
                      }}
                    >
                      {String(service.index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-light text-gray-800 mb-4 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUXURY FOOTER - Sophisticated Brand Presentation */}
      <footer style={{
        background: 'linear-gradient(135deg, #ff6663 0%, #e55555 100%)',
        paddingTop: 'var(--section-padding)',
        paddingBottom: 'var(--section-padding)',
        position: 'relative',
        overflow: 'hidden'
      }}>
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
                className="text-8xl font-light text-white mb-8 group-hover:tracking-wider transition-all duration-500"
                style={{
                  letterSpacing: '-0.03em',
                  lineHeight: '1'
                }}
              >
                silvana.
              </h2>
            </motion.a>
            
            <motion.p 
              className="text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed"
              style={{
                fontStyle: 'italic',
                lineHeight: 'var(--text-spacing-luxury)'
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
                    className="icon-with-text-lg p-6 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 group"
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: 'rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 12px 30px rgba(255, 255, 255, 0.1)'
                    }}
                    style={{ 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      gap: 'var(--icon-text-gap-lg)'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Linkedin size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="text-white font-medium group-hover:tracking-wider transition-all duration-300">
                        LinkedIn Profile
                      </p>
                      <p className="text-white/70 text-sm">
                        linkedin.com/in/silvanarestrepo
                      </p>
                    </div>
                  </motion.a>
                </div>
                
                <div>
                  <motion.a 
                    href="mailto:silvanarestrepo888@gmail.com"
                    className="icon-with-text-lg p-6 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-500 group"
                    whileHover={{ 
                      scale: 1.03,
                      backgroundColor: 'rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 12px 30px rgba(255, 255, 255, 0.1)'
                    }}
                    style={{ 
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      gap: 'var(--icon-text-gap-lg)'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -2 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Mail size={28} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="text-white font-medium group-hover:tracking-wider transition-all duration-300">
                        Email Contact
                      </p>
                      <p className="text-white/70 text-sm">
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
                <h1 className="text-8xl font-light leading-none mb-8 text-gray-800" style={{ letterSpacing: '-0.04em' }}>
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
                        <blockquote className="text-4xl text-gray-800" style={{ 
                          fontStyle: 'italic',
                          lineHeight: 'var(--text-spacing-luxury)',
                          marginBottom: 'var(--content-gap)'
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
