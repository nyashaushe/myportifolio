import React from 'react';
import { Calculator, PieChart, TrendingUp, FileText } from 'lucide-react';

export default function Bookkeeping() {
  const services = [
    {
      icon: Calculator,
      title: 'Financial Records',
      description: 'Maintaining accurate and organized financial records for businesses.',
    },
    {
      icon: PieChart,
      title: 'Financial Analysis',
      description: 'Providing insights through detailed financial analysis and reporting.',
    },
    {
      icon: TrendingUp,
      title: 'Budget Planning',
      description: 'Developing and monitoring budgets to ensure financial goals are met.',
    },
    {
      icon: FileText,
      title: 'Tax Preparation',
      description: 'Assisting with tax documentation and compliance requirements.',
    },
  ];

  return (
    <section id="bookkeeping" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Bookkeeping Services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <service.icon className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}