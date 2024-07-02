// import { Button } from '@nextui-org/react'
import React from 'react'
import ReusableTable from '../../components/reusableComponent/ReusableTable';
import HorizontalBar from '../../components/reusableComponent/HorizontalBar';

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

  const columns = [
    { header: "Student Name", accessor: "Name" },
    { header: "Father Name", accessor: "Father" },
    { header: "Location", accessor: "Location" },
    { header: "Applied For", accessor: "AppliedFor" },
    { header: "Passed In", accessor: "PassedIn" },
  ];

  const actions = [
    { label: "View", color: "primary", handler: (item) => console.log("View", item) },
    { label: "Reject", color: "danger", handler: (item) => console.log("Reject", item) }
  ];
  return (
    <div className="overflow-x-auto">
      <HorizontalBar title={"Candidate List For Approval"} />
      <ReusableTable columns={columns} data={data} actions={actions} />
    </div>
  )
}

export default DataTable