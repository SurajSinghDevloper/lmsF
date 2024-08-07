import React, { useState } from 'react';
import { Input, Select, SelectItem } from '@nextui-org/react';
import NavTwo from '../../Layouts/NavTwo';
import Footer from '../../Layouts/Footer';
import img1 from '../../../temp/img/GARVITA.jpg'
import img2 from '../../../temp/img/girls.avif'
import img3 from '../../../temp/img/imag.jpg'
import img4 from '../../../temp/img/image.jfif'
import img5 from '../../../temp/img/imagee.jfif'
import img6 from '../../../temp/img/images.jpg'
import { schoolName } from '../../../temp/data/commonJson';
import { classList } from '../../../temp/data/AppData';

const AddmissionPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        address: '',
        selectedClass: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (e) => {
        setFormData({
            ...formData,
            selectedClass: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
        // You can make an API call or other actions here
    };
    return (
        <>
            <NavTwo />
            <div className="bg-[#204562] text-white p-2 rounded-t-lg text-center mb-2 mt-2">
                <h2 className="text-lg font-bold">Our Toppers 2024</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img1} alt="Aman Dubey" className="mb-2 w-40 h-40 object-cover" />
                    <span>Aman Dubey</span>
                    <span>Class 12</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img2} alt="Simran Kaur" className="mb-2 w-40 h-40 object-cover" />
                    <span>Simran Kaur</span>
                    <span>Class 11</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img4} alt="Kriti Singh" className="mb-2 w-40 h-40 object-cover" />
                    <span>Kriti Singh</span>
                    <span>Class 12</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img3} alt="Deewakar Singh" className="mb-2 w-40 h-40 object-cover" />
                    <span>Deewakar Singh</span>
                    <span>Class 11</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img5} alt="Omkar Sharma" className="mb-2 w-40 h-40 object-cover" />
                    <span>Omkar Sharma</span>
                    <span>Class 9</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src={img6} alt="Palavi Singh" className="mb-2 w-40 h-40 object-cover" />
                    <span>Palavi Singh</span>
                    <span>Class 10</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
                <div className="w-full md:w-1/3 p-4">
                    <h2 className="text-xl font-semibold mb-4">How we help you in Admission</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Brochure Details" className="mb-2 w-40 h-40 object-cover" />
                            <span>Brochure Details</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Check Detailed Fees" className="mb-2 w-40 h-40 object-cover" />
                            <span>Check Detailed Fees</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Shortlist & Apply" className="mb-2 w-40 h-40 object-cover" />
                            <span>Shortlist & Apply</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="24/7 Counselling" className="mb-2 w-40 h-40 object-cover" />
                            <span>24/7 Counselling</span>
                        </div>
                        {/* <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2 w-40 h-40 object-cover" />
                            <span>Scholarships</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Application Deadlines" className="mb-2 w-40 h-40 object-cover" />
                            <span>Application Deadlines</span>
                        </div> */}
                    </div>
                </div>
                <div className="w-full md:w-2/3 p-4">
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/50x50" alt="University Logo" className="rounded-full mr-4" />
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500">Register Now To Apply</h2>
                            <p className="text-zinc-700">{schoolName}, Ranchi</p>
                        </div>
                    </div>
                    {/* <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                label="Name"
                                labelPlacement={"outside"}
                                placeholder="Name"
                                width="full"
                            />
                            <Input
                                type="email"
                                label="Email"
                                labelPlacement={"outside"}
                                placeholder="Email"
                                width="full"
                            />
                            <Input
                                type="tel"
                                label="Mobile"
                                labelPlacement={"outside"}
                                placeholder="Mobile"
                                width="full"
                            />
                            <Input
                                type="text"
                                label="Address"
                                labelPlacement={"outside"}
                                placeholder="Address"
                                width="full"
                            />
                            <Select
                                size="sm"
                                label="Select Class"
                                className="max-w-xs"
                            >
                                <SelectItem>Class I</SelectItem>
                                <SelectItem>Class II</SelectItem>
                                <SelectItem>Class III</SelectItem>
                                <SelectItem>Class IV</SelectItem>
                                <SelectItem>Class V</SelectItem>
                                <SelectItem>Class VI</SelectItem>
                                <SelectItem>Class VII</SelectItem>
                                <SelectItem>Class VIII</SelectItem>
                                <SelectItem>Class IX</SelectItem>
                                <SelectItem>Class X</SelectItem>
                                <SelectItem>Class XI</SelectItem>
                                <SelectItem>Class XII</SelectItem>

                            </Select>
                        </div>
                        <p className="text-sm text-zinc-600">By submitting this form, you accept and agree to our <a href="#" className="text-blue-500">Terms of Use</a>.</p>
                        <p className="text-sm text-orange-500">Already Registered? <a href="#" className="text-blue-500">Click Here To Login.</a></p>
                        <button type="submit" className="w-full md:w-auto bg-orange-500 text-white py-2 px-4 rounded-lg">SUBMIT</button>
                    </form> */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                type="text"
                                label="Name"
                                labelPlacement="outside"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                width="full"
                            />
                            <Input
                                type="email"
                                label="Email"
                                labelPlacement="outside"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                width="full"
                            />
                            <Input
                                type="tel"
                                label="Mobile"
                                labelPlacement="outside"
                                placeholder="Mobile"
                                name="mobile"
                                value={formData.mobile}
                                onChange={handleChange}
                                width="full"
                            />
                            <Input
                                type="text"
                                label="Address"
                                labelPlacement="outside"
                                placeholder="Address"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                width="full"
                            />
                            <Select
                                size="sm"
                                label="Select Class"
                                className="max-w-xs"
                                name="selectedClass"
                                value={formData.selectedClass}
                                onChange={handleSelectChange}
                            >
                                {classList.map((cls) => (
                                    <SelectItem key={cls.classValue} value={cls.classValue} textValue={`Class ${cls.className}`}>
                                        Class {cls.className}
                                    </SelectItem>
                                ))}
                            </Select>
                        </div>
                        <p className="text-sm text-zinc-600">By submitting this form, you accept and agree to our <a href="/student-login" className="text-blue-500">Terms of Use</a>.</p>
                        <p className="text-sm text-orange-500">Already Registered? <a href="/student-login" className="text-blue-500">Click Here To Login.</a></p>
                        <button type="submit" className="w-full md:w-auto bg-orange-500 text-white py-2 px-4 rounded-lg">SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddmissionPage;
