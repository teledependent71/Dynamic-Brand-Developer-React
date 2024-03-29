import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Brand Developer</title>
        <meta property="og:title" content="Dynamic Brand Developer" />
      </Helmet>
    </div>
  )
}

export default Home
