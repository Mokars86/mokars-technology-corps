
import React, { useState } from 'react';

const Join: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="bg-emerald pt-20 pb-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6">Start Your Career with Mokars</h1>
          <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
            We are looking for passionate young graduates ready to build the next generation of African technology.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 mt-16">
        {/* Why Join Us */}
        <section className="space-y-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-royal mb-6">Why Join Our Team?</h2>
            <div className="space-y-6">
              {[
                { title: 'Social Impact', desc: 'Work on projects that solve real-world problems in your community.' },
                { title: 'Modern Stack', desc: 'Gain experience with React, Python, AI, and IoT technologies.' },
                { title: 'Growth Pathway', desc: 'Structured mentorship from industry experts to accelerate your career.' },
                { title: 'Inclusive Culture', desc: 'A diverse and supportive environment that values your unique voice.' },
              ].map((reason, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 bg-royal/10 text-royal rounded-xl flex items-center justify-center flex-shrink-0 font-bold">
                    0{i+1}
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-gray-900">{reason.title}</h4>
                    <p className="text-gray-600 text-sm">{reason.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-gray-100 p-8 rounded-2xl">
            <h3 className="text-xl font-heading font-bold text-royal mb-4">Skills We Are Looking For</h3>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'Dart', 'Flutter', 'UI/UX Design', 'Product Management', 'Technical Writing'].map(skill => (
                <span key={skill} className="bg-white px-4 py-2 rounded-lg text-sm font-bold text-gray-600 shadow-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section>
          <div className="bg-white p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-emerald/20 text-emerald rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-2xl font-heading font-bold text-royal mb-4">Application Submitted!</h3>
                <p className="text-gray-600 mb-8">Thank you for your interest in Mokars. Our HR team will review your profile and get back to you within 5-7 business days.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-royal font-bold hover:underline"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-heading font-bold text-royal mb-8">Apply for Open Positions</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                      <input required type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="john@example.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">University / Institution</label>
                    <input required type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="University of Senegal" />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Primary Interest</label>
                    <select required className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none">
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>Mobile App Dev</option>
                      <option>Product Design</option>
                      <option>AI/ML Engineering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">GitHub / Portfolio URL</label>
                    <input type="url" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="https://github.com/..." />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Why do you want to join us?</label>
                    <textarea required rows={4} className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="Tell us about your passion for tech and impact..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-royal hover:bg-blue-800 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:-translate-y-1">
                    Send Application
                  </button>
                </form>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Join;
