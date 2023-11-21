import { Product } from '@/types/Product';
import { createSlice } from '@reduxjs/toolkit'


const initialState: StoreState = {
  productData: [],
  userInfo: null,
  orderData: [],
}

interface StoreState {
  productData: Product[],
  userInfo: null | string,
  orderData: [],
}
export const shoppingSlice = createSlice({
  name: 'shopping',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item.id === action.payload.id && item?.size === action.payload.size
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload)
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item.id === action.payload.id && item?.size === action.payload.size
      );
      existingProduct && existingProduct.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.productData.find(
        (item: Product) => item.id === action.payload.id && item?.size === action.payload.size
      );
      if (existingProduct?.quantity === 1) {
        existingProduct.quantity === 1
      } else {
        existingProduct && existingProduct.quantity--;
      }
    },
    deleteProduct: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.size !== action.payload)
    },
    resetCart: (state) => {
      state.productData = [];
    },
    saveOrder: (state, action) => {
      state.orderData = action.payload
    },
    resetOrder: (state) => {
      state.orderData = []
    }
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, deleteProduct, resetCart, saveOrder, resetOrder } = shoppingSlice.actions;
export default shoppingSlice.reducer;
