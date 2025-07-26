import { 
  Heart, 
  Brain, 
  Eye, 
  Stethoscope, 
  Activity, 
  Shield, 
  UserCheck, 
  Zap 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care including diagnostics, treatment, and preventive care for cardiovascular health.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Advanced neurological care for brain, spine, and nervous system disorders with cutting-edge treatments.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services including routine exams, surgery, and treatment of eye diseases.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Stethoscope,
      title: 'Internal Medicine',
      description: 'Primary care for adults focusing on prevention, diagnosis, and treatment of internal diseases.',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Activity,
      title: 'Emergency Care',
      description: '24/7 emergency medical services with rapid response and critical care capabilities.',
      color: 'from-accent to-accent-light'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Comprehensive health screenings and preventive medicine to maintain optimal wellness.',
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: UserCheck,
      title: 'Family Medicine',
      description: 'Complete healthcare for families of all ages, from pediatrics to geriatric care.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Zap,
      title: 'Diagnostics',
      description: 'Advanced diagnostic imaging and laboratory services for accurate and timely results.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Shield className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Comprehensive Medical Care
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a full range of medical services with state-of-the-art technology 
            and compassionate care to meet all your healthcare needs.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card-hover p-6 group">
                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  
                  {/* Service Tag */}
                  <div className="pt-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
                      Available 24/7
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Need Specialized Care?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our specialists are here to provide expert care tailored to your specific needs. 
              Contact us to schedule a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button-accent px-8 py-3">
                Schedule Consultation
              </button>
              <button className="glass-button-secondary px-8 py-3">
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;