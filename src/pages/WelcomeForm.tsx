import React, { useState } from 'react';
import { CalendarIcon, HeartIcon, UsersIcon, DollarSignIcon, MapPinIcon, MailIcon, PhoneIcon } from 'lucide-react';
interface WelcomeFormData {
  partner1Name: string;
  partner2Name: string;
  email: string;
  phone: string;
  location: string;
  weddingDate: string;
  guestCount: string;
  budget: string;
}
interface WelcomeFormProps {
  onComplete: (data: WelcomeFormData) => void;
}
const WelcomeForm: React.FC<WelcomeFormProps> = ({
  onComplete
}) => {
  const [formData, setFormData] = useState<WelcomeFormData>({
    partner1Name: '',
    partner2Name: '',
    email: '',
    phone: '',
    location: '',
    weddingDate: '',
    guestCount: '',
    budget: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <div className="min-h-screen bg-rose-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Left side - Image */}
          <div className="md:w-1/2 relative">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Wedding planning" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h2 className="text-2xl font-serif mb-2">
                  Start Your Wedding Journey
                </h2>
                <p className="text-sm opacity-90">
                  Let us help you plan your perfect day
                </p>
              </div>
            </div>
          </div>
          {/* Right side - Form */}
          <div className="md:w-1/2 p-6 md:p-8">
            <div className="flex items-center mb-6">
              <HeartIcon className="h-8 w-8 text-rose-500" />
              <h1 className="text-2xl font-serif font-bold text-gray-800 ml-2">
                Forever After
              </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partner 1's Name
                  </label>
                  <input type="text" name="partner1Name" required value={formData.partner1Name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Enter name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Partner 2's Name
                  </label>
                  <input type="text" name="partner2Name" required value={formData.partner2Name} onChange={handleChange} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Enter name" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <input type="email" name="email" required value={formData.email} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="your@email.com" />
                    <MailIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <div className="relative">
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="(123) 456-7890" />
                    <PhoneIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wedding Location
                  </label>
                  <div className="relative">
                    <input type="text" name="location" required value={formData.location} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="City, State" />
                    <MapPinIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Wedding Date
                  </label>
                  <div className="relative">
                    <input type="date" name="weddingDate" required value={formData.weddingDate} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" />
                    <CalendarIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Guest Count
                  </label>
                  <div className="relative">
                    <input type="number" name="guestCount" required min="1" value={formData.guestCount} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Number of guests" />
                    <UsersIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Estimated Budget
                  </label>
                  <div className="relative">
                    <input type="number" name="budget" required min="1000" value={formData.budget} onChange={handleChange} className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent" placeholder="Enter amount in dollars" />
                    <DollarSignIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full bg-rose-600 text-white px-6 py-3 rounded-md font-medium hover:bg-rose-700 transition-colors focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                Start Planning Your Wedding
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>;
};
export default WelcomeForm;