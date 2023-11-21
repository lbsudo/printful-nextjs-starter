'use client'
import { addToCart } from '@/redux/shoppingSlice';
import { SyncVariant, SyncProduct } from '../../types/Product';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductPage({ product }: any) {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(product.sync_variants[0]);

  const handleVariantChange = (variant: SyncVariant) => {
    setSelectedVariant(variant);
    setQuantity(1);
  };
  const dispatch = useDispatch();
  const item = {
    id: product.sync_product.id,
    name: product.sync_product.name,
    variant_id: selectedVariant.variant_id,
    external_variant_id: selectedVariant.external_id,
    quantity: quantity,
    price: selectedVariant.retail_price,
    url: `/products/${product.sync_product.external_id}`,
    thumbnail: product.sync_product.thumbnail_url,
    size: selectedVariant.size
  }
  // console.log(item)

  return (
    <>
      <div className='relativ w-full flex flex-row px-16 pt-6'>
        <div className='h-full w-1/2'>
          <Image
            src={product.sync_product.thumbnail_url}
            alt={product.sync_product.name}
            // fill
            width={2000}
            height={2000}
            className=" object-cover bg-[#999999] p-2"
            priority
          />
        </div>
        <div className='w-1/2 text-left pl-24 '>
          <h1 className="text-2xl lg:text-3xl font-semibold">{product.sync_product.name}</h1>
          <p className="text-xl font-medium mt-4 ">
            $ {selectedVariant.retail_price} {selectedVariant.currency}
          </p>
          {product.sync_variants.length > 1 && (
            <div className="mt-4 ">
              <p className="font-semibold text-md">Sizes:</p>
              <div className="flex mt-1 items-center space-x-2">
                {product.sync_variants.map((variant: SyncVariant) => (
                  <button
                    key={variant.external_id}
                    className={`font-semibold text-lg border m-0 px-5 py-1 rounded-xl ${variant.external_id === selectedVariant.external_id ? 'bg-primary text-white' : 'border-gray-300'
                      }`}
                    onClick={() => handleVariantChange(variant)}
                  >
                    {variant.size}
                  </button>
                ))}
              </div>
            </div>
          )}
          <div className="mt-4 flex flex-col ">
            <label className="font-semibold text-lg mr-2">Quantity:</label>
            <input
              type="number"
              min="1"
              max="99"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 text-lg border border-background focus:outline-none enabled:hover:border-sky-400 enabled:hover:border text-center"
            />
          </div>
          <div className="mt-4 text-2xl font-semibold">
            <button
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(`Product added successfully`)}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <Toaster position='top-center' />
      </div >

    </>
  );
}

