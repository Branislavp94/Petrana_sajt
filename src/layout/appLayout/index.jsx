import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from '../../components/TopNavbar'
import Footer from '../../components/Footer'

const AppLayout = () => {
  return (
    <>
      <TopNavbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  )
}

export default AppLayout