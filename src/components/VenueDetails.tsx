import React, { useState } from 'react';
import { MapPinIcon, UsersIcon, DollarSignIcon, CheckIcon, StarIcon, XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
interface VenueData {
  id: number;
  name: string;
  location: string;
  price: number;
  capacity: number;
  description: string;
  image: string;
  amenities?: string[];
  spaces?: {
    name: string;
    description: string;
    capacity: number;
    image: string;
  }[];
  portfolio?: {
    category: string;
    images: {
      url: string;
      caption: string;
    }[];
  }[];
  reviews?: {
    author: string;
    rating: number;
    comment: string;
    date: string;
  }[];
}
interface VenueDetailsProps {
  venue: VenueData;
  onClose: () => void;
  onSelect: () => void;
}
const VenueDetails: React.FC<VenueDetailsProps> = ({
  venue,
  onClose,
  onSelect
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'spaces' | 'portfolio' | 'reviews'>('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const portfolioImages = venue.portfolio?.flatMap(category => category.images) || [];
  const hasPortfolioImages = portfolioImages.length > 0;
  const nextImage = () => {
    if (!hasPortfolioImages) return;
    setCurrentImageIndex(prev => (prev + 1) % portfolioImages.length);
  };
  const previousImage = () => {
    if (!hasPortfolioImages) return;
    setCurrentImageIndex(prev => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };
  return <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-serif font-bold text-gray-800">
            {venue.name}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        {/* Navigation Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex space-x-4 px-4">
            {['overview', 'spaces', 'portfolio', 'reviews'].map(tab => <button key={tab} onClick={() => setActiveTab(tab as any)} className={`py-3 border-b-2 font-medium ${activeTab === tab ? 'border-rose-500 text-rose-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}>
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>)}
          </nav>
        </div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'overview' && <div className="space-y-6">
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <img src={venue.image} alt={venue.name} className="object-cover" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPinIcon className="h-5 w-5" />
                  <span>{venue.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <UsersIcon className="h-5 w-5" />
                  <span>Capacity: {venue.capacity} guests</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <DollarSignIcon className="h-5 w-5" />
                  <span>${venue.price.toLocaleString()}</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">
                  Description
                </h3>
                <p className="text-gray-600">{venue.description}</p>
              </div>
              {venue.amenities && <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    Amenities
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {venue.amenities.map((amenity, index) => <div key={index} className="flex items-center space-x-2">
                        <CheckIcon className="h-5 w-5 text-green-500" />
                        <span className="text-gray-600">{amenity}</span>
                      </div>)}
                  </div>
                </div>}
            </div>}
          {activeTab === 'spaces' && venue.spaces && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {venue.spaces.map((space, index) => <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <img src={space.image} alt={space.name} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-1">
                      {space.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">
                      {space.description}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm">
                      <UsersIcon className="h-4 w-4 mr-1" />
                      <span>Up to {space.capacity} guests</span>
                    </div>
                  </div>
                </div>)}
            </div>}
          {activeTab === 'portfolio' && <div className="space-y-6">
              {hasPortfolioImages ? <>
                  <div className="relative aspect-w-16 aspect-h-9">
                    <img src={portfolioImages[currentImageIndex].url} alt={portfolioImages[currentImageIndex].caption} className="rounded-lg object-cover" />
                    <button onClick={previousImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75">
                      <ChevronLeftIcon className="h-6 w-6" />
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75">
                      <ChevronRightIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <p className="text-center text-gray-600">
                    {portfolioImages[currentImageIndex].caption}
                  </p>
                  <div className="grid grid-cols-6 gap-2">
                    {portfolioImages.map((image, index) => <button key={index} onClick={() => setCurrentImageIndex(index)} className={`aspect-w-16 aspect-h-9 rounded-lg overflow-hidden ${currentImageIndex === index ? 'ring-2 ring-rose-500' : ''}`}>
                        <img src={image.url} alt={image.caption} className="object-cover" />
                      </button>)}
                  </div>
                </> : <div className="text-center py-12 text-gray-500">
                  No portfolio images available for this venue.
                </div>}
            </div>}
          {activeTab === 'reviews' && venue.reviews && <div className="space-y-4">
              {venue.reviews.map((review, index) => <div key={index} className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {review.author}
                      </h4>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => <StarIcon key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />)}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>)}
            </div>}
        </div>
        {/* Footer */}
        <div className="p-4 border-t border-gray-200 flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
            Close
          </button>
          <button onClick={onSelect} className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700">
            Select Venue
          </button>
        </div>
      </div>
    </div>;
};
export default VenueDetails;