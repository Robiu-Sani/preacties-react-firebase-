import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Nav from './nav/Nav'

export default function Root() {
  return (
    <div>
        <Helmet>
            <title>web | home</title>
        </Helmet>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
