import './App.css'
import Navbar from './components/Home/Navbar'
import Hero from './components/Home/Hero'
import ProductSection from './components/Home/ProductSection'
import BestSection from './components/Home/BestSection'
import WatchAndShop from './components/Home/WatchVideo'
import CombosSection from './components/Home/ComboSection'
import Category from './components/Home/Category'
import NewArrivals from './components/Home/NewArrivals'
import Scroler from './components/Home/Scroler'
import TestimonialSlider from './components/Home/Testimonial'
import Footer from './components/Home/Footer'
import ReviewCarousel from './components/Home/Review'
import BlogNavbar from './components/Blog/BlogNavbar'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import EditorsChoice from './components/Blog/EditorsChoice'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
