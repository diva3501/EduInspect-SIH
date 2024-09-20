import React from 'react';

const InstitutionalData = () => {
  const token = localStorage.getItem('token');

  // Static data representing institutional facilities
  const data = [
    { id: 1, name: 'Building A', status: 'In Compliance', lastChecked: '2024-08-01' },
    { id: 2, name: 'Building B', status: 'Needs Improvement', lastChecked: '2024-07-20' },
    { id: 3, name: 'Library', status: 'In Compliance', lastChecked: '2024-07-15' },
    { id: 4, name: 'Gymnasium', status: 'In Compliance', lastChecked: '2024-06-30' },
    { id: 5, name: 'Cafeteria', status: 'Under Review', lastChecked: '2024-07-10' },
  ];

  if (!token) {
    return <div className="p-6 bg-white shadow-md rounded-lg">Unauthorized access. Please log in.</div>;
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Institutional Data</h2>
      <table className="min-w-full bg-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Facility Name</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4">Last Checked</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="bg-white border-b hover:bg-gray-100">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.status}</td>
              <td className="py-2 px-4">{item.lastChecked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstitutionalData;
