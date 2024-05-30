import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import TopNavbar from '../../components/TopNavbar'
import Footer from '../../components/Footer'
import styles from '../../style/App.module.scss';


const AppLayout = () => {
  return (
     <div className={styles.layout}>
        <TopNavbar className={styles.topNavbar} />
        <div className={styles.content}>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </div>
        <Footer className={styles.footer} />
    </div>
  )
}

export default AppLayout