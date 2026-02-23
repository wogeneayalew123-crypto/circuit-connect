import React from 'react';
import { Bell, Search, Settings } from 'lucide-react';

interface HeaderProps {
  title: string;
  showSearch?: boolean;
}

const Header: React.FC<HeaderProps> = ({ title, showSearch = true }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md px-4 py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h1>
        <div className="flex items-center gap-4">
          {showSearch && (
            <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <Search size={20} className="text-slate-600 dark:text-slate-300" />
            </button>
          )}
          <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors relative">
            <Bell size={20} className="text-slate-600 dark:text-slate-300" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;