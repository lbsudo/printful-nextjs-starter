import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='py-6 flex justify-center items-center'>
        <p>Powered by Next.js and Printful, Built by <Link href='https://github.com/lbsudo' className='text-primary hover:text-secondary' target='_blank'>@lbsudo</Link></p>

      </div>
    </>
  )
}
