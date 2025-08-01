import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProducts = [
    {
      id: 1,
      name: 'Luxe Modern Sofa',
      price: '$2,299',
      originalPrice: '$2,899',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      category: 'Living Room',
      rating: 4.8,
      reviews: 127,
      badge: 'Best Seller',
      inStock: true
    },
    {
      id: 2,
      name: 'Scandinavian Oak Chair',
      price: '$399',
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&h=600&fit=crop',
      category: 'Seating',
      rating: 4.9,
      reviews: 89,
      badge: 'New',
      inStock: true
    },
    {
      id: 3,
      name: 'Golden Accent Table',
      price: '$899',
      originalPrice: '$1,199',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      category: 'Tables',
      rating: 4.7,
      reviews: 156,
      badge: 'Sale',
      inStock: true
    },
    {
      id: 4,
      name: 'Minimalist Floor Lamp',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=800&h=600&fit=crop',
      category: 'Lighting',
      rating: 4.6,
      reviews: 73,
      inStock: false
    },
    {
      id: 5,
      name: 'Velvet Ottoman',
      price: '$189',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop',
      category: 'Accessories',
      rating: 4.5,
      reviews: 45,
      badge: 'Limited',
      inStock: true
    },
    {
      id: 6,
      name: 'Designer Coffee Table',
      price: '$1,299',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&h=600&fit=crop',
      category: 'Tables',
      rating: 4.9,
      reviews: 203,
      badge: 'Premium',
      inStock: true
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products', count: 156 },
    { id: 'living', label: 'Living Room', count: 45 },
    { id: 'seating', label: 'Seating', count: 32 },
    { id: 'tables', label: 'Tables', count: 28 },
    { id: 'lighting', label: 'Lighting', count: 21 },
    { id: 'accessories', label: 'Accessories', count: 30 }
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'Best Seller': return 'bg-golden text-dark-bg';
      case 'New': return 'bg-purple text-white';
      case 'Sale': return 'bg-destructive text-white';
      case 'Limited': return 'bg-warm-brown text-white';
      case 'Premium': return 'bg-gradient-primary text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Layout theme="light">
      <div className="min-h-screen bg-gradient-to-br from-warm-beige to-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 mb-6 glass px-4 py-2 rounded-full">
                <ShoppingBag className="w-4 h-4 text-purple" />
                <span className="text-sm font-medium">Premium Collection</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 animate-fade-in">
                Design
                <span className="gradient-text block">Marketplace</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover premium furniture and decor pieces that transform your space 
                into a work of art.
              </p>
            </div>

            {/* Search and Filter Bar */}
            <div className="max-w-4xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="glass p-6 rounded-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input 
                      placeholder="Search for furniture, decor, lighting..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 glass border-0"
                    />
                  </div>
                  <Button variant="outline" className="h-12 px-6 glass border-0 hover-glow">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`ripple transition-all duration-300 ${
                    activeCategory === category.id 
                      ? 'bg-primary text-primary-foreground shadow-colored scale-105' 
                      : 'glass border-border/20 hover-glow'
                  }`}
                >
                  {category.label}
                  <Badge variant="secondary" className="ml-2 text-xs">
                    {category.count}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <div 
                  key={product.id}
                  className="group interactive-card p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay Actions */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-3">
                      <Button size="sm" className="ripple hover-glow">
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="glass border-white/20 text-white hover-glow">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Badges */}
                    <div className="absolute top-4 left-4 space-y-2">
                      {product.badge && (
                        <Badge className={`${getBadgeVariant(product.badge)} shadow-large`}>
                          {product.badge}
                        </Badge>
                      )}
                      {!product.inStock && (
                        <Badge variant="destructive">
                          Out of Stock
                        </Badge>
                      )}
                    </div>

                    {/* Wishlist */}
                    <Button 
                      size="sm" 
                      variant="ghost" 
                      className="absolute top-4 right-4 w-10 h-10 p-0 glass hover-glow group/heart"
                    >
                      <Heart className="w-4 h-4 text-white group-hover/heart:text-red-500 transition-colors" />
                    </Button>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-playfair font-semibold mb-1 group-hover:gradient-text transition-all duration-300">
                        {product.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">{product.category}</p>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-golden fill-golden' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-foreground">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        disabled={!product.inStock}
                        className="ripple hover-glow"
                      >
                        {product.inStock ? 'Add to Cart' : 'Notify Me'}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <Button size="lg" className="ripple hover-glow bg-gradient-primary text-white px-8 py-4">
                View All Products
                <ShoppingBag className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-24 bg-gradient-primary">
          <div className="container mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6">
                Stay in Style
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Get the latest design trends and exclusive offers delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email"
                  className="glass border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-white text-purple hover:bg-white/90 ripple px-8">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Shop;