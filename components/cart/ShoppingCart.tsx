"use client"
import React, { useEffect } from 'react';
import { saveOrder, resetCart } from '@/redux/shoppingSlice';
import { useState } from 'react';
import { BsBagFill } from 'react-icons/bs';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { Product, StateProps } from '@/types/Product';
import CartItem from './CartItem';
import FormattedPrice from './FormattedPrice';
import { loadStripe } from '@stripe/stripe-js';

export default function ShoppingCart() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { productData } = useSelector((state: StateProps) => state?.shopping);



  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const [totalAmt, setTotalAmt] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);


  useEffect(() => {
    let amt: number = 0;
    productData.map((item: Product) => {
      amt += Number(item.price) * item.quantity;
      return;
    })
    setTotalAmt(amt);
    const calculateTotalQuantity = () => {
      let quantity: number = 0;
      productData.forEach((item: Product) => {
        quantity += item.quantity;
      });
      setTotalQuantity(quantity);
    };
    calculateTotalQuantity();
    // console.log(totalAmt)
    // console.log(productData);
  }, [productData])


  // const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)
    const stripe = await stripePromise;
    const response = await fetch("/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        items: productData,
        // emai: session?.user?.email,
      }),
    });
    const data = await response.json()

    if (response.ok) {
      stripe?.redirectToCheckout({ sessionId: data.id })
      dispatch(saveOrder({ order: productData, id: data.id }))
      // dispatch(resetCart());
    } else {
      throw new Error("Failed to create Stripe Payment")
    }
  };

  // const totalQuantity = productData.reduce((total, product: Product) => total + product.quantity, 0);

  return (
    <div className="relative inline-block">
      <button onClick={openCart} className="relative flex justify-center items-center">
        <span className="bg-red-500 flex justify-center items-center text-white text-xs rounded-full p-2 h-3 w-3 z-30  absolute -top-1 -right-2 ">
          {totalQuantity}
        </span>
        <BsBagFill className="text-current text-2xl z-2" />
      </button>
      {/* Cart Open */}
      <div >
        {isOpen ? (
          <div className="fixed top-0 right-0 h-screen w-1/3 bg-background border-l-1 border-foreground/50 z-50">
            <div className="h-auto px-4 py-4 text-small font-bold flex flex-row items-center justify-between">
              <h2>BAG</h2>
              <button onClick={closeCart} className='flex flex-row justify-center items-center'>
                <RxCross2 /> {"  "}CLOSE
              </button>
            </div>
            <hr className='w-full border-current opacity-20 mt-1' />
            <div className="h-auto p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-track-rounded" style={{ maxHeight: '90vh' }}>
              <CartItem />
              {totalAmt === 0 ? (
                <p>Your Cart Is Empty</p>
              ) : (
                <div className='flex flex-col'>
                  <div className='flex items-center justify-between font-bold text-medium pb-3'>
                    <p>SUBTOTAL</p>
                    <FormattedPrice amount={totalAmt ? totalAmt : 0} />
                  </div>
                  <hr className='w-full border-current opacity-20 pb-6' />
                  <button className='underline underline-offset-2 decoration-white font-bold flex justify-start'
                    onClick={handleCheckout}
                  >
                    <p>CHECKOUT</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="hidden"></div>
        )}
      </div>
    </div>
  );
}

