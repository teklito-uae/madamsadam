import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SmoothScroll, CustomCursorProvider } from '@/components/motion'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomCursorProvider>
      <SmoothScroll>
        <App />
      </SmoothScroll>
    </CustomCursorProvider>
  </StrictMode>,
)
