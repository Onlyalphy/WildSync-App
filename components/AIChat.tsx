import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hello, I am your Wildsync Concierge. How can I help you sync with the wild today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const botMsg: ChatMessage = { id: (Date.now() + 1).toString(), role: 'model', text: responseText };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              onClick={() => setIsOpen(true)}
              className="bg-wild-gold text-wild-dark p-4 rounded-full shadow-2xl hover:bg-white transition-colors duration-300 group"
            >
              <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-full max-w-sm md:max-w-md bg-neutral-900 border border-wild-gold/30 rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[600px] h-[80vh]"
          >
            {/* Header */}
            <div className="bg-neutral-800 p-4 flex justify-between items-center border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-wild-gold/20 rounded-full">
                  <Sparkles size={18} className="text-wild-gold" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-white text-lg">Wildsync AI</h3>
                  <p className="text-xs text-gray-400">Your Personal Travel Concierge</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-neutral-900 scrollbar-thin scrollbar-thumb-wild-gold/20">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-lg text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-wild-gold text-wild-dark font-medium rounded-br-none'
                        : 'bg-neutral-800 text-gray-200 border border-white/5 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-neutral-800 p-4 rounded-lg rounded-bl-none border border-white/5 flex items-center gap-2">
                    <Loader2 size={16} className="text-wild-gold animate-spin" />
                    <span className="text-xs text-gray-400">Consulting the maps...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 bg-neutral-800 border-t border-white/10">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about hikes, castles..."
                  className="flex-1 bg-neutral-900 border border-white/10 rounded-full px-4 py-3 text-sm text-white focus:outline-none focus:border-wild-gold/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="p-3 bg-wild-gold text-wild-dark rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};