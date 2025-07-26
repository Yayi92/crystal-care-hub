import { Button } from '@/components/ui/button';
import { Calendar, Phone, Heart, Shield, Users, Award } from 'lucide-react';
import heroImage from '@/assets/hero-medical.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 glass-card px-4 py-2">
                <Heart className="w-5 h-5 text-secondary" />
                <span className="text-sm font-medium text-secondary">Caring for Your Health</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
                Modern Healthcare
                <span className="block text-secondary">With Heart</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Experience exceptional medical care with our state-of-the-art facility, 
                expert physicians, and personalized treatment plans designed just for you.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="glass-button-accent text-lg px-8 py-4">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
              <Button size="lg" variant="outline" className="glass-card-hover border-primary/30 text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2 text-primary" />
                Call Now
              </Button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Patients</div>
              </div>
              <div className="glass-card p-4 text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Emergency Care</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="space-y-6">
            <div className="glass-card-hover p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Advanced Technology</h3>
                  <p className="text-muted-foreground">
                    State-of-the-art medical equipment and cutting-edge diagnostic tools for accurate results.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Board-certified physicians and experienced medical professionals dedicated to your care.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card-hover p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Quality Care</h3>
                  <p className="text-muted-foreground">
                    Personalized treatment plans and comprehensive care tailored to your unique needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;