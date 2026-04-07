import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <App />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              className: 'dark:bg-gray-800 dark:text-white',
              style: {
                borderRadius: '10px',
                background: '#fff',
                color: '#333',
              },
            }}
          />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
