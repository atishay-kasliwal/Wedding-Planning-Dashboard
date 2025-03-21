import React from 'react';
import { DollarSignIcon, PlusIcon } from 'lucide-react';
const Budget = () => {
  // Sample budget data
  const totalBudget = 25000;
  const spentBudget = 12500;
  const remainingBudget = totalBudget - spentBudget;
  const categories = [{
    name: 'Venue',
    budget: 10000,
    spent: 8000
  }, {
    name: 'Catering',
    budget: 5000,
    spent: 2500
  }, {
    name: 'Photography',
    budget: 3000,
    spent: 1000
  }, {
    name: 'Attire',
    budget: 2000,
    spent: 500
  }, {
    name: 'Decorations',
    budget: 1500,
    spent: 500
  }, {
    name: 'Music',
    budget: 1500,
    spent: 0
  }, {
    name: 'Flowers',
    budget: 1000,
    spent: 0
  }, {
    name: 'Invitations',
    budget: 500,
    spent: 0
  }, {
    name: 'Miscellaneous',
    budget: 500,
    spent: 0
  }];
  return <div className="container mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Wedding Budget
        </h1>
        <p className="text-gray-600">Track your expenses and stay on budget</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <DollarSignIcon className="h-5 w-5 text-emerald-500 mr-2" />
            <h3 className="font-medium text-gray-700">Total Budget</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            ${totalBudget.toLocaleString()}
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <DollarSignIcon className="h-5 w-5 text-rose-500 mr-2" />
            <h3 className="font-medium text-gray-700">Spent</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            ${spentBudget.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            {Math.round(spentBudget / totalBudget * 100)}% of total budget
          </p>
        </div>
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center mb-1">
            <DollarSignIcon className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="font-medium text-gray-700">Remaining</h3>
          </div>
          <p className="text-2xl font-bold text-gray-800">
            ${remainingBudget.toLocaleString()}
          </p>
          <p className="text-sm text-gray-500">
            {Math.round(remainingBudget / totalBudget * 100)}% of total budget
          </p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">Budget Overview</h3>
          <div className="h-4 w-full max-w-xs bg-gray-200 rounded-full">
            <div className="h-4 bg-rose-500 rounded-full" style={{
            width: `${spentBudget / totalBudget * 100}%`
          }}></div>
          </div>
        </div>
        <div className="p-4">
          <div className="w-full bg-gray-50 rounded-lg p-4">
            <div className="flex flex-wrap -mx-2">
              {categories.map((category, index) => <div key={index} className="px-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mb-4">
                  <div className="h-20 rounded-lg flex items-center justify-center p-2 text-center" style={{
                backgroundColor: `hsl(${index * 36}, 70%, 90%)`,
                borderColor: `hsl(${index * 36}, 70%, 80%)`,
                borderWidth: '1px'
              }}>
                    <div>
                      <p className="text-xs font-medium" style={{
                    color: `hsl(${index * 36}, 70%, 30%)`
                  }}>
                        {category.name}
                      </p>
                      <p className="text-sm font-bold" style={{
                    color: `hsl(${index * 36}, 70%, 40%)`
                  }}>
                        ${category.budget.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">Budget Breakdown</h3>
          <button className="flex items-center text-sm font-medium text-rose-600">
            <PlusIcon size={16} className="mr-1" />
            Add Expense
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Budget
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Spent
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Remaining
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {categories.map((category, index) => <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-800">
                      {category.name}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">
                      ${category.budget.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">
                      ${category.spent.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-800">
                      ${(category.budget - category.spent).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${category.spent > category.budget ? 'bg-red-500' : 'bg-emerald-500'}`} style={{
                    width: `${Math.min(100, category.spent / category.budget * 100)}%`
                  }}></div>
                    </div>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
export default Budget;