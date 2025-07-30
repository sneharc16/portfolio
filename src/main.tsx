import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { validateSecurityHeaders } from './lib/csp'
import { performSecurityCheck } from './lib/security-config'

// Initialize security validation
validateSecurityHeaders();
performSecurityCheck();

createRoot(document.getElementById("root")!).render(<App />);
