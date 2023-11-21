"use server"
import { Product } from "@/types/Product";

export default async function getProduct({ params }: any) {
  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const url = `${API_URL}/store/products/${params}`;

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

}
