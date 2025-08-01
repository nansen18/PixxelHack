import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Stellar: React.FC = () => {
  return (
    <Layout theme="dark" showNav={true}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Background image simulation */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
          
          {/* Mechanical/industrial elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-30">
            <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg transform rotate-12">
              <div className="absolute inset-2 bg-gray-700 rounded" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-gray-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 w-20 h-40 opacity-20">
            <div className="w-full h-full bg-gradient-to-t from-gray-700 to-gray-600 rounded-lg">
              <div className="absolute top-2 left-2 right-2 h-2 bg-gray-500 rounded" />
              <div className="absolute bottom-2 left-2 right-2 h-2 bg-gray-500 rounded" />
            </div>
          </div>
          
          {/* Particle effects */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="container mx-auto px-6 pt-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-dark-text">
                  🌟 STELLAR
                </div>
              </div>
              
              <Button 
                size="sm" 
                className="bg-bright-yellow text-dark-bg hover:bg-bright-yellow/90 font-medium"
              >
                Join Testing Team
              </Button>
            </div>
          </div>

          {/* Main content */}
          <div className="container mx-auto px-6 pt-20">
            <div className="max-w-4xl">
              {/* Main heading */}
              <div className="space-y-4 mb-12">
                <div className="overflow-hidden">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-dark-text leading-none animate-fade-in">
                    SEIZE
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-dark-text leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    GREATN
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-dark-text leading-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    SEIZE GREATNE
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-dark-text leading-none animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    SEIZE GREATNES
                  </h1>
                </div>
                
                <div className="overflow-hidden">
                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-bright-yellow to-golden">
                      SEIZE GREATNESS
                    </span>
                  </h1>
                </div>
              </div>

              {/* Subtitle */}
              <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <p className="text-xl md:text-2xl text-dark-text/80 max-w-2xl leading-relaxed">
                  Unleash your potential with cutting-edge technology that transforms vision into reality. 
                  Join the revolution of innovators who refuse to settle for ordinary.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                <Button 
                  size="lg" 
                  className="bg-bright-yellow text-dark-bg hover:bg-bright-yellow/90 font-bold px-8 py-4 text-lg"
                >
                  Start Your Journey
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom navigation */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center justify-between text-dark-text/60 text-sm">
              <div className="flex space-x-6">
                <span className="hover:text-dark-text cursor-pointer transition-colors">About</span>
                <span className="hover:text-dark-text cursor-pointer transition-colors">Product</span>
                <span className="hover:text-dark-text cursor-pointer transition-colors">Contact</span>
              </div>
              <div className="flex space-x-4">
                <span className="hover:text-dark-text cursor-pointer transition-colors">↗</span>
                <span className="hover:text-dark-text cursor-pointer transition-colors">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stellar;