import React from 'react'

import unauth from '../assets/unauthorized.jpg'

const UnthorizeAccessPage = () => {
    return (
        <div className=" flex  justify-center ">
            <div className="p-4 text-center ">
                <img alt="Locked Padlock" src={unauth} className="mx-auto mb-4 w-2/4" />
                <h1 className="text-3xl font-bold mb-2">Unauthorized Access</h1>
                <p className="mb-4">You do not have permission to access this page.</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">Go back</button>
            </div>
        </div>
    )
}

export default UnthorizeAccessPage