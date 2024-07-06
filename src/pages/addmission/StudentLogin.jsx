
import React from 'react'
import { schoolName } from '../../../temp/data/commonJson';
import { Button, Input } from '@nextui-org/react';
import bookAuth from "../../assets/bookAuth.jfif"
import NavTwo from '../../Layouts/NavTwo';

const StudentLogin = () => {
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
                        <form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <Input
                                        id="username"
                                        name="username"
                                        type="text"
                                        label="username"
                                        required
                                        labelPlacement="outside"
                                    />
                                </div>
                                <div>
                                    <Input
                                        id="password"
                                        name="password"
                                        type="password"
                                        label="current-password"
                                        labelPlacement="outside"
                                        required
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
                        </form>
                        <div className="text-center mt-4">
                            <a href="#" className="font-medium text-white  hover:text-secondary/80">
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

    )
}
export default StudentLogin;