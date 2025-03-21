import React from 'react';
import { HomeIcon, CheckSquareIcon, DollarSignIcon, UsersIcon, CalendarIcon, ShoppingBagIcon, HeartIcon } from 'lucide-react';
interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}
const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  setCurrentPage
}) => {
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <HomeIcon size={20} />
  }, {
    id: 'checklist',
    label: 'Checklist',
    icon: <CheckSquareIcon size={20} />
  }, {
    id: 'budget',
    label: 'Budget',
    icon: <DollarSignIcon size={20} />
  }, {
    id: 'guests',
    label: 'Guest List',
    icon: <UsersIcon size={20} />
  }, {
    id: 'timeline',
    label: 'Timeline',
    icon: <CalendarIcon size={20} />
  }, {
    id: 'vendors',
    label: 'Vendors',
    icon: <ShoppingBagIcon size={20} />
  }];
  return <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <HeartIcon className="h-6 w-6 text-rose-400 mr-2" />
            <h1 className="text-2xl font-serif font-semibold text-rose-600">
              Forever After
            </h1>
          </div>
          <nav className="flex flex-wrap justify-center">
            {navItems.map(item => <button key={item.id} onClick={() => setCurrentPage(item.id)} className={`flex items-center px-3 py-2 mx-1 rounded-md text-sm font-medium transition-colors
                  ${currentPage === item.id ? 'bg-rose-100 text-rose-700' : 'text-gray-600 hover:bg-rose-50 hover:text-rose-600'}`}>
                <span className="mr-1">{item.icon}</span>
                {item.label}
              </button>)}
          </nav>
        </div>
      </div>
    </header>;
};
export default Navigation;