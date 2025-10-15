'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, ExternalLink, ArrowDown } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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
          
          {/* SIMPLE DESKTOP CAROUSEL - GUARANTEED CENTERING */}
          <div className="projects-desktop" style={{position: 'relative'}}>
            <Swiper
              modules={[Pagination, Autoplay, Keyboard, Navigation]}
              spaceBetween={80}
              slidesPerView={1}
              centeredSlides={true}
              speed={1500}
              grabCursor={true}
              touchRatio={1.5}
              threshold={20}
              resistanceRatio={0.9}
              longSwipes={true}
              longSwipesRatio={0.15}
              longSwipesMs={400}
              keyboard={{
                enabled: true,
                onlyInViewport: true,
              }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                waitForTransition: true,
              }}
              pagination={{ 
                clickable: true,
                bulletClass: 'elegant-bullet',
                bulletActiveClass: 'elegant-bullet-active'
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="elegant-carousel"
              style={{
                '--swiper-navigation-color': '#ff6663',
                '--swiper-pagination-color': '#ff6663',
                '--swiper-pagination-bullet-inactive-color': 'rgba(255, 102, 99, 0.3)',
                '--swiper-pagination-bullet-inactive-opacity': '0.3',
                '--swiper-pagination-bullet-size': '12px',
                '--swiper-pagination-bullet-horizontal-gap': '8px'
              } as React.CSSProperties}
            >
              {filteredProjects.map((project, index) => (
                <SwiperSlide key={project.title}>
                  <motion.div 
                    className="relative mx-auto cursor-pointer"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.03,
                      y: -16,
                      rotateX: 2,
                      transition: { 
                        duration: 0.5, 
                        ease: [0.25, 0.46, 0.45, 0.94] 
                      }
                    }}
                    onMouseEnter={(e) => {
                      const card = e.currentTarget.querySelector('.project-card-bg') as HTMLElement;
                      if (card) {
                        card.style.boxShadow = '0 60px 120px rgba(255, 102, 99, 0.25), 0 25px 50px rgba(255, 102, 99, 0.15)';
                        card.style.transform = 'perspective(1000px) rotateX(2deg)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      const card = e.currentTarget.querySelector('.project-card-bg') as HTMLElement;
                      if (card) {
                        card.style.boxShadow = '0 40px 80px rgba(255, 102, 99, 0.12)';
                        card.style.transform = 'perspective(1000px) rotateX(0deg)';
                      }
                    }}
                    onClick={() => setSelectedProject(index)}
                  >
                    {/* PHASE 4: LANDOR LUXURY PROJECT CARDS - Advanced Interactions */}
                    <div 
                      className="project-card-bg bg-white rounded-3xl overflow-hidden elevation-3 max-w-6xl mx-auto project-card-spacing"
                      style={{
                        boxShadow: '0 40px 80px rgba(255, 102, 99, 0.12)',
                        margin: '4rem auto',
                        transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <div className="grid md:grid-cols-3 items-stretch min-h-[520px]" style={{position: 'relative'}}>
                        {/* LANDOR VISUAL EXPLORATION: Image consuming most of screen */}
                        <motion.div 
                          className="md:col-span-2 relative flex items-center overflow-hidden group"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div 
                            className="aspect-[4/3] md:aspect-[16/10] overflow-hidden relative w-full"
                          >
                            {/* PHASE 4: Enhanced Image with Luxury Hover Effects */}
                            <motion.div className="relative w-full h-full overflow-hidden">
                              <Image
                                src={project.image}
                                alt={`${project.title} - ${project.category} project showcasing ${project.tech[0]} and ${project.tech[1]} for ${project.client}`}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                priority={index < 2}
                                quality={90}
                                sizes="(max-width: 768px) 100vw, 60vw"
                                style={{ objectPosition: 'center' }}
                              />
                              {/* Luxury Overlay Animation */}
                              <motion.div 
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full"
                                whileHover={{
                                  x: ['100%', '200%'],
                                  transition: { duration: 0.8, ease: "easeInOut" }
                                }}
                              />
                            </motion.div>
                            {/* PHASE 4: Enhanced Gradient Overlay */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10"
                              whileHover={{ opacity: 0.5 }}
                              transition={{ duration: 0.3 }}
                            />
                            
                            {/* Year Badge */}
                            <motion.div 
                              className="absolute top-6 right-6"
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.5 }}
                            >
                              <span 
                                className="text-white text-sm font-medium px-4 py-2 rounded-full"
                                style={{
                                  background: 'rgba(255, 102, 99, 0.9)',
                                  backdropFilter: 'blur(10px)'
                                }}
                              >
                                {project.year}
                              </span>
                            </motion.div>
                          </div>
                        </motion.div>
                        
                        {/* LANDOR CONTENT AREA: Information hierarchy on right side */}
                        <div className="md:col-span-1 p-8 flex flex-col justify-center h-full" style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,102,99,0.02) 100%)', gap: '1.5rem'}}>
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                          >
                            {/* H3: Project titles - LANDOR PERFECTION */}
                            <h3 
                              style={{ 
                                fontSize: '1.75rem',
                                fontWeight: '400',
                                lineHeight: '1.2',
                                letterSpacing: '-0.02em',
                                color: '#374151',
                                marginBottom: '1rem'
                              }}
                            >
                              {project.title}
                            </h3>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4 }}
                          >
                            {/* H4: Subheadings and descriptions - LANDOR CONSISTENCY */}
                            <h4 
                              style={{ 
                                fontSize: '1.125rem',
                                fontWeight: '400',
                                lineHeight: '1.4',
                                color: '#6B7280',
                                marginBottom: '1rem',
                                letterSpacing: '0'
                              }}
                            >
                              {project.subtitle}
                            </h4>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                          >
                            <p 
                              className="text-lg font-medium"
                              style={{ color: '#ff6663', marginBottom: '0.5rem' }}
                            >
                              {project.client}
                            </p>
                            {/* LANDOR VISUAL EXPLORATION: Essential project details */}
                            <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem'}}>
                              <span style={{fontSize: '0.875rem', color: '#9CA3AF', fontWeight: '500'}}>
                                {project.year}
                              </span>
                              <span style={{color: '#D1D5DB'}}>•</span>
                              <span style={{fontSize: '0.875rem', color: '#9CA3AF', fontWeight: '500'}}>
                                {project.location}
                              </span>
                            </div>
                          </motion.div>
                          
                          {/* Primary Capability Tags */}
                          <motion.div 
                            className="flex flex-wrap gap-2 mb-3"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.6 }}
                          >
                            {project.tech.slice(0, 2).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                className="px-3 py-1 rounded-full text-xs font-medium border"
                                style={{
                                  borderColor: '#ff6663',
                                  color: '#ff6663'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </motion.div>
                          
                          {/* Industry Tags */}
                          <motion.div 
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                          >
                            {project.industryTags && project.industryTags.slice(0, 2).map((tag, tagIndex) => (
                              <span 
                                key={tagIndex}
                                className="px-3 py-1 rounded-full text-xs font-medium"
                                style={{
                                  backgroundColor: 'rgba(255, 102, 99, 0.1)',
                                  color: '#ff6663'
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </motion.div>
                          
                          {/* Action Buttons */}
                          <motion.div 
                            className="space-y-4 pt-6"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                          >
                            <button 
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(index);
                              }}
                              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                              style={{
                                backgroundColor: '#ff6663',
                                color: 'white'
                              }}
                            >
                              View Project Details
                            </button>
                            <a 
                              href={project.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300"
                              style={{
                                border: '1px solid rgba(255, 102, 99, 0.3)',
                                color: '#ff6663'
                              }}
                            >
                              <ExternalLink size={14} />
                              Client Website
                            </a>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Elegant Navigation Arrows */}
            <motion.button
              className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center z-10 elevation-2"
              style={{ color: '#ff6663' }}
              whileHover={{ 
                scale: 1.1, 
                x: -4,
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ArrowDown size={20} style={{ transform: 'rotate(90deg)' }} />
            </motion.button>
            
            <motion.button
              className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center z-10 elevation-2"
              style={{ color: '#ff6663' }}
              whileHover={{ 
                scale: 1.1, 
                x: 4,
                backgroundColor: 'rgba(255, 255, 255, 0.95)'
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <ArrowDown size={20} style={{ transform: 'rotate(-90deg)' }} />
            </motion.button>
            
            {/* Enhanced Progress Counter with Luxury Spacing */}
            <motion.div 
              className="text-center"
              style={{ marginTop: 'var(--margin-dramatic)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <div className="flex items-center justify-center gap-6">
                <span className="text-sm font-light text-gray-500">Project</span>
                <div 
                  className="px-6 py-3 rounded-full text-sm font-medium"
                  style={{
                    backgroundColor: 'rgba(255, 102, 99, 0.1)',
                    color: '#ff6663'
                  }}
                >
                  {currentSlide + 1} of {filteredProjects.length}
                </div>
                <span className="text-sm font-light text-gray-500">Selected</span>
              </div>
            </motion.div>
            
            {/* Mobile Swipe Indicator with Luxury Spacing */}
            <motion.div 
              className="md:hidden text-center"
              style={{ marginTop: 'var(--margin-normal)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-sm font-light text-gray-400">
                ← Swipe to explore projects →
              </p>
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
            className="bg-white rounded-3xl elevation-4 max-w-7xl max-h-[95vh] overflow-y-auto mx-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Enhanced Scroll Progress Bar - Phase 4.1 */}
            <motion.div 
              className="fixed top-0 left-0 right-0 h-1 z-50"
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
            
            <div className="relative overflow-hidden">
              {/* Immersive Header Experience */}
              <motion.div 
                className="h-80 relative overflow-hidden rounded-t-3xl"
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Image
                  src={projects[selectedProject].image}
                  alt={`${projects[selectedProject].title} - Case Study Hero Banner`}
                  fill
                  className="object-cover"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  style={{ objectPosition: 'center top' }}
                />
                
                {/* Dynamic Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(255,102,99,0.3) 100%)'
                  }}
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(255,102,99,0.3) 100%)',
                      'linear-gradient(225deg, rgba(0,0,0,0.4) 0%, transparent 50%, rgba(255,102,99,0.5) 100%)',
                      'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(255,102,99,0.3) 100%)'
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Enhanced Navigation Buttons - Phase 4.1 */}
                <div className="absolute top-6 left-6 right-6 flex justify-between items-center">
                  {/* Back to Projects - Always Visible Top-Left */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-6 py-3 bg-white/95 rounded-xl text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    ← Back to Projects
                  </motion.button>
                  
                  {/* Close Button */}
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: 'rgba(255, 102, 99, 0.9)',
                      boxShadow: '0 8px 25px rgba(255, 102, 99, 0.3)'
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, duration: 0.6, delay: 0.2 }}
                  >
                    <motion.span 
                      className="text-xl font-bold text-gray-800"
                      whileHover={{ color: 'white' }}
                    >
                      ×
                    </motion.span>
                  </motion.button>
                  
                  {/* Next Project - Always Visible Top-Right */}
                  <motion.button
                    onClick={() => {
                      const nextIndex = (selectedProject + 1) % filteredProjects.length;
                      setSelectedProject(nextIndex);
                    }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/95 rounded-xl text-sm font-medium text-gray-700 shadow-lg backdrop-blur-sm"
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Next Project →
                  </motion.button>
                </div>
                
                {/* Animated Project Title */}
                <motion.div 
                  className="absolute bottom-6 left-6 text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <motion.p 
                    className="text-sm font-bold opacity-90 mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 0.9, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    {projects[selectedProject].year} • {projects[selectedProject].location}
                  </motion.p>
                  <motion.h3 
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    whileHover={{ scale: 1.05, textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
                  >
                    {projects[selectedProject].title}
                  </motion.h3>
                </motion.div>
                
                {/* Floating Data Points */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 rounded-full bg-white/40"
                    style={{
                      top: `${30 + (i * 20)}%`,
                      right: `${20 + (i * 15)}%`
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 0.8, 0.4],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3
                    }}
                  />
                ))}
              </motion.div>

              {/* Enhanced Mobile Navigation Bar - Phase 4.1 */}
              <div className="md:hidden flex justify-between items-center p-6 border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-40">
                <motion.button 
                  onClick={() => setSelectedProject(null)}
                  className="flex items-center gap-2 px-6 py-3 text-sm bg-gray-100 rounded-xl font-medium touch-manipulation"
                  whileTap={{ scale: 0.95 }}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  ← Back
                </motion.button>
                <div className="text-center">
                  <span className="text-xs text-gray-500 uppercase tracking-wide block">Project</span>
                  <span className="text-sm font-medium text-gray-800">
                    {selectedProject + 1} of {filteredProjects.length}
                  </span>
                </div>
                <motion.button 
                  onClick={() => {
                    const nextIndex = (selectedProject + 1) % filteredProjects.length;
                    setSelectedProject(nextIndex);
                  }}
                  className="flex items-center gap-2 px-6 py-3 text-sm bg-gray-100 rounded-xl font-medium touch-manipulation"
                  whileTap={{ scale: 0.95 }}
                  style={{ minHeight: '44px', minWidth: '44px' }}
                >
                  Next →
                </motion.button>
              </div>
              
              {/* Enhanced Content with Section Navigation */}
              <div style={{ padding: 'var(--space-8)' }}>
                {/* Enhanced Section Jump Navigation - Phase 4.1 Mobile Optimized */}
                <div className="sticky top-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl mb-12 z-30">
                  <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
                    <a 
                      href="#context" 
                      className="text-sm font-medium text-gray-600 hover:text-coral transition-colors px-3 py-2 rounded-lg touch-manipulation"
                      style={{ minHeight: '44px', display: 'flex', alignItems: 'center', minWidth: '44px', justifyContent: 'center' }}
                    >
                      <span className="hidden md:inline">01. Context</span>
                      <span className="md:hidden">Context</span>
                    </a>
                    <a 
                      href="#approach" 
                      className="text-sm font-medium text-gray-600 hover:text-coral transition-colors px-3 py-2 rounded-lg touch-manipulation"
                      style={{ minHeight: '44px', display: 'flex', alignItems: 'center', minWidth: '44px', justifyContent: 'center' }}
                    >
                      <span className="hidden md:inline">02. Approach</span>
                      <span className="md:hidden">Approach</span>
                    </a>
                    <a 
                      href="#impact" 
                      className="text-sm font-medium text-gray-600 hover:text-coral transition-colors px-3 py-2 rounded-lg touch-manipulation"
                      style={{ minHeight: '44px', display: 'flex', alignItems: 'center', minWidth: '44px', justifyContent: 'center' }}
                    >
                      <span className="hidden md:inline">03. Impact</span>
                      <span className="md:hidden">Impact</span>
                    </a>
                    <a 
                      href="#gallery" 
                      className="text-sm font-medium text-gray-600 hover:text-coral transition-colors px-3 py-2 rounded-lg touch-manipulation"
                      style={{ minHeight: '44px', display: 'flex', alignItems: 'center', minWidth: '44px', justifyContent: 'center' }}
                    >
                      <span className="hidden md:inline">04. Gallery</span>
                      <span className="md:hidden">Gallery</span>
                    </a>
                  </div>
                </div>

                {/* Enhanced Project Metadata with Tag Limits */}
                <div className="text-center border-b border-gray-100 pb-8 mb-12">
                  <h3 className="text-4xl font-light text-gray-800 mb-4">{projects[selectedProject].title}</h3>
                  <p className="text-xl font-medium mb-4" style={{ color: '#ff6663' }}>{projects[selectedProject].client}</p>
                  <div className="flex justify-center gap-6 text-sm text-gray-500 mb-6">
                    <span>Industry: {projects[selectedProject].category}</span>
                    <span>Year: {projects[selectedProject].year}</span>
                    <span>Location: {projects[selectedProject].location}</span>
                  </div>
                  
                  {/* Enhanced Tag Display - Phase 4.1 Compliance */}
                  <div className="space-y-4 mb-6">
                    {/* 3 Capacity Tags Maximum */}
                    <div>
                      <h6 className="text-sm font-medium text-gray-600 mb-2">Core Capabilities</h6>
                      <div className="flex justify-center gap-2 flex-wrap">
                        {projects[selectedProject].tech.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#ff6663', color: 'white' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* 1 Industry Tag Only */}
                    {projects[selectedProject].industryTags && (
                      <div>
                        <h6 className="text-sm font-medium text-gray-600 mb-2">Industry Focus</h6>
                        <div className="flex justify-center gap-2 flex-wrap">
                          <span 
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: 'rgba(255, 102, 99, 0.1)', color: '#ff6663' }}
                          >
                            {projects[selectedProject].industryTags[0]}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Integrated Client Website Button */}
                  <a 
                    href={projects[selectedProject].website} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ 
                      backgroundColor: 'rgba(255, 102, 99, 0.1)', 
                      color: '#ff6663',
                      border: '1px solid rgba(255, 102, 99, 0.3)'
                    }}
                  >
                    <ExternalLink size={16} />
                    Visit Live Project
                  </a>
                </div>

                {/* Enhanced Project Gallery System */}
                <div id="gallery" className="scroll-mt-24" style={{ marginBottom: 'var(--space-8)' }}>
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-sm font-light text-gray-400">04</span>
                      <h5 className="text-2xl font-medium" style={{ color: '#ff6663' }}>
                        Project Gallery
                      </h5>
                    </div>
                    <span className="text-sm text-gray-500">
                      Image {currentGalleryImage + 1} of 2
                    </span>
                  </div>
                  
                  {/* Main Gallery Display */}
                  <div 
                    className="aspect-[16/10] rounded-xl overflow-hidden mb-6 cursor-zoom-in"
                    onClick={() => setGalleryZoomOpen(true)}
                  >
                    <Image 
                      src={currentGalleryImage === 0 ? projects[selectedProject].image : projects[selectedProject].secondaryImage} 
                      alt={`${projects[selectedProject].title} - Detailed ${currentGalleryImage === 0 ? 'primary interface' : 'secondary implementation'} view demonstrating ${projects[selectedProject].tech[0]} for ${projects[selectedProject].client}`}
                      fill 
                      className="object-cover"
                      quality={90}
                      sizes="(max-width: 768px) 100vw, 80vw"
                    />
                  </div>
                  
                  {/* Enhanced Thumbnail Navigation - Phase 4.1 */}
                  <div className="flex gap-4 justify-center">
                    <motion.button 
                      onClick={() => setCurrentGalleryImage(0)}
                      className={`aspect-[4/3] w-28 rounded-lg overflow-hidden border-2 transition-all duration-300 relative ${
                        currentGalleryImage === 0 ? 'border-2' : 'border-transparent hover:border-gray-300'
                      }`}
                      style={{ borderColor: currentGalleryImage === 0 ? '#ff6663' : 'transparent' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image 
                        src={projects[selectedProject].image} 
                        alt={`${projects[selectedProject].title} - Primary interface design showcasing user experience`} 
                        fill 
                        className="object-cover" 
                      />
                      {currentGalleryImage === 0 && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff6663' }}></div>
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Primary
                      </div>
                    </motion.button>
                    <motion.button 
                      onClick={() => setCurrentGalleryImage(1)}
                      className={`aspect-[4/3] w-28 rounded-lg overflow-hidden border-2 transition-all duration-300 relative ${
                        currentGalleryImage === 1 ? 'border-2' : 'border-transparent hover:border-gray-300'
                      }`}
                      style={{ borderColor: currentGalleryImage === 1 ? '#ff6663' : 'transparent' }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image 
                        src={projects[selectedProject].secondaryImage} 
                        alt={`${projects[selectedProject].title} - Secondary implementation view demonstrating system architecture`} 
                        fill 
                        className="object-cover" 
                      />
                      {currentGalleryImage === 1 && (
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                          <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#ff6663' }}></div>
                          </div>
                        </div>
                      )}
                      <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        Secondary
                      </div>
                    </motion.button>
                  </div>
                </div>
                
                {/* Structured Content Sections */}
                <div className="space-y-12 max-w-4xl mx-auto">
                  {/* Context Section - Phase 4.1 Bullet Points */}
                  <div id="context" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-light text-gray-400">01</span>
                      <h4 className="text-2xl font-medium" style={{ color: '#ff6663' }}>
                        Context & Background
                      </h4>
                    </div>
                    <div className="prose prose-lg">
                      <div className="text-gray-700 font-normal leading-relaxed mb-6">
                        {projects[selectedProject].context.split('. ').map((sentence, index) => (
                          <div key={index} className="flex items-start gap-3 mb-3">
                            <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff6663' }}></span>
                            <p className="text-gray-700 font-normal leading-relaxed">
                              {sentence}{index < projects[selectedProject].context.split('. ').length - 1 ? '.' : ''}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Approach Section - Phase 4.1 Renamed */}
                  <div id="approach" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-light text-gray-400">02</span>
                      <h4 className="text-2xl font-medium" style={{ color: '#ff6663' }}>
                        Approach
                      </h4>
                    </div>
                    <div className="prose prose-lg">
                      <p className="text-gray-700 font-normal leading-relaxed mb-6">
                        {projects[selectedProject].challenge}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {projects[selectedProject].tech.slice(0, 3).map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 rounded-full text-sm font-medium"
                            style={{ backgroundColor: '#ff6663', color: 'white' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Impact Section - Phase 4.1 Copy Compliant */}
                  <div id="impact" className="scroll-mt-24">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-sm font-light text-gray-400">03</span>
                      <h4 className="text-2xl font-medium" style={{ color: '#ff6663' }}>
                        Impact & Results
                      </h4>
                    </div>
                    <div className="prose prose-lg">
                      <p className="text-gray-700 font-normal leading-relaxed">
                        {projects[selectedProject].impact}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Enhanced Client Testimonial */}
                <div 
                  className="bg-coral/5 border-l-4 border-coral p-8 rounded-xl max-w-4xl mx-auto"
                  style={{ borderLeftColor: '#ff6663', backgroundColor: 'rgba(255, 102, 99, 0.05)' }}
                >
                  <blockquote 
                    className="text-2xl text-gray-800 mb-6"
                    style={{ lineHeight: '1.5', fontStyle: 'italic' }}
                  >
                    {projects[selectedProject].testimonial}
                  </blockquote>
                  <cite 
                    className="font-medium text-lg"
                    style={{ color: '#ff6663' }}
                  >
                    {projects[selectedProject].testimonialAuthor}
                  </cite>
                </div>

                {/* Bottom Project Navigation - Phase 4.1 Mobile Optimized */}
                <div className="max-w-4xl mx-auto mt-16 pt-8 border-t border-gray-100">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
                    {/* Previous Project */}
                    <motion.button
                      onClick={() => {
                        const prevIndex = selectedProject === 0 ? filteredProjects.length - 1 : selectedProject - 1;
                        setSelectedProject(prevIndex);
                      }}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 touch-manipulation w-full md:w-auto justify-center md:justify-start"
                      whileHover={{ scale: 1.02, x: -4 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ minHeight: '44px' }}
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0">
                        <Image
                          src={filteredProjects[selectedProject === 0 ? filteredProjects.length - 1 : selectedProject - 1].image}
                          alt="Previous project"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Previous Project</p>
                        <p className="text-sm font-medium text-gray-800">
                          {filteredProjects[selectedProject === 0 ? filteredProjects.length - 1 : selectedProject - 1].title}
                        </p>
                      </div>
                    </motion.button>

                    {/* Project Counter */}
                    <div className="text-center order-first md:order-none">
                      <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">Project</p>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-medium" style={{ color: '#ff6663' }}>
                          {selectedProject + 1}
                        </span>
                        <span className="text-gray-400">of</span>
                        <span className="text-lg font-medium text-gray-600">
                          {filteredProjects.length}
                        </span>
                      </div>
                    </div>

                    {/* Next Project */}
                    <motion.button
                      onClick={() => {
                        const nextIndex = (selectedProject + 1) % filteredProjects.length;
                        setSelectedProject(nextIndex);
                      }}
                      className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 touch-manipulation w-full md:w-auto justify-center md:justify-start"
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ minHeight: '44px' }}
                    >
                      <div className="text-right md:text-left order-2 md:order-1">
                        <p className="text-xs text-gray-500 uppercase tracking-wide">Next Project</p>
                        <p className="text-sm font-medium text-gray-800">
                          {filteredProjects[(selectedProject + 1) % filteredProjects.length].title}
                        </p>
                      </div>
                      <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0 order-1 md:order-2">
                        <Image
                          src={filteredProjects[(selectedProject + 1) % filteredProjects.length].image}
                          alt="Next project"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.button>
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
              src={selectedProject !== null ? (currentGalleryImage === 0 ? projects[selectedProject].image : projects[selectedProject].secondaryImage) : ''} 
              alt="Zoomed gallery view" 
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
              Image {currentGalleryImage + 1} of 2
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
