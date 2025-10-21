'use client';

/**
 * Sophisticated 3-Color Drama System
 * Award-winning color palette with maximum restraint and impact
 */

// Core 3-Color Palette
export const sophisticatedPalette = {
  coral: {
    primary: '#FF6663',
    light: '#FF9999', 
    deep: '#E63946',
    dark: '#C1121F',
    alpha: {
      subtle: 'rgba(255, 102, 99, 0.1)',
      medium: 'rgba(255, 102, 99, 0.3)',
      strong: 'rgba(255, 102, 99, 0.6)',
      bold: 'rgba(255, 102, 99, 1)'
    }
  },
  charcoal: {
    primary: '#2C2C2C',
    deep: '#1A1A1A',      // Enhanced depth
    medium: '#404040',
    light: '#6B6B6B',
    alpha: {
      subtle: 'rgba(26, 26, 26, 0.1)',
      medium: 'rgba(26, 26, 26, 0.3)',
      strong: 'rgba(26, 26, 26, 0.6)',
      bold: 'rgba(26, 26, 26, 1)'
    }
  },
  cream: {
    primary: '#FFF8F0',   // Refined panna cotta
    warm: '#FFF5E6',
    cool: '#F8F9FA',
    pure: '#FFFFFF',
    alpha: {
      subtle: 'rgba(255, 248, 240, 0.1)',
      medium: 'rgba(255, 248, 240, 0.3)',
      strong: 'rgba(255, 248, 240, 0.6)',
      bold: 'rgba(255, 248, 240, 1)'
    }
  }
};

// Section Color Personalities
export const sectionColors = {
  hero: {
    name: 'Bold Confidence',
    primary: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.deep} 0%, ${sophisticatedPalette.charcoal.primary} 60%, ${sophisticatedPalette.coral.primary} 100%)`,
    accent: sophisticatedPalette.coral.primary,
    contrast: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary,
    overlay: sophisticatedPalette.charcoal.alpha.strong
  },
  about: {
    name: 'Warm Authority',
    primary: `linear-gradient(135deg, ${sophisticatedPalette.cream.primary} 0%, ${sophisticatedPalette.cream.warm} 100%)`,
    accent: sophisticatedPalette.coral.deep,
    contrast: sophisticatedPalette.charcoal.deep,
    text: sophisticatedPalette.charcoal.deep,
    overlay: sophisticatedPalette.cream.alpha.medium
  },
  projects: {
    name: 'Dynamic Focus',
    primary: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.primary} 0%, ${sophisticatedPalette.charcoal.deep} 100%)`,
    accent: sophisticatedPalette.coral.primary,
    contrast: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary,
    overlay: sophisticatedPalette.charcoal.alpha.medium
  },
  services: {
    name: 'Energetic Capability',
    primary: `linear-gradient(135deg, ${sophisticatedPalette.coral.primary} 0%, ${sophisticatedPalette.coral.deep} 100%)`,
    accent: sophisticatedPalette.cream.primary,
    contrast: sophisticatedPalette.charcoal.deep,
    text: sophisticatedPalette.cream.primary,
    overlay: sophisticatedPalette.coral.alpha.medium
  },
  experience: {
    name: 'Refined Expertise',
    primary: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.deep} 0%, ${sophisticatedPalette.charcoal.medium} 100%)`,
    accent: sophisticatedPalette.coral.light,
    contrast: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary,
    overlay: sophisticatedPalette.charcoal.alpha.subtle
  }
};

// Project-Specific Color Moods (using only our 3 colors)
export const projectColorMoods = {
  kayanee: {
    mood: 'coral-dominant',
    background: `linear-gradient(135deg, ${sophisticatedPalette.coral.light} 0%, ${sophisticatedPalette.coral.primary} 100%)`,
    accent: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.charcoal.deep
  },
  augoor: {
    mood: 'charcoal-dominant',
    background: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.deep} 0%, ${sophisticatedPalette.charcoal.primary} 100%)`,
    accent: sophisticatedPalette.coral.primary,
    text: sophisticatedPalette.cream.primary
  },
  chime: {
    mood: 'cream-dominant',
    background: `linear-gradient(135deg, ${sophisticatedPalette.cream.primary} 0%, ${sophisticatedPalette.cream.warm} 100%)`,
    accent: sophisticatedPalette.coral.deep,
    text: sophisticatedPalette.charcoal.deep
  },
  nomade: {
    mood: 'balanced-warm',
    background: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.medium} 0%, ${sophisticatedPalette.coral.dark} 100%)`,
    accent: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary
  },
  danone: {
    mood: 'professional-coral',
    background: `linear-gradient(135deg, ${sophisticatedPalette.coral.deep} 0%, ${sophisticatedPalette.charcoal.primary} 100%)`,
    accent: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary
  },
  parques: {
    mood: 'sophisticated-charcoal',
    background: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.deep} 0%, ${sophisticatedPalette.charcoal.light} 100%)`,
    accent: sophisticatedPalette.coral.primary,
    text: sophisticatedPalette.cream.primary
  },
  qiddiya: {
    mood: 'premium-balance',
    background: `linear-gradient(135deg, ${sophisticatedPalette.charcoal.primary} 0%, ${sophisticatedPalette.coral.deep} 100%)`,
    accent: sophisticatedPalette.cream.primary,
    text: sophisticatedPalette.cream.primary
  }
};

// CSS Custom Properties Generator
export function generateCSSCustomProperties(): string {
  return `
    :root {
      /* Coral Palette */
      --coral-primary: ${sophisticatedPalette.coral.primary};
      --coral-light: ${sophisticatedPalette.coral.light};
      --coral-deep: ${sophisticatedPalette.coral.deep};
      --coral-dark: ${sophisticatedPalette.coral.dark};
      
      /* Charcoal Palette */
      --charcoal-primary: ${sophisticatedPalette.charcoal.primary};
      --charcoal-deep: ${sophisticatedPalette.charcoal.deep};
      --charcoal-medium: ${sophisticatedPalette.charcoal.medium};
      --charcoal-light: ${sophisticatedPalette.charcoal.light};
      
      /* Cream Palette */
      --cream-primary: ${sophisticatedPalette.cream.primary};
      --cream-warm: ${sophisticatedPalette.cream.warm};
      --cream-cool: ${sophisticatedPalette.cream.cool};
      --cream-pure: ${sophisticatedPalette.cream.pure};
      
      /* Section Gradients */
      --hero-gradient: ${sectionColors.hero.primary};
      --about-gradient: ${sectionColors.about.primary};
      --projects-gradient: ${sectionColors.projects.primary};
      --services-gradient: ${sectionColors.services.primary};
      --experience-gradient: ${sectionColors.experience.primary};
    }
  `;
}

// Utility Functions
export function getSectionColors(sectionName: keyof typeof sectionColors) {
  return sectionColors[sectionName];
}

export function getProjectColors(projectName: string) {
  return projectColorMoods[projectName as keyof typeof projectColorMoods] || projectColorMoods.kayanee;
}

export function createColorTransition(fromSection: string, toSection: string, progress: number): string {
  // Smooth color interpolation between sections
  const from = getSectionColors(fromSection as keyof typeof sectionColors);
  const to = getSectionColors(toSection as keyof typeof sectionColors);
  
  if (!from || !to) return from?.primary || to?.primary || sectionColors.hero.primary;
  
  // Simple transition - in real implementation, would interpolate colors
  return progress > 0.5 ? to.primary : from.primary;
}

export default sophisticatedPalette;