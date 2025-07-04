import React from 'react';

const CertifiedSchools = () => {
  const schools = [
    { name: 'liwa', logo: 'https://via.placeholder.com/120x60/1B365D/FFFFFF?text=liwa' },
    { name: 'kanba', logo: 'https://via.placeholder.com/120x60/2563EB/FFFFFF?text=kanba' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/10B981/FFFFFF?text=amara' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/F59E0B/FFFFFF?text=amara' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/EF4444/FFFFFF?text=amara' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/8B5CF6/FFFFFF?text=amara' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/EC4899/FFFFFF?text=amara' },
    { name: 'amara', logo: 'https://via.placeholder.com/120x60/06B6D4/FFFFFF?text=amara' },
  ];

  return (
    <section id="schools" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certified Schools
          </h2>
          <p className="text-xl text-gray-600">
            Proud to work with these outstanding educational institutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {schools.map((school, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
            >
              <img
                src={school.logo}
                alt={school.name}
                className="max-h-12 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-60 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertifiedSchools;