import React from 'react';
import NavTwo from '../../components/NavTwo';
import Footer from '../../components/Footer';

const AddmissionPage = () => {
    return (
        <>
            <NavTwo />
            <div className="bg-[#204562] text-white p-2 rounded-t-lg text-center mb-2 mt-2">
                <h2 className="text-lg font-bold">Our Toppers 2024</h2>
            </div>
            <div className="grid grid-cols-6  gap-4">

                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                    <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                    <span>Scholarships</span>
                </div>
            </div>
            <div className="flex flex-col md:flex-row bg-white p-6 rounded-lg shadow-lg">
                <div className="w-full md:w-1/3 p-4">
                    <h2 className="text-xl font-semibold mb-4">How we helps you in Admission</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Brochure Details" className="mb-2" />
                            <span>Brochure Details</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Check Detailed Fees" className="mb-2" />
                            <span>Check Detailed Fees</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Shortlist & Apply" className="mb-2" />
                            <span>Shortlist & Apply</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="24/7 Counselling" className="mb-2" />
                            <span>24/7 Counselling</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Scholarships" className="mb-2" />
                            <span>Scholarships</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-zinc-100 rounded-lg">
                            <img src="https://placehold.co/50x50" alt="Application Deadlines" className="mb-2" />
                            <span>Application Deadlines</span>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-2/3 p-4">
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/50x50" alt="University Logo" className="rounded-full mr-4" />
                        <div>
                            <h2 className="text-2xl font-bold text-orange-500">Register Now To Apply</h2>
                            <p className="text-zinc-700">St. Xavier College - [SXC], Ranchi</p>
                        </div>
                    </div>
                    <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center border border-zinc-300 rounded-lg p-2">
                                <img src="https://placehold.co/20x20" alt="Full Name Icon" className="mr-2" />
                                <input type="text" placeholder="Full Name *" className="w-full border-none focus:ring-0" />
                            </div>
                            <div className="flex items-center border border-zinc-300 rounded-lg p-2">
                                <img src="https://placehold.co/20x20" alt="Email Address Icon" className="mr-2" />
                                <input type="email" placeholder="Email Address *" className="w-full border-none focus:ring-0" />
                            </div>
                            <div className="flex items-center border border-zinc-300 rounded-lg p-2">
                                <span className="mr-2">+91</span>
                                <img src="https://placehold.co/20x20" alt="Mobile Number Icon" className="mr-2" />
                                <input type="text" placeholder="Mobile Number *" className="w-full border-none focus:ring-0" />
                            </div>
                            <div className="flex items-center border border-zinc-300 rounded-lg p-2">
                                <img src="https://placehold.co/20x20" alt="City Icon" className="mr-2" />
                                <input type="text" placeholder="City You Live In *" className="w-full border-none focus:ring-0" />
                            </div>
                            <div className="flex items-center border border-zinc-300 rounded-lg p-2 col-span-1 md:col-span-2">
                                <img src="https://placehold.co/20x20" alt="Course Icon" className="mr-2" />
                                <input type="text" placeholder="Course Interested In *" className="w-full border-none focus:ring-0" />
                            </div>
                        </div>
                        <p className="text-sm text-zinc-600">By submitting this form, you accept and agree to our <a href="#" className="text-blue-500">Terms of Use</a>.</p>
                        <p className="text-sm text-orange-500">Already Registered? <a href="#" className="text-blue-500">Click Here To Login.</a></p>
                        <button type="submit" className="w-full md:w-auto bg-orange-500 text-white py-2 px-4 rounded-lg">SUBMIT</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddmissionPage;
