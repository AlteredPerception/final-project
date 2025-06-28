import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { router } from "./BrowserRouter.tsx"
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
