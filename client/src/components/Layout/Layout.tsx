import React from 'react'
import { Outlet } from 'react-router-dom'
import { ResponsiveAppBar } from '../index'
import './Layout.css'



function Layout() {

    return (
        <>
            <div>
                <div>
                    <ResponsiveAppBar />
                </div>
                <div className="Outlet">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Layout