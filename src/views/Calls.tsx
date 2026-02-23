import React from 'react';
import { Video, Phone, History, Users, Plus, Play, MoreHorizontal } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Calls: React.FC = () => {
  const handleJoinCall = () => {
    toast.loading('Connecting to Multi-Meter Workshop...', {
      duration: 2000,
      onAutoClose: () => toast.success('Joined call! Microphones and cameras active.'),
    });
  };

  return (
    <div className="pb-20">
      <div className="p-4">
        {/* Active Session Card */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-xl shadow-blue-200 dark:shadow-none mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full inline-block animate-pulse mb-2 uppercase tracking-wider">Live Now</div>
              <h3 className="text-xl font-bold leading-tight">Multi-Meter Workshop</h3>
              <p className="text-blue-100 text-xs mt-1">8 experts troubleshooting live</p>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-400 bg-slate-300 overflow-hidden ring-2 ring-blue-600/20">
                   <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-blue-400 bg-blue-500 flex items-center justify-center text-[10px] font-bold ring-2 ring-blue-600/20 shadow-lg">+5</div>
            </div>
          </div>
          <button 
            onClick={handleJoinCall}
            className="w-full bg-white text-blue-600 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 active:scale-[0.97] transition-all hover:bg-blue-50"
          >
            <Play size={20} fill="currentColor" />
            Join Call
          </button>
        </div>

        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => toast.info('Starting new private call...')}
            className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl text-blue-600">
              <Plus size={24} />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">New Call</span>
          </button>
          <button 
            onClick={() => toast.info('Creating new room configuration...')}
            className="flex-1 bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex flex-col items-center gap-2 shadow-sm transition-transform active:scale-95"
          >
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-2xl text-purple-600">
              <Users size={24} />
            </div>
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">Create Room</span>
          </button>
        </div>

        <section>
          <div className="flex justify-between items-center mb-6 px-1">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Recent Calls</h3>
            <History size={18} className="text-slate-400" />
          </div>
          <div className="space-y-5">
            {[
              { id: 1, name: 'Alex Chen', type: 'Video', time: 'Today, 2:30 PM', status: 'incoming', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-1-8ae0fd99-1771840848506.webp' },
              { id: 2, name: 'Motherboard Pros', type: 'Group', time: 'Yesterday, 11:15 AM', status: 'missed', avatar: 'MP' },
              { id: 3, name: 'Sarah Miller', type: 'Audio', time: 'Yesterday, 9:00 AM', status: 'outgoing', avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-2-5516164f-1771840848213.webp' },
            ].map((call) => (
              <div key={call.id} className="flex items-center gap-4 px-1 group cursor-pointer" onClick={() => toast.info(`Calling ${call.name}...`)}>
                <div className="relative">
                  {call.type === 'Group' ? (
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-slate-500 text-lg">{call.avatar}</div>
                  ) : (
                    <img src={call.avatar} className="w-14 h-14 rounded-2xl object-cover shadow-sm" alt={call.name} />
                  )}
                  <div className={`absolute -bottom-1 -right-1 p-1 rounded-full border-2 border-white dark:border-slate-900 shadow-sm ${
                    call.status === 'missed' ? 'bg-red-500' : 'bg-green-500'
                  }`}>
                    {call.type === 'Video' ? <Video size={12} className="text-white" /> : <Phone size={12} className="text-white" />}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base text-slate-900 dark:text-white leading-tight">{call.name}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{call.time}</p>
                </div>
                <button className="p-3 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calls;