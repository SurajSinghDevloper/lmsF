import { Button } from '@nextui-org/react'
import React from 'react'

const DataTable = () => {
  const data = [
    {
      "Name": "John Doe",
      "Father": "Richard Doe",
      "Location": "New York",
      "AppliedFor": "Software Engineer",
      "PassedIn": "2023"
    },
    {
      "Name": "Jane Smith",
      "Father": "Robert Smith",
      "Location": "San Francisco",
      "AppliedFor": "Data Scientist",
      "PassedIn": "2022"
    },
    {
      "Name": "Alice Johnson",
      "Father": "Michael Johnson",
      "Location": "Los Angeles",
      "AppliedFor": "Product Manager",
      "PassedIn": "2021"
    },
    {
      "Name": "Chris Brown",
      "Father": "James Brown",
      "Location": "Chicago",
      "AppliedFor": "UX Designer",
      "PassedIn": "2020"
    },
    {
      "Name": "Emma Davis",
      "Father": "William Davis",
      "Location": "Austin",
      "AppliedFor": "Marketing Specialist",
      "PassedIn": "2019"
    }
  ];
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-zinc-200">
        <thead>
          <tr className="w-full bg-zinc-200 dark:bg-zinc-300">
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Candidate Name</th>
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Father</th>
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Location</th>
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Applied For</th>
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Passed In</th>
            <th className="py-2 px-4 text-left text-blue-600 dark:text-blue-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="border-b border-zinc-200 dark:border-zinc-700">
              <td className="py-2 px-4 text-left">{item.Name}</td>
              <td className="py-2 px-4 text-left">{item.Father}</td>
              <td className="py-2 px-4 text-left">{item.Location}</td>
              <td className="py-2 px-4 text-left">{item.AppliedFor}</td>
              <td className="py-2 px-4 text-left">{item.PassedIn}</td>
              <td className="py-2 flex gap-3">
                <Button color="primary" variant="bordered">View</Button>
                <Button color="danger" variant="bordered">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DataTable