import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BackendUrlProvider } from './context/BackendUrlContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { ClerkProvider } from "@clerk/clerk-react";

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')).render(
  <BackendUrlProvider>
    <AuthProvider>
      <ClerkProvider publishableKey={publishableKey}>
        <App />
      </ClerkProvider>
    </AuthProvider>
  </BackendUrlProvider>,
)
