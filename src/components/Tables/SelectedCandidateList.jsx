import { Button } from '@nextui-org/react'
import React from 'react'

const SelectedCandidateList = () => {
    const data = [
        {
            "studentName": "Robert Doe",
            "fatherName": "Richard Doe",
            "mobile": "9876543210",
            "marksScored": "80",
            "appliedFor": "Class 1",
            "seatsAvailable": "10"
        },
        {
            "studentName": "Alice Johnson",
            "fatherName": "Robert Johnson",
            "mobile": "9876543210",
            "marksScored": "80",
            "appliedFor": "Class 1",
            "seatsAvailable": "10"
        },
        {
            "studentName": "Ben Smith",
            "fatherName": "Michael Smith",
            "mobile": "9876543211",
            "marksScored": "85",
            "appliedFor": "Class 2",
            "seatsAvailable": "8"
        },
        {
            "studentName": "Carol Davis",
            "fatherName": "James Davis",
            "mobile": "9876543212",
            "marksScored": "78",
            "appliedFor": "Class 3",
            "seatsAvailable": "12"
        },
        {
            "studentName": "David Wilson",
            "fatherName": "William Wilson",
            "mobile": "9876543213",
            "marksScored": "82",
            "appliedFor": "Class 4",
            "seatsAvailable": "15"
        },
        {
            "studentName": "Eva Brown",
            "fatherName": "Richard Brown",
            "mobile": "9876543214",
            "marksScored": "90",
            "appliedFor": "Class 5",
            "seatsAvailable": "9"
        },
        {
            "studentName": "Frank Taylor",
            "fatherName": "Charles Taylor",
            "mobile": "9876543215",
            "marksScored": "88",
            "appliedFor": "Class 6",
            "seatsAvailable": "11"
        },
        {
            "studentName": "Grace Thomas",
            "fatherName": "Edward Thomas",
            "mobile": "9876543216",
            "marksScored": "84",
            "appliedFor": "Class 7",
            "seatsAvailable": "14"
        },
        {
            "studentName": "Henry Harris",
            "fatherName": "George Harris",
            "mobile": "9876543217",
            "marksScored": "87",
            "appliedFor": "Class 8",
            "seatsAvailable": "13"
        },
        {
            "studentName": "Isla White",
            "fatherName": "Thomas White",
            "mobile": "9876543218",
            "marksScored": "83",
            "appliedFor": "Class 9",
            "seatsAvailable": "10"
        },
        {
            "studentName": "Jack Lee",
            "fatherName": "Henry Lee",
            "mobile": "9876543219",
            "marksScored": "86",
            "appliedFor": "Class 10",
            "seatsAvailable": "12"
        },
        {
            "studentName": "Kara Martin",
            "fatherName": "Paul Martin",
            "mobile": "9876543220",
            "marksScored": "89",
            "appliedFor": "Class 11",
            "seatsAvailable": "11"
        },
        {
            "studentName": "Liam Jackson",
            "fatherName": "Mark Jackson",
            "mobile": "9876543221",
            "marksScored": "91",
            "appliedFor": "Class 12",
            "seatsAvailable": "10"
        }
    ]
    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white dark:bg-zinc-200">
                    <thead>
                        <tr className="w-full bg-zinc-200 dark:bg-zinc-300">
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Student Name</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Father Name</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Mobile No</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Marks Scored</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Applied For</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Seat Available</th>
                            <th className="py-2 px-4 text-center text-blue-600 dark:text-blue-400">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className="border-b border-zinc-200 dark:border-zinc-700">
                                <td className="py-2 px-4 text-center">{item.studentName}</td>
                                <td className="py-2 px-4 text-center">{item.fatherName}</td>
                                <td className="py-2 px-4 text-center">{item.mobile}</td>
                                <td className="py-2 px-4 text-center">{item.marksScored}</td>
                                <td className="py-2 px-4 text-center">{item.appliedFor}</td>
                                <td className="py-2 px-4 text-center">{item.seatsAvailable}</td>
                                <td className="py-2 justify-center flex gap-3">
                                    <Button color="primary" variant="bordered">View</Button>
                                    <Button color="danger" variant="bordered">Reject</Button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>
        </>
    )
}

export default SelectedCandidateList