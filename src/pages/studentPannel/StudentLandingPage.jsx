import React from 'react'
import PageNavbar from '../PageNavbar'
import SideBar from '../../Layouts/SideBar'
import { Outlet } from 'react-router-dom'

function StudentLandingPage() {
    return (
        <>
            <PageNavbar />
            <div className="flex gap-4 h-screen w-full bg-zinc-100 dark:bg-zinc-200">
                <div className="flex-1 h-screen w-[15%]">
                    <SideBar />
                </div>
                <main className="flex-2 mr-2 w-[85%]">
                    <header className="flex justify-between items-center mb-6 position:fixed z-10">
                        <h1 className="text-2xl font-bold">Dashboard</h1>
                        <div className="flex items-center space-x-4">
                            <span>Stats</span>
                            <span>5 Notifications</span>
                            <span>Settings</span>
                            {/* <Button variant='bordered' onClick={handleBack} color='danger' className="mt-2 h-8"> Back To Main</Button> */}
                        </div>
                    </header>
                    <section className="w-full">
                        <div className="fixed h-[90%] w-[85%] scrollbar-hide overflow-y-scroll">
                            <Outlet />
                        </div>
                    </section>
                </main>
            </div>
        </>
    )
}

export default StudentLandingPage