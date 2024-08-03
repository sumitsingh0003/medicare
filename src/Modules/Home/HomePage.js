import React from 'react'
import MainBanner from '../../Components/MainBanner'
import OurServices from '../../Components/Services'
import Innovative from '../../Components/Innovative'
import Specialist from '../../Components/SpecialistDoctos'
import Customer from '../../Components/Customer'
import NewsLetter from '../../Components/NewsLetter'

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <OurServices />
      <Innovative />
      <Specialist />
      <Customer />
      <NewsLetter />
    </>
  )
}

export default HomePage
