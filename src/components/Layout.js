import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'

const Layout = () => {
    return (
        <div className='h-screen w-screen overflow-hidden flex flex-row '>
            <div>
                <SideBar />
            </div>
            <div className='w-screen flex px-20 2xl:px-16 xl:px-16 lg:px-2 md:px-2 bg-gray-100'>
                <Outlet />
            </div>
        </div>
        
    )
}

export default Layout
