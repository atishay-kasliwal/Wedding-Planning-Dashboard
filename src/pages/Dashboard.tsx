import React from 'react';
import { CalendarIcon, CheckSquareIcon, UsersIcon, DollarSignIcon } from 'lucide-react';
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
interface DashboardProps {
  weddingData?: WeddingData | null;
}
const Dashboard: React.FC<DashboardProps> = ({
  weddingData
}) => {
  // Sample data - in a real app, this would come from state or props
  const daysLeft = 124;
  const completedTasks = 18;
  const totalTasks = 42;
  const confirmedGuests = 64;
  const invitedGuests = 150;
  const budgetSpent = 12500;
  const totalBudget = 25000;
  const upcomingTasks = [{
    id: 1,
    task: 'Book photographer',
    dueDate: '2 weeks',
    category: 'Vendors'
  }, {
    id: 2,
    task: 'Send save-the-dates',
    dueDate: '3 weeks',
    category: 'Guests'
  }, {
    id: 3,
    task: 'Schedule cake tasting',
    dueDate: '1 month',
    category: 'Food'
  }, {
    id: 4,
    task: 'Book makeup artist',
    dueDate: '1 month',
    category: 'Beauty'
  }];
  return <div className="container mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Welcome to Your Wedding Planner
        </h1>
        <p className="text-lg text-gray-600">
          {weddingData ? `${weddingData.partner1Name} & ${weddingData.partner2Name} • ${new Date(weddingData.weddingDate).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        })}` : 'Your Wedding'}
        </p>
        <div className="mt-3 inline-block bg-rose-100 text-rose-700 px-4 py-2 rounded-full font-medium">
          {daysLeft} days until your wedding!
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <CheckSquareIcon className="h-5 w-5 text-emerald-500 mr-2" />
            <h3 className="font-medium text-gray-700">Tasks Progress</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {completedTasks}/{totalTasks}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-emerald-500 h-2.5 rounded-full" style={{
            width: `${completedTasks / totalTasks * 100}%`
          }}></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <UsersIcon className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium text-gray-700">Guest Responses</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            {confirmedGuests}/{invitedGuests}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{
            width: `${confirmedGuests / invitedGuests * 100}%`
          }}></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <DollarSignIcon className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="font-medium text-gray-700">Budget Status</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            ${budgetSpent.toLocaleString()}/${totalBudget.toLocaleString()}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div className="bg-amber-500 h-2.5 rounded-full" style={{
            width: `${budgetSpent / totalBudget * 100}%`
          }}></div>
          </div>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-3">
            <CalendarIcon className="h-5 w-5 text-purple-500 mr-2" />
            <h3 className="font-medium text-gray-700">Next Milestone</h3>
          </div>
          <p className="text-lg font-medium text-gray-800">Venue Visit</p>
          <p className="text-sm text-gray-600">May 28, 2024 • 2:00 PM</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg text-gray-800 mb-4">
            Upcoming Tasks
          </h3>
          <div className="space-y-3">
            {upcomingTasks.map(task => <div key={task.id} className="flex items-center justify-between border-b border-gray-100 pb-3">
                <div>
                  <p className="font-medium text-gray-800">{task.task}</p>
                  <p className="text-sm text-gray-500">
                    {task.category} • Due in {task.dueDate}
                  </p>
                </div>
                <button className="text-sm bg-rose-50 hover:bg-rose-100 text-rose-600 py-1 px-3 rounded transition-colors">
                  Complete
                </button>
              </div>)}
          </div>
          <button className="mt-4 text-rose-600 font-medium text-sm flex items-center">
            View all tasks
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-medium text-lg text-gray-800 mb-4">
            Wedding Inspiration
          </h3>
          <div className="grid grid-cols-3 gap-3">
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding flowers" className="w-full h-24 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1529636798458-92914e1540ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding cake" className="w-full h-24 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding decorations" className="w-full h-24 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding venue" className="w-full h-24 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding dress" className="w-full h-24 object-cover rounded-md" />
            <img src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="Wedding rings" className="w-full h-24 object-cover rounded-md" />
          </div>
          <button className="mt-4 text-rose-600 font-medium text-sm flex items-center">
            View all inspiration
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>;
};
export default Dashboard;