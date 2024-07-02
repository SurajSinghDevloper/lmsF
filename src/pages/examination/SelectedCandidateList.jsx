
import React, { useState } from 'react'
import HorizontalBar from '../../components/reusableComponent/HorizontalBar'
import SearchForm from '../../components/reusableComponent/SearchForm'
import { selectedStdList } from '../../../commonJson'
import ReusableTable from '../../components/reusableComponent/ReusableTable'

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
            <div className="overflow-x-auto">

                <HorizontalBar title={"Search Selected Students"} />
                <SearchForm formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    handleSubmit={handleSubmit}
                    options={options} />

                <ReusableTable columns={columns} data={selectedStdList} actions={actions} />
            </div>
        </>
    )
}

export default SelectedCandidateList