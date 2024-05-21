import React from 'react'
import NavBar from '../components/NavBar'
import NavTwo from '../components/NavTwo'
import HomeBanner from '../components/HomeBanner'
import HomeFeature from '../components/HomeFeature'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <div>
        <NavBar/>
        <NavTwo/>
        <HomeBanner/>
        <HomeFeature/>
        <Footer/>
    </div>
  )
}

export default HomePage