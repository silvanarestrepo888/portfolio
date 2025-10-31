'use client';

import { motion } from 'framer-motion';
import { ProjectSnippetCard } from './ProjectSnippetCard';

interface SnippetProject {
  id: string;
  title: string;
  industry: string;
  serviceType: string;
  website: string;
  image: string;
  emailSubject: string;
}

interface ProjectSnippetGridProps {
  projects: SnippetProject[];
}

export const ProjectSnippetGrid: React.FC<ProjectSnippetGridProps> = ({ projects }) => {
  return (
    <motion.div 
      className="snippet-grid"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {projects.map((project, index) => (
        <ProjectSnippetCard 
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </motion.div>
  );
};