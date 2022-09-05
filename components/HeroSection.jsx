import React from 'react'

export default function HeroSection() {
  return (
    <div>
      {' '}
      <div className="bg-[url('../public/assets/hero-image.png')] font-SourceSansPro h-[80vw] w-full bg-cover bg-no-repeat bg-left-bottom md:h-[45vw] lg:h-[30vw] -mt-24">
        <div className="container mx-auto">
          <div className="flex flex-col items-center pt-36 space-y-4">
            <h1 className="text-lg text-white font-bold font-SourceSansPro">
              The world's greatest fake site
            </h1>
            <p className="text-white text-sm leading-5">
              Create the world's greatest fake site and enjoy <br /> the breeze
              of fresh air when you complete it
            </p>
            <div className="pt-4">
              <button className=" bg-redish px-4 py-3 rounded-full text-white">
                Do something awesome
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
