import React, { useState } from 'react';
import { PlusIcon, SearchIcon, UsersIcon, UserPlusIcon, UserCheckIcon, UserXIcon } from 'lucide-react';
const GuestList = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Sample guest data
  const guests = [{
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '555-123-4567',
    status: 'confirmed',
    party: 2,
    group: 'Family'
  }, {
    id: 2,
    name: 'Sarah Johnson',
    email: 'sarah@example.com',
    phone: '555-234-5678',
    status: 'confirmed',
    party: 1,
    group: 'Friends'
  }, {
    id: 3,
    name: 'Michael Brown',
    email: 'michael@example.com',
    phone: '555-345-6789',
    status: 'confirmed',
    party: 2,
    group: 'Family'
  }, {
    id: 4,
    name: 'Emily Davis',
    email: 'emily@example.com',
    phone: '555-456-7890',
    status: 'pending',
    party: 1,
    group: 'Work'
  }, {
    id: 5,
    name: 'Robert Wilson',
    email: 'robert@example.com',
    phone: '555-567-8901',
    status: 'pending',
    party: 2,
    group: 'Friends'
  }, {
    id: 6,
    name: 'Jennifer Taylor',
    email: 'jennifer@example.com',
    phone: '555-678-9012',
    status: 'declined',
    party: 1,
    group: 'Work'
  }, {
    id: 7,
    name: 'David Anderson',
    email: 'david@example.com',
    phone: '555-789-0123',
    status: 'confirmed',
    party: 3,
    group: 'Family'
  }, {
    id: 8,
    name: 'Lisa Thomas',
    email: 'lisa@example.com',
    phone: '555-890-1234',
    status: 'pending',
    party: 2,
    group: 'Friends'
  }];
  // Filter and search guests
  const filteredGuests = guests.filter(guest => {
    const matchesFilter = filter === 'all' || guest.status === filter;
    const matchesSearch = guest.name.toLowerCase().includes(searchTerm.toLowerCase()) || guest.email.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  // Count stats
  const totalInvited = guests.reduce((sum, guest) => sum + guest.party, 0);
  const totalConfirmed = guests.filter(guest => guest.status === 'confirmed').reduce((sum, guest) => sum + guest.party, 0);
  const totalPending = guests.filter(guest => guest.status === 'pending').reduce((sum, guest) => sum + guest.party, 0);
  return <div className="container mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Guest List
        </h1>
        <p className="text-gray-600">
          Manage your wedding guests and track RSVPs
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <UsersIcon className="h-5 w-5 text-gray-500 mr-2" />
            <h3 className="font-medium text-gray-700">Total Invited</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {totalInvited} guests
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <UserCheckIcon className="h-5 w-5 text-emerald-500 mr-2" />
            <h3 className="font-medium text-gray-700">Confirmed</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {totalConfirmed} guests
          </p>
          <p className="text-sm text-gray-500">
            {Math.round(totalConfirmed / totalInvited * 100)}% of total
            invited
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <UserPlusIcon className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium text-gray-700">Awaiting Response</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {totalPending} guests
          </p>
          <p className="text-sm text-gray-500">
            {Math.round(totalPending / totalInvited * 100)}% of total invited
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex space-x-2">
            <button onClick={() => setFilter('all')} className={`px-3 py-1 rounded-full text-sm font-medium ${filter === 'all' ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              All
            </button>
            <button onClick={() => setFilter('confirmed')} className={`px-3 py-1 rounded-full text-sm font-medium ${filter === 'confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Confirmed
            </button>
            <button onClick={() => setFilter('pending')} className={`px-3 py-1 rounded-full text-sm font-medium ${filter === 'pending' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Pending
            </button>
            <button onClick={() => setFilter('declined')} className={`px-3 py-1 rounded-full text-sm font-medium ${filter === 'declined' ? 'bg-gray-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              Declined
            </button>
          </div>
          <div className="flex w-full sm:w-auto gap-2">
            <div className="relative flex-grow">
              <input type="text" placeholder="Search guests..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              <PlusIcon size={16} className="mr-1" />
              Add Guest
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Group
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Party Size
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredGuests.map(guest => <tr key={guest.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">
                      {guest.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-600">{guest.email}</div>
                    <div className="text-sm text-gray-500">{guest.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      {guest.group}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                    {guest.party}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${guest.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : guest.status === 'pending' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
                      {guest.status.charAt(0).toUpperCase() + guest.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-rose-600 hover:text-rose-800 mr-4">
                      Edit
                    </button>
                    <button className="text-gray-600 hover:text-gray-800">
                      Remove
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
          {filteredGuests.length === 0 && <div className="p-8 text-center text-gray-500">
              No guests found matching your criteria.
            </div>}
        </div>
      </div>
    </div>;
};
export default GuestList;