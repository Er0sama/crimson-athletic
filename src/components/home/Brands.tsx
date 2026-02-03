import { brands } from '@/data/products';

const Brands = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary text-sm uppercase tracking-widest mb-2 block">
            Our Partners
          </span>
          <h2 className="section-heading">Premium Brands</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="text-2xl md:text-3xl font-bold tracking-widest text-muted-foreground/50 hover:text-primary transition-colors duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {brand.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
