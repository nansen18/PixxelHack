import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { ExternalLink, Play, Heart, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'OLGA PRUDKA',
      subtitle: 'Logo design, Website design, Development',
      year: '2024',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop',
      color: 'from-golden to-amber-400',
      featured: true,
      stats: { likes: 142, views: '2.1k' }
    },
    {
      id: 2,
      title: 'AIM Digital Platform',
      subtitle: '3D Design, Interactive Experience',
      year: '2024',
      category: 'digital',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
      color: 'from-purple to-cyan',
      stats: { likes: 89, views: '1.5k' }
    },
    {
      id: 3,
      title: 'Stellar Brand Identity',
      subtitle: 'Visual Identity, Brand Guidelines',
      year: '2024',
      category: 'branding',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop',
      color: 'from-stellar-blue to-cyan-light',
      stats: { likes: 203, views: '3.2k' }
    },
    {
      id: 4,
      title: 'Minimal Portfolio',
      subtitle: 'UI/UX Design, Frontend Development',
      year: '2023',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1485833077593-4278bba3f11f?w=800&h=600&fit=crop',
      color: 'from-warm-brown to-golden',
      stats: { likes: 156, views: '2.8k' }
    },
    {
      id: 5,
      title: 'Organic Shapes',
      subtitle: 'Abstract Art, Motion Graphics',
      year: '2023',
      category: 'motion',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=600&fit=crop',
      color: 'from-purple-light to-golden-light',
      stats: { likes: 78, views: '1.2k' }
    },
    {
      id: 6,
      title: 'E-commerce Platform',
      subtitle: 'Product Design, User Experience',
      year: '2023',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=800&h=600&fit=crop',
      color: 'from-cyan to-purple',
      stats: { likes: 234, views: '4.1k' }
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'branding', label: 'Branding' },
    { id: 'web', label: 'Web Design' },
    { id: 'digital', label: 'Digital' },
    { id: 'motion', label: 'Motion' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout theme="dark">
      <div className="min-h-screen mesh-bg">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 mb-6 glass px-4 py-2 rounded-full">
                <Star className="w-4 h-4 text-golden" />
                <span className="text-sm font-medium text-dark-text/80">Featured Work</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold text-dark-text mb-6 animate-fade-in">
                Creative
                <span className="gradient-text block">Portfolio</span>
              </h1>
              
              <p className="text-xl text-dark-text/70 leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Explore our collection of innovative designs, captivating brand identities, 
                and cutting-edge digital experiences.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeFilter === category.id ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.id)}
                  className={`ripple transition-all duration-300 ${
                    activeFilter === category.id 
                      ? 'bg-primary text-primary-foreground shadow-colored scale-105' 
                      : 'glass border-dark-text/20 text-dark-text hover-glow'
                  }`}
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group interactive-card p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-dark-bg/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                      <Button size="sm" className="ripple hover-glow">
                        <Play className="w-4 h-4 mr-2" />
                        Preview
                      </Button>
                      <Button size="sm" variant="outline" className="glass border-dark-text/20 text-dark-text hover-glow">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="absolute top-4 left-4 bg-golden text-dark-bg shadow-golden">
                        Featured
                      </Badge>
                    )}
                  </div>

                  {/* Project Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-dark-text mb-2 group-hover:gradient-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-dark-text/70 text-sm">{project.subtitle}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-dark-text/50 font-medium">{project.year}</span>
                      <div className="flex items-center space-x-4 text-xs text-dark-text/70">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{project.stats.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>{project.stats.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-16">
              <Button size="lg" className="ripple hover-glow bg-gradient-primary text-white px-8 py-4">
                Load More Projects
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 border-t border-dark-text/10">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold gradient-text mb-6">
                Let's Create Something Amazing
              </h2>
              <p className="text-xl text-dark-text/70 mb-8">
                Ready to bring your vision to life? Let's discuss your next project.
              </p>
              <Button size="lg" className="ripple hover-glow bg-golden text-dark-bg px-8 py-4 font-semibold">
                Start a Project
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;