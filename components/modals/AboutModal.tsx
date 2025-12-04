import React from 'react';
import ModalWrapper from './ModalWrapper';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  const skills = [
    "Product Thinking", "Leadership", "Design Systems", 
    "Digital Product Design", "UX Research", "Data Analysis", "HTML/CSS"
  ];

  return (
    <ModalWrapper onClose={onClose} title="About">
      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto items-start mt-8">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-[#4A4A4A]">
          <div className="flex items-center gap-2 text-2xl font-bold font-hand text-[#2D2D2D]">
            <span>👋</span> Hello! It's Sara Replica
          </div>
          
          <p className="text-lg leading-relaxed">
            I'm a <span className="font-bold text-[#D35400]">Senior Product Designer</span> with a strong product mindset, a love for data, and deep empathy for users.
          </p>
          
          <p className="leading-relaxed">
            Originally trained as a Dentist, I found my true passion in design and built a solid technical foundation as a UI Developer.
          </p>

          <p className="leading-relaxed">
            With 6+ years of experience, I craft intuitive, user-centered experiences by blending Product & UI/UX Design expertise with Product Psychology—balancing data, empathy, and business goals to create designs that delight.
          </p>
          
          <div className="flex gap-4 font-bold underline cursor-pointer text-[#5D4037]">
            <a href="#">LinkedIn</a>
            <a href="#">Resume</a>
          </div>

          <div className="flex flex-wrap gap-3 mt-8">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-[#FDEBD0] text-[#7E5109] rounded-full text-sm font-semibold">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Right Image (Polaroid Style) */}
        <div className="relative rotate-2 transform hover:rotate-0 transition-transform duration-300">
            {/* Paperclip */}
            <div className="absolute -top-6 right-10 w-8 h-16 z-10 opacity-70">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-800">
                    <path d="M16 6l-9 11a4 4 0 1 0 6 6l9-12a6 6 0 1 0 -9 -9l-8 10" />
                </svg>
            </div>
            <div className="bg-white p-3 pb-12 shadow-lg w-72">
                <img 
                    src="https://picsum.photos/400/500?grayscale" 
                    alt="Profile" 
                    className="w-full h-auto object-cover filter sepia-[0.3]"
                />
            </div>
        </div>
      </div>
      
      {/* Experience Timeline (Simplified) */}
      <div className="max-w-4xl mx-auto mt-16 space-y-8">
          {[
              { role: "Product Design Lead", company: "Insense | TikTok & Meta Partner", date: "Nov 2024 - Present" },
              { role: "Lead Product Designer", company: "Taager", date: "Oct 2021 - Nov 2024" },
              { role: "Senior Product Designer", company: "Taager", date: "Nov 2020 - Oct 2021" },
          ].map((job, idx) => (
              <div key={idx} className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-[#E5E7EB] pb-4">
                  <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
                          <span className="text-xl">💼</span>
                      </div>
                      <div>
                          <h4 className="font-bold text-gray-800">{job.role}</h4>
                          <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                  </div>
                  <span className="text-sm font-mono text-gray-400 mt-2 md:mt-0">{job.date}</span>
              </div>
          ))}
      </div>
    </ModalWrapper>
  );
};

export default AboutModal;