import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Rocket, Star, Zap, ArrowRight, Play, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Stellar: React.FC = () => {
  const [isJoureyStarted, setIsJourneyStarted] = useState(false);
  const { toast } = useToast();

  const startJourney = () => {
    setIsJourneyStarted(true);
    toast({
      title: "🚀 Journey Initiated!",
      description: "Welcome to the stellar experience. Prepare for greatness!",
    });
  };

  return (
    <Layout theme="dark" showNav={true}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Enhanced cosmic background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-black" />
          
          {/* Cosmic elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-40 hover:opacity-60 transition-opacity duration-300">
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-12 hover:rotate-45 transition-transform duration-500">
              <div className="absolute inset-2 bg-gradient-to-br from-cyan-400 to-blue-500 rounded animate-pulse" />
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/4 w-20 h-40 opacity-30 hover:opacity-50 transition-opacity duration-300">
            <div className="w-full h-full bg-gradient-to-t from-purple-600 to-pink-500 rounded-lg hover:scale-110 transition-transform duration-300">
              <div className="absolute top-2 left-2 right-2 h-2 bg-cyan-400 rounded animate-pulse" />
              <div className="absolute bottom-2 left-2 right-2 h-2 bg-cyan-400 rounded animate-pulse" />
            </div>
          </div>
          
          {/* Enhanced particle effects */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full animate-float ${
                i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-pink-400'
              }`}
              style={{
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: Math.random() * 0.8 + 0.2
              }}
            />
          ))}
          
          {/* Shooting stars */}
          {[...Array(3)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 50}%`,
                top: `${Math.random() * 50}%`,
                animation: `shooting-star 3s linear infinite ${Math.random() * 3}s`,
                boxShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff'
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
                className="bg-bright-yellow text-dark-bg hover:bg-bright-yellow/90 font-medium group"
                onClick={() => toast({
                  title: "Joining Testing Team",
                  description: "Welcome to the stellar testing program!",
                })}
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:animate-spin" />
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
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className={`bg-bright-yellow text-dark-bg hover:bg-bright-yellow/90 font-bold px-8 py-4 text-lg group transition-all duration-300 ${
                      isJoureyStarted ? 'scale-105 shadow-glow' : ''
                    }`}
                    onClick={startJourney}
                  >
                    <Rocket className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    {isJoureyStarted ? 'Journey Started!' : 'Start Your Journey'}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="glass-button text-dark-text border-dark-text/20 hover:bg-dark-text/10 px-8 py-4 text-lg group"
                    onClick={() => toast({
                      title: "Demo Preview",
                      description: "Loading interactive stellar demo...",
                    })}
                  >
                    <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </Button>
                </div>
              </div>

              {/* Features grid */}
              {isJoureyStarted && (
                <div className="mt-16 animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                    <div className="interactive-card p-6 text-center group">
                      <Zap className="w-12 h-12 text-bright-yellow mx-auto mb-4 group-hover:animate-pulse" />
                      <h3 className="text-lg font-semibold text-dark-text mb-2">Lightning Fast</h3>
                      <p className="text-dark-text/70 text-sm">Experience unparalleled speed and performance</p>
                    </div>
                    
                    <div className="interactive-card p-6 text-center group">
                      <Star className="w-12 h-12 text-bright-yellow mx-auto mb-4 group-hover:animate-spin" />
                      <h3 className="text-lg font-semibold text-dark-text mb-2">Stellar Quality</h3>
                      <p className="text-dark-text/70 text-sm">Premium features designed for excellence</p>
                    </div>
                    
                    <div className="interactive-card p-6 text-center group">
                      <Rocket className="w-12 h-12 text-bright-yellow mx-auto mb-4 group-hover:animate-bounce" />
                      <h3 className="text-lg font-semibold text-dark-text mb-2">Launch Ready</h3>
                      <p className="text-dark-text/70 text-sm">Deploy your vision into the cosmos</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced bottom navigation */}
          <div className="absolute bottom-8 left-6 right-6">
            <div className="flex items-center justify-between text-dark-text/60 text-sm">
              <div className="flex space-x-6">
                <button 
                  className="hover:text-bright-yellow cursor-pointer transition-colors duration-300 hover:scale-110"
                  onClick={() => toast({ title: "About", description: "Learn more about our stellar mission" })}
                >
                  About
                </button>
                <button 
                  className="hover:text-bright-yellow cursor-pointer transition-colors duration-300 hover:scale-110"
                  onClick={() => toast({ title: "Product", description: "Explore our stellar product suite" })}
                >
                  Product
                </button>
                <button 
                  className="hover:text-bright-yellow cursor-pointer transition-colors duration-300 hover:scale-110"
                  onClick={() => toast({ title: "Contact", description: "Get in touch with our stellar team" })}
                >
                  Contact
                </button>
              </div>
              <div className="flex space-x-4">
                <button 
                  className="hover:text-bright-yellow cursor-pointer transition-all duration-300 hover:scale-125 hover:rotate-12"
                  onClick={() => toast({ title: "External Link", description: "Opening external resources" })}
                >
                  ↗
                </button>
                <button 
                  className="hover:text-bright-yellow cursor-pointer transition-all duration-300 hover:scale-125 hover:translate-x-1"
                  onClick={() => toast({ title: "Navigation", description: "Moving to next section" })}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Stellar;