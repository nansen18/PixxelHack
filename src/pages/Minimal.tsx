import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { ArrowRight, Circle, Square, Triangle, Hexagon } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Minimal: React.FC = () => {
  const { toast } = useToast();

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

        {/* Hero image section */}
        <div className="absolute top-0 left-0 w-full h-2/3">
          <div className="absolute inset-0 bg-gradient-to-b from-warm-beige/20 to-transparent">
            {/* Minimalist geometric hero visual */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-96 h-96 opacity-10">
                <div className="absolute inset-0 border border-warm-brown/20 rounded-full animate-float" />
                <div className="absolute inset-8 border border-warm-brown/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-16 border border-warm-brown/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-golden/60 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Main content */}
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-md border border-glass-border rounded-full px-6 py-3 mb-8">
                <div className="w-2 h-2 bg-golden rounded-full animate-pulse" />
                <span className="text-sm font-medium text-warm-brown">Minimal • Elegant • Purposeful</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-warm-brown mb-8 tracking-wide">
                Minimalist
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-golden to-warm-brown">
                  Elegance
                </span>
              </h1>
              
              <p className="text-xl text-warm-brown/70 mb-12 leading-relaxed max-w-2xl mx-auto">
                Where simplicity meets sophistication. Every element thoughtfully placed, 
                every detail purposefully refined to create perfect harmony.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button 
                  size="lg" 
                  className="premium-button group"
                  onClick={() => toast({
                    title: "Exploring Minimalism",
                    description: "Discovering the art of thoughtful design",
                  })}
                >
                  Explore Philosophy
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-button"
                  onClick={() => toast({
                    title: "Design Principles",
                    description: "Learn about minimal design methodology",
                  })}
                >
                  Design Principles
                </Button>
              </div>
            </div>

            {/* Interactive elements grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Circle, name: "Harmony" },
                { icon: Square, name: "Balance" },
                { icon: Triangle, name: "Focus" },
                { icon: Hexagon, name: "Unity" }
              ].map((element, index) => (
                <div 
                  key={element.name}
                  className="group cursor-pointer animate-fade-in interactive-card p-6 text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => toast({
                    title: element.name,
                    description: `Exploring the principle of ${element.name.toLowerCase()} in minimal design`,
                  })}
                >
                  <div className="relative mb-4">
                    <element.icon className="w-12 h-12 text-warm-brown/40 mx-auto group-hover:text-golden transition-colors duration-300 group-hover:scale-110 transform duration-300" />
                    
                    {/* Animated background shape */}
                    <div className="absolute inset-0 -z-10">
                      <div className="w-full h-full bg-gradient-to-br from-golden/5 to-golden/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-150 transform duration-500" />
                    </div>
                  </div>
                  
                  <h3 className="text-sm font-medium text-warm-brown/60 group-hover:text-warm-brown transition-colors duration-300">
                    {element.name}
                  </h3>
                </div>
              ))}
            </div>

            {/* Call to action section */}
            <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-warm-brown/30 to-transparent mx-auto mb-8" />
              <p className="text-warm-brown/50 text-sm mb-6">
                Ready to embrace minimalism?
              </p>
              <Button 
                variant="outline"
                className="glass-button group"
                onClick={() => toast({
                  title: "Beginning Journey",
                  description: "Starting your minimalist design journey",
                })}
              >
                Begin Your Journey
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
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