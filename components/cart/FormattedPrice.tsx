import React from 'react';

type Props = {
  amount: number;
};

export default function FormattedPrice({ amount }: Props) {
  const formattedAmmount = new Number(amount).toLocaleString
    ("en-US", {
      style: "currency",
      currency: "USD",
      // maximumFractionDigits: 2.
    })


  return (
    <>
      <span className=" flex justify-center items-center text-current ">
        {formattedAmmount}
      </span>
    </>
  )
}

