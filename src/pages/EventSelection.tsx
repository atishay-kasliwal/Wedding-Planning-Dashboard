import React, { useState } from 'react';
import { PlusIcon, XIcon, CalendarIcon, ClockIcon, UsersIcon, DollarSignIcon, UserIcon, PhoneIcon, ArrowRightIcon } from 'lucide-react';
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
}
interface EventData {
  id: number;
  type: string;
  date: string;
  startTime: string;
  endTime: string;
  guestCount: number;
  budget: number;
  contactPerson: string;
  contactPhone: string;
}
interface EventSelectionProps {
  weddingData: WeddingData | null;
  selectedVenue: VenueData | null;
  onComplete: (events: EventData[]) => void;
}
const EVENT_CATEGORIES = {
  'Pre-Wedding Events': [{
    type: 'Engagement Party',
    description: 'Celebrate your engagement with family and friends'
  }, {
    type: 'Wedding Shower',
    description: 'Traditional pre-wedding celebration with gifts and games'
  }, {
    type: 'Bachelor/Bachelorette Party',
    description: 'Celebration with your wedding party'
  }, {
    type: 'Rehearsal Dinner',
    description: 'Dinner following the wedding rehearsal for wedding party and close family'
  }, {
    type: 'Welcome Party',
    description: 'Casual gathering to welcome out-of-town guests'
  }],
  'Wedding Day Events': [{
    type: 'Getting Ready',
    description: 'Hair, makeup, and preparation with wedding party'
  }, {
    type: 'First Look',
    description: 'Private moment between couple before the ceremony'
  }, {
    type: 'Wedding Ceremony',
    description: 'The main ceremony where you exchange vows'
  }, {
    type: 'Photo Session',
    description: 'Professional photos with family and wedding party'
  }, {
    type: 'Cocktail Hour',
    description: 'Light refreshments and mingling before reception'
  }, {
    type: 'Reception',
    description: 'Main celebration with dinner, dancing, and festivities'
  }, {
    type: 'After Party',
    description: 'Continued celebration after the reception'
  }],
  'Post-Wedding Events': [{
    type: 'Day-After Brunch',
    description: 'Casual brunch to thank guests and say goodbyes'
  }, {
    type: 'Gift Opening Party',
    description: 'Intimate gathering to open wedding gifts'
  }, {
    type: 'Farewell Gathering',
    description: 'Final event before leaving for honeymoon'
  }],
  'Cultural & Religious Events': [{
    type: 'Mehndi Ceremony',
    description: 'Traditional henna application ceremony'
  }, {
    type: 'Tea Ceremony',
    description: 'Traditional Asian tea serving ceremony'
  }, {
    type: 'Ketubah Signing',
    description: 'Jewish marriage contract signing ceremony'
  }, {
    type: 'Sangeet',
    description: 'Indian pre-wedding music and dance celebration'
  }]
};
const EVENT_TYPES = [...Object.values(EVENT_CATEGORIES).flat().map(event => event.type), 'Other'];
const EventSelection: React.FC<EventSelectionProps> = ({
  weddingData,
  selectedVenue,
  onComplete
}) => {
  const [events, setEvents] = useState<EventData[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [currentEvent, setCurrentEvent] = useState<EventData>({
    id: 1,
    type: '',
    date: weddingData?.weddingDate || '',
    startTime: '',
    endTime: '',
    guestCount: Number(weddingData?.guestCount) || 0,
    budget: 0,
    contactPerson: '',
    contactPhone: ''
  });
  const handleAddEvent = () => {
    setCurrentEvent({
      id: events.length + 1,
      type: '',
      date: weddingData?.weddingDate || '',
      startTime: '',
      endTime: '',
      guestCount: Number(weddingData?.guestCount) || 0,
      budget: 0,
      contactPerson: '',
      contactPhone: ''
    });
    setShowForm(true);
  };
  const handleSaveEvent = () => {
    if (currentEvent.id) {
      setEvents([...events, currentEvent]);
    }
    setShowForm(false);
  };
  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(event => event.id !== id));
  };
  const handleComplete = () => {
    onComplete(events);
  };
  return <div className="min-h-screen bg-rose-50 p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Plan Your Wedding Events
          </h1>
          <p className="text-gray-600">
            Add all the events you want to include in your wedding celebration
          </p>
        </div>
        {selectedVenue && <div className="bg-white rounded-lg p-4 mb-8 shadow-sm">
            <h2 className="font-medium text-gray-800 mb-2">Selected Venue</h2>
            <p className="text-gray-600">{selectedVenue.name}</p>
            <p className="text-sm text-gray-500">{selectedVenue.location}</p>
          </div>}
        <div className="space-y-4 mb-8">
          {events.map(event => <div key={event.id} className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-gray-800">{event.type}</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex items-center text-gray-600">
                      <CalendarIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <ClockIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        {event.startTime} - {event.endTime}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <UsersIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">{event.guestCount} guests</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <DollarSignIcon className="h-4 w-4 mr-2" />
                      <span className="text-sm">
                        ${event.budget.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
                <button onClick={() => handleDeleteEvent(event.id)} className="text-gray-400 hover:text-gray-600">
                  <XIcon className="h-5 w-5" />
                </button>
              </div>
            </div>)}
        </div>
        {showForm ? <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
            <h3 className="font-medium text-gray-800 mb-4">Add New Event</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select value={currentEvent.type} onChange={e => setCurrentEvent({
              ...currentEvent,
              type: e.target.value
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500">
                  <option value="">Select event type</option>
                  {Object.entries(EVENT_CATEGORIES).map(([category, events]) => <optgroup key={category} label={category}>
                        {events.map(event => <option key={event.type} value={event.type}>
                            {event.type}
                          </option>)}
                      </optgroup>)}
                  <option value="Other">Other (Custom Event)</option>
                </select>
                {currentEvent.type && currentEvent.type !== 'Other' && <p className="mt-1 text-sm text-gray-500">
                    {Object.values(EVENT_CATEGORIES).flat().find(event => event.type === currentEvent.type)?.description}
                  </p>}
                {currentEvent.type === 'Other' && <input type="text" placeholder="Enter custom event name" className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" onChange={e => setCurrentEvent({
              ...currentEvent,
              type: e.target.value
            })} />}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date
                  </label>
                  <input type="date" value={currentEvent.date} onChange={e => setCurrentEvent({
                ...currentEvent,
                date: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guest Count
                  </label>
                  <input type="number" value={currentEvent.guestCount} onChange={e => setCurrentEvent({
                ...currentEvent,
                guestCount: Number(e.target.value)
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Start Time
                  </label>
                  <input type="time" value={currentEvent.startTime} onChange={e => setCurrentEvent({
                ...currentEvent,
                startTime: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    End Time
                  </label>
                  <input type="time" value={currentEvent.endTime} onChange={e => setCurrentEvent({
                ...currentEvent,
                endTime: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Budget
                </label>
                <input type="number" value={currentEvent.budget} onChange={e => setCurrentEvent({
              ...currentEvent,
              budget: Number(e.target.value)
            })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="Enter amount in dollars" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Person
                  </label>
                  <input type="text" value={currentEvent.contactPerson} onChange={e => setCurrentEvent({
                ...currentEvent,
                contactPerson: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Phone
                  </label>
                  <input type="tel" value={currentEvent.contactPhone} onChange={e => setCurrentEvent({
                ...currentEvent,
                contactPhone: e.target.value
              })} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500" />
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button onClick={() => setShowForm(false)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                  Cancel
                </button>
                <button onClick={handleSaveEvent} className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700">
                  Save Event
                </button>
              </div>
            </div>
          </div> : <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-800 mb-2">
                Suggested Events
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Choose from our curated list of traditional and cultural wedding
                events
              </p>
              <div className="space-y-4">
                {Object.entries(EVENT_CATEGORIES).map(([category, events]) => <div key={category}>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">
                      {category}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {events.map(event => <button key={event.type} onClick={() => {
                  setCurrentEvent({
                    ...currentEvent,
                    type: event.type
                  });
                  setShowForm(true);
                }} className="text-left p-2 rounded-md hover:bg-rose-50 border border-gray-200">
                          <div className="font-medium text-sm">
                            {event.type}
                          </div>
                          <div className="text-xs text-gray-500">
                            {event.description}
                          </div>
                        </button>)}
                    </div>
                  </div>)}
              </div>
            </div>
            <button onClick={handleAddEvent} className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-rose-300 hover:text-rose-500 flex items-center justify-center">
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Custom Event
            </button>
          </div>}
        <div className="mt-8 flex justify-center">
          <button onClick={handleComplete} disabled={events.length === 0} className={`flex items-center px-6 py-3 rounded-lg font-medium text-white
              ${events.length > 0 ? 'bg-rose-600 hover:bg-rose-700' : 'bg-gray-300 cursor-not-allowed'}`}>
            Continue to Dashboard
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </div>;
};
export default EventSelection;