import React, { useState } from 'react';
import Layout from '@/components/Layout';

const Collections: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const collections = [
    {
      id: 'v2',
      title: 'Collection V2',
      image: '/api/placeholder/400/300',
      description: 'Modern office spaces with industrial design elements'
    },
    {
      id: 'v3', 
      title: 'Collection V3',
      image: '/api/placeholder/400/300',
      description: 'Minimalist workspace with natural lighting'
    },
    {
      id: 'v4',
      title: 'Collection V4', 
      image: '/api/placeholder/400/300',
      description: 'Outdoor lifestyle and adventure photography'
    }
  ];

  return (
    <Layout theme="dark">
      <div className="min-h-screen pt-8">
        {/* Header */}
        <div className="container mx-auto px-6 mb-12">
          <h1 className="text-3xl font-light text-dark-text mb-2">
            Looping Marquee 
            <span className="text-dark-text/60 text-lg ml-2">(Pause on Hover)</span>
          </h1>
        </div>

        {/* Marquee Collections */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex space-x-8 ${!isPaused ? 'animate-marquee' : ''}`}>
            {/* First set */}
            {collections.map((collection, index) => (
              <div key={`first-${collection.id}`} className="flex-shrink-0 group cursor-pointer">
                <div className="w-80 h-60 bg-dark-text/5 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-text/10 to-dark-text/5 p-6 flex items-center justify-center">
                    {/* Collection preview based on type */}
                    {collection.id === 'v2' && (
                      <div className="w-full h-full relative">
                        {/* Office hallway */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded">
                          <div className="absolute top-4 left-4 right-4 h-2 bg-blue-400 rounded" />
                          <div className="absolute bottom-4 left-4 right-4 h-1 bg-blue-500 rounded" />
                          <div className="absolute left-1/3 top-1/3 bottom-1/3 w-1 bg-blue-300 rounded" />
                          <div className="absolute right-1/3 top-1/3 bottom-1/3 w-1 bg-blue-300 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {collection.id === 'v3' && (
                      <div className="w-full h-full relative">
                        {/* Desk workspace */}
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded">
                          <div className="absolute bottom-1/3 left-1/4 right-1/4 h-4 bg-amber-600 rounded" />
                          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-amber-700 rounded" />
                          <div className="absolute top-1/4 right-1/4 w-6 h-12 bg-green-600 rounded-t-full" />
                          <div className="absolute top-1/3 left-1/4 w-12 h-2 bg-gray-400 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {collection.id === 'v4' && (
                      <div className="w-full h-full relative">
                        {/* Mountain landscape */}
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-orange-600 rounded">
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-orange-800" />
                          <div className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-orange-900" />
                          <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-orange-900" />
                          <div className="absolute bottom-1/2 left-1/2 w-8 h-8 bg-orange-200 rounded-full transform -translate-x-1/2" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-golden/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-medium text-dark-text group-hover:text-golden transition-colors duration-300">
                  {collection.title}
                </h3>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {collections.map((collection, index) => (
              <div key={`second-${collection.id}`} className="flex-shrink-0 group cursor-pointer">
                <div className="w-80 h-60 bg-dark-text/5 rounded-lg overflow-hidden mb-4 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-text/10 to-dark-text/5 p-6 flex items-center justify-center">
                    {/* Same content as above */}
                    {collection.id === 'v2' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 rounded">
                          <div className="absolute top-4 left-4 right-4 h-2 bg-blue-400 rounded" />
                          <div className="absolute bottom-4 left-4 right-4 h-1 bg-blue-500 rounded" />
                          <div className="absolute left-1/3 top-1/3 bottom-1/3 w-1 bg-blue-300 rounded" />
                          <div className="absolute right-1/3 top-1/3 bottom-1/3 w-1 bg-blue-300 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {collection.id === 'v3' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-200 rounded">
                          <div className="absolute bottom-1/3 left-1/4 right-1/4 h-4 bg-amber-600 rounded" />
                          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-amber-700 rounded" />
                          <div className="absolute top-1/4 right-1/4 w-6 h-12 bg-green-600 rounded-t-full" />
                          <div className="absolute top-1/3 left-1/4 w-12 h-2 bg-gray-400 rounded" />
                        </div>
                      </div>
                    )}
                    
                    {collection.id === 'v4' && (
                      <div className="w-full h-full relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-orange-300 to-orange-600 rounded">
                          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-orange-800" />
                          <div className="absolute bottom-1/3 left-1/4 w-0 h-0 border-l-8 border-r-8 border-b-16 border-transparent border-b-orange-900" />
                          <div className="absolute bottom-1/3 right-1/3 w-0 h-0 border-l-6 border-r-6 border-b-12 border-transparent border-b-orange-900" />
                          <div className="absolute bottom-1/2 left-1/2 w-8 h-8 bg-orange-200 rounded-full transform -translate-x-1/2" />
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute inset-0 bg-golden/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <h3 className="text-xl font-medium text-dark-text group-hover:text-golden transition-colors duration-300">
                  {collection.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="text-center mt-8">
            <span className="text-dark-text/60 text-sm">Marquee Paused</span>
          </div>
        )}

        {/* Additional info */}
        <div className="container mx-auto px-6 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div key={collection.id} className="text-center group cursor-pointer">
                <div className="w-12 h-12 bg-golden/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-golden/40 transition-colors duration-300">
                  <span className="text-golden font-bold">{collection.id.toUpperCase()}</span>
                </div>
                <h4 className="text-dark-text font-medium mb-2 group-hover:text-golden transition-colors duration-300">
                  {collection.title}
                </h4>
                <p className="text-dark-text/60 text-sm">
                  {collection.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Collections;