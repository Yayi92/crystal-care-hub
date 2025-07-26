import { Award, Calendar, MapPin, Star, GraduationCap, Clock } from 'lucide-react';

const DoctorsSection = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Chen',
      specialty: 'Cardiology',
      experience: '15 years',
      education: 'Harvard Medical School',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      description: 'Specialized in interventional cardiology and heart disease prevention.',
      certifications: ['Board Certified Cardiologist', 'Fellow of American College of Cardiology']
    },
    {
      name: 'Dr. Michael Rodriguez',
      specialty: 'Neurology',
      experience: '12 years',
      education: 'Johns Hopkins University',
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      description: 'Expert in neurological disorders and brain surgery techniques.',
      certifications: ['Board Certified Neurologist', 'Neurosurgery Fellowship']
    },
    {
      name: 'Dr. Emily Watson',
      specialty: 'Internal Medicine',
      experience: '18 years',
      education: 'Stanford Medical School',
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1594824388509-51b7cfafd28e?w=400&h=400&fit=crop&crop=face',
      description: 'Primary care physician focused on preventive medicine and wellness.',
      certifications: ['Board Certified Internal Medicine', 'Preventive Medicine Specialist']
    },
    {
      name: 'Dr. James Thompson',
      specialty: 'Emergency Medicine',
      experience: '10 years',
      education: 'UCLA Medical School',
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
      description: 'Emergency medicine specialist with trauma and critical care expertise.',
      certifications: ['Board Certified Emergency Medicine', 'Advanced Trauma Life Support']
    },
    {
      name: 'Dr. Lisa Park',
      specialty: 'Ophthalmology',
      experience: '14 years',
      education: 'Mayo Clinic Medical School',
      rating: 4.8,
      reviews: 203,
      image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&fit=crop&crop=face',
      description: 'Eye specialist focusing on retinal diseases and surgical procedures.',
      certifications: ['Board Certified Ophthalmologist', 'Retinal Surgery Fellowship']
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Family Medicine',
      experience: '16 years',
      education: 'University of Pennsylvania',
      rating: 4.9,
      reviews: 287,
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400&h=400&fit=crop&crop=face',
      description: 'Family physician providing comprehensive care for all ages.',
      certifications: ['Board Certified Family Medicine', 'Geriatric Medicine Certificate']
    }
  ];

  return (
    <section id="doctors" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Award className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Medical Team</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Meet Our Expert Doctors
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team of board-certified physicians brings decades of experience and 
            specialized expertise to provide you with the highest quality care.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="glass-card-hover p-6 group">
              <div className="space-y-6">
                {/* Doctor Image & Rating */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Rating Badge */}
                  <div className="absolute -top-2 -right-2 glass-card px-2 py-1 flex items-center space-x-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-current" />
                    <span className="text-xs font-medium">{doctor.rating}</span>
                  </div>
                </div>

                {/* Doctor Info */}
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                    <div className="w-2 h-2 rounded-full bg-secondary"></div>
                    <span className="text-sm font-medium text-secondary">{doctor.specialty}</span>
                  </div>
                </div>

                {/* Experience & Education */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{doctor.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <GraduationCap className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{doctor.education}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {doctor.description}
                </p>

                {/* Certifications */}
                <div className="space-y-2">
                  {doctor.certifications.map((cert, certIndex) => (
                    <div key={certIndex} className="text-xs text-secondary bg-secondary/5 px-2 py-1 rounded-lg">
                      {cert}
                    </div>
                  ))}
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-between text-sm pt-4 border-t border-glass-border/30">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{doctor.rating}</span>
                    <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 pt-4">
                  <button className="flex-1 glass-button-accent text-sm py-2">
                    <Calendar className="w-4 h-4 mr-1" />
                    Book Appointment
                  </button>
                  <button className="flex-1 glass-card-hover border-primary/30 text-sm py-2 rounded-xl">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Schedule a Consultation
            </h3>
            <p className="text-muted-foreground mb-6">
              Our experienced medical team is ready to provide you with personalized care. 
              Choose from our available specialists and book your appointment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="glass-button-accent px-8 py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Book Online
              </button>
              <button className="glass-button-primary px-8 py-3">
                <MapPin className="w-5 h-5 mr-2" />
                Find a Doctor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;