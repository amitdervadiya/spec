import React from 'react'
import ProductsPage from '../categoryCom/ProductsPage'
import NavbarHero from '../components/NavbarHero'
import Catheader from '../categoryCom/Catheader'
import Qna from '../categoryCom/Qna'
import Categories from "../components/Categories"
import Products from '../components/Products'
import Testimonials from "../components/Testimonials"
import FooterSection from "../components/FooterSection"

export default function CategoryPage() {
  return (
   <>
   <NavbarHero/>
   <Catheader/>
   <ProductsPage/>
   <Categories/>
   <Products/>
   <Testimonials/>
   <Qna/>
   <FooterSection/>
   
   </>
  )
}
