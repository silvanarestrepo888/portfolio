'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SnippetProject {
  id: string;
  title: string;
  industry: string;
  serviceType: string;
  website: string;
  image: string;
  emailSubject: string;
}

interface ProjectSnippetCardProps {
  project: SnippetProject;
  index: number;
}

export const ProjectSnippetCard: React.FC<ProjectSnippetCardProps> = ({ project, index }) => {
  const handleEmailClick = () => {
    const subject = `Inquiry about ${project.title} - ${project.industry} Project`;
    const body = `Hi Silvana, I noticed your work on "${project.title}" in the ${project.industry} sector. I'd like to discuss how your ${project.serviceType} expertise might apply to my project. Could we schedule a conversation?`;
    window.location.href = `mailto:silvanarestrepo888@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div 
      className="snippet-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.015 }}
    >
      <div className="snippet-image-container">
        <Image
          src={project.image}
          alt={`${project.title} - ${project.industry} project by Silvana Restrepo`}
          width={240}
          height={200}
          className="snippet-image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          quality={90}
        />
        <div className="snippet-overlay">
          {/* Only button in overlay - title moved outside */}
          <motion.button 
            className="snippet-cta-bottom-right"
            onClick={handleEmailClick}
            whileHover={{ scale: 1.05, backgroundColor: '#E55A5A' }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Contact about ${project.title} project`}
          >
            Ask Me
          </motion.button>
        </div>
      </div>
      {/* Title moved OUTSIDE image container for visibility */}
      <div className="snippet-title-section">
        <h3 className="snippet-title-text">{project.title}</h3>
      </div>
      <div className="snippet-info">
        <span className="snippet-industry">{project.industry}</span>
        <span className="snippet-separator">•</span>
        <span className="snippet-service">{project.serviceType}</span>
      </div>
    </motion.div>
  );
};