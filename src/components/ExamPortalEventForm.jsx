import React from 'react';
import HorizontalBar from './reusableComponent/HorizontalBar';

const ExamPortalEventForm = () => {
    return (
        <>
            <HorizontalBar title={"Create Examination Event"} />
            <div className=" p-8 bg-zinc-50 dark:bg-zinc-900 shadow-lg rounded-xl">
                <form>
                    <div className="mb-6">
                        <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-title">Event Title</label>
                        <input className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" type="text" id="event-title" placeholder="Enter event title" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-details">Details</label>
                        <textarea className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" id="event-details" rows="4" placeholder="Enter event details"></textarea>
                    </div>
                    <div className='flex flex-row gap-5'>
                        <div className="mb-2">
                            <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-date">From Date</label>
                            <input className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" type="date" id="event-date" />
                        </div>
                        <div className="mb-2">
                            <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-date">To Date</label>
                            <input className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" type="date" id="event-date" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-date">Date</label>
                        <input className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" type="date" id="event-date" />
                    </div>
                    <div className="mb-2">
                        <label className="block text-zinc-600 dark:text-zinc-400 mb-3" htmlFor="event-img">Image</label>
                        <input className="w-full px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-zinc-800 dark:text-zinc-200" type="file" id="event-img" />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>

    );
}

export default ExamPortalEventForm;
