import React from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from 'lucide-react';
const Timeline = () => {
  // Sample timeline data
  const events = [{
    id: 1,
    date: 'September 15, 2024',
    time: '4:00 PM',
    title: 'Wedding Ceremony',
    location: "St. Mary's Church, 123 Main St",
    description: 'Exchange of vows and rings.',
    type: 'ceremony'
  }, {
    id: 2,
    date: 'September 15, 2024',
    time: '5:30 PM',
    title: 'Cocktail Hour',
    location: 'Grand Ballroom Foyer, Riverside Hotel',
    description: "Drinks and hors d'oeuvres will be served.",
    type: 'reception'
  }, {
    id: 3,
    date: 'September 15, 2024',
    time: '6:30 PM',
    title: 'Reception',
    location: 'Grand Ballroom, Riverside Hotel',
    description: 'Dinner and dancing to follow.',
    type: 'reception'
  }, {
    id: 4,
    date: 'September 14, 2024',
    time: '6:00 PM',
    title: 'Rehearsal Dinner',
    location: 'Bella Restaurant, 456 Park Ave',
    description: 'Dinner for wedding party and immediate family.',
    type: 'pre-wedding'
  }, {
    id: 5,
    date: 'September 16, 2024',
    time: '10:00 AM',
    title: 'Post-Wedding Brunch',
    location: 'Garden Terrace, Riverside Hotel',
    description: 'Casual brunch for out-of-town guests.',
    type: 'post-wedding'
  }];
  // Group events by date
  const groupedEvents = events.reduce((acc, event) => {
    if (!acc[event.date]) {
      acc[event.date] = [];
    }
    acc[event.date].push(event);
    return acc;
  }, {});
  // Sort dates
  const sortedDates = Object.keys(groupedEvents).sort((a, b) => {
    return new Date(a).getTime() - new Date(b).getTime();
  });
  return <div className="container mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Wedding Timeline
        </h1>
        <p className="text-gray-600">Schedule of events for your special day</p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="mb-8 flex items-center justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button className="px-4 py-2 text-sm font-medium bg-rose-100 text-rose-700 border border-rose-200 rounded-l-lg">
              All Events
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 hover:bg-gray-50">
              Pre-Wedding
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 hover:bg-gray-50">
              Ceremony
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 hover:bg-gray-50">
              Reception
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-white text-gray-700 border-t border-b border-r border-gray-200 rounded-r-lg hover:bg-gray-50">
              Post-Wedding
            </button>
          </div>
        </div>
        <div className="space-y-12">
          {sortedDates.map((date, dateIndex) => <div key={date} className="relative">
              <div className="sticky top-0 bg-white z-10 mb-4 flex items-center">
                <div className="h-px flex-grow bg-gray-200"></div>
                <div className="mx-4 flex-shrink-0 bg-rose-100 text-rose-800 px-4 py-1 rounded-full font-medium">
                  {date}
                </div>
                <div className="h-px flex-grow bg-gray-200"></div>
              </div>
              <div className="ml-6 space-y-6">
                {groupedEvents[date].map((event, eventIndex) => <div key={event.id} className="relative">
                    <div className="absolute -left-10 mt-1.5">
                      <div className={`h-6 w-6 rounded-full border-4 border-white ${event.type === 'ceremony' ? 'bg-rose-500' : event.type === 'reception' ? 'bg-amber-500' : event.type === 'pre-wedding' ? 'bg-blue-500' : 'bg-green-500'}`}></div>
                    </div>
                    <div className={`p-4 rounded-lg border ${event.type === 'ceremony' ? 'border-rose-200 bg-rose-50' : event.type === 'reception' ? 'border-amber-200 bg-amber-50' : event.type === 'pre-wedding' ? 'border-blue-200 bg-blue-50' : 'border-green-200 bg-green-50'}`}>
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-800">
                          {event.title}
                        </h3>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600">
                            {event.time}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-start">
                        <MapPinIcon className="h-5 w-5 text-gray-500 mr-1 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-600">
                          {event.location}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-600">
                        {event.description}
                      </p>
                      <div className="mt-4 flex justify-end">
                        <button className="text-sm text-rose-600 hover:text-rose-800 font-medium">
                          Edit Event
                        </button>
                      </div>
                    </div>
                    {eventIndex < groupedEvents[date].length - 1 && <div className="absolute h-full left-[-38px] top-6 border-l-2 border-dashed border-gray-200"></div>}
                  </div>)}
              </div>
              {dateIndex < sortedDates.length - 1 && <div className="h-px w-full bg-gray-100 my-6"></div>}
            </div>)}
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-rose-600 hover:bg-rose-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
            <CalendarIcon size={16} className="mr-2" />
            Add New Event
          </button>
        </div>
      </div>
    </div>;
};
export default Timeline;