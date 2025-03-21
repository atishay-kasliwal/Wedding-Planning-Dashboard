import React, { useState } from 'react';
import { PlusIcon, SearchIcon, PhoneIcon, MailIcon, MapPinIcon, ExternalLinkIcon } from 'lucide-react';
const Vendors = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  // Sample vendor categories
  const categories = ['all', 'venue', 'catering', 'photography', 'florist', 'music', 'attire', 'cake', 'transportation', 'other'];
  // Sample vendor data
  const vendors = [{
    id: 1,
    name: 'Riverside Hotel',
    category: 'venue',
    contact: 'Sarah Williams',
    phone: '555-123-4567',
    email: 'events@riversidehotel.com',
    address: '789 River Road, Riverside, CA 90210',
    website: 'www.riversidehotel.com',
    notes: 'Beautiful venue with both indoor and outdoor options. Capacity for 200 guests.',
    booked: true,
    price: 8000,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 2,
    name: 'Gourmet Delights Catering',
    category: 'catering',
    contact: 'Michael Chen',
    phone: '555-234-5678',
    email: 'info@gourmetdelights.com',
    address: '456 Culinary Ave, Riverside, CA 90210',
    website: 'www.gourmetdelights.com',
    notes: 'Excellent food and presentation. Offers custom menus and dietary accommodations.',
    booked: true,
    price: 4500,
    image: 'https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 3,
    name: 'Captured Moments Photography',
    category: 'photography',
    contact: 'David Rodriguez',
    phone: '555-345-6789',
    email: 'david@capturedmoments.com',
    address: '123 Frame Street, Riverside, CA 90210',
    website: 'www.capturedmoments.com',
    notes: 'Specializes in candid, photojournalistic style. Includes second shooter and 8 hours of coverage.',
    booked: true,
    price: 3000,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 4,
    name: 'Blooming Elegance Florists',
    category: 'florist',
    contact: 'Emma Thompson',
    phone: '555-456-7890',
    email: 'emma@bloomingelegance.com',
    address: '789 Petal Lane, Riverside, CA 90210',
    website: 'www.bloomingelegance.com',
    notes: 'Beautiful arrangements with seasonal flowers. Can work with various budgets.',
    booked: false,
    price: 1500,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 5,
    name: 'Sound Wave DJ Services',
    category: 'music',
    contact: 'James Wilson',
    phone: '555-567-8901',
    email: 'james@soundwave.com',
    address: '456 Beat Street, Riverside, CA 90210',
    website: 'www.soundwavedj.com',
    notes: 'Experienced DJ with extensive music library. Includes lighting setup.',
    booked: false,
    price: 1200,
    image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }, {
    id: 6,
    name: 'Sweet Creations Bakery',
    category: 'cake',
    contact: 'Lisa Garcia',
    phone: '555-678-9012',
    email: 'lisa@sweetcreations.com',
    address: '123 Sugar Street, Riverside, CA 90210',
    website: 'www.sweetcreationsbakery.com',
    notes: 'Amazing custom cakes. Free tasting session included.',
    booked: false,
    price: 500,
    image: 'https://images.unsplash.com/photo-1535254973040-607b474fe152?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
  }];
  // Filter and search vendors
  const filteredVendors = vendors.filter(vendor => {
    const matchesFilter = filter === 'all' || vendor.category === filter;
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) || vendor.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });
  // Count stats
  const totalVendors = vendors.length;
  const bookedVendors = vendors.filter(vendor => vendor.booked).length;
  const totalBudget = vendors.reduce((sum, vendor) => sum + vendor.price, 0);
  return <div className="container mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Vendors
        </h1>
        <p className="text-gray-600">Manage your wedding service providers</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-1">Total Vendors</h3>
          <p className="text-2xl font-bold text-gray-800">{totalVendors}</p>
          <p className="text-sm text-gray-500">
            {bookedVendors} booked / {totalVendors - bookedVendors} pending
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-1">Vendor Budget</h3>
          <p className="text-2xl font-bold text-gray-800">
            ${totalBudget.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">Total allocated for vendors</p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-gray-700 mb-1">Upcoming Meetings</h3>
          <p className="text-2xl font-bold text-gray-800">2</p>
          <p className="text-sm text-gray-500">Next: Cake tasting on May 15</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="overflow-x-auto">
              <div className="flex space-x-2 min-w-max">
                {categories.map(category => <button key={category} onClick={() => setFilter(category)} className={`px-3 py-1 rounded-full text-sm font-medium capitalize whitespace-nowrap ${filter === category ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {category === 'all' ? 'All Vendors' : category}
                  </button>)}
              </div>
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <div className="relative flex-grow">
                <input type="text" placeholder="Search vendors..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
                <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button className="flex items-center bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                <PlusIcon size={16} className="mr-1" />
                Add Vendor
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVendors.map(vendor => <div key={vendor.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                <div className="h-48 overflow-hidden">
                  <img src={vendor.image} alt={vendor.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium text-gray-800">
                        {vendor.name}
                      </h3>
                      <p className="text-sm text-gray-500 capitalize">
                        {vendor.category}
                      </p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${vendor.booked ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                      {vendor.booked ? 'Booked' : 'Pending'}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {vendor.notes}
                  </p>
                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-start">
                      <MailIcon className="h-4 w-4 text-gray-500 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-600">
                        {vendor.email}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <PhoneIcon className="h-4 w-4 text-gray-500 mt-0.5 mr-2" />
                      <span className="text-sm text-gray-600">
                        {vendor.phone}
                      </span>
                    </div>
                    <div className="flex items-start">
                      <MapPinIcon className="h-4 w-4 text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600 line-clamp-1">
                        {vendor.address}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      ${vendor.price.toLocaleString()}
                    </span>
                    <button className="flex items-center text-sm text-rose-600 font-medium">
                      <ExternalLinkIcon size={16} className="mr-1" />
                      Details
                    </button>
                  </div>
                </div>
              </div>)}
            {filteredVendors.length === 0 && <div className="col-span-full p-8 text-center text-gray-500">
                No vendors found matching your criteria.
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default Vendors;