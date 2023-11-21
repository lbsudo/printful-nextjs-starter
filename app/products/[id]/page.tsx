import React from 'react'
import ProductPage from "../../../components/product/ProductPage";
import getIds from '@/actions/getId';
import { Product } from "@/types/Product";

interface pageProps {
  params: { id: string }
}

export default async function Page({ params }: pageProps) {

  const fetchProduct = async () => {
    const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
    const API_URL = 'https://api.printful.com';
    const url = `${API_URL}/store/products/${params.id}`;

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await res.json();
    const product: Product = await data.result;
    return product;
  };

  const product: Product = await fetchProduct();
  console.log(product)

  return (
    <>
      <ProductPage product={product} />
    </>
  )
}


export async function generateStaticParams() {
  // Fetch the list of product ids from your API
  // const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  // const API_URL = 'https://api.printful.com';
  // const url = `${API_URL}/store/products`;
  // const res = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${API_KEY}`,
  //     'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //   },
  // });
  // const data = await res.json();
  // const products: Product[] = data.result;
  // const products = await getProducts();

  return await getIds();
  // Return an array of params, one for each product
  // return products.map(product => ({ id: product.id.toString() }));
  // return products.map(product => ({ id: product.id.toString() }));
}








