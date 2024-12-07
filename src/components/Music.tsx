import React from 'react';
import { Music2, Mic, Headphones, Radio } from 'lucide-react';

export default function Music() {
  return (
    <section id="music" className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Musical Journey</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d"
              alt="Music Studio"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Music2 className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Composition</h3>
                <p className="text-gray-600">Creating original pieces across multiple genres</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Mic className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Performance</h3>
                <p className="text-gray-600">Live performances and studio recordings</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Headphones className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Production</h3>
                <p className="text-gray-600">Professional audio production and mixing</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Radio className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
                <p className="text-gray-600">Working with other artists and musicians</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}