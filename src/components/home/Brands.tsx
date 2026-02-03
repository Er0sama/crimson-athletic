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
        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-28">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 md:h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
