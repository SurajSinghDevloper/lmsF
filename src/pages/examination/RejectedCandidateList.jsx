// import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import HorizontalBar from '../../components/reusableComponent/HorizontalBar'
import SearchForm from '../../components/reusableComponent/SearchForm'
import { classdata } from '../../../commonJson'
import { rejectedStudentList } from '../../../commonJson'
import ReusableTable from '../../components/reusableComponent/ReusableTable'

const RejectedCandidateList = () => {

    const [formData, setFormData] = useState({
        class: '',
        examRoll: '',
        mobile: '',
        dateOfExam: '',
    });



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
                <HorizontalBar title={"Rejected Students"} />
                <SearchForm
                    formData={formData}
                    handleChange={handleChange}
                    handleSelectChange={handleSelectChange}
                    handleSubmit={handleSubmit}
                    options={classdata}
                />
                <ReusableTable columns={columns} data={rejectedStudentList} actions={actions} />
            </div>
        </>
    )
}

export default RejectedCandidateList