import React from 'react'
import getProducts from '@/actions/getProducts';

export default async function page() {
  const productData = await getProducts();

  return (
    <pre>{JSON.stringify(productData, null, 2)}</pre>
  )
}
