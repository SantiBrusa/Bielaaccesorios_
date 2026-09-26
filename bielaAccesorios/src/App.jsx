import './App.css'
import { Routes, Route } from 'react-router-dom'
import Inicio from './screens/inicio/Inicio.jsx'
import Header from './components/header/Header.jsx'
import Products from './screens/products/Products.jsx'
import AboutMe from './screens/about-me/AboutMe.jsx'
import Contact from './screens/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import AdminLogin from './screens/admin/AdminLogin.jsx'
import AdminProducts from './screens/admin/AdminProducts.jsx'
import AdminCarousel from './screens/admin/AdminCarousel.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import AdminDashboard from './screens/admin/AdminDashboard.jsx'

function HomePage() {
  return (
    <div className='fondo'>
      <Header/>
      <Inicio/>
      <Products/>
      <AboutMe/>
      <Contact/>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin" element={
        <ProtectedRoute><AdminDashboard /></ProtectedRoute>
      } />
      <Route path="/admin/products" element={
        <ProtectedRoute><AdminProducts /></ProtectedRoute>
      } />
      <Route path="/admin/carousel" element={
        <ProtectedRoute><AdminCarousel /></ProtectedRoute>
      } />
    </Routes>
  )
}

export default App