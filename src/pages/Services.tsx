import { useState } from 'react';
import ProductCard from '@/components/products/ProductCard';
import { products } from '@/data/products';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Running', 'Lifestyle', 'Basketball', 'Apparel'];
const brandFilters = ['All', 'Nike', 'Adidas', 'Puma'];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeBrand, setActiveBrand] = useState('All');

  const filteredProducts = products.filter((product) => {
    const categoryMatch = activeCategory === 'All' || product.category === activeCategory;
    const brandMatch = activeBrand === 'All' || product.brand === activeBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <main className="pt-20 md:pt-24">
      {/* Header */}
      <section className="py-16 md:py-20 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <span className="text-primary-foreground/80 text-sm uppercase tracking-widest mb-2 block">
            Our Collection
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Products & Services
          </h1>
          <p className="text-primary-foreground/80 max-w-lg mx-auto">
            Browse our curated collection of premium sportswear from the world's leading brands.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? 'bg-primary' : ''}
                >
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {brandFilters.map((brand) => (
                <Button
                  key={brand}
                  variant={activeBrand === brand ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setActiveBrand(brand)}
                  className={activeBrand === brand ? 'bg-primary' : 'text-muted-foreground'}
                >
                  {brand}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-muted-foreground">No products found matching your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Services Info */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary text-sm uppercase tracking-widest mb-2 block">
              Why Choose Us
            </span>
            <h2 className="section-heading">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Free Shipping',
                description: 'Free worldwide shipping on all orders over $100.',
              },
              {
                title: 'Easy Returns',
                description: '30-day hassle-free return policy for your peace of mind.',
              },
              {
                title: 'Expert Support',
                description: 'Our team of sports enthusiasts is here to help you find the perfect gear.',
              },
            ].map((service, index) => (
              <div
                key={service.title}
                className="bg-card p-8 rounded-sm shadow-card text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="font-display text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-subtle">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
