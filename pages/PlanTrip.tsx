
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { InquiryFormState } from '../types';
import { PHONE_NUMBER } from '../constants';

const STEPS = [
  { id: 1, title: "The Traveller", subtitle: "Who is coming with you?" },
  { id: 2, title: "The Vibe", subtitle: "What are you chasing?" },
  { id: 3, title: "The Details", subtitle: "Logistics & Preferences" },
  { id: 4, title: "Contact", subtitle: "How do we reach you?" }
];

export const PlanTrip: React.FC = () => {
  const [formState, setFormState] = useState<InquiryFormState>({
    step: 1,
    profile: '',
    vibe: [],
    duration: '',
    budget: '',
    dates: '',
    name: '',
    email: '',
    phone: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setFormState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setFormState(prev => ({ ...prev, step: prev.step - 1 }));

  const toggleVibe = (v: string) => {
    setFormState(prev => {
      const vibes = prev.vibe.includes(v) 
        ? prev.vibe.filter(i => i !== v) 
        : [...prev.vibe, v];
      return { ...prev, vibe: vibes };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const phoneNumber = "254701513729"; // Specific number requested
    const message = `
*New Trip Inquiry - Wildsync Adventures*
--------------------------------
*Client Name:* ${formState.name}
*Client Email:* ${formState.email}
*Client Phone:* ${formState.phone}
--------------------------------
*Traveller Profile:* ${formState.profile}
*Experience Vibe:* ${formState.vibe.join(', ')}
*Preferred Dates:* ${formState.dates}
*Duration:* ${formState.duration}
*Budget:* ${formState.budget || 'Not specified'}
--------------------------------
*Sent via Wildsync Website*
    `;
    
    const encodedMessage = encodeURIComponent(message.trim());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
    window.scrollTo(0,0);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-wild-dark flex items-center justify-center p-4">
        <div className="max-w-xl w-full text-center">
          <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="w-20 h-20 bg-wild-gold rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Check size={40} className="text-wild-dark" />
          </motion.div>
          <h2 className="font-serif text-4xl text-white mb-4">Request Sent</h2>
          <p className="text-gray-400 mb-8">
            Thank you, {formState.name}. We have formatted your inquiry for WhatsApp.<br/>
            Please check your phone to complete sending the message to us.<br/>
            An adventure specialist will respond shortly.
          </p>
          <a href="/" className="inline-block px-8 py-3 bg-transparent border border-white text-white uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors">
            Return Home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 min-h-screen bg-wild-dark">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Progress Bar */}
        <div className="flex justify-between items-center mb-16 relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -z-10" />
          {STEPS.map((s) => (
            <div key={s.id} className="flex flex-col items-center bg-wild-dark px-2">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-sm font-bold transition-colors duration-300 ${
                  formState.step >= s.id 
                    ? 'bg-wild-gold border-wild-gold text-wild-dark' 
                    : 'bg-neutral-900 border-white/20 text-gray-500'
                }`}
              >
                {s.id}
              </div>
              <span className="hidden md:block mt-2 text-xs uppercase tracking-wider text-gray-500">{s.title}</span>
            </div>
          ))}
        </div>

        <div className="bg-neutral-900 border border-white/5 p-8 md:p-12 rounded-sm shadow-2xl">
          <h2 className="font-serif text-3xl text-white mb-2">{STEPS[formState.step - 1].title}</h2>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">{STEPS[formState.step - 1].subtitle}</p>

          <AnimatePresence mode="wait">
            <motion.div
              key={formState.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {formState.step === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Solo Adventurer', 'Couple/Honeymoon', 'Family', 'Corporate Team'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => setFormState(prev => ({ ...prev, profile: opt }))}
                      className={`p-6 text-left border transition-all ${
                        formState.profile === opt 
                          ? 'border-wild-gold bg-wild-gold/10 text-white' 
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span className="block text-lg font-serif">{opt}</span>
                    </button>
                  ))}
                </div>
              )}

              {formState.step === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {['Adrenaline (Hiking)', 'Relaxed (Lodges)', 'Classic Safari', 'Heritage & History'].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => toggleVibe(opt)}
                      className={`p-6 text-left border transition-all flex justify-between items-center ${
                        formState.vibe.includes(opt) 
                          ? 'border-wild-gold bg-wild-gold/10 text-white' 
                          : 'border-white/10 text-gray-400 hover:border-white/30'
                      }`}
                    >
                      <span className="block text-lg font-serif">{opt}</span>
                      {formState.vibe.includes(opt) && <Check size={18} className="text-wild-gold" />}
                    </button>
                  ))}
                </div>
              )}

              {formState.step === 3 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Number of Days</label>
                    <input 
                      type="text" 
                      placeholder="e.g., 3 days, 1 week" 
                      value={formState.duration}
                      onChange={e => setFormState(prev => ({...prev, duration: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Estimated Budget (Optional)</label>
                    <input 
                      type="text" 
                      placeholder="e.g., KES 50,000 per person" 
                      value={formState.budget}
                      onChange={e => setFormState(prev => ({...prev, budget: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Preferred Dates</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Next month, December holidays" 
                      value={formState.dates}
                      onChange={e => setFormState(prev => ({...prev, dates: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {formState.step === 4 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      value={formState.name}
                      onChange={e => setFormState(prev => ({...prev, name: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      value={formState.email}
                      onChange={e => setFormState(prev => ({...prev, email: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formState.phone}
                      onChange={e => setFormState(prev => ({...prev, phone: e.target.value}))}
                      className="w-full bg-neutral-950 border border-white/10 p-4 text-white focus:border-wild-gold focus:outline-none"
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-white/5">
            <button
              onClick={prevStep}
              disabled={formState.step === 1}
              className={`flex items-center gap-2 text-sm uppercase tracking-widest ${formState.step === 1 ? 'opacity-0 cursor-default' : 'text-gray-400 hover:text-white'}`}
            >
              <ArrowLeft size={16} /> Previous
            </button>

            {formState.step < 4 ? (
              <button
                onClick={nextStep}
                disabled={(formState.step === 1 && !formState.profile) || (formState.step === 2 && formState.vibe.length === 0)}
                className="flex items-center gap-2 bg-wild-gold text-wild-dark px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex items-center gap-2 bg-white text-black px-8 py-3 font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors"
              >
                Book via WhatsApp <Check size={16} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
