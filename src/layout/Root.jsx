import React from 'react'
import { Outlet } from 'react-router'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Root = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
