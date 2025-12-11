import React from 'react'
import Contactheader from '../contactcom/Contactheader'
import NavbarHero from '../components/NavbarHero'
import Contacts from '../contactcom/Contacts'
import FooterSection from '../components/FooterSection'
import Location from '../components/Location'
import Producthead from '../productcom/Producthead'

export default function ContactPage() {
  return (
  <>
 
  <NavbarHero/>
  <Contactheader/>
  <Contacts/>
  <Location/>
  <FooterSection/>
  </>
  )
}
