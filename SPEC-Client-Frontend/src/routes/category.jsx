import React from 'react'
import ProductsPage from '../categoryCom/ProductsPage'
import NavbarHero from '../components/NavbarHero'
import Catheader from '../categoryCom/Catheader'
import Qna from '../categoryCom/Qna'

export default function category() {
  return (
   <>
   <NavbarHero/>
   <Catheader/>
   <ProductsPage/>
   <Qna/>

   </>
  )
}
