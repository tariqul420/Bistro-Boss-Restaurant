import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'

// Swiper Css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position='top-right' />
  </StrictMode>,
)
