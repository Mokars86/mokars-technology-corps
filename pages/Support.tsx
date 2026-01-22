
import React, { useState } from 'react';

const Support: React.FC = () => {
  const [amount, setAmount] = useState<number>(100);

  const tiers = [
    { name: 'Bronze', min: 100, color: 'text-amber-700', bg: 'bg-amber-50' },
    { name: 'Silver', min: 500, color: 'text-gray-500', bg: 'bg-gray-100' },
    { name: 'Gold', min: 1000, color: 'text-yellow-600', bg: 'bg-yellow-50' },
  ];

  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-gray-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=80" className="w-full h-full object-cover opacity-20" alt="Support" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 text-center">Partner with Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center leading-relaxed">
            Help us build Africa’s tech future. Your support allows us to scale projects and mentor the next generation of engineers.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 grid lg:grid-cols-3 gap-8">
        {/* Donation tiers */}
        {tiers.map(tier => (
          <div key={tier.name} className={`${tier.bg} rounded-3xl p-10 shadow-xl border border-white/50 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300`}>
            <div className={`text-sm font-bold uppercase tracking-widest ${tier.color} mb-4`}>{tier.name} Partner</div>
            <div className="text-4xl font-heading font-bold text-gray-900 mb-6">
              <span className="text-2xl">$</span>{tier.min}<span className="text-lg text-gray-400 font-normal">/mo</span>
            </div>
            <ul className="space-y-4 mb-8 text-sm text-gray-600">
              <li>• Access to quarterly impact reports</li>
              <li>• Logo placement on project docs</li>
              <li>• Recognition in annual newsletter</li>
              {tier.name === 'Gold' && <li className="font-bold text-royal">• Featured on project landing pages</li>}
            </ul>
            <button 
              onClick={() => setAmount(tier.min)}
              className="mt-auto bg-royal text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-800 transition-colors"
            >
              Select Tier
            </button>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-gray-100">
          <h2 className="text-3xl font-heading font-bold text-royal mb-8 text-center">Make a Secure Donation</h2>
          
          <div className="space-y-10">
            {/* Custom Amount */}
            <div className="text-center">
              <label className="block text-gray-500 font-bold mb-4 uppercase tracking-wider text-xs">Enter Contribution Amount (USD)</label>
              <div className="flex justify-center items-center gap-4">
                <button onClick={() => setAmount(Math.max(10, amount - 50))} className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-400 hover:border-royal hover:text-royal transition-all">-</button>
                <div className="relative">
                   <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-bold text-gray-300">$</span>
                   <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-48 bg-gray-50 border-none rounded-2xl px-12 py-6 text-4xl font-heading font-bold text-center outline-none focus:ring-2 focus:ring-emerald"
                  />
                </div>
                <button onClick={() => setAmount(amount + 50)} className="w-12 h-12 rounded-full border-2 border-gray-200 text-gray-400 hover:border-royal hover:text-royal transition-all">+</button>
              </div>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1 md:col-span-2">
                 <label className="block text-sm font-bold text-gray-700 mb-2">Organization Name (Optional)</label>
                 <input type="text" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="UNDP / Gov Entity" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Email for Receipt</label>
                 <input required type="email" className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none" placeholder="finance@org.com" />
              </div>
              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">Payment Method</label>
                 <select className="w-full bg-gray-50 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-emerald outline-none">
                    <option>Credit Card / Visa</option>
                    <option>Mobile Money (Orange/Wave)</option>
                    <option>Bank Transfer</option>
                 </select>
              </div>
              
              <button type="button" className="col-span-1 md:col-span-2 bg-emerald hover:bg-green-600 text-white font-bold py-5 rounded-2xl text-xl transition-all shadow-xl mt-6">
                Donate ${amount} Now
              </button>
            </form>
            
            <p className="text-center text-gray-400 text-xs mt-8">
              All donations are tax-deductible according to local laws. 
              A receipt will be generated automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
