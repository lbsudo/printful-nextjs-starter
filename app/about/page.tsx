import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({ }: Props) {
  return (
    <>
      <div className='flex flex-col justify-center items-center text-left w-full h-full px-48'>
        <h2 className='text-2xl font-bold text-left w-3/4'>Welcome to the Printful+Next.js Starter Template</h2>
        <p className='text-lg pt-4 text-left w-3/4'>This is the starting state of the template!</p>
        <p className='text-lg w-3/4 pt-4 text-left'>The goal of this template is to take you from 0 to production for $0. Build your own Ecommerce store front
          using Next.js, NextUI, Tailwind CSS, Redux, Stripe, clerk, and the Printful API to create, manage, and fufill your products!
        </p>
        <p className='text-lg w-3/4 pt-4 text-left'>Check out the<Link href='' className='text-primary hover:text-secondary'>{" "}Docs{" "}</Link>to get started!</p>
      </div>
    </>
  )
}
