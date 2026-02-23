import React from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, CheckCheck } from 'lucide-react';

const Chats: React.FC<{ onOpenChat: (id: string) => void }> = ({ onOpenChat }) => {
  const chatList = [
    { id: 'g1', name: 'iPhone 15 Repair Squad', lastMsg: 'Does anyone have the schematic for the U2 chip?', time: '10:45 AM', unread: 3, isGroup: true, avatar: 'IP' },
    { id: 'g2', name: 'MacBook M2 Power Issues', lastMsg: 'Verified: It was a shorted capacitor on PPBUS_G3H', time: 'Yesterday', unread: 0, isGroup: true, avatar: 'MB' },
    { id: 'p1', name: 'Alex Chen', lastMsg: 'Sent a file: schematic_v2.pdf', time: '2 days ago', unread: 0, isGroup: false, avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-1-8ae0fd99-1771840848506.webp' },
    { id: 'p2', name: 'Sarah Miller', lastMsg: 'Thanks for the help yesterday!', time: 'Mon', unread: 0, isGroup: false, avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-2-5516164f-1771840848213.webp' },
  ];

  return (
    <div className="pb-20">
      <div className="p-4 flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search chats..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
        </div>
        <button className="p-2 bg-blue-600 text-white rounded-xl shadow-lg shadow-blue-200 dark:shadow-none">
          <Plus size={24} />
        </button>
      </div>

      <div className="px-4 py-2 flex gap-4 overflow-x-auto scrollbar-hide">
        {['All', 'Groups', 'Private', 'Unread'].map((filter) => (
          <button 
            key={filter}
            className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              filter === 'All' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {chatList.map((chat) => (
          <motion.div
            key={chat.id}
            whileTap={{ backgroundColor: 'rgba(0,0,0,0.05)' }}
            onClick={() => onOpenChat(chat.id)}
            className="px-4 py-3 flex items-center gap-4 cursor-pointer"
          >
            <div className="relative">
              {chat.isGroup ? (
                <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 font-bold text-xl">
                  {chat.avatar}
                </div>
              ) : (
                <img src={chat.avatar} className="w-14 h-14 rounded-2xl object-cover" alt={chat.name} />
              )}
              {chat.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-[10px] font-bold rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-0.5">
                <h4 className="font-bold text-slate-900 dark:text-white truncate">{chat.name}</h4>
                <span className="text-xs text-slate-500 dark:text-slate-400 whitespace-nowrap">{chat.time}</span>
              </div>
              <div className="flex items-center gap-1">
                {chat.unread === 0 && <CheckCheck size={14} className="text-blue-500" />}
                <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                  {chat.lastMsg}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Chats;