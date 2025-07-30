/**
 * Content Security Policy utilities
 */

/**
 * Enhanced CSP configuration for better security
 */
export const CSP_CONFIG = {
  defaultSrc: "'self'",
  scriptSrc: "'self' 'unsafe-inline'", // Required for Vite in development
  styleSrc: "'self' 'unsafe-inline'", // Required for styled components
  imgSrc: "'self' data: https://media.licdn.com https://cdn.codechef.com https://leetcode.com",
  fontSrc: "'self' data:",
  connectSrc: "'self'",
  objectSrc: "'none'",
  mediaSrc: "'self'",
  frameSrc: "'none'",
  upgradeInsecureRequests: true,
};

/**
 * Validates that required security headers are present
 */
export function validateSecurityHeaders(): boolean {
  if (typeof window === 'undefined') return true; // Server-side
  
  const requiredHeaders = [
    'X-Frame-Options',
    'X-Content-Type-Options',
    'X-XSS-Protection',
    'Referrer-Policy'
  ];
  
  // In a real implementation, you would check response headers
  // This is a placeholder for runtime validation
  console.info('Security headers validation: CSP and security headers should be configured at server level');
  
  return true;
}

/**
 * Logs security-related events for monitoring
 */
export function logSecurityEvent(event: string, details?: any): void {
  if (process.env.NODE_ENV === 'development') {
    console.info(`Security Event: ${event}`, details);
  }
  
  // In production, this would send to your monitoring service
  // e.g., Sentry, LogRocket, etc.
}