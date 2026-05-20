import React from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import './index.css'
import App from './App'
import StartPage from './pages/StartPage'
import HomePage from './pages/HomePage'
import ProjectsPage from './pages/ProjectsPage'
import ResumePage from './pages/ResumePage'
import ContactPage from './pages/ContactPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<StartPage />} />
      <Route path="home" element={<HomePage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="resume" element={<ResumePage />} />
      <Route path="contact" element={<ContactPage />} />
    </Route>
  ),
  { future: { v7_startTransition: true, v7_relativeSplatPath: true } }
)

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
