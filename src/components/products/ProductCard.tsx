import { ShoppingBag } from 'lucide-react';
import { Product } from '@/context/CartContext';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className="card-product group">
      <div className="relative aspect-square bg-secondary overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-2xl font-semibold text-primary/20">
            {product.brand}
          </span>
        </div>
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
        <Button
          size="icon"
          className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-primary hover:bg-accent"
          onClick={() => addToCart(product)}
        >
          <ShoppingBag className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="font-medium text-foreground mb-2">{product.name}</h3>
        <div className="flex items-center justify-between">
          <p className="font-display text-lg font-semibold text-primary">
            ${product.price}
          </p>
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-sm">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
