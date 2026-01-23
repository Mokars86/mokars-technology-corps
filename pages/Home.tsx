

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PROJECTS, TESTIMONIALS } from '../constants.tsx';
import ProjectCard from '../components/ProjectCard';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.slice(0, 3);

  const metrics = [
    { label: 'Projects Completed', value: '30+' },
    { label: 'Developers Recruited', value: '15+' },
    { label: 'Impact Reach', value: '10k+' },
    { label: 'Active Partnerships', value: '12' },
  ];

  return (
    <div className="space-y-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden bg-royal">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Tech Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-royal via-royal/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-tight mb-6">
              Innovating Today for a <span className="text-emerald">Smarter</span> Tomorrow
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              Mokars Technology Corps is leading the digital revolution in Africa. We build transformative technology, empower young talent, and create sustainable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects" className="bg-emerald hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg text-center transition-all shadow-xl hover:-translate-y-1">
                View Our Projects
              </Link>
              <Link to="/join" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg text-center transition-all">
                Apply as Developer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-white dark:bg-gray-800 rounded-[2rem] shadow-2xl p-12 -mt-32 relative z-20 border border-gray-100 dark:border-gray-700 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {metrics.map((metric, i) => (
            <motion.div key={i} variants={fadeInUp} className="text-center group">
              <div className="text-4xl md:text-5xl font-heading font-extrabold text-royal mb-2 group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-gray-500 font-medium uppercase text-xs tracking-widest">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-emerald font-bold uppercase tracking-widest text-sm mb-4 block">Our Mission</span>
          <h2 className="text-4xl font-heading font-bold text-royal dark:text-white mb-6 leading-tight">
            Empowering Africa Through Disruptive Innovation
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We believe that technology is the ultimate equalizer. At Mokars, we don't just build software; we architect solutions that address local challenges with global standards. From agriculture to healthcare, our work touches lives and builds futures.
          </p>
          <ul className="space-y-4">
            {['Sustainable Development Goals focused', 'Youth empowerment through tech', 'Local solutions, global standards'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                <div className="w-5 h-5 bg-emerald/20 text-emerald rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="aspect-square bg-emerald rounded-3xl overflow-hidden shadow-2xl rotate-3">
            <img src="https://picsum.photos/seed/vision/800/800" alt="Innovation" className="-rotate-3 w-full h-full object-cover scale-110" />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
            <p className="text-royal font-bold italic text-lg mb-2">"Building for the next billion."</p>
            <p className="text-gray-500 text-sm">— Team Mokars</p>
          </div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <span className="text-royal font-bold uppercase tracking-widest text-sm mb-4 block">Innovation in Action</span>
              <h2 className="text-4xl font-heading font-bold text-gray-900 leading-tight">
                Transformative Projects Shaping the Future
              </h2>
            </div>
            <Link to="/projects" className="text-royal font-bold flex items-center gap-2 hover:gap-4 transition-all">
              View All Projects
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {featuredProjects.map(project => (
              <motion.div key={project.id} variants={fadeInUp}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-heading font-bold text-center mb-16 text-royal">What People Say</h2>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center relative hover:-translate-y-2 transition-transform"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-emerald/20">
                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <h4 className="font-bold text-royal font-heading">{testimonial.name}</h4>
                <p className="text-xs text-emerald font-bold uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Donation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="bg-royal rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald/20 blur-3xl rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/20 blur-2xl rounded-full -ml-24 -mb-24"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-6">Join Us in Building the Future</h2>
            <p className="text-blue-100 text-lg mb-10">
              Your contribution fuels our mission to bring sustainable tech solutions to communities across Africa. Partner with us today.
            </p>
            <Link to="/support" className="bg-accent hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg inline-block transition-all shadow-lg">
              Donate to Mokars
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

