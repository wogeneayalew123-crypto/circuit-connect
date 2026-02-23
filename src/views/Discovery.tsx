import React, { useState } from 'react';
import { Smartphone, Laptop, Cpu, Wrench, Monitor, Search, ArrowRight, ShieldCheck, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const CATEGORIES = [
  { name: 'Smartphone', icon: Smartphone, color: 'bg-blue-100 text-blue-600' },
  { name: 'Laptop', icon: Laptop, color: 'bg-purple-100 text-purple-600' },
  { name: 'Motherboard', icon: Cpu, color: 'bg-green-100 text-green-600' },
  { name: 'Appliance', icon: Wrench, color: 'bg-orange-100 text-orange-600' },
  { name: 'Vintage', icon: Monitor, color: 'bg-slate-100 text-slate-600' },
];

const Discovery: React.FC = () => {
  return (
    <div className="pb-20">
      <div className="p-4">
        {/* Banner */}
        <div className="relative h-44 rounded-2xl overflow-hidden mb-6">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/repair-tech-banner-0f09d9ee-1771840842358.webp" 
            alt="Repair Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent flex flex-col justify-center p-6 text-white">
            <h2 className="text-2xl font-bold mb-2 font-display">Connect with Experts</h2>
            <p className="text-blue-100 text-sm max-w-[200px]">Join 5,000+ repair professionals sharing knowledge daily.</p>
          </div>
        </div>

        {/* Categories */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Categories</h3>
            <button className="text-blue-600 text-sm font-semibold">See All</button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 overflow-y-hidden scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button 
                key={cat.name}
                onClick={() => toast.info(`Viewing ${cat.name} category`)}
                className="flex flex-col items-center gap-2 min-w-[80px]"
              >
                <div className={`p-3 rounded-2xl ${cat.color} shadow-sm transition-transform active:scale-95`}>
                  <cat.icon size={24} />
                </div>
                <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{cat.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Trending Groups */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Trending Communities</h3>
          </div>
          <div className="space-y-4">
            {[
              { id: '1', name: 'iPhone Microsoldering', members: '2.4k', tag: 'Expert', icon: Smartphone },
              { id: '2', name: 'MacBook Repair Pros', members: '1.8k', tag: 'Advanced', icon: Laptop },
              { id: '3', name: 'Console Fix Network', members: '950', tag: 'Hobbyist', icon: Cpu },
            ].map((group) => (
              <motion.div 
                whileTap={{ scale: 0.98 }}
                key={group.id} 
                onClick={() => toast.success(`Request sent to join ${group.name}`)}
                className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 shadow-sm cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center text-blue-600">
                  <group.icon size={24} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-900 dark:text-white">{group.name}</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-slate-500 dark:text-slate-400">{group.members} members</span>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-xs font-medium text-blue-500">{group.tag}</span>
                  </div>
                </div>
                <button className="p-2 bg-slate-50 dark:bg-slate-700 rounded-full text-blue-600">
                  <ArrowRight size={20} />
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Recommended Technicians */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">Featured Experts</h3>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 overflow-y-hidden scrollbar-hide">
            {[
              { id: '1', name: 'Alex Chen', role: 'Microsoldering', rating: 4.9, avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-1-8ae0fd99-1771840848506.webp' },
              { id: '2', name: 'Sarah Miller', role: 'Laptop Specialist', rating: 5.0, avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-2-5516164f-1771840848213.webp' },
            ].map((tech) => (
              <div 
                key={tech.id} 
                onClick={() => toast.info(`Viewing ${tech.name}'s profile`)}
                className="min-w-[160px] bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 text-center shadow-sm cursor-pointer"
              >
                <div className="relative inline-block mb-2">
                  <img src={tech.avatar} alt={tech.name} className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-slate-700" />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 p-1 rounded-full border-2 border-white dark:border-slate-800">
                    <ShieldCheck size={10} className="text-white" />
                  </div>
                </div>
                <h5 className="font-bold text-sm text-slate-900 dark:text-white truncate">{tech.name}</h5>
                <p className="text-[10px] text-slate-500 mb-2">{tech.role}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-xs font-bold">{tech.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Discovery;