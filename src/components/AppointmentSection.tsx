import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import consultationImage from '@/assets/consultation.jpg';

const AppointmentSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    message: ''
  });

  const departments = [
    'Cardiology',
    'Neurology', 
    'Internal Medicine',
    'Emergency Medicine',
    'Ophthalmology',
    'Family Medicine',
    'Orthopedics',
    'Dermatology'
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
    '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate appointment booking
    toast({
      title: "Appointment Booked Successfully!",
      description: "We'll contact you shortly to confirm your appointment details.",
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      department: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    });
  };

  return (
    <section id="appointment" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Calendar className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Book Appointment</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Schedule Your Visit
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Book an appointment with our expert medical team. We offer convenient 
            scheduling and will work with your availability.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Appointment Form */}
          <div className="glass-card p-8">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Book Your Appointment
              </h3>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>

              {/* Department & Doctor */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="department">Department</Label>
                  <select
                    id="department"
                    name="department"
                    value={formData.department}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30 w-full px-3 py-2 rounded-lg bg-transparent text-foreground"
                  >
                    <option value="">Select Department</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept} className="bg-background text-foreground">
                        {dept}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="doctor">Preferred Doctor</Label>
                  <Input
                    id="doctor"
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    placeholder="Any available doctor"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Preferred Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30"
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Preferred Time</Label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    className="glass-card border-glass-border/30 w-full px-3 py-2 rounded-lg bg-transparent text-foreground"
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time} className="bg-background text-foreground">
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">Additional Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="glass-card border-glass-border/30 min-h-[100px]"
                  placeholder="Tell us about your symptoms or reason for visit..."
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full glass-button-accent py-3">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </form>
          </div>

          {/* Right - Information & Image */}
          <div className="space-y-8">
            {/* Appointment Image */}
            <div className="glass-card-hover overflow-hidden">
              <img 
                src={consultationImage} 
                alt="Medical consultation"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Quick Contact Options */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4">
                Need Immediate Assistance?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-accent-light flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Emergency</div>
                    <div className="text-sm text-muted-foreground">(555) 911-HELP</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Appointments</div>
                    <div className="text-sm text-muted-foreground">(555) 123-CARE</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-secondary-light flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-medium text-primary">Email</div>
                    <div className="text-sm text-muted-foreground">appointments@healthcareplus.com</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2 text-secondary" />
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Emergency Only</span>
                </div>
                <div className="pt-2 border-t border-glass-border/30 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-accent" />
                  <span className="text-accent font-medium">24/7 Emergency Care Available</span>
                </div>
              </div>
            </div>

            {/* What to Expect */}
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-secondary" />
                What to Expect
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span>Confirmation within 24 hours</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span>Appointment reminder 24 hours before</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span>Please arrive 15 minutes early</span>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                  <span>Bring insurance card and ID</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;