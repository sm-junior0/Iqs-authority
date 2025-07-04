import React from 'react';
import { FileText, School, MessageCircle } from 'lucide-react';
import Button from '../ui/Button';

const QuickActions = () => {
  const actions = [
    {
      icon: <FileText size={48} />,
      title: 'Apply For Accreditation',
      description: 'Start now and enable your school to access our programs.',
      buttonText: 'Apply Now',
      buttonVariant: 'primary'
    },
    {
      icon: <School size={48} />,
      title: 'View Certified Schools',
      description: 'See the List of all schools that we are working together on our system.',
      buttonText: 'View Schools',
      buttonVariant: 'primary'
    },
    {
      icon: <MessageCircle size={48} />,
      title: 'Contact Us',
      description: 'Get in contact with us and our team behind this system.',
      buttonText: 'Contact Us',
      buttonVariant: 'primary'
    }
  ];

  return (
    <section id="media" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <p className="text-xl text-gray-600">
            View quick actions on how our system works and get to know how we work day by day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-[#1B365D] mb-6 group-hover:text-[#2563EB] transition-colors duration-300">
                {action.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {action.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {action.description}
              </p>
              
              <Button variant={action.buttonVariant} className="w-full">
                {action.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickActions;