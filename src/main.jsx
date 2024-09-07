import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthProvider from './auth/AuthContext';
import { ProductProvider } from './auth/ProductContext';
import App from './App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
)
