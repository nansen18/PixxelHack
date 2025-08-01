import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'minimal';
  showNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, theme = 'light', showNav = true }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Loading', icon: '⏳' },
    { path: '/portfolio', label: 'Portfolio', icon: '🎨' },
    { path: '/shop', label: 'Shop', icon: '🛍️' },
    { path: '/organic', label: 'Organic', icon: '🌟' },
    { path: '/collections', label: 'Collections', icon: '📸' },
    { path: '/team', label: 'Team', icon: '👥' },
    { path: '/stellar', label: 'Stellar', icon: '🚀' },
    { path: '/minimal', label: 'Minimal', icon: '✨' },
  ];

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
        return 'bg-dark-bg/90 backdrop-blur-md border-dark-text/20';
      case 'minimal':
        return 'bg-warm-beige/90 backdrop-blur-md border-border/20';
      default:
        return 'bg-background/90 backdrop-blur-md border-border/20';
    }
  };

  return (
    <div className={cn('min-h-screen transition-colors duration-300', getThemeClasses())}>
      {showNav && (
        <nav className={cn(
          'fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300',
          getNavClasses()
        )}>
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link 
                to="/" 
                className="text-xl font-bold hover:opacity-70 transition-opacity"
              >
                Portfolio
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:opacity-70',
                      location.pathname === item.path && 'opacity-100',
                      location.pathname !== item.path && 'opacity-60'
                    )}
                  >
                    <span className="mr-2">{item.icon}</span>
                    {item.label}
                    {location.pathname === item.path && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-current animate-slide-in" />
                    )}
                  </Link>
                ))}
              </div>

              {/* Mobile menu toggle would go here */}
              <div className="md:hidden">
                <button className="p-2 hover:opacity-70 transition-opacity">
                  ☰
                </button>
              </div>
            </div>
          </div>
        </nav>
      )}
      
      <main className={cn(showNav && 'pt-16')}>
        {children}
      </main>
    </div>
  );
};

export default Layout;