import React, { useState } from 'react';
import { schoolName } from '../../../temp/data/commonJson';
import { Button, Input } from '@nextui-org/react';
import bookAuth from '../../assets/bookAuth.jfif';
import NavTwo from '../../Layouts/NavTwo';
import { toast, Toaster } from 'sonner';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../Redux/Actions/LoginAction';

const StudentLogin = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        toast.promise(
            new Promise((resolve) => setTimeout(() => resolve({ name: 'Sonner' }), 2000)),
            {
                loading: 'Loading...',
                success: () => {
                    const { email, password } = formData;
                    dispatch(loginAction({ email, password }));
                    return 'Login Successful';
                },
                error: 'Error',
            }
        );
    };

    return (
        <>
            <NavTwo />
            <div className="py-1 flex items-center justify-center bg-[#3b6eb56c] scrollbar-hide">
                <div className="w-full max-w-4xl bg-[#3b6db59c] p-6 space-y-8 bg-card rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="hidden md:flex items-center justify-center">
                        <img src={bookAuth} alt="Side Image" className="h-full w-auto object-cover rounded-lg" />
                    </div>
                    <div className="w-full p-8 space-y-8">
                        <div className="flex justify-center mb-4">
                            <img src={`https://placehold.co/200x50?text=${schoolName}`} alt="school Logo" className="h-12" />
                        </div>
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">Login</h2>
                        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <Input
                                        name="email"
                                        type="email"
                                        label="Registered Email"
                                        required
                                        labelPlacement="outside"
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                                <div>
                                    <Input
                                        name="password"
                                        type="password"
                                        label="Current Password"
                                        labelPlacement="outside"
                                        required
                                        onChange={handleChange}
                                        value={formData.password}
                                    />
                                </div>
                            </div>
                            <div>
                                <Button
                                    type="submit"
                                    variant='bordered'
                                    fullWidth
                                    className='text-white'
                                >
                                    Login
                                </Button>
                            </div>
                            <Toaster richColors position="top-right" />
                        </form>
                        <div className="text-center mt-4">
                            <a href="#" className="font-medium text-white hover:text-secondary/80">
                                Forgot your password?
                            </a>
                        </div>
                        <div className="text-center mt-4 text-sm text-muted-foreground">
                            {schoolName} OS 5.6.1
                            <br />© 2005 - 2024{' '}
                            <a href="#" className="text-primary hover:text-primary/80">
                                {schoolName}, Inc.
                            </a>{' '}
                            All rights reserved.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default StudentLogin;
