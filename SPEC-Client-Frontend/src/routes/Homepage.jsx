import React from 'react'
import About from "..//components/About";
import NavbarHero from '../components/NavbarHero';
import Categories from '../components/Categories';
import Products from "../components/Products"
import Testimonials from "../components/Testimonials"
import FooterSection from "../components/FooterSection"
import OurProducts from "../components/OurProducts"
import Accordion from '../components/Accordion';
import AccessoriesSection from "../components/AccessoriesSection"
import Experience from "../components/Experience"
import Hero from '../components/Hero';
import Location from '../components/Location';



export default function Homepage() {
  return (
    <>


      <NavbarHero />
      <Hero/>
      <Categories />
      <About />
      <AccessoriesSection/>
      <Products />
      <OurProducts />
      <Testimonials />
      <Experience />
      <Accordion />
      <Location/>
      <FooterSection />


    </>
  )
}
