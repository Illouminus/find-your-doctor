import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navigation, Nav } from '../index'
import './Layout.css'



function Layout() {

    return (
        <>

            <div>
                <div>
                    {/* <Navigation  /> */}
                    <Nav />
                </div>
                <div className="Outlet">

                    <Outlet />
                </div>

            </div>


        </>
    )
}

export default Layout