/**
 * Color constants used throughout the application
 * Centralized color definitions for consistency
 */

export const COLORS = {
  // Primary colors
  primaryDark: '#15313D',
  primaryLight: '#3CABDA',
  
  // Background colors
  backgroundGradient: {
    start: '#BECFEE',
    middle: '#71C6E2',
    midEnd: '#D9F4FA',
    end: '#BECFEE',
  },
  cardBackground: '#F4FDFF',
  scoreBackground: '#f4fdff',
  
  // Accent colors
  accentLight: '#C6E9F7',
  accentLighter: '#E5F8FF',
  accentBorder: '#96E5FF',
  accentBorderLight: 'rgba(150, 229, 255, 0.50)',
  accentBorderVeryLight: 'rgba(150, 229, 255, 0.05)',
  
  // Text colors
  textPrimary: '#15313D',
  textSecondary: '#6e7f86',
  textScore: '#1c728a',
  
  // Progress colors
  progressBackground: '#E3E3E3',
  progressFill: '#15313D',
  
  // White
  white: '#FFFFFF',
} as const;

/**
 * Gradient definitions for reuse
 */
export const GRADIENTS = {
  heading: 'linear-gradient(90deg, #15313D 0%, #3CABDA 100%)',
  glassCard: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.12) 47%, rgba(255,255,255,0.4) 100%)',
  background: 'linear-gradient(135deg,#BECFEE 0%,#71C6E2 50%,#D9F4FA 75%,#BECFEE 100%)',
  questionCard: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
  optionDefault: 'linear-gradient(90deg, rgba(198, 233, 247, 0.10) 0.09%, rgba(229, 248, 255, 0.10) 99.91%)',
  optionHover: 'linear-gradient(90deg, rgba(198, 233, 247, 0.60) 0.09%, rgba(229, 248, 255, 0.60) 99.91%)',
  optionSelected: 'linear-gradient(90deg, #C6E9F7 0%, #E5F8FF 100%)',
  navigationButton: 'linear-gradient(90deg, #C6E9F7 0.09%, #E5F8FF 99.91%)',
  submitButton: 'linear-gradient(135deg, #C6E9F7 0%, #E5F8FF 100%)',
} as const;

