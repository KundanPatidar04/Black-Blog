import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import { Header } from './components/Header.jsx'
import { Home } from './pages/Home.jsx'
import { AboutUs } from './pages/AboutUs.jsx'
import { Gallery } from './pages/Gallery.jsx'
import { ManageBlog } from './pages/ManageBlog.jsx'
import { AllBlogs } from './pages/AllBlogs.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sytle/page.css'
import './assets/sytle/component.css'
import { Footer } from './components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter >
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<AboutUs />}></Route>
        <Route path='/Gallery' element={<Gallery />} ></Route>
        <Route path='/manageBlog' element={<ManageBlog />}></Route>
        <Route path='/allBlogs' element={<AllBlogs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
