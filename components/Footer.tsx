import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='py-6'>
        <ul className='flex justify-center '>
          <Link href={'/'}>
            <li className='px-3'>CONTACT</li>

          </Link>
          <Link href={'/'}>
            <li className='px-3'>FAQ</li>
          </Link>
          <Link href={'/'}>
            <li className='px-3'>RETURN POLICY</li>
          </Link>
          <Link href={'/'}>
            <li className='px-3'>SHIPPING</li>
          </Link>
          <Link href={'/'}>
            <li className='px-3'>TERMS & CONDITIONS</li>
          </Link>
          <Link href={'/'}>
            <li className='px-3'>PRIVACY POLICY</li>
          </Link>
        </ul>
      </div>
    </>
  )
}
