import { Award, Users, Heart, Clock } from 'lucide-react';
import medicalTeamImage from '@/assets/medical-team.jpg';
import medicalTechImage from '@/assets/medical-technology.jpg';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      number: '25+',
      label: 'Years of Excellence',
      color: 'from-primary to-primary-light'
    },
    {
      icon: Users,
      number: '50K+',
      label: 'Patients Served',
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Heart,
      number: '98%',
      label: 'Satisfaction Rate',
      color: 'from-accent to-accent-light'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Emergency Care',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Heart className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">About Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Dedicated to Your Health
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            For over 25 years, HealthCare Plus has been committed to providing exceptional 
            medical care with compassion, innovation, and excellence.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At HealthCare Plus, we believe that exceptional healthcare combines cutting-edge 
                medical technology with genuine human compassion. Our mission is to provide 
                comprehensive, personalized medical care that not only treats illness but 
                promotes overall wellness and improves quality of life for every patient we serve.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to staying at the forefront of medical innovation while 
                maintaining the personal touch that makes healthcare truly healing. Our 
                multidisciplinary team works collaboratively to ensure every patient 
                receives the highest standard of care.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Compassion</h4>
                <p className="text-sm text-muted-foreground">
                  Every patient deserves empathetic, respectful care
                </p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Striving for the highest quality in everything we do
                </p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">
                  Embracing new technologies and treatments
                </p>
              </div>
              <div className="glass-card p-4">
                <h4 className="font-semibold text-primary mb-2">Integrity</h4>
                <p className="text-sm text-muted-foreground">
                  Honest, transparent communication and ethical practices
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="glass-card-hover overflow-hidden">
              <img 
                src={medicalTeamImage} 
                alt="Our medical team"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-4 max-w-xs">
              <h4 className="font-semibold text-primary mb-1">Expert Team</h4>
              <p className="text-sm text-muted-foreground">
                Board-certified physicians and specialists committed to your care
              </p>
            </div>
          </div>
        </div>

        {/* Technology Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="glass-card-hover overflow-hidden">
              <img 
                src={medicalTechImage} 
                alt="Medical technology"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-4 max-w-xs">
              <h4 className="font-semibold text-primary mb-1">Advanced Technology</h4>
              <p className="text-sm text-muted-foreground">
                State-of-the-art equipment for accurate diagnosis and treatment
              </p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary">
                Cutting-Edge Medical Technology
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our investment in the latest medical technology ensures that our patients 
                receive the most accurate diagnoses and effective treatments available. 
                From advanced imaging systems to minimally invasive surgical techniques, 
                we leverage technology to improve patient outcomes and comfort.
              </p>
            </div>

            {/* Technology Features */}
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Advanced Imaging</h4>
                  <p className="text-sm text-muted-foreground">
                    MRI, CT scans, and digital X-ray systems for precise diagnostics
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Digital Health Records</h4>
                  <p className="text-sm text-muted-foreground">
                    Secure, accessible electronic health records for continuity of care
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary">Telemedicine</h4>
                  <p className="text-sm text-muted-foreground">
                    Remote consultations for convenient access to healthcare
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="glass-card-hover p-6 text-center group">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;