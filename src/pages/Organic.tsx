import React from 'react';
import Layout from '@/components/Layout';

const Organic: React.FC = () => {
  return (
    <Layout theme="minimal" showNav={true}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Large organic shape - main */}
        <div className="absolute inset-0">
          <svg 
            viewBox="0 0 1200 800" 
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="goldenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(43, 96%, 56%)" />
                <stop offset="50%" stopColor="hsl(43, 100%, 70%)" />
                <stop offset="100%" stopColor="hsl(45, 100%, 75%)" />
              </linearGradient>
            </defs>
            
            {/* Main organic blob */}
            <path 
              d="M300,100 Q500,50 700,150 Q900,250 850,450 Q800,650 600,700 Q400,750 200,650 Q50,550 100,350 Q150,150 300,100 Z"
              fill="url(#goldenGradient)"
              className="animate-float"
            />
          </svg>
        </div>

        {/* Secondary organic shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-golden/30 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-10 w-20 h-20 bg-golden-light/40 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-golden/20 rounded-full blur-md animate-float" style={{ animationDelay: '0.5s' }} />

        {/* Content overlay */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-light text-warm-brown mb-8 animate-fade-in">
              Organic Shapes
            </h1>
            <p className="text-lg text-warm-brown/70 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Fluid designs inspired by nature's perfect imperfections
            </p>
            
            {/* Interactive elements */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              {[1, 2, 3].map((item, index) => (
                <div 
                  key={item}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className="relative w-20 h-20 mx-auto mb-4">
                    <div className="absolute inset-0 bg-golden/20 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-2 bg-golden/40 rounded-full transform group-hover:scale-90 transition-transform duration-300" />
                    <div className="absolute inset-4 bg-golden/60 rounded-full transform group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <p className="text-sm text-warm-brown/60 group-hover:text-warm-brown transition-colors duration-300">
                    Element {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation hint */}
        <div className="absolute top-8 right-8 text-warm-brown/40 text-sm">
          <span>MY RESUME</span>
          <span className="ml-4">WORK WITH US</span>
        </div>
      </div>
    </Layout>
  );
};

export default Organic;