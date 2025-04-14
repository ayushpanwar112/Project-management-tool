import React from 'react'
import Event from './Event'
import Hero from './Hero'
import Details from './Details'
import CardsSection from './CardsSection'
import AllCamp from './AllCamp'

const Home = () => {
  return (
    <div>
    <Event hasEvent={true}/>
    <Hero/>
    <Details/>
    <CardsSection/>
    <AllCamp/>
    </div>
  )
}

export default Home
