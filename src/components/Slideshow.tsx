import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1200&h=600&fit=crop',
      title: 'Modern Patient Care',
      description: 'Comfortable consultation rooms with the latest technology for optimal patient experience.'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=1200&h=600&fit=crop',
      title: 'Advanced Medical Technology',
      description: 'State-of-the-art equipment and digital systems for accurate diagnosis and treatment.'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&h=600&fit=crop',
      title: 'AI-Assisted Healthcare',
      description: 'Cutting-edge AI technology enhancing medical precision and patient outcomes.'
    }
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6">
            <Circle className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Facilities</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Experience Excellence
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Take a look at our modern medical facilities designed with your comfort and care in mind.
          </p>
          
          <div className="section-divider mt-8"></div>
        </div>

        {/* Slideshow Container */}
        <div className="relative glass-card-hover overflow-hidden max-w-5xl mx-auto">
          {/* Slides */}
          <div className="relative h-96 md:h-[500px]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={cn(
                  "absolute inset-0 transition-all duration-500 ease-in-out",
                  index === currentSlide 
                    ? "opacity-100 translate-x-0" 
                    : index < currentSlide 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent flex items-end">
                  <div className="p-8 md:p-12 text-white max-w-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-lg opacity-90 leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 glass-card w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 glass-card w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentSlide
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/75"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-6">
          <span className="text-sm text-muted-foreground">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Slideshow;