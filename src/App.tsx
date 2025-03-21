import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Checklist from './pages/Checklist';
import Budget from './pages/Budget';
import GuestList from './pages/GuestList';
import Timeline from './pages/Timeline';
import Vendors from './pages/Vendors';
import WelcomeForm from './pages/WelcomeForm';
import VenueSelection from './pages/VenueSelection';
import EventSelection from './pages/EventSelection';
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
export function App() {
  const [setupStep, setSetupStep] = useState<'welcome' | 'venue' | 'events' | 'dashboard'>('welcome');
  const [weddingData, setWeddingData] = useState<WeddingData | null>(null);
  const [selectedVenue, setSelectedVenue] = useState<VenueData | null>(null);
  const [events, setEvents] = useState<EventData[]>([]);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const handleWelcomeComplete = (data: WeddingData) => {
    setWeddingData(data);
    setSetupStep('venue');
  };
  const handleVenueSelect = (venue: VenueData) => {
    setSelectedVenue(venue);
    setSetupStep('events');
  };
  const handleEventsComplete = (eventList: EventData[]) => {
    setEvents(eventList);
    setSetupStep('dashboard');
    setCurrentPage('dashboard');
  };
  const renderSetupStep = () => {
    switch (setupStep) {
      case 'welcome':
        return <WelcomeForm onComplete={handleWelcomeComplete} />;
      case 'venue':
        return <VenueSelection weddingData={weddingData} onVenueSelect={handleVenueSelect} />;
      case 'events':
        return <EventSelection weddingData={weddingData} selectedVenue={selectedVenue} onComplete={handleEventsComplete} />;
      case 'dashboard':
        return <div className="flex flex-col min-h-screen bg-rose-50">
            <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <main className="flex-1 p-4 md:p-6">
              {(() => {
              switch (currentPage) {
                case 'dashboard':
                  return <Dashboard weddingData={weddingData} venue={selectedVenue} events={events} />;
                case 'checklist':
                  return <Checklist />;
                case 'budget':
                  return <Budget />;
                case 'guests':
                  return <GuestList />;
                case 'timeline':
                  return <Timeline />;
                case 'vendors':
                  return <Vendors />;
                default:
                  return <Dashboard weddingData={weddingData} venue={selectedVenue} events={events} />;
              }
            })()}
            </main>
          </div>;
    }
  };
  return renderSetupStep();
}