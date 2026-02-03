import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10 bg-cover bg-center" />
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-primary-foreground/80 text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Premium Sportswear Collection
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Elevate Your
            <br />
            Athletic Style
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover premium sportswear from world-leading brands. Performance meets elegance.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/services">
              <Button className="btn-outline-hero group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
