import { Button } from '@nextui-org/react'
import React from 'react'
import { totalStdList } from '../../../commonJson'
import HorizontalBar from '../reusableComponent/HorizontalBar'

const TotalCandidateApplied = () => {

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
                        {totalStdList.map((item, index) => (
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

export default TotalCandidateApplied