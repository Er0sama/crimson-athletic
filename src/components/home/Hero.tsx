import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&auto=format&fit=crop')] bg-cover bg-center">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&auto=format&fit=crop"
          className="w-full h-full object-cover"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-man-running-on-a-treadmill-6886/1080p.mp4"
            type="video/mp4"
          />
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=fc4a2e6d2f1c0c0d9e9efc0c7d2a9f6e&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-running-on-a-running-track-32807-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://storage.coverr.co/videos/FLNdYxQ4F01p7f01eYaJCK6Gp00aWfPqt1/preview"
            type="video/mp4"
          />
        </video>
      </div>
      {/* Red-tinted overlay for theme consistency */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-red-800/50 to-red-900/70" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-2xl">
          <span className="inline-block text-white/90 text-sm uppercase tracking-widest mb-4 animate-fade-in">
            Premium Sportswear Collection
          </span>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Elevate Your
            <br />
            Athletic Style
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-lg animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover premium sportswear from world-leading brands. Performance meets elegance.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/services">
              <Button className="bg-white text-primary hover:bg-white/90 group">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 border border-white/30">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-white/50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
