/**
 * Security utilities for sanitizing inputs and validating data
 */

/**
 * Sanitizes CSS color values to prevent injection attacks
 * Only allows valid HSL, RGB, hex colors and CSS color keywords
 */
export function sanitizeCSSColor(color: string): string | null {
  if (!color || typeof color !== 'string') {
    return null;
  }

  // Remove any potentially dangerous characters
  const cleanColor = color.trim().replace(/[<>'"\\]/g, '');
  
  // Allow HSL colors: hsl(180, 100%, 50%) or hsl(180 100% 50%)
  const hslRegex = /^hsl\(\s*\d+(?:\.\d+)?\s*,?\s*\d+(?:\.\d+)?%\s*,?\s*\d+(?:\.\d+)?%\s*\)$/i;
  if (hslRegex.test(cleanColor)) {
    return cleanColor;
  }

  // Allow RGB colors: rgb(255, 255, 255) or rgb(255 255 255)
  const rgbRegex = /^rgb\(\s*\d+\s*,?\s*\d+\s*,?\s*\d+\s*\)$/i;
  if (rgbRegex.test(cleanColor)) {
    return cleanColor;
  }

  // Allow hex colors: #fff, #ffffff
  const hexRegex = /^#[0-9a-fA-F]{3,6}$/;
  if (hexRegex.test(cleanColor)) {
    return cleanColor;
  }

  // Allow CSS color keywords (basic set for security)
  const allowedKeywords = [
    'transparent', 'currentColor', 'inherit', 'initial', 'unset',
    'black', 'white', 'red', 'green', 'blue', 'yellow', 'orange', 'purple',
    'pink', 'gray', 'grey', 'brown', 'cyan', 'magenta', 'lime', 'navy',
    'teal', 'olive', 'maroon', 'silver', 'aqua', 'fuchsia'
  ];
  
  if (allowedKeywords.includes(cleanColor.toLowerCase())) {
    return cleanColor;
  }

  // If nothing matches, return null for safety
  return null;
}

/**
 * Sanitizes CSS property names to only allow safe color-related properties
 */
export function sanitizeCSSProperty(property: string): string | null {
  if (!property || typeof property !== 'string') {
    return null;
  }

  const cleanProperty = property.trim().replace(/[<>'"\\]/g, '');
  
  // Only allow color-related CSS properties for charts
  const allowedProperties = [
    'color', 'background-color', 'border-color', 'fill', 'stroke'
  ];
  
  if (allowedProperties.includes(cleanProperty.toLowerCase())) {
    return cleanProperty;
  }
  
  return null;
}

/**
 * Validates and sanitizes CSS variable assignments for chart styling
 */
export function sanitizeCSSVariableDeclaration(declaration: string): string | null {
  if (!declaration || typeof declaration !== 'string') {
    return null;
  }

  // Match CSS variable declarations like "--color-primary: #ffffff;"
  const cssVarRegex = /^\s*(--[\w-]+)\s*:\s*(.+?)\s*;?\s*$/;
  const match = declaration.match(cssVarRegex);
  
  if (!match) {
    return null;
  }
  
  const [, varName, varValue] = match;
  
  // Validate variable name (only allow color-related variables)
  if (!varName.startsWith('--color-')) {
    return null;
  }
  
  // Sanitize the color value
  const sanitizedValue = sanitizeCSSColor(varValue);
  if (!sanitizedValue) {
    return null;
  }
  
  return `${varName}: ${sanitizedValue};`;
}