import Hero from '@/components/home/Hero';
import PromoBanner from '@/components/home/PromoBanner';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Brands from '@/components/home/Brands';
import CallToAction from '@/components/home/CallToAction';

const Index = () => {
  return (
    <main>
      <PromoBanner />
      <Hero />
      <FeaturedProducts />
      <Brands />
      <CallToAction />
    </main>
  );
};

export default Index;
