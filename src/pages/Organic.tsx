import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Leaf, Recycle, Heart, CheckCircle, Star, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Organic: React.FC = () => {
  const { toast } = useToast();

  const features = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Sourced from certified organic farms with sustainable practices"
    },
    {
      icon: Recycle,
      title: "Eco-Friendly",
      description: "Biodegradable packaging and carbon-neutral shipping"
    },
    {
      icon: Heart,
      title: "Health First",
      description: "No chemicals, preservatives, or artificial additives"
    }
  ];

  const benefits = [
    "Pesticide-free cultivation",
    "Rich in essential nutrients",
    "Supporting local farmers",
    "Environmentally sustainable"
  ];

  return (
    <Layout theme="minimal" showNav={true}>
      <div className="min-h-screen relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          {/* Background shapes */}
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-organic-primary rounded-full blur-3xl opacity-30 animate-float" />
            <div className="absolute bottom-40 left-20 w-64 h-64 bg-gradient-organic-secondary rounded-full blur-2xl opacity-25 animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-organic-accent rounded-full blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <div className="animate-fade-in">
              <div className="inline-flex items-center space-x-2 bg-gradient-glass backdrop-blur-md border border-glass-border rounded-full px-6 py-3 mb-8">
                <Leaf className="w-5 h-5 text-success" />
                <span className="text-sm font-medium text-warm-brown">Certified Organic • Farm Fresh</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-warm-brown mb-6 tracking-wide">
                Pure Organic
                <span className="block text-transparent bg-clip-text bg-gradient-organic-primary">
                  Living
                </span>
              </h1>
              
              <p className="text-xl text-warm-brown/70 mb-12 max-w-2xl mx-auto leading-relaxed">
                Experience the purest form of nature with our premium organic products. 
                From farm to table, every step is crafted with care for your health and our planet.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="premium-button group"
                  onClick={() => toast({
                    title: "Welcome to Organic Living!",
                    description: "Discover our premium collection of organic products",
                  })}
                >
                  Shop Organic Products
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-button group"
                  onClick={() => toast({
                    title: "Learning More",
                    description: "Exploring the benefits of organic living",
                  })}
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-b from-background to-warm-beige/10">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-4">
                Why Choose Organic?
              </h2>
              <p className="text-lg text-warm-brown/60 max-w-2xl mx-auto">
                Every organic choice is a step towards a healthier you and a sustainable future
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="interactive-card p-8 text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-organic-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-warm-brown mb-4">{feature.title}</h3>
                  <p className="text-warm-brown/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Image */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-6">
                  Benefits That Matter
                </h2>
                <p className="text-lg text-warm-brown/70 mb-8 leading-relaxed">
                  Our organic products deliver more than just great taste. They're packed with 
                  nutrients and produced with methods that protect our environment.
                </p>
                
                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className="flex items-center space-x-3 animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                      <span className="text-warm-brown/80">{benefit}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="premium-button"
                  onClick={() => toast({
                    title: "Certification Details",
                    description: "Viewing our organic certification and quality standards",
                  })}
                >
                  View Certifications
                </Button>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="aspect-square bg-gradient-organic-primary rounded-2xl overflow-hidden relative">
                  {/* Placeholder for organic farm image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 opacity-80">
                    <div className="absolute inset-8 bg-green-300/20 rounded-xl">
                      <div className="absolute top-4 left-4 right-4 h-8 bg-green-200/30 rounded-lg" />
                      <div className="absolute top-16 left-4 right-16 h-4 bg-green-100/40 rounded" />
                      <div className="absolute top-24 left-8 right-8 h-4 bg-green-100/40 rounded" />
                      <div className="absolute bottom-8 left-4 right-4 h-12 bg-green-200/30 rounded-lg" />
                      
                      {/* Organic elements */}
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <Leaf className="w-16 h-16 text-white/60" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-8 right-8 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-organic-accent rounded-full opacity-60 animate-float" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-organic-secondary rounded-full opacity-50 animate-float" style={{ animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-warm-beige via-background to-warm-beige/50">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-light text-warm-brown mb-6">
                Start Your Organic Journey Today
              </h2>
              <p className="text-lg text-warm-brown/70 mb-8 leading-relaxed">
                Join thousands of families who have made the switch to organic living. 
                Your health and the planet will thank you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="premium-button group"
                  onClick={() => toast({
                    title: "Welcome Package",
                    description: "Get 20% off your first organic order + free shipping",
                  })}
                >
                  Get Started Now
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="glass-button"
                  onClick={() => toast({
                    title: "Product Catalog",
                    description: "Browse our complete organic product collection",
                  })}
                >
                  Browse Products
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Organic;