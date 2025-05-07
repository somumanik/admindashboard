import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'
import Testing from './Testing'

export default function MainLayout() {
    return (
        <div>
            <Header />
             <Outlet />
            <Footer/>
          
        </div>
    )
}
