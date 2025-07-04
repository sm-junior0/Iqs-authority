import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';

const Counter = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    
    const animate = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const stats = [
    {
      number: 15000,
      suffix: '+',
      label: 'Serving 15+ Students',
      color: 'text-[#1B365D]'
    },
    {
      number: 50,
      suffix: '+',
      label: '50+ Partnered Schools',
      color: 'text-[#2563EB]'
    },
    {
      number: 3000,
      suffix: '+',
      label: '3k successfully trained teachers',
      color: 'text-[#10B981]'
    }
  ];

  return (
    <section id="accreditation" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <p className="text-gray-600 text-lg lg:text-xl font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <a href="/auth/register" className="bg-[#002855] hover:bg-[#001a3d] text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl inline-block" style={{ paddingTop: '12px', paddingRight: '40px', paddingBottom: '12px', paddingLeft: '40px', fontSize: '16px', height: '50px' }}>
            Apply for Accreditation →
          </a>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;