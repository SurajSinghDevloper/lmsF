
import React from 'react'
import { totalStdList } from '../../../temp/data/commonJson'
import HorizontalBar from '../../components/reusableComponent/HorizontalBar'
import ReusableTable from '../../components/reusableComponent/ReusableTable'

const TotalCandidateApplied = () => {

    const columns = [
        { header: "Student Name", accessor: "studentName" },
        { header: "Father Name", accessor: "fatherName" },
        { header: "Mobile No.", accessor: "mobile" },
        { header: "Marks Scored", accessor: "marksScored" },
        { header: "Applied For", accessor: "appliedFor" },
        { header: "Seats Avilable", accessor: "seatsAvailable" },
    ];

    const actions = [
        { label: "View", color: "primary", handler: (item) => console.log("View", item) },
        { label: "Reject", color: "danger", handler: (item) => console.log("Reject", item) }
    ];
    return (
        <>
            <HorizontalBar title={"Total Applied Students"} />
            <form className="p-4 gap-6 flex flex-row justify-center" >
                <div className="flex flex-col">
                    <label htmlFor="class" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Class
                    </label>
                    <select
                        id="class"
                        name="class"
                        className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">select</option>

                    </select>
                </div>
                <div className="flex flex-col">
                    <label htmlFor="examRoll" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Exam Roll
                    </label>
                    <input
                        type="text"
                        id="examRoll"
                        name="examRoll"
                        className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="mobile" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Mobile
                    </label>
                    <input
                        type="text"
                        id="mobile"
                        name="mobile"
                        className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="dateOfExam" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                        Date of Exam
                    </label>
                    <input
                        type="date"
                        id="dateOfExam"
                        name="dateOfExam"
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
            <div className="overflow-x-auto">
                <ReusableTable columns={columns} data={totalStdList} actions={actions} />
            </div>
        </>
    )
}

export default TotalCandidateApplied