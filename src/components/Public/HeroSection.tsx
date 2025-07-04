import React from 'react';
import { Play } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Quality You Can Trust in{' '}
            <span className="text-[#1B365D]">Qur'anic Education</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed max-w-4xl mx-auto">
            Empowering schools and training coordinators worldwide with structured accreditation
            and capacity-building.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-[#002855] hover:bg-[#001a3d] text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              style={{
                width: '200px',
                height: '50px',
                paddingTop: '10px',
                paddingRight: '30px',
                paddingBottom: '10px',
                paddingLeft: '30px',
                fontSize: '16px'
              }}
            >
              Get Started
            </button>
            <button 
              className="border-2 border-[#002855] text-[#002855] hover:bg-[#002855] hover:text-white font-medium rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              style={{
                width: '200px',
                height: '50px',
                paddingTop: '10px',
                paddingRight: '30px',
                paddingBottom: '10px',
                paddingLeft: '30px',
                fontSize: '16px'
              }}
            >
              <Play size={18} />
              <span>Watch Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;