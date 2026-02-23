import React, { useState } from 'react';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Header from './components/Header';
import Discovery from './views/Discovery';
import Chats from './views/Chats';
import Calls from './views/Calls';
import Profile from './views/Profile';
import ChatRoom from './views/ChatRoom';
import { Moon, Sun } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discovery');
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'discovery': return <Discovery />;
      case 'chats': return <Chats onOpenChat={(id) => setSelectedChat(id)} />;
      case 'calls': return <Calls />;
      case 'profile': return <Profile />;
      default: return <Discovery />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case 'discovery': return 'WAARepairConnect';
      case 'chats': return 'Messages';
      case 'calls': return 'Video Calls';
      case 'profile': return 'My Profile';
      default: return 'WAARepairConnect';
    }
  };

  if (showOnboarding) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center p-8 text-center transition-colors duration-500">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xs"
        >
          <img src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/app-icon-9d27d2f2-1771840845507.webp" className="w-32 h-32 mx-auto mb-8 rounded-3xl shadow-2xl" alt="Logo" />
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-4">Master Your Craft</h1>
          <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
            Collaborate with top electronics repair experts worldwide in real-time.
          </p>
          <div className="space-y-4">
            <button 
              onClick={() => setShowOnboarding(false)}
              className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-200 transition-transform active:scale-95"
            >
              Get Started
            </button>
            <p className="text-sm text-slate-400">
              New here? <span className="text-blue-600 font-bold">Create an account</span>
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-blue-100 transition-colors duration-300`}>
      <div className="max-w-md mx-auto min-h-screen bg-white dark:bg-slate-900 relative shadow-2xl shadow-slate-200 dark:shadow-none">
        
        {/* Header with Dark Mode Toggle */}
        <div className="sticky top-0 z-40">
          <Header title={getTitle()} />
          <button 
            onClick={toggleDarkMode}
            className="absolute right-16 top-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:scale-110 active:scale-95"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
        
        <main className="min-h-[calc(100vh-140px)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.15 }}
            >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </main>

        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />

        <AnimatePresence>
          {selectedChat && (
            <ChatRoom 
              chatId={selectedChat} 
              onBack={() => setSelectedChat(null)} 
            />
          )}
        </AnimatePresence>

        <Toaster position="top-center" expand={false} richColors />
      </div>
    </div>
  );
};

export default App;