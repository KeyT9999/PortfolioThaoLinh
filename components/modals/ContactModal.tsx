import React from 'react';
import ModalWrapper from './ModalWrapper';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <ModalWrapper onClose={onClose} title="Contact Me" icon={<span className="text-2xl">✉️</span>}>
      <div className="max-w-2xl mx-auto mt-8 bg-white/50 p-8 rounded-xl">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 font-mono mb-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Your full name" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B4513] focus:border-transparent outline-none transition-all font-mono text-sm bg-white"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 font-mono mb-2">Email</label>
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B4513] focus:border-transparent outline-none transition-all font-mono text-sm bg-white"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 font-mono mb-2">Message</label>
            <textarea 
              rows={4}
              placeholder="Write your message here..." 
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#8B4513] focus:border-transparent outline-none transition-all font-mono text-sm bg-white resize-none"
            />
          </div>

          <div className="flex justify-center pt-4">
            <button className="bg-[#5D4037] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-[#4E342E] transform hover:-translate-y-1 transition-all">
                Send Message
            </button>
          </div>
        </form>
      </div>
    </ModalWrapper>
  );
};

export default ContactModal;