import React from 'react'
import Hero from '../components/Hero'
import NewArrivals from '../components/NewArrivals'
import HowItWorks from '../components/HowItWorks'
import Benefits from '../components/Benefits'
import CashYourCar from '../components/CashYourCar'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import HappyCustomers from '../components/HappyCustomers'

const Home = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <NewArrivals />
      <HowItWorks />
      <Benefits />
      <CashYourCar />
      <Testimonials />
      <HappyCustomers />
      <FAQ />
    </>
  )
}

export default Home;
