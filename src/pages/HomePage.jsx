import React from 'react'

import HomeBanner from '../components/HomeBanner'
import HomeFeature from '../components/HomeFeature'
import NavBar from '../Layouts/NavBar'
import NavTwo from '../Layouts/NavTwo'
import Footer from '../Layouts/Footer'

function HomePage() {
  return (
    <div>
      <NavBar />
      <NavTwo />
      <HomeBanner />
      <HomeFeature />
      <Footer />
    </div>
  )
}

export default HomePage