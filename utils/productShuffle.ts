
export default async function productShuffle(products: any) {
  let shuffledProducts = [...products];

  for (let i = shuffledProducts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]];
  }
  return shuffledProducts;

}
