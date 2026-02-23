import React from 'react';
import { LogOut, Shield, Award, MapPin, Briefcase, Star, Settings, ChevronRight, FileText, Bookmark } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="p-6 bg-blue-600 text-white rounded-b-[40px] shadow-lg mb-8">
        <div className="flex justify-between items-start mb-6">
          <button className="p-2 bg-blue-500/50 rounded-xl">
            <Settings size={20} />
          </button>
          <button className="flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md">
            <Shield size={14} />
            Verified Pro
          </button>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-1-8ae0fd99-1771840848506.webp" 
              className="w-28 h-28 rounded-[32px] object-cover border-4 border-white/20 shadow-2xl" 
              alt="Profile"
            />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 p-2 rounded-2xl shadow-lg">
              <Award size={20} className="text-blue-900" />
            </div>
          </div>
          <h2 className="text-2xl font-bold">Alex Chen</h2>
          <p className="text-blue-100 text-sm mt-1">Master Microsoldering Technician</p>
          
          <div className="flex gap-6 mt-6 w-full px-4">
            <div className="flex-1 text-center bg-white/10 py-3 rounded-2xl backdrop-blur-sm">
              <p className="text-xl font-bold">1.2k</p>
              <p className="text-[10px] text-blue-100 uppercase font-semibold">Repairs</p>
            </div>
            <div className="flex-1 text-center bg-white/10 py-3 rounded-2xl backdrop-blur-sm">
              <p className="text-xl font-bold">4.9</p>
              <p className="text-[10px] text-blue-100 uppercase font-semibold">Rating</p>
            </div>
            <div className="flex-1 text-center bg-white/10 py-3 rounded-2xl backdrop-blur-sm">
              <p className="text-xl font-bold">8y</p>
              <p className="text-[10px] text-blue-100 uppercase font-semibold">Exp.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 space-y-8">
        <section>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Specialties</h3>
          <div className="flex flex-wrap gap-2">
            {['IC Replacement', 'Tristar Issues', 'Liquid Damage', 'Data Recovery', 'FPC Connector'].map((tag) => (
              <span key={tag} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-3 py-1.5 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section>
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-2 border border-slate-100 dark:border-slate-700 shadow-sm">
            {[
              { icon: Briefcase, label: 'Work Experience', sub: 'iPhone Specialist @ iFixit' },
              { icon: MapPin, label: 'Location', sub: 'San Francisco, CA' },
              { icon: FileText, label: 'My Repair Guides', sub: '12 Published' },
              { icon: Bookmark, label: 'Saved Schematics', sub: '45 Files' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-4 ${idx !== 3 ? 'border-b border-slate-50 dark:border-slate-700' : ''}`}>
                <div className="p-2 bg-slate-50 dark:bg-slate-700 rounded-xl text-slate-600 dark:text-slate-300">
                  <item.icon size={20} />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{item.label}</p>
                  <p className="text-xs text-slate-500">{item.sub}</p>
                </div>
                <ChevronRight size={18} className="text-slate-300" />
              </div>
            ))}
          </div>
        </section>

        <button className="w-full flex items-center justify-center gap-2 text-red-500 font-bold py-4 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-2xl transition-colors">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Profile;