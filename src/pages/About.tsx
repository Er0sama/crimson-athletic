const About = () => {
  const stats = [
    { value: '10K+', label: 'Happy Customers' },
    { value: '50+', label: 'Premium Brands' },
    { value: '5', label: 'Years Experience' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-2 block">
            Our Story
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            About Athletic
          </h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Passion for sports. Commitment to quality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="text-primary text-sm uppercase tracking-widest mb-2 block">
                Who We Are
              </span>
              <h2 className="section-heading mb-6">
                More Than Just Sportswear
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for athletic excellence, Athletic has grown from a small 
                  boutique to a premier destination for sports enthusiasts worldwide.
                </p>
                <p>
                  We believe that every athlete deserves access to the finest sportswear. That's 
                  why we partner with world-leading brands like Nike, Adidas, and Puma to bring 
                  you authentic, high-performance gear.
                </p>
                <p>
                  Our commitment goes beyond selling products—we're here to support your journey, 
                  whether you're a professional athlete or just starting your fitness adventure.
                </p>
              </div>
            </div>
            <div className="bg-secondary aspect-square rounded-sm flex items-center justify-center animate-slide-in">
              <span className="font-display text-6xl font-bold text-primary/20">ATHLETIC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-widest mb-2 block">
              Our Values
            </span>
            <h2 className="section-heading">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'Every product we sell is 100% authentic, sourced directly from official brand channels.',
              },
              {
                title: 'Quality',
                description: 'We carefully curate our collection to ensure only the best gear reaches our customers.',
              },
              {
                title: 'Community',
                description: 'We are building a community of athletes who share our passion for excellence.',
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="p-8 border border-border rounded-sm hover:shadow-elegant transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-subtle">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
