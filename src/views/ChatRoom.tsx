import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, MoreVertical, Paperclip, Send, Smile, Phone, Video, Image, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatRoom: React.FC<{ chatId: string; onBack: () => void }> = ({ chatId, onBack }) => {
  const [msg, setMsg] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  const messages = [
    { id: 1, text: "Hey everyone, checking if anyone has a high-res photo of the iPhone 15 Pro Max logic board?", sender: "System", type: "system", time: "10:00 AM" },
    { id: 2, text: "I have it. Let me upload it real quick.", sender: "Alex Chen", type: "other", avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-1-8ae0fd99-1771840848506.webp', time: "10:05 AM" },
    { id: 3, text: "schematic_i15pm.pdf", sender: "Alex Chen", type: "file", fileType: 'pdf', time: "10:06 AM" },
    { id: 4, text: "Absolute legend! This will help with the charging port tracing.", sender: "Me", type: "me", time: "10:07 AM" },
    { id: 5, text: "Make sure to check the CC1 line resistance first.", sender: "Sarah Miller", type: "other", avatar: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/e4ad240e-d356-4787-8ed3-8770c53dd905/technician-profile-2-5516164f-1771840848213.webp', time: "10:10 AM" },
  ];

  useEffect(() => {
    scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
  }, []);

  return (
    <motion.div 
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      className="fixed inset-0 z-[60] bg-white dark:bg-slate-950 flex flex-col"
    >
      {/* Header */}
      <header className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md sticky top-0">
        <button onClick={onBack} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
          <ChevronLeft size={24} />
        </button>
        <div className="flex-1 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">IP</div>
          <div>
            <h3 className="font-bold text-sm leading-none">iPhone 15 Squad</h3>
            <span className="text-[10px] text-green-500 font-medium">12 Online</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
            <Phone size={20} />
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-blue-600">
            <Video size={20} />
          </button>
          <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full text-slate-600 dark:text-slate-300">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950"
      >
        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.type === 'me' ? 'justify-end' : 'justify-start'} ${m.type === 'system' ? 'justify-center' : ''}`}>
            {m.type === 'system' ? (
              <span className="text-[10px] font-medium text-slate-400 bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1 rounded-full">{m.text}</span>
            ) : (
              <div className={`flex gap-2 max-w-[85%] ${m.type === 'me' ? 'flex-row-reverse' : ''}`}>
                {m.type === 'other' && (
                  <img src={m.avatar} className="w-8 h-8 rounded-full mt-1 flex-shrink-0" />
                )}
                <div className="flex flex-col">
                  {m.type === 'other' && <span className="text-[10px] font-medium text-slate-500 mb-1 ml-1">{m.sender}</span>}
                  <div className={`p-3 rounded-2xl text-sm shadow-sm ${
                    m.type === 'me' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-tl-none'
                  }`}>
                    {m.type === 'file' ? (
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-lg text-blue-600">
                          <FileText size={20} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-medium truncate">{m.text}</p>
                          <p className="text-[10px] opacity-70">2.4 MB</p>
                        </div>
                      </div>
                    ) : (
                      m.text
                    )}
                  </div>
                  <span className={`text-[9px] mt-1 text-slate-400 ${m.type === 'me' ? 'text-right mr-1' : 'ml-1'}`}>{m.time}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-end gap-2">
          <button className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
            <Paperclip size={22} />
          </button>
          <div className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2 flex items-center min-h-[44px]">
            <textarea 
              rows={1}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type a message..."
              className="w-full bg-transparent border-none focus:ring-0 text-sm py-1 resize-none scrollbar-hide max-h-32"
            />
            <button className="ml-2 text-slate-400 hover:text-blue-600">
              <Smile size={20} />
            </button>
          </div>
          <motion.button 
            whileTap={{ scale: 0.9 }}
            className={`p-3 rounded-2xl transition-all ${
              msg.trim() ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
            }`}
          >
            <Send size={20} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ChatRoom;