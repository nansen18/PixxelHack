import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette, Store, Leaf, Grid3X3, Users, Rocket, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'minimal';
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, theme = 'light', showNav = true }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/portfolio', label: 'Portfolio', icon: Palette },
    { path: '/shop', label: 'Shop', icon: Store },
    { path: '/organic', label: 'Organic', icon: Leaf },
    { path: '/collections', label: 'Collections', icon: Grid3X3 },
    { path: '/team', label: 'Team', icon: Users },
    { path: '/stellar', label: 'Stellar', icon: Rocket },
    { path: '/minimal', label: 'Minimal', icon: Sparkles },
  ];

  const isActive = (path: string) => location.pathname === path;

  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-dark-bg text-dark-text';
      case 'minimal':
        return 'bg-warm-beige text-foreground';
      default:
        return 'bg-background text-foreground';
    }
  };

  const getNavClasses = () => {
    switch (theme) {
      case 'dark':
        return 'glass border-dark-text/10';
      case 'minimal':
        return 'glass border-border/10';
      default:
        return 'glass border-border/10';
    }
  };

  return (
    <div className={cn('min-h-screen transition-all duration-300', getThemeClasses())}>
      {showNav && (
        <nav className={cn('fixed top-0 left-0 right-0 z-50 border-b', getNavClasses())}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-primary shadow-colored animate-float-gentle"></div>
                <span className="font-playfair font-bold text-xl gradient-text">
                  Portfolio Studio
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-2">
                {navItems.map(({ path, label, icon: Icon }) => (
                  <Link
                    key={path}
                    to={path}
                    className={cn(
                      'px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 group ripple relative overflow-hidden',
                      isActive(path)
                        ? 'bg-primary text-primary-foreground shadow-colored scale-105'
                        : 'hover:bg-secondary hover-glow hover:scale-105'
                    )}
                  >
                    <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                    <span className="font-medium">{label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden ripple hover-glow"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
              <div className="md:hidden py-4 animate-slide-up">
                <div className="space-y-2">
                  {navItems.map(({ path, label, icon: Icon }) => (
                    <Link
                      key={path}
                      to={path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ripple',
                        isActive(path)
                          ? 'bg-primary text-primary-foreground shadow-colored'
                          : 'hover:bg-secondary hover-glow'
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </nav>
      )}

      {/* Main Content */}
      <main className={showNav ? 'pt-16' : ''}>
        {children}
      </main>
    </div>
  );
};

export default Layout;