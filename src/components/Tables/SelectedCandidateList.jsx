import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import HorizontalBar from '../reusableComponent/HorizontalBar'
import SearchForm from '../reusableComponent/SearchForm'
import { selectedStdList } from '../../../commonJson'

const SelectedCandidateList = () => {



    const [formData, setFormData] = useState({
        class: '',
        examRoll: '',
        mobile: '',
        dateOfExam: '',
    });

    const options = [
        { value: '1', label: 'Class 1' },
        { value: '2', label: 'Class 2' },
        // Add more options as needed
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSelectChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Handle form submission
    };
    return (
        <>
            <div className="overflow-x-auto">

                <HorizontalBar title={"Search Selected Students"} />
                <SearchForm formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    handleSubmit={handleSubmit}
                    options={options} />
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
                        {selectedStdList.map((item, index) => (
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