
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-royal text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img src="/favicon.jpg" alt="Mokars Logo" className="w-8 h-8 rounded-md object-contain bg-white" />
              <span className="font-heading font-bold text-xl">Mokars Tech</span>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6">
              Innovating today for a smarter tomorrow. Building technology solutions that drive social and economic growth across Africa.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-blue-100 hover:text-white transition-colors">Our Projects</Link></li>
              <li><Link to="/join" className="text-blue-100 hover:text-white transition-colors">Join the Team</Link></li>
              <li><Link to="/blog" className="text-blue-100 hover:text-white transition-colors">Latest News</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-3 text-blue-100">
              <li>Eatern Bypass, Aboabo</li>
              <li>Kumasi Ghana- AS-144-0542</li>
              <li>contact@mokarstech.com</li>
              <li>+233 54 692 0428</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-blue-100 mb-4">Stay updated with our latest projects and job openings.</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-blue-900 border-none rounded-l-md px-4 py-2 w-full focus:ring-2 focus:ring-emerald outline-none text-white"
              />
              <button className="bg-emerald px-4 py-2 rounded-r-md font-semibold hover:bg-green-600 transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} Mokars Technology Corps. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map(social => (
              <a key={social} href="#" className="text-blue-200 hover:text-white text-sm transition-colors">{social}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
