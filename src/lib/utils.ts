/**
 * Utility functions for the Quiz application
 */

/**
 * Clamp a number between min and max values
 */
export const clamp = (value: number, min: number, max: number): number => {
  return Math.min(Math.max(value, min), max);
};

/**
 * Calculate percentage with bounds checking
 */
export const calculatePercentage = (current: number, total: number): number => {
  if (total === 0) return 0;
  return clamp((current / total) * 100, 0, 100);
};

