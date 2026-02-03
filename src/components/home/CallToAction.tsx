import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="gradient-hero rounded-sm p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5 bg-cover bg-center" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Upgrade Your Game?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8">
              Join thousands of athletes who trust us for their sportswear needs. 
              Get exclusive offers and early access to new collections.
            </p>
            <Link to="/services">
              <Button className="btn-outline-hero group">
                Start Shopping
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
