import React from 'react'
import { Helmet } from 'react-helmet-async'
import Banner from './banner/Banner'
import MainComponents from './main/MainComponents'

export default function Home() { 
  return (
    <div>
      <Helmet>
        <title>web | home</title>
      </Helmet>
      this is home page
      <Banner></Banner>
      <MainComponents></MainComponents>
    </div>
  )
}
