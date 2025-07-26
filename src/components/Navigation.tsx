import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-medical-blue to-medical-green"></div>
            </div>
            <span className="text-xl font-bold text-primary">HealthCare Plus</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="glass-card-hover border-secondary/30">
              <Phone className="w-4 h-4 mr-2 text-secondary" />
              Call Now
            </Button>
            <Button className="glass-button-accent">
              <Calendar className="w-4 h-4 mr-2" />
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="glass-card"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        )}>
          <div className="glass-card mt-4 p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 border-t border-glass-border/30 space-y-2">
              <Button variant="outline" className="w-full glass-card-hover border-secondary/30">
                <Phone className="w-4 h-4 mr-2 text-secondary" />
                Call Now
              </Button>
              <Button className="w-full glass-button-accent">
                <Calendar className="w-4 h-4 mr-2" />
                Book Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;