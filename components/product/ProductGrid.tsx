"use client"
import { Product } from '../../types/Product';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <>
      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
        {products.map((product) => (
          <ProductCard product={product} key={product.sync_product.id} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
