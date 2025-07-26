import { 
  Heart, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Shield,
  Award,
  Clock
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-primary/5 to-secondary/5 border-t border-glass-border/30">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-xl glass-card flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-medical-blue to-medical-green"></div>
              </div>
              <span className="text-xl font-bold text-primary">HealthCare Plus</span>
            </div>
            
            <p className="text-muted-foreground leading-relaxed">
              Providing exceptional medical care with compassion, innovation, and excellence 
              for over 25 years. Your health is our priority.
            </p>

            {/* Certifications */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-secondary" />
                <span className="text-sm text-muted-foreground">Joint Commission Accredited</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-secondary" />
                <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-primary mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <div className="w-8 h-8 rounded-lg glass-card-hover flex items-center justify-center cursor-pointer">
                  <Facebook className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-lg glass-card-hover flex items-center justify-center cursor-pointer">
                  <Twitter className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-lg glass-card-hover flex items-center justify-center cursor-pointer">
                  <Instagram className="w-4 h-4 text-primary" />
                </div>
                <div className="w-8 h-8 rounded-lg glass-card-hover flex items-center justify-center cursor-pointer">
                  <Linkedin className="w-4 h-4 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-primary">Quick Links</h4>
            <div className="space-y-3">
              {[
                'About Us',
                'Our Services',
                'Find a Doctor',
                'Patient Portal',
                'Insurance',
                'Careers',
                'News & Events',
                'Contact Us'
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-semibold text-primary">Medical Services</h4>
            <div className="space-y-3">
              {[
                'Emergency Care',
                'Cardiology',
                'Neurology',
                'Internal Medicine',
                'Family Medicine',
                'Ophthalmology',
                'Orthopedics',
                'Preventive Care'
              ].map((service) => (
                <a
                  key={service}
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-semibold text-primary">Contact Information</h4>
            
            {/* Address */}
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-secondary mt-1" />
              <div className="text-muted-foreground">
                <p>123 Healthcare Boulevard</p>
                <p>Medical District, NY 10001</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-secondary" />
              <div className="text-muted-foreground">
                <p>Main: (555) 123-CARE</p>
                <p>Emergency: (555) 911-HELP</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-secondary" />
              <div className="text-muted-foreground">
                <p>info@healthcareplus.com</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-secondary mt-1" />
              <div className="text-muted-foreground">
                <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                <p>Sat: 9:00 AM - 4:00 PM</p>
                <p>Sun: Emergency Only</p>
                <p className="text-accent font-medium mt-1">24/7 Emergency Care</p>
              </div>
            </div>

            {/* Emergency Button */}
            <div>
              <button className="glass-button-accent w-full py-2 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                Emergency Contact
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-glass-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Heart className="w-4 h-4 text-secondary" />
              <span>© {currentYear} HealthCare Plus Medical Center. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                HIPAA Notice
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;