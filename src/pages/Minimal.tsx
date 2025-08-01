import React from 'react';
import Layout from '@/components/Layout';

const Minimal: React.FC = () => {
  return (
    <Layout theme="minimal">
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-warm-beige via-background to-warm-beige/50">
        {/* Subtle organic shapes */}
        <div className="absolute inset-0">
          {/* Large subtle blob */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-golden/5 to-golden/10 rounded-full blur-3xl animate-float" />
          
          {/* Medium blobs */}
          <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-to-br from-warm-brown/5 to-warm-brown/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
          
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-golden/3 to-golden/8 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
          
          {/* Small accent dots */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-golden/20 rounded-full blur-sm animate-float" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-warm-brown/20 rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s' }} />
          <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-golden/30 rounded-full animate-float" style={{ animationDelay: '2.5s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-6">
            {/* Main content */}
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-light text-warm-brown mb-8 tracking-wide">
                Minimalist Elegance
              </h1>
              
              <p className="text-lg text-warm-brown/70 mb-12 leading-relaxed max-w-lg mx-auto">
                Where simplicity meets sophistication. 
                Every element thoughtfully placed, every detail purposefully refined.
              </p>
            </div>

            {/* Interactive grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[1, 2, 3, 4].map((item, index) => (
                <div 
                  key={item}
                  className="group cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative aspect-square">
                    {/* Different shapes for each item */}
                    {item === 1 && (
                      <div className="w-full h-full bg-gradient-to-br from-golden/10 to-golden/20 rounded-full transform group-hover:scale-105 transition-transform duration-500" />
                    )}
                    {item === 2 && (
                      <div className="w-full h-full bg-gradient-to-br from-warm-brown/10 to-warm-brown/20 rounded-lg transform group-hover:rotate-6 transition-transform duration-500" />
                    )}
                    {item === 3 && (
                      <div className="w-full h-full bg-gradient-to-br from-golden/15 to-golden/25 transform rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                    )}
                    {item === 4 && (
                      <div className="w-full h-full bg-gradient-to-br from-warm-brown/15 to-warm-brown/25 rounded-full transform group-hover:scale-110 transition-transform duration-500" />
                    )}
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-golden/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                  </div>
                  
                  <p className="mt-4 text-sm text-warm-brown/50 group-hover:text-warm-brown transition-colors duration-300">
                    Element {item}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-warm-brown/30 to-transparent mx-auto" />
            </div>
          </div>
        </div>

        {/* Corner accents */}
        <div className="absolute top-8 left-8 w-px h-16 bg-gradient-to-b from-warm-brown/20 to-transparent" />
        <div className="absolute top-8 left-8 w-16 h-px bg-gradient-to-r from-warm-brown/20 to-transparent" />
        
        <div className="absolute bottom-8 right-8 w-px h-16 bg-gradient-to-t from-warm-brown/20 to-transparent" />
        <div className="absolute bottom-8 right-8 w-16 h-px bg-gradient-to-l from-warm-brown/20 to-transparent" />
      </div>
    </Layout>
  );
};

export default Minimal;