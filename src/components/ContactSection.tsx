import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation,
  Car,
  Bus,
  Train
} from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <MapPin className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Contact Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Get in Touch
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're here to help you with all your healthcare needs. Contact us today 
            to schedule an appointment or learn more about our services.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Information */}
          <div className="space-y-8">
            {/* Main Contact Info */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      123 Healthcare Boulevard<br />
                      Medical District, NY 10001<br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Main: (555) 123-CARE</p>
                      <p>Emergency: (555) 911-HELP</p>
                      <p>Appointments: (555) 123-BOOK</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <div className="space-y-1 text-muted-foreground">
                      <p>info@healthcareplus.com</p>
                      <p>appointments@healthcareplus.com</p>
                      <p>emergency@healthcareplus.com</p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Hours</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Emergency Only</span>
                      </div>
                      <div className="pt-2 border-t border-glass-border/30">
                        <span className="text-accent font-medium">24/7 Emergency Care</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Navigation className="w-5 h-5 mr-2 text-secondary" />
                Getting Here
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Car className="w-5 h-5 text-primary" />
                  <span className="text-sm">Free parking available on-site</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Bus className="w-5 h-5 text-primary" />
                  <span className="text-sm">Bus routes 12, 34, 56 stop nearby</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Train className="w-5 h-5 text-primary" />
                  <span className="text-sm">Metro station 0.3 miles away</span>
                </div>
              </div>
            </div>

            {/* Emergency Info */}
            <div className="glass-card p-6 border-l-4 border-accent">
              <h3 className="text-xl font-bold text-accent mb-2">
                Emergency Information
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                For life-threatening emergencies, call 911 immediately. 
                Our emergency department is open 24/7 for urgent medical care.
              </p>
              <div className="flex space-x-3">
                <button className="glass-button-accent text-sm px-4 py-2">
                  Emergency Services
                </button>
                <button className="glass-button-secondary text-sm px-4 py-2">
                  Urgent Care
                </button>
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Find Us on the Map
              </h3>
              <div className="relative h-96 rounded-xl overflow-hidden bg-muted">
                {/* Placeholder for interactive map */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-primary mb-2">
                      HealthCare Plus Medical Center
                    </h4>
                    <p className="text-muted-foreground">
                      123 Healthcare Boulevard<br />
                      Medical District, NY 10001
                    </p>
                    <button className="glass-button-primary mt-4 px-6 py-2 text-sm">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card-hover p-6 text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Call Now</h4>
                <p className="text-sm text-muted-foreground">Speak with our team</p>
              </div>
              
              <div className="glass-card-hover p-6 text-center group cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                <p className="text-sm text-muted-foreground">Send a message</p>
              </div>
            </div>

            {/* Department Directory */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Department Directory
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Main Departments</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Emergency: Ext. 911</p>
                    <p>Cardiology: Ext. 201</p>
                    <p>Neurology: Ext. 202</p>
                    <p>Internal Med: Ext. 203</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Support Services</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Appointments: Ext. 100</p>
                    <p>Billing: Ext. 150</p>
                    <p>Records: Ext. 160</p>
                    <p>Pharmacy: Ext. 170</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;