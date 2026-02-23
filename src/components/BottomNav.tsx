import React from 'react';
import { Home, MessageSquare, Video, User, Search } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'discovery', icon: Home, label: 'Home' },
    { id: 'chats', icon: MessageSquare, label: 'Chats' },
    { id: 'calls', icon: Video, label: 'Calls' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 px-6 py-2 flex justify-between items-center z-50 pb-safe">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === item.id 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-slate-500 dark:text-slate-400'
          }`}
        >
          <item.icon size={24} />
          <span className="text-xs font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;