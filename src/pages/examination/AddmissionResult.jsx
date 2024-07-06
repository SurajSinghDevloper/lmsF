// import { Button } from '@nextui-org/react'
import React from 'react'
import HorizontalBar from '../../components/reusableComponent/HorizontalBar'
import { classdata } from '../../../temp/data/commonJson'
import ReusableTable from '../../components/reusableComponent/ReusableTable'

const AddmissionResult = () => {
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
    const columns = [
        { header: "Student Name", accessor: "studentName" },
        { header: "Father Name", accessor: "fatherName" },
        { header: "Mobile No", accessor: "mobile" },
        { header: "Marks Scored", accessor: "marksScored" },
        { header: "Applied For", accessor: "appliedFor" },
        { header: "Seat Available", accessor: "seatsAvailable" }
    ];

    const actions = [
        { label: "View", color: "primary", handler: (item) => console.log("View", item) },
        { label: "Reject", color: "danger", handler: (item) => console.log("Reject", item) }
    ];
    return (

        <>


            <div className="p-4 border rounded-lg shadow-lg dark:bg-zinc-800">
                <HorizontalBar title={"Search Students"} />
                <form className="p-4 gap-6 flex flex-row justify-center" >
                    <div className="flex flex-col">
                        <label htmlFor="wardNo" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Class
                        </label>
                        <select
                            id="wardNo"
                            name="wardNo"

                            className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            <option value="">select</option>

                            <option value="">select</option>
                            {classdata ? classdata.map((item) => (
                                <option key={item.className} value={item.className}>
                                    {item.className}
                                </option>
                            )) :

                                <option>Loading...</option>
                            }


                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="shopNumber" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Exam Roll
                        </label>
                        <input
                            type="text"
                            id="shopNumber"
                            name="shopNumber"

                            className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="consumerNumber" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Mobile
                        </label>
                        <input
                            type="text"
                            id="consumerNumber"
                            name="consumerNumber"

                            className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            Date of Exam
                        </label>
                        <input
                            type="date"
                            id="name"
                            name="name"
                            className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="text-center mt-5">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <ReusableTable columns={columns} data={data} actions={actions} />
        </>

    )
}

export default AddmissionResult