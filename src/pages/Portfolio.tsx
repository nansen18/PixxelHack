import React from 'react';
import Layout from '@/components/Layout';

const Portfolio: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'OLGA PRUDKA',
      subtitle: 'Logo design, Website design, Development',
      year: '2023',
      image: '/lovable-uploads/aceb31bc-7187-4380-9d99-87d483a15919.png',
      color: 'from-golden to-amber-400'
    },
    {
      id: 2,
      title: 'AIM',
      subtitle: '3D Design, Branding',
      year: '2023',
      image: '/api/placeholder/400/300',
      color: 'from-gray-400 to-gray-600'
    }
  ];

  return (
    <Layout theme="dark">
      <div className="min-h-screen pt-12">
        {/* Header */}
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div className="flex items-center space-x-8">
              <div className="w-2 h-2 bg-dark-text rounded-full" />
              <span className="text-dark-text/60 text-sm tracking-wider uppercase">
                obvs
              </span>
            </div>
          </div>

          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div 
                key={project.id}
                className="group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden rounded-lg mb-6 bg-dark-text/5">
                  <div className="aspect-[4/3] bg-gradient-to-br from-dark-text/10 to-dark-text/5 flex items-center justify-center">
                    {project.id === 1 ? (
                      <div className="w-32 h-32 bg-gradient-to-br from-golden to-amber-400 rounded-full relative">
                        <div className="absolute inset-4 bg-dark-bg rounded-full flex items-center justify-center">
                          <span className="text-golden font-bold text-xl">KA</span>
                        </div>
                        {/* Decorative splashes */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-golden rounded-full opacity-80" />
                        <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-amber-400 rounded-full opacity-60" />
                        <div className="absolute top-1/2 -right-4 w-4 h-4 bg-golden rounded-full opacity-40" />
                      </div>
                    ) : (
                      <div className="w-40 h-32 bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg relative">
                        <div className="absolute inset-4 bg-gray-200 rounded transform rotate-12 opacity-80" />
                        <div className="absolute inset-6 bg-gray-100 rounded transform -rotate-6" />
                      </div>
                    )}
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-golden/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-dark-text group-hover:text-golden transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-dark-text/60 text-sm">
                    {project.subtitle}
                  </p>
                  <p className="text-dark-text/40 text-xs">
                    {project.year}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom section */}
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 border border-dark-text/20 rounded-full flex items-center justify-center group hover:border-golden transition-colors duration-300 cursor-pointer">
              <div className="w-8 h-8 border border-dark-text/40 rounded-full group-hover:border-golden transition-colors duration-300" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;