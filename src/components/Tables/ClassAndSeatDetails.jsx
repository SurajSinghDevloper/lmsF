import React from 'react'

import HorizontalBar from '../reusableComponent/HorizontalBar'

const ClassAndSeatDetails = () => {
    const data = [
        {
            "className": "1",
            "classTeacher": "Richard Doe",
            "totalSeats": "50",
            "seatAvailable": "20"
        },
        {
            "className": "2",
            "classTeacher": "Jane Smith",
            "totalSeats": "50",
            "seatAvailable": "18"
        },
        {
            "className": "3",
            "classTeacher": "Michael Johnson",
            "totalSeats": "50",
            "seatAvailable": "22"
        },
        {
            "className": "4",
            "classTeacher": "Emily Davis",
            "totalSeats": "50",
            "seatAvailable": "25"
        },
        {
            "className": "5",
            "classTeacher": "William Brown",
            "totalSeats": "50",
            "seatAvailable": "19"
        },
        {
            "className": "6",
            "classTeacher": "Patricia Wilson",
            "totalSeats": "50",
            "seatAvailable": "23"
        },
        {
            "className": "7",
            "classTeacher": "Linda Taylor",
            "totalSeats": "50",
            "seatAvailable": "21"
        },
        {
            "className": "8",
            "classTeacher": "Barbara Anderson",
            "totalSeats": "50",
            "seatAvailable": "20"
        },
        {
            "className": "9",
            "classTeacher": "James Thomas",
            "totalSeats": "50",
            "seatAvailable": "17"
        },
        {
            "className": "10",
            "classTeacher": "Robert Jackson",
            "totalSeats": "50",
            "seatAvailable": "16"
        },
        {
            "className": "11",
            "classTeacher": "Mary White",
            "totalSeats": "50",
            "seatAvailable": "24"
        },
        {
            "className": "12",
            "classTeacher": "Charles Harris",
            "totalSeats": "50",
            "seatAvailable": "18"
        }
    ]

    return (
        <>
            <HorizontalBar title={"Class Details"} />
            <div className="overflow-x-auto mt-5">
                <table className="min-w-full bg-white dark:bg-zinc-200">
                    <thead>
                        <tr className="w-full bg-zinc-200 dark:bg-zinc-300">
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Class Name</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Class Teacher</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Total Seats</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Available Seats</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Occupied Seats</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-zinc-200 dark:border-zinc-700">
                                <td className="py-2 px-4 text-center">{item.className}</td>
                                <td className="py-2 px-4 text-center">{item.classTeacher}</td>
                                <td className="py-2 px-4 text-center">{item.totalSeats}</td>
                                <td className="py-2 px-4 text-center">{item.seatAvailable}</td>
                                <td className="py-2 px-4 text-center">{item.totalSeats - item.seatAvailable}</td>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </>

    )
}

export default ClassAndSeatDetails