import { NavLink, useLocation } from 'react-router-dom';
import { Home, Calendar, Users, Phone, Award } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome) {
      setIsScrolled(true);
      return;
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome, pathname]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Mechnotron', path: '/mechnotron', icon: Award },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const showFullHeader = !isHome || isScrolled;

  return (
    <>
      {/* Desktop Top Navbar */}
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-out border-b hidden md:block",
          showFullHeader
            ? "bg-card/80 backdrop-blur-lg border-primary/20 shadow-md"
            : "bg-transparent border-transparent"
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <NavLink
              to="/"
              className={cn(
                "flex items-center gap-2 group transition-all duration-300 ease-out",
                showFullHeader
                  ? "opacity-100 translate-y-0 visible pointer-events-auto"
                  : "opacity-0 -translate-y-2 invisible pointer-events-none"
              )}
              tabIndex={showFullHeader ? 0 : -1}
              aria-hidden={!showFullHeader}
            >
              <img src="/logos/2k26.png" alt="Logo" width="34" height="32" className="h-8 w-auto group-hover:animate-float" />
              <span className="text-2xl font-bold neon-text">Mechnotron2k26</span>
            </NavLink>

            <div className="flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-lg font-medium transition-all duration-300 relative group ${isActive
                      ? 'text-primary neon-text'
                      : 'text-foreground hover:text-primary'
                    }`
                  }
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Top Logo Bar */}
      <div
        className={cn(
          "md:hidden fixed top-0 w-full z-50 transition-all duration-300 ease-out border-b h-16 flex items-center justify-center",
          showFullHeader
            ? "bg-card/80 backdrop-blur-lg border-primary/20 shadow-sm"
            : "bg-transparent border-transparent pointer-events-none"
        )}
      >
        <NavLink
          to="/"
          className={cn(
            "flex items-center gap-2 group transition-all duration-300 ease-out",
            showFullHeader
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-2 invisible"
          )}
          tabIndex={showFullHeader ? 0 : -1}
          aria-hidden={!showFullHeader}
        >
          <img src="/logos/2k26.png" alt="Logo" width="34" height="32" className="h-8 w-auto" />
          <span className="text-xl font-bold neon-text">Mechnotron2k26</span>
        </NavLink>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-black/80 backdrop-blur-xl border border-primary/20 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)]">
        <div className="flex justify-around items-center p-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center p-2 rounded-xl transition-all duration-300 w-full ${isActive
                  ? 'text-primary scale-110 bg-primary/10 shadow-[0_0_10px_rgba(255,204,0,0.2)]'
                  : 'text-muted-foreground hover:text-primary/70'
                }`
              }
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] font-bold tracking-wider">{item.name}</span>
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
