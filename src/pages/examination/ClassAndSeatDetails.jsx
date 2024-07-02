import React from 'react'

import ReusableTable from '../../components/reusableComponent/ReusableTable';
import HorizontalBar from '../../components/reusableComponent/HorizontalBar';

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

    const columns = [
        { header: "Class Name", accessor: "className" },
        { header: "Class Teacher", accessor: "classTeacher" },
        { header: "Total Seats", accessor: "totalSeats" },
        { header: "Available Seats", accessor: "seatAvailable" },
        { header: "Occupied Seats", accessor: (item) => item.totalSeats - item.seatAvailable }
    ];
    return (
        <>
            <HorizontalBar title={"Class Details"} />
            <div className="overflow-x-auto mt-5">
                <ReusableTable columns={columns} data={data} />
            </div>
        </>

    )
}

export default ClassAndSeatDetails