export interface SyncProduct {
  id: number;
  external_id: string;
  name: string;
  synced: number;
  thumbnail_url: string;
  is_ignored: boolean;
}

export interface SyncVariant {
  id: number;
  external_id: string;
  sync_product_id: number;
  name: string;
  synced: boolean;
  variant_id: number;
  main_category_id: number;
  warehouse_product_variantid: null | string;
  retail_price: string;
  sku: string;
  currency: string;
  product: {
    variant_id: number;
    product_id: number;
    image: string;
    name: string;
  };
  files: {
    id: number;
    type: string;
    hash: string;
    url: null,
    filename: string;
    mimeType: string;
    size: number;
    width: number;
    height: number;
    dpi: number;
    status: string;
    created: number;
  }[];
  options: {
    id: string;
    value: string | string[];
  }[];
  is_ignored: boolean;
  size: string;
  color: string;
  availability_status: string;
}


export interface Product {
  id: number;
  external_id: number;
  name: string;
  variants: number;
  synced: number;
  thumbnail: string;
  is_ignored: boolean;
  sync_product: SyncProduct;
  sync_variant: SyncVariant;
  sync_variants: SyncVariant[];
  quantity: number
  size: string;
  variant_id: number;
  external_variant_id: string;
  price: string;
}


export interface Category {
  id: number;
  parent_id: number;
  image_url: string;
  catalog_position: number;
  size: string;
  title: string;
}


export interface StoreInfo {
  id: number;
  name: string;
  type: string;
}


export interface StateProps {
  shopping: {
    productData: Product[],
    userInfo: {},
    orderData: {
      order: Product[];
    }
  }
}

