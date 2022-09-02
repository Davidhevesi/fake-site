import React from 'react'
import Hero1 from '../public/assets/hero-image.png'
import Image from 'next/image'
export default function Hero() {
  return (
    <div>
      <div className="absolute inset-0">
        <Image
          className="h-full w-full object-cover"
          src={Hero1}
          layout="responsive"
        />
      </div>
    </div>
  )
}
