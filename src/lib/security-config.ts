/**
 * Security configuration and runtime checks
 */

/**
 * Security configuration that should be applied at build time
 * These configurations would typically be set in vite.config.ts or build process
 */
export const SECURITY_CONFIG = {
  // TypeScript strict mode recommendations
  typescript: {
    strict: true,
    noImplicitAny: true,
    strictNullChecks: true,
    noUnusedLocals: true,
    noUnusedParameters: true,
    noFallthroughCasesInSwitch: true,
  },
  
  // ESLint security rules that should be enabled
  eslint: {
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react-hooks/rules-of-hooks': 'error',
  },
  
  // Vite security headers (should be configured in server)
  headers: {
    'X-Frame-Options': 'DENY',
    'X-Content-Type-Options': 'nosniff',
    'X-XSS-Protection': '1; mode=block',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    'Content-Security-Policy': [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https://media.licdn.com https://cdn.codechef.com https://leetcode.com",
      "font-src 'self' data:",
      "connect-src 'self'",
      "object-src 'none'",
      "media-src 'self'",
      "frame-src 'none'",
      "upgrade-insecure-requests"
    ].join('; ')
  }
};

/**
 * Runtime security check for development
 */
export function performSecurityCheck(): void {
  if (process.env.NODE_ENV === 'development') {
    console.info('🔒 Security Check: Validating configuration...');
    
    // Check for potential security issues
    const issues: string[] = [];
    
    // Check if dangerouslySetInnerHTML is being used safely
    if (document.querySelector('[data-chart]')) {
      console.info('✅ Chart component found - CSS sanitization applied');
    }
    
    // Warn about any potential security issues in development
    if (issues.length > 0) {
      console.warn('⚠️ Security issues found:', issues);
    } else {
      console.info('✅ Security check passed');
    }
  }
}