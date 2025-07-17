import React from 'react'
import LatestCollection from '../components/LatestCollection'
import Hero from '../components/Hero'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewletterBox from '../components/NewletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy/>
      <NewletterBox />
    </div>
  )
}

export default Home