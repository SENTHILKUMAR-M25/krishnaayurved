import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import ProductSelectionUI from './ProductSection'
import BestSection from './BestSection'
import ComboSection from './ComboSection'
import Review from './Review'
import Testimonial from './Testimonial'
import NewArrivals from './NewArrivals'
import Footer from './Footer'
import Scroler from './Scroler'
import Category from './Category'
import WatchAndShop from './WatchVideo'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductSelectionUI />
      <BestSection />
      <WatchAndShop />
      <ComboSection />
      <Scroler />
      <Category />
      <NewArrivals />
      <Review />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default Home
