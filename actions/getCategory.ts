import { Product } from "@/types/Product";


export default async function getCategory(mainCategoryIds: Number[]) {
  const API_KEY = process.env.NEXT_PUBLIC_PRINTFUL_API_KEY;
  const API_URL = 'https://api.printful.com';
  const limit = 20;
  let offset = 0;
  let allProducts: Product[] = [];

  do {
    const url = `${API_URL}/store/products?limit=${limit}&offset=${offset}`;

    const res = await fetch(url, {
      method: "GET",
      next: { revalidate: 3500 },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await res.json();
    const products: Product[] = await data.result;

    allProducts = allProducts.concat(products);

    offset += limit;
  } while (allProducts.length === limit);

  const productPromises = allProducts.map((product: Product) =>
    fetch(`${API_URL}/store/products/${product.id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
  );
  const productResponses = await Promise.all(productPromises);
  const productData = await Promise.all(productResponses.map((response) => response.json()));
  const productDetails = productData.map((response) => response.result);

  // Filter productDetails based on main_category_id
  const filteredProductDetails = productDetails.filter((product: Product) => {
    return product.sync_variants.some((variant) => mainCategoryIds.includes(variant.main_category_id));
  });

  return filteredProductDetails;
}

