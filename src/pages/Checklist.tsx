import React, { useState } from 'react';
import { CheckCircleIcon, CircleIcon, PlusIcon } from 'lucide-react';
const Checklist = () => {
  const categories = ['All', '12+ Months', '9 Months', '6 Months', '3 Months', '1 Month', 'Week Of'];
  const [activeCategory, setActiveCategory] = useState('All');
  const tasks = [{
    id: 1,
    task: 'Set wedding date',
    completed: true,
    category: '12+ Months'
  }, {
    id: 2,
    task: 'Create budget',
    completed: true,
    category: '12+ Months'
  }, {
    id: 3,
    task: 'Choose wedding party',
    completed: true,
    category: '12+ Months'
  }, {
    id: 4,
    task: 'Book venue',
    completed: true,
    category: '12+ Months'
  }, {
    id: 5,
    task: 'Book caterer',
    completed: false,
    category: '9 Months'
  }, {
    id: 6,
    task: 'Book photographer',
    completed: false,
    category: '9 Months'
  }, {
    id: 7,
    task: 'Book florist',
    completed: false,
    category: '9 Months'
  }, {
    id: 8,
    task: 'Order wedding dress',
    completed: false,
    category: '9 Months'
  }, {
    id: 9,
    task: 'Choose wedding theme and colors',
    completed: false,
    category: '6 Months'
  }, {
    id: 10,
    task: 'Order invitations',
    completed: false,
    category: '6 Months'
  }, {
    id: 11,
    task: 'Book DJ or band',
    completed: false,
    category: '6 Months'
  }, {
    id: 12,
    task: 'Plan honeymoon',
    completed: false,
    category: '6 Months'
  }, {
    id: 13,
    task: 'Send invitations',
    completed: false,
    category: '3 Months'
  }, {
    id: 14,
    task: 'Order wedding cake',
    completed: false,
    category: '3 Months'
  }, {
    id: 15,
    task: 'Purchase wedding rings',
    completed: false,
    category: '3 Months'
  }, {
    id: 16,
    task: 'Schedule hair and makeup trials',
    completed: false,
    category: '3 Months'
  }, {
    id: 17,
    task: 'Confirm details with all vendors',
    completed: false,
    category: '1 Month'
  }, {
    id: 18,
    task: 'Create seating chart',
    completed: false,
    category: '1 Month'
  }, {
    id: 19,
    task: 'Write vows',
    completed: false,
    category: '1 Month'
  }, {
    id: 20,
    task: 'Pick up wedding dress',
    completed: false,
    category: '1 Month'
  }, {
    id: 21,
    task: 'Get marriage license',
    completed: false,
    category: 'Week Of'
  }, {
    id: 22,
    task: 'Pack for honeymoon',
    completed: false,
    category: 'Week Of'
  }, {
    id: 23,
    task: 'Prepare final payments for vendors',
    completed: false,
    category: 'Week Of'
  }, {
    id: 24,
    task: 'Rehearsal dinner',
    completed: false,
    category: 'Week Of'
  }];
  const [taskList, setTaskList] = useState(tasks);
  const toggleTask = (id: number) => {
    setTaskList(taskList.map(task => task.id === id ? {
      ...task,
      completed: !task.completed
    } : task));
  };
  const filteredTasks = activeCategory === 'All' ? taskList : taskList.filter(task => task.category === activeCategory);
  const completedCount = filteredTasks.filter(task => task.completed).length;
  const progress = filteredTasks.length > 0 ? Math.round(completedCount / filteredTasks.length * 100) : 0;
  return <div className="container mx-auto">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
          Wedding Checklist
        </h1>
        <p className="text-gray-600">
          Track all your wedding planning tasks in one place
        </p>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 p-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-medium text-gray-800">Your Progress</h3>
            <p className="text-sm text-gray-600">
              {completedCount} of {filteredTasks.length} tasks completed
            </p>
          </div>
          <div className="text-2xl font-bold text-rose-600">{progress}%</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-rose-500 h-2.5 rounded-full transition-all duration-500" style={{
          width: `${progress}%`
        }}></div>
        </div>
      </div>
      <div className="mb-6 overflow-x-auto">
        <div className="flex space-x-2 min-w-max">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap ${activeCategory === category ? 'bg-rose-100 text-rose-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              {category}
            </button>)}
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-medium text-gray-800">
            {activeCategory === 'All' ? 'All Tasks' : `${activeCategory} Tasks`}
          </h3>
          <button className="flex items-center text-sm font-medium text-rose-600">
            <PlusIcon size={16} className="mr-1" />
            Add Task
          </button>
        </div>
        <div className="divide-y divide-gray-100">
          {filteredTasks.length > 0 ? filteredTasks.map(task => <div key={task.id} className="p-4 flex items-center">
                <button onClick={() => toggleTask(task.id)} className="mr-3 text-rose-500">
                  {task.completed ? <CheckCircleIcon size={20} className="text-rose-500 fill-rose-500" /> : <CircleIcon size={20} className="text-gray-300" />}
                </button>
                <span className={`flex-grow ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                  {task.task}
                </span>
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                  {task.category}
                </span>
              </div>) : <div className="p-8 text-center text-gray-500">
              No tasks found for this timeframe.
            </div>}
        </div>
      </div>
    </div>;
};
export default Checklist;