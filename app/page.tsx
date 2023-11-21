import React from 'react'
import getProducts from '@/actions/getProducts';
import productShuffle from '@/utils/productShuffle';
import ProductGrid from "@/components/product/ProductGrid";



export default async function Home() {
  const products = await getProducts();

  const productData = await productShuffle(products);
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <ProductGrid products={productData} />
      </section>
    </>
  );
}


