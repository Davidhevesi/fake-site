import React, { useState } from 'react'
import videoImage from '../public/assets/stockimage.png'
import playBtn from '../public/assets/playbtn.png'
import video from '../data'
import Image from 'next/image'
import Link from 'next/link'

export default function VideoSection() {
  const [index] = useState(5)
  const { title, description, url } = video[index]
  return (
    <>
      <section className="font-SourceSansPro">
        <div className="container mx-auto flex flex-col md:flex md:flex-row md:justify-between md:pt-10 space-y-4">
          <div className=" px-2 py-2 ml-2 md:ml-0 pt-12 max-w-md space-y-2">
            <h2 className="text-lg font-bold">{title}</h2>

            <p className="text-sm text-blueish leading-5">{description}</p>
          </div>
          <div className=" rounded-lg overflow-hidden relative">
            <Link href={url}>
              <a>
                <Image className="absolute inset-0" src={videoImage} />

                <div className="absolute inset-0 bg-gradient-to-t from-blueish to bg-ruby-red bg-opacity-50"></div>
                <div className="flex items-center justify-center absolute bottom-20 left-44">
                  <Image src={playBtn} />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
