import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';

const Shop: React.FC = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Modern Living Room Set',
      price: '$1,299',
      image: '/api/placeholder/600/400',
      category: 'Living Room'
    },
    {
      id: 2,
      name: 'Scandinavian Chair',
      price: '$299',
      image: '/api/placeholder/300/400',
      category: 'Seating'
    },
    {
      id: 3,
      name: 'Golden-Oak Sofa',
      price: '$899',
      image: '/api/placeholder/400/300',
      category: 'Sofas',
      featured: true
    },
    {
      id: 4,
      name: 'Minimalist Stool',
      price: '$149',
      image: '/api/placeholder/300/300',
      category: 'Accessories'
    }
  ];

  return (
    <Layout theme="light">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-warm-beige">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-light text-warm-brown mb-6">
                Featured Products
              </h1>
              <p className="text-lg text-warm-brown/80 leading-relaxed max-w-2xl mx-auto">
                A fusion of comfort, style and quality without compromise. Our department is 
                unrivaled craftsmanship and design to make your home a very special place. 
                A collection aimed to make the ordinary extraordinary and the everyday more desirable.
              </p>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {/* Large featured product */}
              <div className="md:col-span-2 md:row-span-2">
                <div className="group cursor-pointer h-full">
                  <div className="relative overflow-hidden rounded-lg h-full min-h-[400px] bg-warm-beige">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-orange-100 p-8 flex items-center justify-center">
                      {/* Living room scene */}
                      <div className="w-full h-full relative">
                        {/* Sofa */}
                        <div className="absolute bottom-1/4 left-1/4 w-48 h-24 bg-gradient-to-r from-amber-600 to-amber-700 rounded-lg transform -rotate-1">
                          <div className="absolute -top-2 left-4 w-40 h-6 bg-amber-500 rounded" />
                          <div className="absolute -top-2 right-4 w-6 h-6 bg-amber-500 rounded" />
                        </div>
                        
                        {/* Coffee table */}
                        <div className="absolute bottom-1/4 right-1/3 w-24 h-16 bg-gradient-to-r from-amber-800 to-amber-900 rounded transform rotate-12">
                          <div className="absolute -top-1 inset-x-0 h-2 bg-amber-700 rounded" />
                        </div>
                        
                        {/* Wall art */}
                        <div className="absolute top-1/4 left-1/3 w-32 h-2 bg-amber-400 rounded-full" />
                        
                        {/* Plant */}
                        <div className="absolute top-1/3 right-1/4 w-8 h-16 bg-green-600 rounded-t-full" />
                        
                        {/* Chair */}
                        <div className="absolute bottom-1/3 right-1/4 w-16 h-20 bg-emerald-700 rounded-lg" />
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Navigation dots */}
                    <div className="absolute bottom-6 left-6 flex space-x-2">
                      <div className="w-2 h-2 bg-warm-brown rounded-full" />
                      <div className="w-2 h-2 bg-warm-brown/30 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Chair product */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-100 mb-4">
                  <div className="absolute inset-0 p-8 flex items-center justify-center">
                    <div className="w-20 h-32 bg-gradient-to-b from-emerald-600 to-emerald-800 rounded-lg relative">
                      <div className="absolute -top-2 inset-x-0 h-4 bg-emerald-500 rounded" />
                      <div className="absolute bottom-0 -left-2 -right-2 h-3 bg-emerald-700 rounded" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-medium text-warm-brown mb-1">Scandinavian Chair</h3>
                <p className="text-warm-brown/60 text-sm">$299</p>
              </div>

              {/* Chair & Sofa category */}
              <div className="bg-warm-beige rounded-lg p-6 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-warm-brown/5 transition-colors duration-300">
                <div className="w-16 h-16 bg-warm-brown/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-warm-brown/20 transition-colors duration-300">
                  <div className="w-8 h-8 bg-warm-brown/20 rounded" />
                </div>
                <h3 className="font-medium text-warm-brown mb-2">CHAIR & SOFA</h3>
                <Button variant="outline" size="sm" className="border-warm-brown text-warm-brown hover:bg-warm-brown hover:text-white">
                  View Now
                </Button>
              </div>

              {/* Sofa with price */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-gray-200 mb-4">
                  <div className="absolute inset-0 p-6 flex items-center justify-center">
                    <div className="w-24 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-lg relative">
                      <div className="absolute -top-1 left-2 right-2 h-3 bg-gray-500 rounded" />
                      <div className="absolute -top-1 right-1 w-3 h-3 bg-gray-500 rounded" />
                    </div>
                  </div>
                  
                  {/* Price tag */}
                  <div className="absolute top-4 right-4 bg-warm-brown text-white px-3 py-1 rounded text-sm font-medium">
                    $899
                  </div>
                  
                  <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-medium text-warm-brown mb-1">Golden-Oak Sofa</h3>
                <p className="text-warm-brown/60 text-sm">$899</p>
              </div>

              {/* Stool */}
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg aspect-[3/4] bg-orange-50 mb-4">
                  <div className="absolute inset-0 p-8 flex items-end justify-center">
                    <div className="w-12 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full relative">
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-8 bg-amber-700" />
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-amber-800 rounded" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-warm-brown/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-medium text-warm-brown mb-1">Minimalist Stool</h3>
                <p className="text-warm-brown/60 text-sm">$149</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;