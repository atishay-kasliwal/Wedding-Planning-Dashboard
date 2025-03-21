import React, { useState } from 'react';
import { SearchIcon, MapPinIcon, UsersIcon, DollarSignIcon, ArrowRightIcon } from 'lucide-react';
import VenueDetails from '../components/VenueDetails';
interface WeddingData {
  partner1Name: string;
  partner2Name: string;
  email: string;
  phone: string;
  location: string;
  weddingDate: string;
  guestCount: string;
  budget: string;
}
interface VenueData {
  id: number;
  name: string;
  location: string;
  price: number;
  capacity: number;
  image: string;
  amenities: string[];
  spaces: {
    name: string;
    description: string;
    capacity: number;
    image: string;
  }[];
  portfolio: {
    category: string;
    images: {
      url: string;
      caption: string;
    }[];
  }[];
  reviews: {
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
interface VenueSelectionProps {
  weddingData: WeddingData | null;
  onVenueSelect: (venue: VenueData) => void;
}
const VenueSelection: React.FC<VenueSelectionProps> = ({
  weddingData,
  onVenueSelect
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedVenue, setSelectedVenue] = useState<VenueData | null>(null);
  const [selectedVenueDetails, setSelectedVenueDetails] = useState<VenueData | null>(null);
  const venues = [{
    id: 1,
    name: 'Grand Riverside Hotel',
    location: '123 River Road, Riverside',
    description: 'Elegant ballroom with riverside views and modern amenities. Perfect for both intimate gatherings and grand celebrations.',
    price: 15000,
    capacity: 300,
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    amenities: ['Bridal Suite', 'Outdoor Ceremony Space', 'Indoor Reception Hall', 'Full-Service Kitchen', 'Parking', 'Wheelchair Accessible', 'Dance Floor', 'Audio/Visual Equipment', 'Tables and Chairs Included'],
    spaces: [{
      name: 'Grand Ballroom',
      description: 'Our largest space with crystal chandeliers and riverside views',
      capacity: 300,
      image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    }, {
      name: 'Riverside Garden',
      description: 'Beautiful outdoor space perfect for ceremonies',
      capacity: 200,
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'
    }],
    portfolio: [{
      category: 'Ceremonies',
      images: [{
        url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        caption: 'Garden ceremony setup with floral arch'
      }, {
        url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        caption: 'Indoor ceremony with dramatic lighting'
      }]
    }, {
      category: 'Receptions',
      images: [{
        url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        caption: 'Elegant ballroom setup with round tables'
      }, {
        url: 'https://images.unsplash.com/photo-1529636798458-92914e1540ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
        caption: 'Evening reception with dance floor'
      }]
    }],
    reviews: [{
      author: 'Sarah & James',
      rating: 5,
      comment: 'Absolutely perfect venue for our wedding! The staff was amazing and the riverside views were breathtaking.',
      date: 'June 2023'
    }, {
      author: 'Michael & Emily',
      rating: 4,
      comment: 'Beautiful venue with great amenities. The only minor issue was parking for our guests.',
      date: 'May 2023'
    }]
  }, {
    id: 2,
    name: 'The Garden Estate',
    location: '456 Garden Lane, Meadowville',
    description: 'Beautiful outdoor venue with manicured gardens',
    price: 12000,
    capacity: 200,
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    amenities: [],
    spaces: [],
    portfolio: [],
    reviews: []
  }, {
    id: 3,
    name: 'Historic Chapel & Hall',
    location: '789 Chapel Street, Old Town',
    description: 'Charming historic venue with modern amenities',
    price: 8000,
    capacity: 150,
    image: 'https://images.unsplash.com/photo-1601907289242-bb44b90c4253?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    amenities: [],
    spaces: [],
    portfolio: [],
    reviews: []
  }, {
    id: 4,
    name: 'Seaside Resort',
    location: '321 Beach Road, Coastal City',
    description: 'Stunning beachfront venue with ocean views',
    price: 18000,
    capacity: 250,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80',
    amenities: [],
    spaces: [],
    portfolio: [],
    reviews: []
  }];
  const filteredVenues = venues.filter(venue => venue.name.toLowerCase().includes(searchTerm.toLowerCase()) || venue.location.toLowerCase().includes(searchTerm.toLowerCase()));
  const handleContinue = () => {
    if (selectedVenue) {
      onVenueSelect(selectedVenue);
    }
  };
  return <div className="min-h-screen bg-rose-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Choose Your Perfect Venue
          </h1>
          <p className="text-gray-600">
            Select a venue that matches your vision for the perfect wedding
          </p>
        </div>
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input type="text" placeholder="Search venues by name or location..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
            <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredVenues.map(venue => <div key={venue.id} className={`bg-white rounded-lg overflow-hidden shadow-sm border-2 transition-colors
                ${selectedVenue?.id === venue.id ? 'border-rose-500' : 'border-transparent hover:border-rose-200'}`}>
              <div className="h-48 overflow-hidden">
                <img src={venue.image} alt={venue.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 flex justify-between items-center border-t border-gray-100">
                <button onClick={() => setSelectedVenueDetails(venue)} className="text-rose-600 hover:text-rose-700 font-medium text-sm">
                  View Details
                </button>
                <button onClick={() => setSelectedVenue(venue)} className={`px-4 py-2 rounded-md text-sm font-medium ${selectedVenue?.id === venue.id ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  Select Venue
                </button>
              </div>
            </div>)}
        </div>
        <div className="flex justify-center">
          <button onClick={handleContinue} disabled={!selectedVenue} className={`flex items-center px-6 py-3 rounded-lg font-medium text-white
              ${selectedVenue ? 'bg-rose-600 hover:bg-rose-700' : 'bg-gray-300 cursor-not-allowed'}`}>
            Continue to Event Planning
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
      {selectedVenueDetails && <VenueDetails venue={selectedVenueDetails} onClose={() => setSelectedVenueDetails(null)} onSelect={() => {
      onVenueSelect(selectedVenueDetails);
      setSelectedVenueDetails(null);
    }} />}
    </div>;
};
export default VenueSelection;