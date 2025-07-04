import React from 'react';
import { ArrowRight } from 'lucide-react';
import standard from '../../assets/images/standardOverview.png'

const StandardsOverview: React.FC = () => {
  return (
    <section id="standard" className="w-full bg-transparent py-8 md:py-20">
      <div className="max-w-5xl mx-auto px-2 md:px-4 relative">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
          IQS Standards Overview
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-3xl leading-relaxed">
          Get a quick overview of what we base on and what are our standards for a certain school to be accredited
        </p>
        <div className="relative min-h-[180px] md:min-h-[240px] mb-10 md:mb-16 flex justify-start">
          <img 
            src={standard} 
            alt="" 
            className="p-2 md:p-8 rounded-2xl shadow transition-transform duration-300 hover:scale-105 max-w-full h-auto" 
          />
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#002855] hover:bg-[#001a3d] text-white font-medium rounded-full px-8 py-3 text-base shadow-lg transition-all duration-200"
        >
          Read the full IQS Standard Document <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default StandardsOverview;
