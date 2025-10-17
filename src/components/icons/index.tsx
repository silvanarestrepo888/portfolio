// PROPRIETARY ICONOGRAPHY SYSTEM - Phase 12
// Custom SVG library for Experience Architect brand - 100% Copy Compliant

// SERVICE ICONS - Copy-compliant with exact services
export { AcceleratedInnovationIcon } from './services/AcceleratedInnovationIcon';
export { ExperienceOrchestrationIcon } from './services/ExperienceOrchestrationIcon';
export { IntelligentOperationsIcon } from './services/IntelligentOperationsIcon';
export { TransformationFoundationsIcon } from './services/TransformationFoundationsIcon';
export { StrategyConsultingIcon } from './services/StrategyConsultingIcon';
export { CustomerIntelligenceIcon } from './services/CustomerIntelligenceIcon';

// NAVIGATION ICONS - Copy-compliant with existing sections
export { CustomArrowIcon } from './navigation/CustomArrowIcon';

// PROJECT CATEGORY ICONS - Copy-compliant with existing project data
export { HealthWellnessIcon } from './projects/HealthWellnessIcon';
export { AISoftwareIcon } from './projects/AISoftwareIcon';
export { EntertainmentIcon } from './projects/EntertainmentIcon';

// LUXURY ICON SYSTEM STANDARDS
export const iconSizes = {
  xs: 16,
  sm: 20, 
  md: 24,
  lg: 32,
  xl: 40,
  '2xl': 48
} as const;

export const iconColors = {
  primary: '#ff6663',
  light: '#ff8a80',
  gray900: '#111827',
  gray600: '#4b5563', 
  gray400: '#9ca3af',
  white: '#ffffff'
} as const;

// ICON IMPLEMENTATION GUIDELINES
export const iconGuidelines = {
  // Usage Rules
  usage: {
    withText: 'Icons support text hierarchy, never replace clear communication',
    standalone: 'Only for universally understood actions (LinkedIn, Email, etc.)',
    services: 'Custom icons enhance service understanding and brand differentiation'
  },
  
  // Spacing Standards
  spacing: {
    iconTextGapSm: 'var(--icon-text-gap-sm)',    // 8px - Small elements
    iconTextGapMd: 'var(--icon-text-gap-md)',    // 12px - Standard buttons
    iconTextGapLg: 'var(--icon-text-gap-lg)',    // 16px - Featured elements  
    iconTextGapXl: 'var(--icon-text-gap-xl)'     // 20px - Hero elements
  },
  
  // Container Standards
  containers: {
    small: 'var(--icon-container-sm)',      // 48px - Compact elements
    medium: 'var(--icon-container-md)',     // 64px - Standard containers
    large: 'var(--icon-container-lg)',      // 80px - Featured containers
    xl: 'var(--icon-container-xl)'          // 96px - Hero containers
  }
} as const;