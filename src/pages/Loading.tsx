import React, { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

const Loading: React.FC = () => {
  const [counter, setCounter] = useState(59);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => {
        if (prev >= 100) {
          setIsComplete(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout theme="dark" showNav={false}>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background animated dots */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-dark-text/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          {/* Counter */}
          <div className="mb-12 animate-counter">
            <span className="text-6xl md:text-8xl font-light text-dark-text/60 font-mono">
              {counter} - 100
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-dark-text mb-8 leading-tight">
            <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              YOUR
            </span>
            <span className="block animate-fade-in" style={{ animationDelay: '0.4s' }}>
              WEB EXPERIENCE
            </span>
            <span className="block animate-fade-in" style={{ animationDelay: '0.6s' }}>
              IS LOADING RIGHT
            </span>
            <span 
              className="block text-transparent bg-clip-text bg-gradient-to-r from-golden to-golden-light animate-fade-in" 
              style={{ animationDelay: '0.8s' }}
            >
              NOW
            </span>
          </h1>

          {/* Loading message */}
          <div 
            className="animate-fade-in" 
            style={{ animationDelay: '1s' }}
          >
            <p className="text-dark-text/80 text-lg mb-2">Please wait</p>
            <p className="text-dark-text/60 text-sm">a few seconds.</p>
          </div>

          {/* Loading bar */}
          <div className="mt-12 w-full max-w-md mx-auto">
            <div className="h-1 bg-dark-text/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-golden to-golden-light transition-all duration-300 ease-out"
                style={{ width: `${counter}%` }}
              />
            </div>
          </div>

          {/* Complete message */}
          {isComplete && (
            <div className="mt-8 animate-fade-in">
              <p className="text-golden text-lg font-medium">Experience Ready!</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Loading;