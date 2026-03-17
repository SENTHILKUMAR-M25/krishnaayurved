import React from 'react'
import BlogNavbar from './BlogNavbar'
import ArticleCarousel from './ArticleCarousel'
import TopCategories from './TopCategories'
import EditorsChoice from './EditorsChoice'
import ConsultationSection from './ConsultationSection'
import MostPopular from './MostPopular'
import Footer from './Footer'

const Blog = () => {
  return (
    <div>
      <BlogNavbar />
      <ArticleCarousel />
      <EditorsChoice />
      <TopCategories />
      <ConsultationSection />
      <MostPopular />
      <Footer />
    </div>
  )
}

export default Blog
