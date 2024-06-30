import { Button } from '@nextui-org/react'
import React from 'react'

const HorizontalBar = ({ title }) => {
    return (
        <>
            <div className="bg-[#204562] text-white p-2 rounded-t-lg flex justify-between">
                <h2 className="text-lg font-bold">{title}</h2>
                <div className='flex justify-end'>
                    <Button variant='bordered' color='warning'> Back</Button>
                </div>
            </div>

        </>
    )
}

export default HorizontalBar