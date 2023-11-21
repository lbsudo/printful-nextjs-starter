"use client"
// import Image from 'next/image';
import { Product } from '../../types/Product';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useState } from 'react';
import Link from 'next/link';
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedVariant] = useState(product.sync_variants[0]);

  return (
    <>
      <Link href={`/products/${product.sync_product.id}`}
      >
        <Card shadow="sm" key={product.sync_product.id} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0 bg-[#999999]">
            <Image
              removeWrapper
              shadow="sm"
              radius="lg"
              width="100%"
              alt={product.sync_product.name}
              className="w-full object-cover h-auto"
              src={product.sync_product.thumbnail_url}
              fetchPriority='auto'
            />
          </CardBody>
          <CardFooter className="text-sm flex flex-col justify-between">
            <b>{product.sync_product.name}</b>
            <p className="text-current">${selectedVariant.retail_price} {selectedVariant.currency}</p>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
};

export default ProductCard;
