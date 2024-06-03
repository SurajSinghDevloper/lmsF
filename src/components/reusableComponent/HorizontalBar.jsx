import React from 'react'

const HorizontalBar = ({ title }) => {
    return (
        <>
            <div className="bg-[#204562] text-white p-2 rounded-t-lg">
                <h2 className="text-lg font-bold">{title}</h2>
            </div>
        </>
    )
}

export default HorizontalBar