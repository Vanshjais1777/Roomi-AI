import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BackendUrlProvider } from './context/BackendUrlContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <BackendUrlProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BackendUrlProvider>,
)
