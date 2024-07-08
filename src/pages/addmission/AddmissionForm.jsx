import React, { useState } from 'react';
import HorizontalBar from '../../components/reusableComponent/HorizontalBar';
import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import UploadComponent from '../../components/reusableComponent/UploadComponent';

const AddmissionForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        fname: '',
        mname: '',
        mobile: '',
        aadhar: '',
        email: '',
        dob: '',
        parmanentAdd: '',
        presentAdd: '',
        gender: '',
        cwsn: '',
        nationality: '',
        category: '',
        previousSchoolName: '',
        classLastAttendent: '',
        eqOfFather: '',
        eqOfMother: '',
        poFather: '',
        poMother: '',
        aiFather: '',
        aiMother: '',
        password: '',
        appliedFor: '',
        prevApplied: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };
    const handleFileChange = (file) => {
        console.log('Selected file:', file);
    };
    return (
        <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md">
            <HorizontalBar title={"Admission Form"} />
            <form onSubmit={handleSubmit}>
                <div className="flex justify-center gap-4">
                    {/* Additional content if needed */}
                    <UploadComponent
                        id="fileUpload"
                        label="Upload a Image"
                        subLabel="Max 2 MB"
                        iconUrl="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                        onFileChange={handleFileChange}
                        maxFileSize={2 * 1024 * 1024} // 2 MB in bytes
                    />
                    <UploadComponent
                        id="fileUpload"
                        label="Upload a Signature"
                        subLabel="Max 2 MB"
                        iconUrl="https://www.svgrepo.com/show/485545/upload-cicle.svg"
                        onFileChange={handleFileChange}
                        maxFileSize={2 * 1024 * 1024} // 2 MB in bytes
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2 p-4">
                    {[
                        { label: 'Name', name: 'name', type: 'text' },
                        { label: 'Father\'s Name', name: 'fname', type: 'text' },
                        { label: 'Mother\'s Name', name: 'mname', type: 'text' },
                        { label: 'Mobile', name: 'mobile', type: 'text' },
                        { label: 'Aadhar', name: 'aadhar', type: 'text' },
                        { label: 'Email', name: 'email', type: 'email' },
                        { label: 'Date of Birth', name: 'dob', type: 'date' },
                        { label: 'Permanent Address', name: 'parmanentAdd', type: 'text' },
                        { label: 'Present Address', name: 'presentAdd', type: 'text' },
                        { label: 'Gender', name: 'gender', type: 'select', options: ['Male', 'Female', 'Other'] },
                        { label: 'CWSN', name: 'cwsn', type: 'text' },
                        { label: 'Nationality', name: 'nationality', type: 'select', options: ['Indian', 'Other'] },
                        { label: 'Category', name: 'category', type: 'text' },
                        { label: 'Previous School Name', name: 'previousSchoolName', type: 'text' },
                        { label: 'Class Last Attended', name: 'classLastAttendent', type: 'text' },
                        { label: 'Father\'s Qualification', name: 'eqOfFather', type: 'text' },
                        { label: 'Mother\'s Qualification', name: 'eqOfMother', type: 'text' },
                        { label: 'Father\'s Occupation', name: 'poFather', type: 'text' },
                        { label: 'Mother\'s Occupation', name: 'poMother', type: 'text' },
                        { label: 'Annual Income of Father', name: 'aiFather', type: 'text' },
                        { label: 'Annual Income of Mother', name: 'aiMother', type: 'text' },
                        { label: 'Password', name: 'password', type: 'password' },
                        { label: 'Applied For', name: 'appliedFor', type: 'text' },
                    ].map((field) => (
                        <div key={field.name}>
                            {field.type === 'select' ? (
                                <>
                                    <Select
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        label={field.label}
                                        labelPlacement='outside'
                                        required
                                    >
                                        {/* <SelectItem value="" disabled>Select {field.label}</SelectItem> */}
                                        {field.options.map(option => (
                                            <SelectItem key={option} value={option}>{option}</SelectItem>
                                        ))}
                                    </Select>
                                </>
                            ) : (
                                <Input
                                    label={field.label}
                                    labelPlacement='outside'
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name]}
                                    onChange={handleChange}
                                    required
                                />
                            )}
                        </div>
                    ))}
                </div>
                <div className='flex justify-center gap-3'>
                    <Button
                        variant='bordered'
                        color='danger'
                        className='w-1/5'
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        variant='bordered'
                        color='success'
                        className='w-1/5'
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default AddmissionForm;
