
import React from 'react';
import { TEAM } from '../constants.tsx';

const About: React.FC = () => {
  const timeline = [
    { year: '2020', event: 'Mokars Tech founded with a vision for digital agriculture.' },
    { year: '2021', event: 'Launch of AgriSmart Hub, reaching 100+ farmers.' },
    { year: '2022', event: 'Expanded into rural energy with SolarGrid IoT project.' },
    { year: '2023', event: 'Recognized as Top African Innovator by Global Tech Forum.' },
    { year: '2024', event: 'Opened our regional headquarters in Dakar.' },
  ];

  return (
    <div className="pb-24 space-y-24">
      {/* Header */}
      <section className="bg-gray-50 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold text-royal mb-6">Our Story</h1>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
            From a small garage in Dakar to a Pan-African technology powerhouse, Mokars has always been driven by one goal: Innovation with Impact.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-emerald font-bold uppercase tracking-widest text-sm mb-4 block">The Brains Behind Mokars</span>
          <h2 className="text-4xl font-heading font-bold text-royal">Meet Our Leadership Team</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {TEAM.map(member => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-2xl mb-6 shadow-lg aspect-square">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-royal/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="text-white space-x-4 flex">
                    {/* Mock Socials */}
                    <a href="#" className="hover:text-emerald transition-colors"><span className="text-xs font-bold">LinkedIn</span></a>
                    <a href="#" className="hover:text-emerald transition-colors"><span className="text-xs font-bold">Twitter</span></a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold text-royal mb-1">{member.name}</h3>
              <p className="text-emerald font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="bg-royal py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-heading font-bold mb-4">Our Journey</h2>
            <p className="text-blue-100 opacity-80">Tracing our growth from day one to today.</p>
          </div>
          
          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-blue-800 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                  <div className="w-16 h-16 bg-emerald text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 relative z-10 shadow-xl border-4 border-royal">
                    {item.year}
                  </div>
                  <p className="text-blue-100 font-medium text-sm leading-relaxed md:pr-4">
                    {item.event}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
        <p className="text-gray-400 font-semibold uppercase tracking-widest text-xs mb-10">Trusted by Local & International Organizations</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           {['UNDP', 'Gov of Senegal', 'Google for Startups', 'AWS Impact', 'Village Capital'].map(partner => (
             <span key={partner} className="text-3xl font-heading font-black text-gray-500 hover:text-royal transition-colors cursor-default select-none">
               {partner}
             </span>
           ))}
        </div>
      </section>
    </div>
  );
};

export default About;
