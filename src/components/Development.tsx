import React from 'react';
import { Code2, Database, Layout, Smartphone } from 'lucide-react';

export default function Development() {
  const services = [
    {
      icon: Layout,
      title: 'Frontend Development',
      description: 'Creating responsive and intuitive user interfaces using modern frameworks like React.',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Building robust server-side applications and APIs with Node.js and Python.',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Developing cross-platform mobile applications using React Native.',
    },
    {
      icon: Code2,
      title: 'Full Stack Solutions',
      description: 'End-to-end development of web applications with modern tech stacks.',
    },
  ];

  return (
    <section id="development" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Software Development Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}