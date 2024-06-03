import React from 'react';

const SearchForm = ({ formData, handleChange, handleSelectChange, handleSubmit, options }) => {
    return (
        <form className="p-4 gap-6 flex flex-row justify-center" onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label htmlFor="class" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    Class
                </label>
                <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleSelectChange}
                    className="mt-1 block w-full py-2 px-3 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">select</option>
                    {options.length > 0 ? (
                        options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))
                    ) : (
                        <option>Loading...</option>
                    )}
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
                    value={formData.examRoll}
                    onChange={handleChange}
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
                    value={formData.mobile}
                    onChange={handleChange}
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
                    value={formData.dateOfExam}
                    onChange={handleChange}
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
    );
};

export default SearchForm;
